# ADAspending.com - Cardano Treasury Explorer

ADAspending is a comprehensive transparency platform and open data source for tracking treasury spending on the Cardano blockchain. It provides community members, DReps, and stakeholders with detailed insights into how decentralized funds are allocated, utilized, and delivered.

## 🚀 Key Features

- **Treasury Projects Tracker**: Detailed overview of all projects funded through the Intersect Treasury Contracts. Monitor execution progress, budget allocations, and delivery status.
- **Vendor Directory**: A comprehensive list of official vendors and teams delivering projects. View financial summaries, project history, and competence benchmarks.
- **Spending Explorer**: Analyze ADA flows and treasury distribution across different categories and time periods.
- **Transparency & Governance**: Resources for DReps to evaluate proposals based on competence and delivery capacity, including market benchmarks and communication channels.
- **Real-time Data**: Integrated with Cexplorer API, Intersect metrics, and Sundae Treasury data.

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

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Cexplorer API key:
   ```env
   VITE_CEXPLORER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Build for production**
   ```sh
   npm run build
   ```

## 📊 Data Sources

ADAspending sources data directly from:
- **Cardano Blockchain**: Real-time transaction data via Cexplorer API.
- **Intersect Treasury**: Official project reporting and milestone tracking.
- **Sundae Treasury**: Smart contract instance data for treasury management.

Our goal is to maintain an impeccable record of community fund allocation for the benefit of the entire ecosystem.

---

© 2026 ADAspending.com | Empowering transparency in the Cardano ecosystem.
