const baseUrl = (process.env.API_BASE_URL || "https://adaspending.com").replace(/\/$/, "");
const attempts = 3;

const getJson = async (pathname) => {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}${pathname}`, { signal: AbortSignal.timeout(30_000) });
      if (!response.ok) throw new Error(`${pathname} returned HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 2_000));
    }
  }
  throw lastError;
};

const health = await getJson("/api/health");
if (health.status !== "ok") throw new Error("/api/health returned an invalid status");

const [stats, network, donations] = await Promise.all([
  getJson("/api/v1/cardano/treasury-stats"),
  getJson("/api/v1/cardano/network-state"),
  getJson("/api/v1/cardano/treasury-donations"),
]);

if (!Number.isInteger(stats.epoch) || stats.epoch !== network.epoch) {
  throw new Error("Treasury stats and network state do not report the same current epoch");
}
if (stats.source !== "Koios · Cardano mainnet" || network.source !== stats.source) {
  throw new Error("Cardano routes do not identify Koios mainnet as their source");
}
if (!Array.isArray(donations.epochs) || !Array.isArray(donations.donations)
  || donations.currentEpoch !== network.epoch
  || donations.epochs.length !== Math.min(10, donations.currentEpoch + 1)
  || donations.donationCount !== donations.donations.length
  || donations.stale) {
  throw new Error("Treasury donations returned an invalid, stale, or inconsistent response");
}
for (const donation of donations.donations) {
  if (!/^[a-f0-9]{64}$/i.test(donation.txHash)
    || !/^\d+$/.test(donation.lovelace)
    || !Number.isFinite(Date.parse(donation.blockTime))) {
    throw new Error("Treasury donations contains an invalid transaction");
  }
}

console.log(`Production API integration passed: health, treasury-stats, network-state, treasury-donations (epoch ${network.epoch}, ${donations.donationCount} transactions).`);
