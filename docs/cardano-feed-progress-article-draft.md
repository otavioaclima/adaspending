# Cardano Treasury Explorer Open Data Source - ADAspending.com - Milestone 4

**Project Catalyst Fund 14 — Project 1400032**  
**Milestone:** Back-end programming + Blockchain integration

## Milestone 4

This update reports the completion of ADAspending's backend and Cardano mainnet integration milestone. The release connects the public dashboard to a production API, improves the accuracy and traceability of treasury figures, and makes the project progress and evidence available to the Cardano community.

### (A) Back-end development

The ADAspending backend is now deployed on Google Cloud Run and serves the dashboard through the production domain. The API provides health, Cardano treasury statistics, network state, ADA price, Intersect project, and vendor profile data. The frontend displays live API data, including its source and freshness status.

The production endpoints were checked after deployment:

- Website: https://adaspending.com/
- API health: https://adaspending.com/api/health
- Treasury statistics: https://adaspending.com/api/v1/cardano/treasury-stats
- Cardano network state: https://adaspending.com/api/v1/cardano/network-state

### (B) Cardano blockchain integration

The backend retrieves Cardano mainnet epoch and monetary totals through Koios. Circulating ADA, treasury, reserves, and total supply are read as separate values from the provider, avoiding the previous inaccurate calculation that treated the 45 billion maximum supply minus reserves as circulating supply.

The API returns the current epoch and latest block time alongside the data. Successful responses are cached for five minutes. If Koios is temporarily unavailable, a warm backend instance can serve the last successful snapshot for up to six hours and marks it as stale so that users can identify the data freshness.

Integration documentation and results:

- Cardano integration notes: https://github.com/otavioaclima/adaspending/blob/main/docs/cardano-blockchain-integration.md
- Source code: https://github.com/otavioaclima/adaspending
- Public dashboard: https://adaspending.com/

### (C) Project progress update on Cardano Feed

This article reports the completion of the Milestone 4 backend and Cardano integration work. The live platform, source code, and integration evidence are linked above for community review. The project will proceed to its final milestone, focused on platform launch, closeout reporting, and a community-facing video.

## Project links

- ADAspending: https://adaspending.com/
- Project Catalyst proposal: https://projectcatalyst.io/funds/14/cardano-use-cases-concepts/cardano-treasury-explorer-open-data-source-adaspendingcom
- GitHub repository: https://github.com/otavioaclima/adaspending

---

**Before publishing:** use this title and body in Cardano Feed, then copy the published article URL into section C of `docs/milestone-4-poa-draft.md`. The title and A/B/C sections match the M4 outputs and evidence requirements.
