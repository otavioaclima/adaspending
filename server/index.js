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
const cexplorerBaseUrl = "https://api-mainnet-stage.cexplorer.io/v1";
const cache = new Map();

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
  cache.set(key, { pending, expiresAt: 0 });
  try {
    const value = await pending;
    cache.set(key, { value, expiresAt: Date.now() + maxAgeSeconds * 1000 });
    return value;
  } catch (error) {
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

const getTreasuryStats = () => cached("cardano-treasury-stats", 300, async () => {
  const tip = await fetchJson(`${cexplorerBaseUrl}/block/tip`);
  const currentEpoch = tip?.data?.tip?.data?.[0]?.epoch_no;
  if (!Number.isInteger(Number(currentEpoch))) {
    throw new Error("Cexplorer did not return a current epoch");
  }

  const stats = await fetchJson(`${cexplorerBaseUrl}/epoch/stats?no=${currentEpoch}`);
  const pots = stats?.data?.pots;
  const treasuryLovelace = Number(pots?.treasury);
  const reservesLovelace = Number(pots?.reserves);
  if (!Number.isFinite(treasuryLovelace) || !Number.isFinite(reservesLovelace)) {
    throw new Error("Cexplorer returned invalid treasury data");
  }

  const reserves = reservesLovelace / 1_000_000;
  return {
    treasury: treasuryLovelace / 1_000_000,
    circulating: 45_000_000_000 - reserves,
    epoch: Number(currentEpoch),
    source: "Cexplorer",
    updatedAt: new Date().toISOString(),
  };
});

const getAdaPrice = () => cached("ada-price-usd", 300, async () => {
  const price = await fetchJson(
    "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd",
  );
  const usd = Number(price?.cardano?.usd);
  if (!Number.isFinite(usd) || usd <= 0) throw new Error("CoinGecko returned an invalid ADA price");
  return { usd, source: "CoinGecko", updatedAt: new Date().toISOString() };
});

const getNetworkState = () => cached("cardano-network-state", 300, async () => {
  const stats = await getTreasuryStats();
  const reserves = 45_000_000_000 - stats.circulating;
  return {
    treasury: String(Math.round(stats.treasury * 1_000_000)),
    reserves: String(Math.round(reserves * 1_000_000)),
    circulatingSupply: String(Math.round(stats.circulating * 1_000_000)),
    totalSupply: String(45_000_000_000 * 1_000_000),
    source: stats.source,
    updatedAt: stats.updatedAt,
  };
});

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
