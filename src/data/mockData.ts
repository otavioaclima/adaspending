export interface Proposal {
  id: string;
  title: string;
  abstract: string;
  category: string;
  requestedAmount: number;
  fundedAmount: number | null;
  status: 'approved' | 'rejected' | 'active' | 'completed' | 'pending';
  fundRound: string;
  recipient: string;
  recipientId: string;
  createdAt: string;
  updatedAt: string;
  yesVotes: number;
  noVotes: number;
  spentAmount?: number;
  endDate?: string;
  milestones?: Array<{
    title: string;
    description: string;
    status: 'completed' | 'in-progress' | 'pending';
    dueDate: string;
  }>;
  links?: Array<{
    title: string;
    url: string;
  }>;
  transactionHash?: string;
}

export interface Recipient {
  id: string;
  name: string;
  type: 'individual' | 'organization' | 'team';
  totalFunded: number;
  proposalsSubmitted: number;
  proposalsApproved: number;
  location?: string;
  description?: string;
  website?: string;
  proposals: string[];
}

export interface FundRound {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  totalBudget: number;
  proposals: number;
  approvedProposals: number;
  participation: number;
}

export const proposals: Proposal[] = [
  {
    id: "prop-001",
    title: "Decentralized Identity Solution for Cardano",
    abstract: "This project aims to develop a self-sovereign identity solution built natively on Cardano to enable secure, privacy-preserving identity management.",
    category: "Identity",
    requestedAmount: 150000,
    fundedAmount: 150000,
    status: "active",
    fundRound: "Fund 10",
    recipient: "Atala Systems",
    recipientId: "rec-001",
    createdAt: "2023-10-15T12:00:00Z",
    updatedAt: "2023-11-01T14:30:00Z",
    yesVotes: 12500,
    noVotes: 4200,
    spentAmount: 85000,
    endDate: "2024-06-15T00:00:00Z",
    milestones: [
      {
        title: "Prototype Development",
        description: "Develop initial prototype with core functionality",
        status: "completed",
        dueDate: "2024-01-15T00:00:00Z"
      },
      {
        title: "Security Audit",
        description: "Complete security audit and address findings",
        status: "in-progress",
        dueDate: "2024-03-30T00:00:00Z"
      }
    ],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/example/identity-solution"
      }
    ],
    transactionHash: "hash123456789abcdef"
  },
  {
    id: "prop-002",
    title: "Cardano DeFi Interoperability Bridge",
    abstract: "Creating a secure bridge to connect Cardano's DeFi ecosystem with other blockchain networks, enabling cross-chain liquidity and asset transfers.",
    category: "DeFi",
    requestedAmount: 250000,
    fundedAmount: 200000,
    status: "active",
    fundRound: "Fund 9",
    recipient: "Bridge Builders DAO",
    recipientId: "rec-002",
    createdAt: "2023-08-05T10:15:00Z",
    updatedAt: "2023-09-10T09:45:00Z",
    yesVotes: 20100,
    noVotes: 8500,
    spentAmount: 210000,
    endDate: "2024-05-10T00:00:00Z",
    milestones: [
      {
        title: "Architecture Design",
        description: "Finalize the technical architecture and security model",
        status: "completed",
        dueDate: "2023-11-01T00:00:00Z"
      },
      {
        title: "MVP Development",
        description: "Develop and test the initial bridge functionality",
        status: "completed",
        dueDate: "2024-02-01T00:00:00Z"
      }
    ],
    transactionHash: "hash987654321fedcba"
  },
  {
    id: "prop-003",
    title: "Cardano Developer Bootcamp",
    abstract: "A comprehensive 12-week bootcamp to train developers in Plutus, Marlowe, and other Cardano development skills to expand the ecosystem's talent pool.",
    category: "Education",
    requestedAmount: 120000,
    fundedAmount: 120000,
    status: "completed",
    fundRound: "Fund 8",
    recipient: "Cardano Education Alliance",
    recipientId: "rec-003",
    createdAt: "2023-05-20T08:30:00Z",
    updatedAt: "2023-12-15T16:20:00Z",
    yesVotes: 18700,
    noVotes: 2100,
    spentAmount: 118000,
    endDate: "2023-12-01T00:00:00Z",
    milestones: [
      {
        title: "Curriculum Development",
        description: "Develop comprehensive learning materials",
        status: "completed",
        dueDate: "2023-07-01T00:00:00Z"
      },
      {
        title: "Bootcamp Execution",
        description: "Run the full 12-week program",
        status: "completed",
        dueDate: "2023-11-30T00:00:00Z"
      }
    ],
    transactionHash: "hashab12cd34ef56gh78"
  },
  {
    id: "prop-004",
    title: "African Farmers Market on Cardano",
    abstract: "Building a decentralized marketplace to connect African farmers directly with global buyers, using Cardano for secure and low-cost transactions.",
    category: "RealFi",
    requestedAmount: 185000,
    fundedAmount: 185000,
    status: "active",
    fundRound: "Fund 10",
    recipient: "Emurgo Africa",
    recipientId: "rec-004",
    createdAt: "2023-10-18T11:45:00Z",
    updatedAt: "2023-11-05T13:10:00Z",
    yesVotes: 24600,
    noVotes: 5800,
    spentAmount: 50000,
    endDate: "2024-07-30T00:00:00Z",
    milestones: [
      {
        title: "Market Research & Design",
        description: "Complete user research and platform design",
        status: "completed",
        dueDate: "2024-01-15T00:00:00Z"
      },
      {
        title: "Platform Development",
        description: "Develop the marketplace platform",
        status: "in-progress",
        dueDate: "2024-05-01T00:00:00Z"
      }
    ],
    transactionHash: "hash45ef67gh89ij01kl"
  },
  {
    id: "prop-005",
    title: "Cardano-based Voting System for DAOs",
    abstract: "A customizable, secure voting and governance system for Decentralized Autonomous Organizations built on Cardano.",
    category: "Governance",
    requestedAmount: 130000,
    fundedAmount: null,
    status: "pending",
    fundRound: "Fund 11",
    recipient: "Governance Labs",
    recipientId: "rec-005",
    createdAt: "2024-01-10T14:20:00Z",
    updatedAt: "2024-01-10T14:20:00Z",
    yesVotes: 0,
    noVotes: 0,
    spentAmount: 0,
    endDate: "2024-12-31T00:00:00Z"
  },
  {
    id: "prop-006",
    title: "Environmental Impact Tokens on Cardano",
    abstract: "Creating a tokenization framework for environmental assets like carbon credits, with verification and tracking built on Cardano.",
    category: "RealFi",
    requestedAmount: 210000,
    fundedAmount: null,
    status: "rejected",
    fundRound: "Fund 9",
    recipient: "Green Blockchain Initiative",
    recipientId: "rec-006",
    createdAt: "2023-09-05T09:30:00Z",
    updatedAt: "2023-10-15T17:45:00Z",
    yesVotes: 9800,
    noVotes: 15200,
    spentAmount: 0
  },
  {
    id: "prop-007",
    title: "DApp Store for Cardano Ecosystem",
    abstract: "Building a curated discovery platform for Cardano dApps to improve usability and discovery for end-users.",
    category: "Tooling",
    requestedAmount: 165000,
    fundedAmount: 165000,
    status: "active",
    fundRound: "Fund 10",
    recipient: "dApp Collective",
    recipientId: "rec-007",
    createdAt: "2023-10-20T16:15:00Z",
    updatedAt: "2023-11-08T10:20:00Z",
    yesVotes: 19300,
    noVotes: 7400,
    spentAmount: 100000,
    endDate: "2024-06-30T00:00:00Z",
    milestones: [
      {
        title: "Design & Architecture",
        description: "Complete platform design and architecture",
        status: "completed",
        dueDate: "2024-01-20T00:00:00Z"
      },
      {
        title: "MVP Development",
        description: "Develop initial version with core features",
        status: "in-progress",
        dueDate: "2024-04-15T00:00:00Z"
      }
    ],
    transactionHash: "hash12ab34cd56ef78gh"
  },
  {
    id: "prop-008",
    title: "Plutus Development Toolkit",
    abstract: "Creating comprehensive development tools to simplify Plutus smart contract creation, testing, and deployment.",
    category: "Developer Tools",
    requestedAmount: 195000,
    fundedAmount: 180000,
    status: "active",
    fundRound: "Fund 8",
    recipient: "IOG Developer Experience",
    recipientId: "rec-008",
    createdAt: "2023-05-25T13:40:00Z",
    updatedAt: "2023-06-10T11:25:00Z",
    yesVotes: 22500,
    noVotes: 3800,
    spentAmount: 220000,
    endDate: "2023-12-31T00:00:00Z",
    milestones: [
      {
        title: "Toolkit Design",
        description: "Design the architecture and components",
        status: "completed",
        dueDate: "2023-08-01T00:00:00Z"
      },
      {
        title: "Core Implementation",
        description: "Implement core toolkit functionality",
        status: "completed",
        dueDate: "2023-11-15T00:00:00Z"
      },
      {
        title: "Testing Framework",
        description: "Develop the testing framework",
        status: "in-progress",
        dueDate: "2024-03-01T00:00:00Z"
      }
    ],
    transactionHash: "hash98ij76kl54mn32op"
  }
];

export const recipients: Recipient[] = [
  {
    id: "rec-001",
    name: "Atala Systems",
    type: "organization",
    totalFunded: 150000,
    proposalsSubmitted: 2,
    proposalsApproved: 1,
    location: "Switzerland",
    description: "Focused on decentralized identity solutions for the Cardano ecosystem",
    website: "https://example.com/atalasystems",
    proposals: ["prop-001"]
  },
  {
    id: "rec-002",
    name: "Bridge Builders DAO",
    type: "organization",
    totalFunded: 200000,
    proposalsSubmitted: 1,
    proposalsApproved: 1,
    location: "Virtual",
    description: "DAO focused on interoperability between Cardano and other blockchains",
    website: "https://example.com/bridgebuilders",
    proposals: ["prop-002"]
  },
  {
    id: "rec-003",
    name: "Cardano Education Alliance",
    type: "organization",
    totalFunded: 120000,
    proposalsSubmitted: 3,
    proposalsApproved: 1,
    location: "Global",
    description: "Consortium of educators focused on Cardano development training",
    website: "https://example.com/cardanoeducation",
    proposals: ["prop-003"]
  },
  {
    id: "rec-004",
    name: "Emurgo Africa",
    type: "organization",
    totalFunded: 185000,
    proposalsSubmitted: 2,
    proposalsApproved: 1,
    location: "Kenya",
    description: "African branch of Emurgo focused on blockchain adoption in Africa",
    website: "https://example.com/emurgoafrica",
    proposals: ["prop-004"]
  },
  {
    id: "rec-005",
    name: "Governance Labs",
    type: "team",
    totalFunded: 0,
    proposalsSubmitted: 1,
    proposalsApproved: 0,
    location: "United Kingdom",
    description: "Team developing governance solutions for DAOs on Cardano",
    website: "https://example.com/governancelabs",
    proposals: ["prop-005"]
  },
  {
    id: "rec-006",
    name: "Green Blockchain Initiative",
    type: "organization",
    totalFunded: 0,
    proposalsSubmitted: 2,
    proposalsApproved: 0,
    location: "Germany",
    description: "Non-profit focused on environmental applications of blockchain",
    website: "https://example.com/greenblockchain",
    proposals: ["prop-006"]
  },
  {
    id: "rec-007",
    name: "dApp Collective",
    type: "team",
    totalFunded: 165000,
    proposalsSubmitted: 1,
    proposalsApproved: 1,
    location: "United States",
    description: "Developer collective building infrastructure for dApp discovery",
    website: "https://example.com/dappcollective",
    proposals: ["prop-007"]
  },
  {
    id: "rec-008",
    name: "IOG Developer Experience",
    type: "organization",
    totalFunded: 180000,
    proposalsSubmitted: 3,
    proposalsApproved: 2,
    location: "Global",
    description: "IOG team focused on improving developer experience",
    website: "https://example.com/iogdevexp",
    proposals: ["prop-008"]
  }
];

export const fundRounds: FundRound[] = [
  {
    id: "fund-8",
    name: "Fund 8",
    startDate: "2023-05-01T00:00:00Z",
    endDate: "2023-06-01T00:00:00Z",
    totalBudget: 8000000,
    proposals: 780,
    approvedProposals: 186,
    participation: 22.4
  },
  {
    id: "fund-9",
    name: "Fund 9",
    startDate: "2023-08-01T00:00:00Z",
    endDate: "2023-09-01T00:00:00Z",
    totalBudget: 12000000,
    proposals: 950,
    approvedProposals: 215,
    participation: 25.8
  },
  {
    id: "fund-10",
    name: "Fund 10",
    startDate: "2023-10-01T00:00:00Z",
    endDate: "2023-11-01T00:00:00Z",
    totalBudget: 16000000,
    proposals: 1120,
    approvedProposals: 245,
    participation: 31.5
  },
  {
    id: "fund-11",
    name: "Fund 11",
    startDate: "2024-01-01T00:00:00Z",
    endDate: "2024-02-01T00:00:00Z",
    totalBudget: 20000000,
    proposals: 1350,
    approvedProposals: 0,
    participation: 28.9
  }
];

export const treasuryStats = {
  totalFundsAvailable: 1000000000,
  totalFundsAwarded: 56000000,
  totalProposals: 4200,
  fundedProposals: 981,
  activeProposals: 523,
  completedProposals: 458,
  rejectedProposals: 3219,
  averageVoterParticipation: 26.8,
  categoryDistribution: [
    { name: "DeFi", value: 28 },
    { name: "Tooling", value: 19 },
    { name: "Education", value: 16 },
    { name: "RealFi", value: 12 },
    { name: "Governance", value: 10 },
    { name: "Identity", value: 8 },
    { name: "Other", value: 7 }
  ]
};
