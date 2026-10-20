# ADAspending.com - Cardano Treasury Explorer v1

ADAspending is a comprehensive transparency platform and open data source for tracking treasury spending on the Cardano blockchain. It provides community members, DReps, and stakeholders with detailed insights into how decentralized funds are allocated, utilized, and delivered.

## 🚀 Key Features

- **Treasury Projects Tracker**: Detailed overview of all projects funded through the Intersect Treasury Contracts. Monitor execution progress, budget allocations, and delivery status.
- **Vendor Directory**: A comprehensive list of official vendors and teams delivering projects. View financial summaries, project history, and competence benchmarks.
- **Spending Explorer**: Analyze ADA flows and treasury distribution across different categories and time periods.
- **Transparency & Governance**: Resources for DReps to evaluate proposals based on competence and delivery capacity, including market benchmarks and communication channels.
- **Real-time Data**: Integrated with Cardano mainnet through Koios, plus Intersect metrics and Sundae Treasury data.

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **State Management**: React Query (TanStack Query)

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/otavioaclima/adaspending.git
   cd adaspending
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development servers**
   ```sh
   npm run api:dev
   ```
   In a second terminal:
   ```sh
   npm run dev
   ```

4. **Build for production**
   ```sh
   npm run build
   ```

## Backend and Google Cloud deployment

The app includes a small Node.js API that proxies Cardano mainnet treasury and supply data through Koios, serves the ADA price from CoinGecko, and provides the existing Intersect and vendor JSON datasets. Browser requests use same-origin `/api` routes; provider credentials stay on the server.

### Local development

Run the API and Vite in separate terminals:

```sh
npm run api:dev
npm run dev
```

Vite forwards `/api` requests to the API server on port 8081. The API health endpoint is available at `http://localhost:8081/api/health`.

### Production architecture

- **Firebase Hosting** serves the built React app on the public domain and forwards `/api/**` requests to the backend.
- **Cloud Run** runs the Node.js API in `southamerica-east1`.
- **Artifact Registry and Cloud Build** build and deploy the API container from `cloudbuild.yaml`.
- Cardano treasury and supply data is fetched server-side from the public Koios mainnet API. The API's `circulation`, `treasury`, `reserves`, and `supply` totals are used directly; circulation is not inferred from the 45 billion maximum supply. Provider requests stay on the server and are cached for five minutes, with up to six hours of stale data served on warm instances during upstream failures.

The Firebase Hosting rewrite expects a Cloud Run service named `adaspending-api`. Deploy that service before publishing Hosting. The GCP project must have billing and the Cloud Run, Cloud Build, and Artifact Registry APIs enabled, plus an Artifact Registry Docker repository named `adaspending` in `southamerica-east1`. Select the intended ADAspending project explicitly when running `gcloud` or Firebase CLI commands.

Build the frontend locally before each backend image deploy because Cloud Build packages the generated `dist` directory:

```sh
npm ci
npm run build
gcloud builds submit --project=cardano-feed-v3 --region=southamerica-east1 --config=cloudbuild.yaml .
firebase deploy --only hosting:adaspending --project cardano-feed-v3
```

The production custom domains `adaspending.com` and `www.adaspending.com` are connected to Firebase Hosting. Keep the domain ownership TXT record in Cloudflare so Firebase can continue renewing its HTTPS certificate. The existing mail MX, SRV, and SPF records are independent and must be preserved.

## 📊 Data Sources

ADAspending sources data directly from:
- **Cardano Blockchain**: Cardano mainnet treasury and supply data via the Koios query API.
- **Intersect Treasury**: Official project reporting and milestone tracking.
- **Sundae Treasury**: Smart contract instance data for treasury management.

Our goal is to maintain an impeccable record of community fund allocation for the benefit of the entire ecosystem.

---

© 2026 ADAspending.com | Empowering transparency in the Cardano ecosystem.
