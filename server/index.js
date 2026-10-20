import { createServer } from "node:http";
import { createReadStream, promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(serverDirectory, "..");
const isDevelopment = process.env.NODE_ENV === "development";
const staticDirectory = path.join(projectDirectory, "dist");
const publicDirectory = path.join(projectDirectory, "public");
const port = Number(process.env.PORT || 8081);
const koiosBaseUrl = process.env.KOIOS_API_URL || "https://api.koios.rest/api/v1";
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

const readDataFile = async (filename) => {
  const directory = isDevelopment ? publicDirectory : staticDirectory;
  return JSON.parse(await fs.readFile(path.join(directory, "data", filename), "utf8"));
};

const apiRoutes = {
  "/api/health": async () => ({ status: "ok", service: "adaspending", timestamp: new Date().toISOString() }),
  "/api/v1/cardano/treasury-stats": getTreasuryStats,
  "/api/v1/cardano/network-state": getNetworkState,
  "/api/v1/markets/ada-price": getAdaPrice,
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
      const maxAge = requestUrl.pathname.includes("/data/") ? 3600 : 60;
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
