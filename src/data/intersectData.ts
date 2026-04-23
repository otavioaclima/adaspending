
export interface Milestone {
  id: string;
  title: string;
  amount: number;
  status: string;
  unlockDate: string;
  description: string;
  evidence?: {
    title: string;
    link: string;
    transactionHash?: string;
    transactionLink?: string;
  };
}

export interface IntersectProject {
  id: string;
  projectName: string;
  vendor: string;
  totalAmount: number;
  amountSpent: number;
  status: string;
  description?: string;
  milestones?: Milestone[];
}

export const intersectProjects: IntersectProject[] = [
  {
    id: "UTXO-ER-0001-25",
    projectName: "IOR - Cardano Vision Work Program 2025",
    vendor: "IOR",
    totalAmount: 26840000,
    amountSpent: 26840000,
    status: "Completed",
    description: "The Supplier will provide a strategic program of research and development designed to realize Cardano Vision and place Cardano at the forefront of blockchain innovation. The services are designed to deliver foundational research and technology validation workstreams up to SRL5, alongside communication and dissemination activities.",
    milestones: [
      {
        id: "MS-1",
        title: "Milestone 1 - Work Package 2025 Foundational Research Mid-Year Report",
        amount: 5895000,
        status: "Withdrawn",
        unlockDate: "September 30, 2025",
        description: "Mid-year report showcasing the completed foundational research outputs.",
        evidence: {
          title: "Milestone 1 Report",
          link: "https://drive.google.com/file/d/1eaGqQ9t2rP12fhnTlrawZsngFIMOGKZt/view?usp=sharing",
          transactionHash: "f32f61ad971d4f593a8ec9e31bbb109ca15f78e0283ef588728c444f9c6b41a2",
          transactionLink: "https://cexplorer.io/tx/f32f61ad971d4f593a8ec9e31bbb109ca15f78e0283ef588728c444f9c6b41a2"
        }
      },
      {
        id: "MS-2",
        title: "Milestone 2 - Work Package 2025 Technology Validation Mid-Year Report",
        amount: 7525000,
        status: "Withdrawn",
        unlockDate: "September 30, 2025",
        description: "Mid-year report showcasing the completed technology validation outputs.",
        evidence: {
          title: "Milestone 2 Report",
          link: "https://drive.google.com/file/d/1Sh6R3Er7eLbgN7J0938wj7d_VX44bVv9/view?usp=sharing",
          transactionHash: "c642aca6293bf29db80351e0550bbfb4e8aeb115006d303c7f601e60a1b492dd",
          transactionLink: "https://cexplorer.io/tx/c642aca6293bf29db80351e0550bbfb4e8aeb115006d303c7f601e60a1b492dd"
        }
      },
      {
        id: "MS-3",
        title: "Milestone 3 - Work Package 2025 Foundational Research End-Year Report",
        amount: 5895000,
        status: "Withdrawn",
        unlockDate: "January 30, 2026",
        description: "End-year report showcasing 20 foundational research outputs.",
        evidence: {
          title: "Milestone 3 Report",
          link: "https://drive.google.com/file/d/1rKBrua1JxJiSsghJ9ARp2_oATGGeaTC6/view?usp=sharing",
          transactionHash: "01c41c0099e049a3994f3be7c5650fa4ed5b95ecc4e6b48a3d50032793a9c05b",
          transactionLink: "https://cexplorer.io/tx/01c41c0099e049a3994f3be7c5650fa4ed5b95ecc4e6b48a3d50032793a9c05b"
        }
      },
      {
        id: "MS-4",
        title: "Milestone 4 - Work Package 2025 Technology Validation End-Year Report",
        amount: 7525000,
        status: "Withdrawn",
        unlockDate: "January 30, 2026",
        description: "End-year report showcasing 6 technology validation outputs.",
        evidence: {
          title: "Milestone 4 Report",
          link: "https://drive.google.com/file/d/1TaaI_i2Drspmsa-VkW301JlUpNAMTG5T/view?usp=sharing",
          transactionHash: "129137932f56934891aa3ada127b0d023a22d0f677fc49bacebd99f1d416e1be",
          transactionLink: "https://cexplorer.io/tx/129137932f56934891aa3ada127b0d023a22d0f677fc49bacebd99f1d416e1be"
        }
      }
    ]
  },
  {
    id: "ip-002",
    projectName: "IOG - Advancing Decentralised Community Innovation Funding & Infrastructure",
    vendor: "IOG",
    totalAmount: 5159000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-003",
    projectName: "IOG - Beyond Minimum Viable Governance",
    vendor: "IOG",
    totalAmount: 592780,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-004",
    projectName: "IOG - Blockfrost Platform Community Budget Proposal",
    vendor: "IOG",
    totalAmount: 1300000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-005",
    projectName: "Input Output Engineering Core Development Proposal (6of6)",
    vendor: "Input Output...posal (6of6)",
    totalAmount: 33664800,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-006",
    projectName: "Input Output Engineering Core Development Proposal (5of6)",
    vendor: "Input Output...posal (5of6)",
    totalAmount: 11492000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-007",
    projectName: "Input Output Engineering Core Development Proposal (4of6)",
    vendor: "Input Output...posal (4of6)",
    totalAmount: 10816000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-008",
    projectName: "Input Output Engineering Core Development Proposal (3of6)",
    vendor: "Input Output...posal (3of6)",
    totalAmount: 8870001,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-009",
    projectName: "Input Output Engineering Core Development Proposal (2of6)",
    vendor: "Input Output...posal (2of6)",
    totalAmount: 7774000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-010",
    projectName: "Input Output Engineering Core Development Proposal (1of6)",
    vendor: "Input Output...posal (1of6)",
    totalAmount: 24200280,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-011",
    projectName: "Snek Foundation - ₳5M Loan for Cardano's Global Listing Expansion",
    vendor: "Snek Foundation",
    totalAmount: 5000000,
    amountSpent: 5000000,
    status: "Completed"
  },
  {
    id: "ip-012",
    projectName: "Rainfire DAO - Cardano Builder DAO",
    vendor: "Rainfire DAO",
    totalAmount: 12000000,
    amountSpent: 12000000,
    status: "Completed"
  },
  {
    id: "ip-013",
    projectName: "Cardano Foundation - Unified Global Events Marketing Strategy",
    vendor: "Cardano Foundation",
    totalAmount: 6000000,
    amountSpent: 6000000,
    status: "Completed"
  },
  {
    id: "ip-014",
    projectName: "Cardano Foundation - Cardano Summit 2025",
    vendor: "Cardano Foundation",
    totalAmount: 6000000,
    amountSpent: 6000000,
    status: "Completed"
  },
  {
    id: "ip-015",
    projectName: "Catalyst FC - Catalyst 2025 Proposal",
    vendor: "Catalyst FC",
    totalAmount: 64300000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-016",
    projectName: "Intersect MBO - Member-based organization",
    vendor: "Intersect MBO",
    totalAmount: 15750000,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-017",
    projectName: "GO MAESTRO INC - Complete Web3 developer stack",
    vendor: "GO MAESTRO INC",
    totalAmount: 600000,
    amountSpent: 600000,
    status: "Completed"
  },
  {
    id: "ip-018",
    projectName: "Vellum Labs: Developer-Focused Blockchain Explorer",
    vendor: "Vellum Labs",
    totalAmount: 266667,
    amountSpent: 266667,
    status: "Completed"
  },
  {
    id: "ip-019",
    projectName: "OpShin - Python Smart Contracts for Cardano",
    vendor: "OpShin",
    totalAmount: 199911,
    amountSpent: 0,
    status: "Paused"
  },
  {
    id: "ip-020",
    projectName: "Anzens - Expanding Stablecoin / Native Asset Support",
    vendor: "Anzens",
    totalAmount: 4000000,
    amountSpent: 0,
    status: "Paused"
  }
];
