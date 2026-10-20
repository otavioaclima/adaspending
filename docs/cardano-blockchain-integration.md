# ADAspending Cardano integration

## Scope

The production API reads public Cardano mainnet data through the Koios query API. It exposes two same-origin routes used by the website:

- `GET /api/v1/cardano/treasury-stats` returns ADA-denominated treasury and circulating-supply values for the home dashboard.
- `GET /api/v1/cardano/network-state` returns the same values in lovelace, along with reserves, total supply, epoch, source, and the latest block time.
- `GET /api/v1/cardano/treasury-donations` returns confirmed treasury-donation transactions and per-epoch totals for the latest ten epochs.
- `GET /api/v1/cardano/treasury-donations/all-time` returns the confirmed donation total across all recorded donation epochs.
- `GET /api/v1/data/intersect-vendor-projects` returns live Intersect Treasury project funding and status data for the Vendors directory.

The API is called from Cloud Run. The browser does not contact the chain-data provider directly.

## Source and calculation

The backend reads the latest epoch from Koios `GET /tip`, then requests that epoch's monetary totals from `GET /totals?_epoch_no={epoch}`. It uses the provider's `treasury`, `circulation`, `reserves`, and `supply` values directly. Lovelace amounts remain decimal strings in the network-state response to avoid floating-point rounding. Set `KOIOS_API_URL` to an alternate compatible Koios endpoint if needed; the default is the public mainnet endpoint.

This matters because `45,000,000,000 ADA - reserves` is total supply, not circulating supply: total supply also includes the treasury and rewards pots. The earlier implementation therefore overstated the circulating-supply figure. The dashboard now uses Koios's `circulation` field and reports the source, epoch, and latest block time alongside the figure.

ADAspending now uses Koios's documented public API tier instead.

The donations page queries Koios `GET /tx_treasury_donations_epoch?_epoch_no={epoch}` for each of the latest ten epochs. It sums the on-chain `treasury_donation` lovelace field, displays the transaction hash and block time, and links each hash to a Cardano explorer. Its all-time total sums the `treasury_donation` field returned by Koios `GET /totals?_epoch_no={epoch}` from Conway epoch 507 through the current epoch. That historical total is cached for six hours to keep provider traffic bounded. The page shows the all-time reporting range separately from the ten-epoch transaction list.

To avoid an empty or loading placeholder on first render, the donations page starts with a small verified snapshot of recent epochs and the latest all-time total bundled in the frontend, then refreshes both from the API in the background. The refreshed API values take over when available. If a refresh fails, the last confirmed values remain visible and the page marks the data as potentially out of date.

## Intersect Treasury project and vendor data

The Vendors directory fetches `GET https://administration.info.intersectmbo.org/api/v1/projects?limit=100&page={page}` and withdrawn milestones from `GET /api/v1/milestones?limit=100&page={page}&withdrawn=true` through the same-origin route `/api/v1/data/intersect-vendor-projects`. This is Intersect's administration API, backed by its Cardano indexer; the API documents project IDs, names, statuses, vendor payment addresses, allocation and withdrawal amounts, milestones, and event history. Allocation uses `initial_amount_lovelace` / `financials.total_allocated_lovelace`. To avoid counting shared-contract outputs as project payouts, the site measures withdrawn milestone value from each milestone's planned `amount_lovelace` when Intersect marks that milestone `withdrawn`; the aggregate `financials.total_withdrawn_lovelace` and `withdrawal.amount_lovelace` are not used for project-level payout totals because the API can report sums greater than the individual project allocation. Remaining tracked allocation is derived as total allocation minus withdrawn milestone value, floored at zero. Set `INTERSECT_API_URL` only if an alternate compatible API base URL is required; the default is the official endpoint above. The live snapshot is cached for 15 minutes in Cloud Run and by the public route; a warm instance may serve the previous snapshot as stale for up to six hours if the provider is unavailable. Known PSSC test project `EX-000-01` is excluded from the vendor directory.

The upstream API currently exposes `vendor_address` but does not provide a named-vendors endpoint or an organization-name field for that address. ADAspending therefore joins the live project records to a maintained project-ID-to-vendor-name map in `server/vendorIdentityMap.js`. Unmatched future projects appear under “Unmapped vendor” so they are visible without guessing a name. Vendor logos and profile links remain in the manually maintained `public/data/vendorProfiles.json`. The Vendors directory and vendor detail pages use live project names, allocations, withdrawals, and statuses. Vendor detail pages still reuse bundled milestone evidence from `public/data/intersectData.json` where project IDs match; the other project/milestone pages also remain on that bundled dataset.

The same live project allocation and withdrawn-milestone summary powers the ADA allocation, milestone, project, and vendor figures on the home page and vendor directory. The upstream response timestamp is shown on `/vendors` and beside the home-page allocation figures. Its values describe when the Intersect API generated that response, while the `/api/v1/status` route from Intersect reports indexer and last-event synchronization times.

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
5. `GET https://adaspending.com/api/v1/data/intersect-vendor-projects` returned current Intersect project data, the upstream source timestamp, and the stale flag. Its project count excludes the known PSSC test project.

## References

- [Cardano Developer Portal: Koios provider and mainnet endpoint](https://developers.cardano.org/docs/get-started/koios/)
- [Koios API documentation](https://koios.rest/api/)
- [Intersect Administration API documentation](https://administration.info.intersectmbo.org/docs/)
- [Intersect Administration Data source repository](https://github.com/IntersectMBO/administration-data)
- [Cexplorer API documentation and authentication requirements](https://cexplorer.apidocumentation.com/cexplorer-api)
- [Cardano monetary policy](https://docs.cardano.org/about-cardano/explore-more/monetary-policy)
