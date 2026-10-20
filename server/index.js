import { createServer } from "node:http";
import { createReadStream, promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { vendorIdentityByProjectId } from "./vendorIdentityMap.js";

const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(serverDirectory, "..");
const isDevelopment = process.env.NODE_ENV === "development";
const staticDirectory = path.join(projectDirectory, "dist");
const publicDirectory = path.join(projectDirectory, "public");
const port = Number(process.env.PORT || 8081);
const koiosBaseUrl = process.env.KOIOS_API_URL || "https://api.koios.rest/api/v1";
const intersectApiBaseUrl = process.env.INTERSECT_API_URL || "https://administration.info.intersectmbo.org/api/v1";
const cache = new Map();
const maxStaleSeconds = 6 * 60 * 60;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const sendJson = (response, statusCode, body, maxAge = 0) => {
  response.writeHead(statusCode, {
    "Cache-Control": maxAge ? `public, max-age=${maxAge}` : "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(body));
};

const cached = async (key, maxAgeSeconds, load) => {
  const existing = cache.get(key);
  if (existing && existing.expiresAt > Date.now()) return existing.value;
  if (existing?.pending) return existing.pending;

  const pending = load();
  cache.set(key, { ...existing, pending, expiresAt: 0 });
  try {
    const value = await pending;
    cache.set(key, { value, cachedAt: Date.now(), expiresAt: Date.now() + maxAgeSeconds * 1000 });
    return value;
  } catch (error) {
    if (existing?.value && Date.now() - existing.cachedAt < maxStaleSeconds * 1000) {
      const staleValue = { ...existing.value, stale: true };
      cache.set(key, {
        value: existing.value,
        cachedAt: existing.cachedAt,
        expiresAt: Date.now() + Math.min(maxAgeSeconds, 60) * 1000,
      });
      return staleValue;
    }
    cache.delete(key);
    throw error;
  }
};

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) {
    throw new Error(`Upstream request failed (${response.status})`);
  }

  return response.json();
};

const toLovelace = (value, field) => {
  if (typeof value !== "string" && typeof value !== "number") {
    throw new Error(`Koios did not return ${field}`);
  }
  const normalized = String(value);
  if (!/^\d+$/.test(normalized)) throw new Error(`Koios returned invalid ${field}`);
  return normalized;
};

const getCardanoSnapshot = () => cached("cardano-snapshot", 300, async () => {
  const tipRows = await fetchJson(`${koiosBaseUrl}/tip`);
  const tip = Array.isArray(tipRows) ? tipRows[0] : undefined;
  const currentEpoch = Number(tip?.epoch_no);
  if (!Number.isInteger(currentEpoch) || currentEpoch < 0) {
    throw new Error("Koios did not return the current Cardano epoch");
  }

  const totalsRows = await fetchJson(`${koiosBaseUrl}/totals?_epoch_no=${currentEpoch}`);
  const totals = Array.isArray(totalsRows) ? totalsRows[0] : undefined;
  if (Number(totals?.epoch_no) !== currentEpoch) {
    throw new Error("Koios did not return totals for the current epoch");
  }

  const blockTime = Number(tip?.block_time);
  if (!Number.isFinite(blockTime) || blockTime <= 0) {
    throw new Error("Koios did not return the latest block time");
  }

  return {
    treasury: toLovelace(totals.treasury, "treasury"),
    reserves: toLovelace(totals.reserves, "reserves"),
    circulatingSupply: toLovelace(totals.circulation, "circulation"),
    totalSupply: toLovelace(totals.supply, "supply"),
    epoch: currentEpoch,
    blockTime: new Date(blockTime * 1000).toISOString(),
    source: "Koios · Cardano mainnet",
    updatedAt: new Date().toISOString(),
    stale: false,
  };
});

const getTreasuryStats = async () => {
  const snapshot = await getCardanoSnapshot();
  return {
    treasury: Number(snapshot.treasury) / 1_000_000,
    circulating: Number(snapshot.circulatingSupply) / 1_000_000,
    epoch: snapshot.epoch,
    blockTime: snapshot.blockTime,
    source: snapshot.source,
    updatedAt: snapshot.updatedAt,
    stale: Boolean(snapshot.stale),
  };
};

const getAdaPrice = () => cached("ada-price-usd", 300, async () => {
  const price = await fetchJson(
    "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd",
  );
  const usd = Number(price?.cardano?.usd);
  if (!Number.isFinite(usd) || usd <= 0) throw new Error("CoinGecko returned an invalid ADA price");
  return { usd, source: "CoinGecko", updatedAt: new Date().toISOString(), stale: false };
});

const getNetworkState = async () => {
  const snapshot = await getCardanoSnapshot();
  return {
    treasury: snapshot.treasury,
    reserves: snapshot.reserves,
    circulatingSupply: snapshot.circulatingSupply,
    totalSupply: snapshot.totalSupply,
    epoch: snapshot.epoch,
    blockTime: snapshot.blockTime,
    source: snapshot.source,
    updatedAt: snapshot.updatedAt,
    stale: Boolean(snapshot.stale),
  };
};

const getTreasuryDonations = () => cached("treasury-donations", 300, async () => {
  const tipRows = await fetchJson(`${koiosBaseUrl}/tip`);
  const tip = Array.isArray(tipRows) ? tipRows[0] : undefined;
  const currentEpoch = Number(tip?.epoch_no);
  if (!Number.isInteger(currentEpoch) || currentEpoch < 0) {
    throw new Error("Koios did not return the current Cardano epoch for donations");
  }
  const firstEpoch = Math.max(0, currentEpoch - 9);
  const epochs = Array.from(
    { length: currentEpoch - firstEpoch + 1 },
    (_, index) => firstEpoch + index,
  );
  const epochRows = await Promise.all(epochs.map(async (epoch) => {
    const rows = await fetchJson(`${koiosBaseUrl}/tx_treasury_donations_epoch?_epoch_no=${epoch}`);
    if (!Array.isArray(rows)) throw new Error(`Koios returned invalid donation data for epoch ${epoch}`);
    return { epoch, rows };
  }));

  const donationsByHash = new Map();
  for (const { epoch, rows } of epochRows) {
    for (const row of rows) {
      const txHash = String(row.tx_hash || "");
      const blockTime = Number(row.block_time);
      const rowEpoch = Number(row.epoch_no);
      if (!/^[a-f0-9]{64}$/i.test(txHash) || rowEpoch !== epoch || !Number.isFinite(blockTime)) {
        throw new Error(`Koios returned an invalid treasury donation in epoch ${epoch}`);
      }
      donationsByHash.set(txHash, {
        epoch,
        txHash,
        blockTime: new Date(blockTime * 1000).toISOString(),
        lovelace: toLovelace(row.treasury_donation, "treasury donation"),
      });
    }
  }

  const donations = [...donationsByHash.values()].sort((left, right) =>
    Date.parse(right.blockTime) - Date.parse(left.blockTime),
  );
  const epochSummaries = epochs.map((epoch) => {
    const epochDonations = donations.filter((donation) => donation.epoch === epoch);
    const totalLovelace = epochDonations.reduce((total, donation) => total + BigInt(donation.lovelace), 0n);
    return { epoch, donationCount: epochDonations.length, totalLovelace: totalLovelace.toString() };
  });
  const totalLovelace = donations.reduce((total, donation) => total + BigInt(donation.lovelace), 0n);

  return {
    currentEpoch,
    firstEpoch,
    lastEpoch: currentEpoch,
    totalLovelace: totalLovelace.toString(),
    averagePerEpochLovelace: (totalLovelace / BigInt(epochs.length)).toString(),
    donationCount: donations.length,
    epochs: epochSummaries,
    donations,
    source: "Koios · Cardano mainnet",
    updatedAt: new Date().toISOString(),
    stale: false,
  };
});

const getAllTimeTreasuryDonations = () => cached("treasury-donations-all-time", 21_600, async () => {
  const tipRows = await fetchJson(`${koiosBaseUrl}/tip`);
  const tip = Array.isArray(tipRows) ? tipRows[0] : undefined;
  const currentEpoch = Number(tip?.epoch_no);
  if (!Number.isInteger(currentEpoch) || currentEpoch < 507) {
    throw new Error("Koios did not return a valid epoch for the treasury-donation history");
  }

  const firstEpoch = 507;
  const epochs = Array.from({ length: currentEpoch - firstEpoch + 1 }, (_, index) => firstEpoch + index);
  const donationsByEpoch = new Map();
  const failedEpochs = [];
  let nextEpochIndex = 0;

  const worker = async () => {
    while (nextEpochIndex < epochs.length) {
      const epoch = epochs[nextEpochIndex++];
      try {
        let rows;
        try {
          rows = await fetchJson(`${koiosBaseUrl}/totals?_epoch_no=${epoch}`);
        } catch {
          rows = await fetchJson(`${koiosBaseUrl}/totals?_epoch_no=${epoch}`);
        }
        const totals = Array.isArray(rows) ? rows[0] : undefined;
        if (Number(totals?.epoch_no) !== epoch) throw new Error(`Invalid totals for epoch ${epoch}`);
        donationsByEpoch.set(epoch, toLovelace(totals.treasury_donation, "treasury donation"));
      } catch {
        failedEpochs.push(epoch);
      }
    }
  };

  const workerCount = Math.min(4, epochs.length);
  await Promise.all(Array.from({ length: workerCount }, worker));
  if (failedEpochs.length) {
    throw new Error(`Koios donation history was incomplete for ${failedEpochs.length} epochs`);
  }

  const amounts = [...donationsByEpoch.values()];
  const totalLovelace = amounts.reduce((total, amount) => total + BigInt(amount), 0n);
  return {
    firstEpoch,
    lastEpoch: currentEpoch,
    totalLovelace: totalLovelace.toString(),
    epochsWithDonations: amounts.filter((amount) => BigInt(amount) > 0n).length,
    source: "Koios · Cardano mainnet",
    updatedAt: new Date().toISOString(),
    stale: false,
  };
});

const readDataFile = async (filename) => {
  const directory = isDevelopment ? publicDirectory : staticDirectory;
  return JSON.parse(await fs.readFile(path.join(directory, "data", filename), "utf8"));
};

const projectIdTokens = (value) => String(value || "")
  .split(/[&,\s]+/)
  .map((identifier) => identifier.startsWith("UTXO-") ? identifier.slice(5) : identifier)
  .filter(Boolean);

const lovelaceToAda = (value, field) => {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount < 0) throw new Error(`Intersect returned invalid ${field}`);
  return amount / 1_000_000;
};

const getIntersectVendorProjects = () => cached("intersect-vendor-projects", 900, async () => {
  const firstPage = await fetchJson(`${intersectApiBaseUrl}/projects?limit=100&page=1`);
  if (!Array.isArray(firstPage?.data) || !firstPage.pagination) {
    throw new Error("Intersect returned an invalid projects response");
  }

  const projectsFromApi = [...firstPage.data];
  const totalCount = Number(firstPage.pagination.total_count);
  const pageSize = Number(firstPage.pagination.limit) || 100;
  const pageCount = Number.isFinite(totalCount) ? Math.ceil(totalCount / pageSize) : 1;
  for (let page = 2; page <= pageCount; page += 1) {
    const result = await fetchJson(`${intersectApiBaseUrl}/projects?limit=${pageSize}&page=${page}`);
    if (!Array.isArray(result?.data)) throw new Error(`Intersect returned an invalid projects page ${page}`);
    projectsFromApi.push(...result.data);
  }
  if (Number.isFinite(totalCount) && projectsFromApi.length !== totalCount) {
    throw new Error("Intersect returned an incomplete projects list");
  }

  const legacyProjects = await readDataFile("intersectData.json");
  const legacyByProjectId = new Map();
  for (const legacyProject of legacyProjects) {
    for (const token of projectIdTokens(legacyProject.id)) legacyByProjectId.set(token, legacyProject);
  }

  const excludedTestProjectIds = new Set(["EX-000-01"]);
  const projects = projectsFromApi.filter((project) => !excludedTestProjectIds.has(project.project_id)).map((project) => {
    const projectId = String(project.project_id || "");
    if (!projectId) throw new Error("Intersect returned a project without an identifier");
    const matchingLegacy = projectIdTokens(projectId)
      .map((token) => legacyByProjectId.get(token))
      .find(Boolean);
    const allocatedLovelace = project.financials?.total_allocated_lovelace ?? project.initial_amount_lovelace;
    const withdrawnLovelace = project.financials?.total_withdrawn_lovelace ?? 0;
    const allocatedAda = lovelaceToAda(allocatedLovelace, "allocated amount");
    const withdrawnAda = lovelaceToAda(withdrawnLovelace, "withdrawn amount");
    // The API's contract UTXO balance can include ADA shared by multiple projects,
    // so it is not a per-project remaining allocation. Derive the remainder instead.
    const remainingAda = Math.max(0, allocatedAda - withdrawnAda);
    const upstreamVendorName = typeof project.vendor_name === "string" ? project.vendor_name.trim() : "";
    const mappedVendorName = vendorIdentityByProjectId[projectId] || "";
    return {
      id: matchingLegacy?.id || projectId,
      officialProjectId: projectId,
      projectName: String(project.project_name || projectId),
      vendor: upstreamVendorName || mappedVendorName || "Unmapped vendor",
      vendorIdentitySource: upstreamVendorName ? "intersect-api" : mappedVendorName ? "curated-project-id-map" : "unmapped",
      vendorAddress: project.vendor_address || "",
      totalAmount: allocatedAda,
      amountSpent: withdrawnAda,
      amountRemaining: remainingAda,
      status: String(project.status || "unknown"),
      description: project.description || "",
      milestones: matchingLegacy?.milestones || [],
    };
  });

  return {
    projects,
    source: "Intersect Administration API · Cardano mainnet",
    updatedAt: new Date().toISOString(),
    upstreamUpdatedAt: firstPage.meta?.timestamp || null,
    stale: false,
  };
});

const apiRoutes = {
  "/api/health": async () => ({ status: "ok", service: "adaspending", timestamp: new Date().toISOString() }),
  "/api/v1/cardano/treasury-stats": getTreasuryStats,
  "/api/v1/cardano/treasury-donations": getTreasuryDonations,
  "/api/v1/cardano/treasury-donations/all-time": getAllTimeTreasuryDonations,
  "/api/v1/cardano/network-state": getNetworkState,
  "/api/v1/markets/ada-price": getAdaPrice,
  "/api/v1/data/intersect-vendor-projects": getIntersectVendorProjects,
  "/api/v1/data/intersect-projects": () => readDataFile("intersectData.json"),
  "/api/v1/data/vendor-profiles": () => readDataFile("vendorProfiles.json"),
};

const serveStatic = async (request, response, pathname) => {
  const normalizedPath = decodeURIComponent(pathname);
  const requestedPath = path.resolve(staticDirectory, `.${normalizedPath}`);
  if (requestedPath !== staticDirectory && !requestedPath.startsWith(`${staticDirectory}${path.sep}`)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  let filePath = requestedPath;
  try {
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) filePath = path.join(filePath, "index.html");
    await fs.access(filePath);
  } catch {
    if (path.extname(normalizedPath)) {
      sendJson(response, 404, { error: "Not found" });
      return;
    }
    filePath = path.join(staticDirectory, "index.html");
  }

  const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
  const immutable = normalizedPath.startsWith("/assets/");
  response.writeHead(200, {
    "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "no-cache",
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(filePath).pipe(response);
};

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", "http://localhost");
  const route = apiRoutes[requestUrl.pathname];

  if (requestUrl.pathname.startsWith("/api/")) {
    if (!route) {
      sendJson(response, 404, { error: "API route not found" });
      return;
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.setHeader("Allow", "GET, HEAD");
      sendJson(response, 405, { error: "Method not allowed" });
      return;
    }

    try {
      const body = await route();
      const maxAge = requestUrl.pathname.endsWith("/treasury-donations/all-time")
        ? 21_600
        : requestUrl.pathname.endsWith("/treasury-donations")
          ? 300
          : requestUrl.pathname.endsWith("/intersect-vendor-projects") ? 900
          : requestUrl.pathname.includes("/data/") ? 3600 : 60;
      response.writeHead(200, {
        "Cache-Control": `public, max-age=${maxAge}`,
        "Content-Type": "application/json; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(JSON.stringify(body));
    } catch (error) {
      const statusCode = Number(error?.statusCode) || 502;
      console.error(`API request failed for ${requestUrl.pathname}:`, error.message);
      sendJson(response, statusCode, { error: "Data provider is temporarily unavailable" });
    }
    return;
  }

  if (isDevelopment) {
    sendJson(response, 404, { error: "Not found" });
    return;
  }

  try {
    await serveStatic(request, response, requestUrl.pathname);
  } catch (error) {
    console.error("Static file request failed:", error.message);
    if (!response.headersSent) sendJson(response, 500, { error: "Unable to serve this page" });
    else response.destroy(error);
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`ADAspending server listening on port ${port}`);
});
