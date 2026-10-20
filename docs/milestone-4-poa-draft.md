# Project Catalyst Fund 14 — Milestone 4 PoA draft

**Project:** 1400032 — Cardano Treasury Explorer Open Data Source (ADAspending.com)  
**Milestone:** Back-end programming + Blockchain integration

> Draft only. Before submission, replace the Cardano Feed article placeholder with its public URL and confirm all three checklist groups in the Catalyst form. The form states that the PoA is public; include no personal or sensitive information.

## A. Output: Back-end development

**Acceptance criteria:** The Node.js backend is deployed on Google Cloud Run and serves the frontend through same-origin API routes. Health, Cardano statistics, network-state, ADA price, Intersect project, and vendor-profile endpoints are available. Live API responses are checked after deployment.

**Evidence:**

- Source code: https://github.com/otavioaclima/adaspending
- Health endpoint: https://adaspending.com/api/health
- Cardano treasury statistics: https://adaspending.com/api/v1/cardano/treasury-stats
- Cardano network-state endpoint: https://adaspending.com/api/v1/cardano/network-state

## B. Output: Cardano mainnet integration

**Acceptance criteria:** ADAspending retrieves current mainnet epoch and monetary totals through Koios, a Cardano query API. It displays the provider, epoch, and latest block time. Circulation, treasury, reserves, and supply come from their separate provider fields; circulation is not calculated as the 45 billion maximum supply minus reserves. The backend caches successful data and marks a prior snapshot as stale if the provider is temporarily unavailable.

**Evidence:**

- Integration method and recorded results: https://github.com/otavioaclima/adaspending/blob/main/docs/cardano-blockchain-integration.md
- Live treasury and circulation: https://adaspending.com/api/v1/cardano/treasury-stats
- Live supply breakdown in lovelace: https://adaspending.com/api/v1/cardano/network-state
- Public dashboard: https://adaspending.com/

## C. Output: Cardano Feed progress article

**Acceptance criteria:** Publish a project progress update on Cardano Feed describing the backend and Cardano mainnet integration.

**Evidence:** **Pending publication.** Replace this line with the final public Cardano Feed article URL before submitting the PoA.

## Submission checklist

- [ ] Milestone outputs addressed (A, B, C)
- [ ] Acceptance criteria addressed (A, B, C)
- [ ] Evidence requirements addressed (GitHub source, integration document, published Cardano Feed article)
- [ ] Public-submission content reviewed for personal or sensitive information
