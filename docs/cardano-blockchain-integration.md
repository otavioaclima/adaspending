# ADAspending Cardano integration

## Scope

The production API reads public Cardano mainnet data through the Koios query API. It exposes two same-origin routes used by the website:

- `GET /api/v1/cardano/treasury-stats` returns ADA-denominated treasury and circulating-supply values for the home dashboard.
- `GET /api/v1/cardano/network-state` returns the same values in lovelace, along with reserves, total supply, epoch, source, and the latest block time.
- `GET /api/v1/cardano/treasury-donations` returns confirmed treasury-donation transactions and per-epoch totals for the latest ten epochs.

The API is called from Cloud Run. The browser does not contact the chain-data provider directly.

## Source and calculation

The backend reads the latest epoch from Koios `GET /tip`, then requests that epoch's monetary totals from `GET /totals?_epoch_no={epoch}`. It uses the provider's `treasury`, `circulation`, `reserves`, and `supply` values directly. Lovelace amounts remain decimal strings in the network-state response to avoid floating-point rounding. Set `KOIOS_API_URL` to an alternate compatible Koios endpoint if needed; the default is the public mainnet endpoint.

This matters because `45,000,000,000 ADA - reserves` is total supply, not circulating supply: total supply also includes the treasury and rewards pots. The earlier implementation therefore overstated the circulating-supply figure. The dashboard now uses Koios's `circulation` field and reports the source, epoch, and latest block time alongside the figure.

ADAspending now uses Koios's documented public API tier instead.

The donations page queries Koios `GET /tx_treasury_donations_epoch?_epoch_no={epoch}` for each of the latest ten epochs. It sums the on-chain `treasury_donation` lovelace field, displays the transaction hash and block time, and links each hash to a Cardano explorer. The page labels its ten-epoch reporting window rather than presenting a partial sum as an all-time total.

## Freshness and provider failures

- Successful on-chain snapshots are cached for five minutes per Cloud Run instance.
- If Koios is unavailable, a warm instance can serve its last successful snapshot for up to six hours and marks it as stale.
- The displayed block time refers to the latest block seen by the provider. The separate `updatedAt` field records when ADAspending fetched its snapshot.
- A cold instance has no in-memory snapshot to fall back to and returns the normal API error if Koios is unavailable.

## Verification record

The public Koios mainnet endpoints return the current chain tip and monetary totals for that epoch. The totals include separate `circulation`, `treasury`, `reserves`, and `supply` values. The API validates that the totals epoch matches the chain tip before publishing the snapshot.

After deployment to GCP project `cardano-feed-v3`, production verification confirmed that the health route and both Cardano endpoints returned HTTP 200. The Cardano endpoints returned the provider source, current epoch, latest block time, and separate monetary totals. The values come from the live provider response rather than hard-coded estimates.

Production verification after deployment should record:

1. `GET https://adaspending.com/api/health` returned HTTP 200.
2. `GET https://adaspending.com/api/v1/cardano/treasury-stats` returned epoch, source, treasury, circulation, and block time.
3. `GET https://adaspending.com/api/v1/cardano/network-state` returned the matching values in lovelace.
4. `https://adaspending.com/` returned HTTP 200 with a valid HTTPS certificate. The dashboard displays the provider, epoch, and latest block time. The stale-data fallback is implemented; it will be marked in the response when triggered by an upstream failure.

## References

- [Cardano Developer Portal: Koios provider and mainnet endpoint](https://developers.cardano.org/docs/get-started/koios/)
- [Koios API documentation](https://koios.rest/api/)
- [Cexplorer API documentation and authentication requirements](https://cexplorer.apidocumentation.com/cexplorer-api)
- [Cardano monetary policy](https://docs.cardano.org/about-cardano/explore-more/monetary-policy)
