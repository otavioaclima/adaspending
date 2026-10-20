import assert from "node:assert/strict";

const baseUrl = (process.env.APP_BASE_URL || "https://adaspending.com").replace(/\/$/, "");

const getJson = async (pathname) => {
  const startedAt = performance.now();
  const response = await fetch(`${baseUrl}${pathname}`, { signal: AbortSignal.timeout(30_000) });
  assert.equal(response.status, 200, `${pathname} should return HTTP 200`);
  const data = await response.json();
  assert.ok(data && typeof data === "object", `${pathname} should return JSON`);
  console.log(`${pathname}: HTTP ${response.status} (${((performance.now() - startedAt) / 1000).toFixed(2)}s)`);
  return data;
};

const health = await getJson("/api/health");
assert.equal(health.status, "ok");

const [treasury, network, donations, allTimeDonations, overview, directory] = await Promise.all([
  getJson("/api/v1/cardano/treasury-stats"),
  getJson("/api/v1/cardano/network-state"),
  getJson("/api/v1/cardano/treasury-donations"),
  getJson("/api/v1/cardano/treasury-donations/all-time"),
  getJson("/api/v1/data/intersect-overview"),
  getJson("/api/v1/data/intersect-vendor-projects"),
]);

assert.ok(Number.isFinite(treasury.treasury) && treasury.treasury >= 0, "treasury amount should be nonnegative ADA");
assert.ok(Number.isInteger(treasury.epoch) && treasury.epoch > 0, "treasury epoch should be a positive integer");
assert.equal(treasury.epoch, network.epoch, "treasury and network routes should report the same epoch");
assert.ok(Math.abs(treasury.treasury - Number(network.treasury) / 1_000_000) < 0.01, "treasury ADA and lovelace values should match");
assert.ok(Array.isArray(donations.epochs) && donations.epochs.length === 10, "recent donations should include ten epochs");
assert.ok(/^\d+$/.test(allTimeDonations.totalLovelace), "all-time donations should be an integer lovelace string");

assert.ok(Array.isArray(directory.projects) && directory.projects.length > 0, "Intersect directory should contain projects");
assert.equal(overview.projectCount, directory.projects.length, "overview project count should match directory");
assert.equal(overview.vendorGroupCount, new Set(directory.projects.map((project) => project.vendor)).size, "overview vendor count should match directory");
assert.deepEqual(overview.financialSummary, directory.financialSummary, "overview totals should match the shared project directory");
assert.ok(overview.source.includes("Intersect"), "overview should identify the Intersect source");

console.log(`Data consistency passed: epoch ${treasury.epoch}, ${overview.projectCount} projects, ${overview.vendorGroupCount} vendor groups.`);
