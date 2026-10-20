# Cardano Feed progress article draft

**Suggested title:** ADAspending connects its treasury dashboard to Cardano mainnet data

**Suggested summary:** ADAspending's latest release adds a server-side Cardano mainnet data integration, clarifies supply metrics, and makes the source and freshness of treasury data visible.

## Progress update

ADAspending has completed the backend and Cardano mainnet integration work for its Project Catalyst Fund 14 project, Cardano Treasury Explorer Open Data Source (Project 1400032).

The platform now serves its React application through Firebase Hosting and runs its Node.js API on Google Cloud Run. The API reads Cardano mainnet data through the Koios query API and exposes the treasury and supply figures to the dashboard without making provider requests from the browser.

This release also improves the accuracy of the supply figures. Circulating ADA, treasury, reserves, and total supply are now read from separate on-chain totals. The dashboard no longer treats the maximum supply minus reserves as circulating supply. It displays the source, epoch, and latest block time so readers can see where the numbers come from and how current they are.

Successful snapshots are cached for five minutes. If the upstream provider is temporarily unavailable, a warm API instance can serve the last successful snapshot for up to six hours and marks it as stale. This helps keep the dashboard useful while making the age of the data explicit.

The team is now preparing the milestone evidence package and the final project close-out. The source code and integration notes are public:

- ADAspending: https://adaspending.com/
- Open source: https://github.com/otavioaclima/adaspending
- Cardano integration details: https://github.com/otavioaclima/adaspending/blob/main/docs/cardano-blockchain-integration.md

The project will continue to improve data transparency, reliability, and usability for Cardano community members reviewing treasury activity.
