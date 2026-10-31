import { createServer } from "node:http";
import { createReadStream, promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { vendorIdentityByProjectId } from "./vendorIdentityMap.js";
import { createIntersectOverviewSummary, summarizeIntersectProjects } from "./intersectSummary.js";

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
const sharedCacheBucket = process.env.INTERSECT_SHARED_CACHE_BUCKET;
let sharedStorageToken = null;

const getStorageAccessToken = async () => {
  if (sharedStorageToken && sharedStorageToken.expiresAt > Date.now() + 30_000) return sharedStorageToken.value;
  const response = await fetch("http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token", {
    headers: { "Metadata-Flavor": "Google" },
    signal: AbortSignal.timeout(3_000),
  });
  if (!response.ok) throw new Error(`Cloud Run token request failed (${response.status})`);
  const token = await response.json();
  sharedStorageToken = {
    value: token.access_token,
    expiresAt: Date.now() + Number(token.expires_in || 0) * 1000,
  };
  return sharedStorageToken.value;
};

const sharedCacheObjectUrl = (key) => {
  const objectName = encodeURIComponent(`adaspending-cache/${key}.json`);
  return `https://storage.googleapis.com/storage/v1/b/${encodeURIComponent(sharedCacheBucket)}/o/${objectName}`;
};

const readSharedCache = async (key) => {
  if (!sharedCacheBucket || key !== "intersect-vendor-projects") return null;
  try {
    const token = await getStorageAccessToken();
    const response = await fetch(`${sharedCacheObjectUrl(key)}?alt=media`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(3_000),
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Cloud Storage cache read failed (${response.status})`);
    const snapshot = await response.json();
    return snapshot && Number.isFinite(snapshot.cachedAt) && snapshot.value
      ? snapshot
      : null;
  } catch (error) {
    console.warn("Shared Intersect cache read failed:", error.message);
    return null;
  }
};

const writeSharedCache = async (key, value) => {
  if (!sharedCacheBucket || key !== "intersect-vendor-projects") return;
  try {
    const token = await getStorageAccessToken();
    const url = `https://storage.googleapis.com/upload/storage/v1/b/${encodeURIComponent(sharedCacheBucket)}/o?uploadType=media&name=${encodeURIComponent(`adaspending-cache/${key}.json`)}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cachedAt: Date.now(), value }),
      signal: AbortSignal.timeout(5_000),
    });
    if (!response.ok) throw new Error(`Cloud Storage cache write failed (${response.status})`);
  } catch (error) {
    console.warn("Shared Intersect cache write failed:", error.message);
  }
};

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

  const pending = (async () => {
    const shared = await readSharedCache(key);
    const now = Date.now();
    if (shared && now - shared.cachedAt < maxAgeSeconds * 1000) {
      cache.set(key, {
        value: shared.value,
        cachedAt: shared.cachedAt,
        expiresAt: shared.cachedAt + maxAgeSeconds * 1000,
      });
      return shared.value;
    }

    try {
      const value = await load();
      cache.set(key, { value, cachedAt: Date.now(), expiresAt: Date.now() + maxAgeSeconds * 1000 });
      await writeSharedCache(key, value);
      return value;
    } catch (error) {
      const existingCanBeServedStale = existing?.value && Date.now() - existing.cachedAt < maxStaleSeconds * 1000;
      const sharedCanBeServedStale = shared?.value && Date.now() - shared.cachedAt < maxStaleSeconds * 1000;
      const staleSnapshot = existingCanBeServedStale && (!sharedCanBeServedStale || existing.cachedAt >= shared.cachedAt)
        ? existing
        : sharedCanBeServedStale ? shared : null;
      if (staleSnapshot) {
        const staleValue = { ...staleSnapshot.value, stale: true };
        cache.set(key, {
          value: staleSnapshot.value,
          cachedAt: staleSnapshot.cachedAt,
          expiresAt: Date.now() + Math.min(maxAgeSeconds, 60) * 1000,
        });
        return staleValue;
      }
      cache.delete(key);
      throw error;
    }
  })();
  cache.set(key, { ...existing, pending, expiresAt: 0 });
  return pending;
};

const fetchJson = async (url, options = {}) => {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(12_000),
      });

      if (!response.ok) throw new Error(`Upstream request failed (${response.status})`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
    }
  }
  throw lastError;
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
  const epochRows = [];
  let nextEpochIndex = 0;
  const worker = async () => {
    while (nextEpochIndex < epochs.length) {
      const epoch = epochs[nextEpochIndex++];
      const rows = await fetchJson(`${koiosBaseUrl}/tx_treasury_donations_epoch?_epoch_no=${epoch}`);
      if (!Array.isArray(rows)) throw new Error(`Koios returned invalid donation data for epoch ${epoch}`);
      epochRows.push({ epoch, rows });
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, epochs.length) }, worker));

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
          await new Promise((resolve) => setTimeout(resolve, 250));
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

  // Koios's public tier supports higher throughput; 12 workers keep a cold
  // all-epoch refresh responsive without issuing the entire history at once.
  const workerCount = Math.min(12, epochs.length);
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
  const projectPageResults = await Promise.all(Array.from({ length: pageCount - 1 }, (_, index) => {
    const page = index + 2;
    return fetchJson(`${intersectApiBaseUrl}/projects?limit=${pageSize}&page=${page}`);
  }));
  for (const [index, result] of projectPageResults.entries()) {
    if (!Array.isArray(result?.data)) throw new Error(`Intersect returned an invalid projects page ${index + 2}`);
    projectsFromApi.push(...result.data);
  }
  if (Number.isFinite(totalCount) && projectsFromApi.length !== totalCount) {
    throw new Error("Intersect returned an incomplete projects list");
  }

  const firstMilestonePage = await fetchJson(`${intersectApiBaseUrl}/milestones?limit=100&page=1`);
  if (!Array.isArray(firstMilestonePage?.data) || !firstMilestonePage.pagination) {
    throw new Error("Intersect returned an invalid milestones response");
  }
  const allMilestoneCount = Number(firstMilestonePage.pagination.total_count);
  const allMilestonePageSize = Number(firstMilestonePage.pagination.limit) || 100;
  const allMilestonePageCount = Number.isFinite(allMilestoneCount)
    ? Math.ceil(allMilestoneCount / allMilestonePageSize)
    : 1;
  const allMilestonePages = await Promise.all(Array.from({ length: allMilestonePageCount - 1 }, (_, index) => {
    const page = index + 2;
    return fetchJson(`${intersectApiBaseUrl}/milestones?limit=${allMilestonePageSize}&page=${page}`);
  }));
  const allMilestones = [...firstMilestonePage.data];
  for (const [index, result] of allMilestonePages.entries()) {
    if (!Array.isArray(result?.data)) throw new Error(`Intersect returned an invalid milestones page ${index + 2}`);
    allMilestones.push(...result.data);
  }
  if (Number.isFinite(allMilestoneCount) && allMilestones.length !== allMilestoneCount) {
    throw new Error("Intersect returned an incomplete milestones list");
  }

  const withdrawnMilestones = allMilestones.filter((milestone) => milestone.withdrawn);

  let upstreamStatus = null;
  try {
    upstreamStatus = await fetchJson(`${intersectApiBaseUrl}/status`);
  } catch (error) {
    console.warn("Intersect status check failed:", error.message);
  }

  const milestonesByProject = new Map();
  for (const milestone of allMilestones) {
    const projectId = String(milestone.project?.project_id || "");
    if (!projectId) continue;
    const milestones = milestonesByProject.get(projectId) || [];
    const timeLimit = Number(milestone.time_limit);
    const completionEvidence = Array.isArray(milestone.completion?.evidence)
      ? milestone.completion.evidence[0]
      : null;
    const anchorUrl = completionEvidence?.anchorUrl;
    const evidenceLink = Array.isArray(anchorUrl) ? anchorUrl.join("") : anchorUrl;
    milestones.push({
      id: String(milestone.milestone_id || milestone.id),
      title: String(milestone.label || milestone.milestone_id || "Milestone"),
      amount: lovelaceToAda(milestone.amount_lovelace, "milestone allocation"),
      status: milestone.withdrawn ? "Withdrawn" : milestone.archived ? "Archived" : milestone.paused ? "Paused" : milestone.completion ? "Completed" : "Pending",
      unlockDate: Number.isFinite(timeLimit) && timeLimit > 0 ? new Date(timeLimit).toISOString().slice(0, 10) : "N/A",
      withdrawalTime: milestone.withdrawal?.time?.iso || null,
      withdrawalTxHash: milestone.withdrawal?.tx_hash || null,
      description: String(milestone.description || milestone.acceptance_criteria || ""),
      acceptanceCriteria: String(milestone.acceptance_criteria || ""),
      evidenceStatus: milestone.evidence_provided ? "Submitted" : "None",
      evidence: completionEvidence && evidenceLink ? {
        title: String(completionEvidence.label || milestone.label || "Milestone evidence"),
        link: String(evidenceLink),
        transactionHash: milestone.withdrawal?.tx_hash || undefined,
        transactionLink: milestone.withdrawal?.tx_hash
          ? `https://cexplorer.io/tx/${milestone.withdrawal.tx_hash}`
          : undefined,
      } : undefined,
    });
    milestonesByProject.set(projectId, milestones);
  }
  const withdrawnMilestoneAdaByProject = new Map();
  for (const milestone of withdrawnMilestones) {
    const projectId = String(milestone.project?.project_id || "");
    if (!projectId || !milestone.withdrawn) continue;
    const milestoneAmountAda = lovelaceToAda(milestone.amount_lovelace, "withdrawn milestone allocation");
    withdrawnMilestoneAdaByProject.set(
      projectId,
      (withdrawnMilestoneAdaByProject.get(projectId) || 0) + milestoneAmountAda,
    );
  }

  const excludedTestProjectIds = new Set(["EX-000-01"]);
  const projects = projectsFromApi.filter((project) => !excludedTestProjectIds.has(project.project_id)).map((project) => {
    const projectId = String(project.project_id || "");
    if (!projectId) throw new Error("Intersect returned a project without an identifier");
    const allocatedLovelace = project.financials?.total_allocated_lovelace ?? project.initial_amount_lovelace;
    const allocatedAda = lovelaceToAda(allocatedLovelace, "allocated amount");
    // The aggregate withdrawal field can include contract-level amounts that exceed
    // this project's allocation. Use the approved milestone values flagged withdrawn.
    const withdrawnAda = withdrawnMilestoneAdaByProject.get(projectId) || 0;
    const remainingAda = Math.max(0, allocatedAda - withdrawnAda);
    const upstreamVendorName = typeof project.vendor_name === "string" ? project.vendor_name.trim() : "";
    const mappedVendorName = vendorIdentityByProjectId[projectId] || "";
    const projectMilestones = (milestonesByProject.get(projectId) || [])
      .sort((left, right) => left.unlockDate.localeCompare(right.unlockDate));
    return {
      id: projectId,
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
      fundedAt: project.fund_time?.iso || null,
      fundTxHash: project.fund_tx_hash || null,
      lastEventAt: project.last_event_time?.iso || null,
      contractInstance: project.treasury?.contract_instance || null,
      milestones: projectMilestones,
    };
  });

  const financialSummary = summarizeIntersectProjects(projects).financialSummary;

  const syncStatus = upstreamStatus?.data || null;
  const lastEventProcessedAt = syncStatus?.sync?.last_event_processed?.iso || null;
  const indexedThroughAt = syncStatus?.chain?.indexer_time?.iso || null;
  const syncCheckedAt = upstreamStatus?.meta?.timestamp || null;
  const syncLagMs = lastEventProcessedAt ? Date.now() - Date.parse(lastEventProcessedAt) : null;
  const sync = {
    state: syncLagMs === null || !Number.isFinite(syncLagMs)
      ? "unknown"
      : syncLagMs > 24 * 60 * 60 * 1000 ? "delayed" : "current",
    lastEventProcessedAt,
    indexedThroughAt,
    checkedAt: syncCheckedAt,
    lagHours: syncLagMs === null || !Number.isFinite(syncLagMs) ? null : Math.max(0, syncLagMs / (60 * 60 * 1000)),
    indexedProjectCount: Number(syncStatus?.totals?.projects) || null,
  };

  return {
    projects,
    financialSummary,
    source: "Intersect Administration API · Cardano mainnet",
    updatedAt: new Date().toISOString(),
    upstreamUpdatedAt: firstPage.meta?.timestamp || null,
    sync,
    stale: false,
  };
});

const getIntersectOverview = async () => createIntersectOverviewSummary(await getIntersectVendorProjects());

const apiRoutes = {
  "/api/health": async () => ({ status: "ok", service: "adaspending", timestamp: new Date().toISOString() }),
  "/api/v1/cardano/treasury-stats": getTreasuryStats,
  "/api/v1/cardano/treasury-donations": getTreasuryDonations,
  "/api/v1/cardano/treasury-donations/all-time": getAllTimeTreasuryDonations,
  "/api/v1/cardano/network-state": getNetworkState,
  "/api/v1/markets/ada-price": getAdaPrice,
  "/api/v1/data/intersect-vendor-projects": getIntersectVendorProjects,
  "/api/v1/data/intersect-overview": getIntersectOverview,
  "/api/v1/data/intersect-projects": async () => (await getIntersectVendorProjects()).projects,
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
        : requestUrl.pathname.endsWith("/intersect-vendor-projects") || requestUrl.pathname.endsWith("/intersect-overview") || requestUrl.pathname.endsWith("/intersect-projects") ? 900
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
