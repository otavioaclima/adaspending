
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
    "id": "UTXO-ER-0001-25",
    "projectName": "IOR - Cardano Vision Work Program 2025",
    "vendor": "IOR",
    "totalAmount": 26840000.0,
    "amountSpent": 26840000.0,
    "status": "Completed",
    "description": "The Supplier will provide a strategic program of research and development designed to realizeCardano Vision and place Cardano at the forefront of blockchain innovation. The services are designed to deliver foundational research and technology validationworkstreams up to SRL5, alongside communication and dissemination activities.",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 5895000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 7525000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 5895000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 7525000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EMI-0001-25",
    "projectName": "IOG - Advancing Decentralised Community Innovation Funding & Infrastructure",
    "vendor": "IOG",
    "totalAmount": 5159000.0,
    "amountSpent": 3095400.0,
    "status": "Paused",
    "description": "The Supplier will provide design and development services to deliver a comprehensive technical upgrade to the Project Catalyst platform. These services are designed to overhaul both the user experiences and the underlying engine of the system.",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 1031800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 1031800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EG-0003-25",
    "projectName": "IOG - Beyond Minimum Viable Governance",
    "vendor": "IOG",
    "totalAmount": 592780.0,
    "amountSpent": 227390.0,
    "status": "Paused",
    "description": "This initiative will establish a robust framework for evaluating and enhancing Cardano's governance system. We will identify and benchmark key governance metrics to assess the health, performance, and overall impact of our decentralized decision-making processes. The resulting 'State of Governance' report will provide a structured evaluation of participation, track vital Key Performance Indicators (KPIs), map the evolving governance ecosystem, and pinpoint specific areas for improvement. ",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 81695.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 145695.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 121695.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 243695.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0003-25",
    "projectName": "IOG - Blockfrost Platform Community Budget Proposal",
    "vendor": "IOG",
    "totalAmount": 1300000.0,
    "amountSpent": 1137500.0,
    "status": "Paused",
    "description": "Blockfrost aims to decentralize its Cardano Blockchain API through the Blockfrost Platform and Blockfrost Gateway, enabling a network of Icebreakers operated by SPOs and node operators to process API requests and share revenue. All components are open-sourced to ensure transparency and avoid vendor lock-in.",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 162500.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0002-25-06",
    "projectName": "Input Output Engineering Core Development Proposal (6of6)",
    "vendor": "Input Output Engineering Core Development Proposal (6of6)",
    "totalAmount": 33664800.0,
    "amountSpent": 19518335.0,
    "status": "Paused",
    "description": "The Supplier will provide comprehensive engineering, maintenance, and development services to enhance and secure the Cardano protocol and its core infrastructure. The services are focused on delivering the community-endorsed technical roadmap and maintaining network stability. Projects included within this smart contract instance: Monthly Maintenance, Independent Audits & Security Assurance",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 2447000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 2447000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 477867.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 477867.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 477867.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-21",
        "title": "Milestone MS-21",
        "amount": 477864.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0002-25-05",
    "projectName": "Input Output Engineering Core Development Proposal (5of6)",
    "vendor": "Input Output Engineering Core Development Proposal (5of6)",
    "totalAmount": 11492000.0,
    "amountSpent": 2496000.0,
    "status": "Paused",
    "description": "The Supplier will provide comprehensive engineering, maintenance, and development services to enhance and secure the Cardano protocol and its core infrastructure. The services are focused on delivering the community-endorsed technical roadmap and maintaining network stability. Projects included within this smart contract instance: Plutus Core, Tiered Pricing Models & Transaction Monitoring System",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 540800.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 1126666.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 1126666.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-21",
        "title": "Milestone MS-21",
        "amount": 1126668.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0002-25-04",
    "projectName": "Input Output Engineering Core Development Proposal (4of6)",
    "vendor": "Input Output Engineering Core Development Proposal (4of6)",
    "totalAmount": 10816000.0,
    "amountSpent": 5678401.0,
    "status": "Paused",
    "description": "The Supplier will provide comprehensive engineering, maintenance, and development services to enhance and secure the Cardano protocol and its core infrastructure. The services are focused on delivering the community-endorsed technical roadmap and maintaining network stability. Projects included within this smart contract instance: LSM, Ledger HD, Revised Stakepool Incentives & Nested Transactions",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 450666.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 450666.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 901333.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 901333.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 901334.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 676000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 676000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 676000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 676000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 540800.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0002-25-03",
    "projectName": "Input Output Engineering Core Development Proposal (3of6)",
    "vendor": "Input Output Engineering Core Development Proposal (3of6)",
    "totalAmount": 8870001.0,
    "amountSpent": 5104715.0,
    "status": "Paused",
    "description": "The Supplier will provide comprehensive engineering, maintenance, and development services to enhance and secure the Cardano protocol and its core infrastructure. The services are focused on delivering the community-endorsed technical roadmap and maintaining network stability. Projects included within this smart contract instance: Minotaur AVS, Mithril & KES Agent",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 760000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 760000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 464750.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 193143.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 193143.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0002-25-02",
    "projectName": "Input Output Engineering Core Development Proposal (2of6)",
    "vendor": "Input Output Engineering Core Development Proposal (2of6)",
    "totalAmount": 7774000.0,
    "amountSpent": 3969084.0,
    "status": "Paused",
    "description": "The Supplier will provide comprehensive engineering, maintenance, and development services to enhance and secure the Cardano protocol and its core infrastructure. The services are focused on delivering the community-endorsed technical roadmap and maintaining network stability. Projects included within this smart contract instance: Acropolis & Hydra Development",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 289718.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 743600.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 743600.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "UTXO-EC-0002-25-01",
    "projectName": "Input Output Engineering Core Development Proposal (1of6)",
    "vendor": "Input Output Engineering Core Development Proposal (1of6)",
    "totalAmount": 24200280.0,
    "amountSpent": 13795686.0,
    "status": "Paused",
    "description": "The Supplier will provide comprehensive engineering, maintenance, and development services to enhance and secure the Cardano protocol and its core infrastructure. The services are focused on delivering the community-endorsed technical roadmap and maintaining network stability. Projects included within this smart contract instance: Automatic Formal Verification, Property Based Testing Tool, Static Analyzer & Leios",
    "milestones": [
      {
        "id": "MS-1",
        "title": "Milestone MS-1",
        "amount": 929500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 929500.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 929500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 929500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 1577333.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 1577333.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 1577334.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 518093.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 518093.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 518094.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 2366000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EX-000-02",
    "projectName": "Allowlist Fund Test",
    "vendor": "Allowlist",
    "totalAmount": 10.0,
    "amountSpent": 10.0,
    "status": "Completed",
    "description": "A test project for Allowlist guarded wallets",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 10.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EX-000-01",
    "projectName": "PSSC Fund Test 2",
    "vendor": "addr1q8rjaatvmmakqz3jek68uvlwjs4c9ckqfnl404a3yjrnrnlaepuyxvahzd69cnrvm4ssk6wj3ucy3sgtvyfxccp8mn5sfxt6e2",
    "totalAmount": 10.0,
    "amountSpent": 10.0,
    "status": "Completed",
    "description": "A test contract on the treasury withdrawal TRSC. 10ada was sent to the TRSC, this will be used to create a PSSC (a vendor contract) and will then be withdrawn by Intersect, this ada is not associated to treasury funds or treasury withdrawal governance actions.\n\nThis is the second attempt at this transaction, as the first expired before receiving all signatures.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 10.0,
        "status": "Matured",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "ER-0004b-25",
    "projectName": "Product Research (1of2)",
    "vendor": "addr1q8kmt82cgxnv4dapm8926uz50t58cy4vg0mdmcv3mdmq7e489jcdt3fvg0zfvywehy0vzvvxyzgsfkjwcnhsq62ay2fq5c6lpc",
    "totalAmount": 80000.0,
    "amountSpent": 80000.0,
    "status": "Completed",
    "description": "Milestone 1 of the first consolidated product research effort for Cardano: this project aims to deliver an\ninitial simple process, a strategy to answer and expand the questions documented in the SoW\nand a set of structured research initiatives opportunities to be allocated with funding to\nproduct researchers in Cardano.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 80000.0,
        "status": "Matured",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "ER-0004a-25",
    "projectName": "Product Committee - Local Gatherings, Business Calls, Workshops",
    "vendor": "Product Committee",
    "totalAmount": 350000.0,
    "amountSpent": 220000.0,
    "status": "Paused",
    "description": "Local Gatherings: Conduct up to 100 regional local gatherings to collect insights for 2030 cardano vision, 1 local gathering = 1,000 ada\nBusiness Calls: Conduct up to 50 calls with businesses to inform the 2030 cardano vision proposal, 1 business call = 1,000 ada\nWorkshops: Conduct up to 20 workshops run by product experts to directly collect insights to inform the 2030 cardano vision proposal or to review the proposal itself, 1 workshop = 10,000 ada",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 15000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 5000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 9000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 1000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 30000.0,
        "status": "Matured",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 30000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 30000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "ER-0003-25",
    "projectName": "PyCardano - FAIR IO, LLC",
    "vendor": "PyCardano",
    "totalAmount": 314800.0,
    "amountSpent": 186779.0,
    "status": "In Progress",
    "description": "The PyCardano maintenance project, as outlined in the proposal, is structured as a year-long service level agreement. The core objective is to ensure the library's continuous reliability, compatibility with the evolving Cardano network, and ongoing support for the developer community.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 3148.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 23089.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "ER-0002-25",
    "projectName": "OpShin - Python Smart Contracts for Cardano",
    "vendor": "OpShin",
    "totalAmount": 199911.0,
    "amountSpent": 68636.11,
    "status": "Paused",
    "description": "OpShin is a toolchain that lets developers construct Cardano smart contracts in Python. The toolchain comprises several projects that aim to facilitate the development of Smart Contracts and dApps on Cardano. They are largely based on Python, or integrate well with it for maximal accessibility. On top of accessibility, OpShin ensures low transaction cost compared to PlutusTx.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 1999.11,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 66637.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 66637.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 64637.89,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0010-25",
    "projectName": "Snek Foundation - \u20b35M Loan for Cardano's Global Listing Expansion ",
    "vendor": "Snek Foundation",
    "totalAmount": 5000000.0,
    "amountSpent": 5000000.0,
    "status": "Completed",
    "description": "The SNEK Global Exchange Expansion initiative will execute a targeted listing strategy, using the requested 5M ADA to:\n\u25cf Finalize negotiations and secure multiple top-tier listings on centralized exchanges, retail brokers, and innovative DeFi platforms\n\u25cf Provision liquidity and market making for ADA/SNEK pairs\n\u25cf Cover legal and compliance costs to meet exchange requirements\n\u25cf Fund mandatory coordination and announcement campaigns\n\u25cf Report expenditures and impact transparently to the community",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 5000000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0009-25",
    "projectName": "Anzens - Expanding Stablecoin / Cardano Native Asset Support / Fiat Ramps",
    "vendor": "Anzens",
    "totalAmount": 4000000.0,
    "amountSpent": 1400000.0,
    "status": "Paused",
    "description": "1. Driving real-world utility for USDA in cross-border payments, remittances, and enterprise settlements.\n2. Expanding wallet and custodian support for Cardano native assets (including USDA, a Cardano-native stablecoin).\n3. Increasing the availability of Cardano stablecoins and native assets on exchanges and OTC desks.\n4. Building cost-effective fiat on/off-ramps for ada and Cardano native assets in frontier markets.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 900000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 450000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 900000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 900000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 800000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0007-25",
    "projectName": "Supplyoneers FZ-LLC - Cardano Ecosystem Pavilions at Exhibitions",
    "vendor": "Supplyoneers FZ-LLC",
    "totalAmount": 889500.0,
    "amountSpent": 889500.0,
    "status": "Completed",
    "description": "We will be booking event spaces and organising the bespoke building of Pavilion stands, the funding will massively but not completely subsidise the cost for Projects in the ecosystem to have a presence at 6 exhibitions around the world.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 444750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 375000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 69750.0,
        "status": "Matured",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0006a-25&EMI-0006b-25",
    "projectName": "Flowdesk - Market Making as a service & Ecosystem Exchange Listing",
    "vendor": "Flowdesk",
    "totalAmount": 3126000.0,
    "amountSpent": 609420.0,
    "status": "Paused",
    "description": "MMAAS (Market Making as a Service):\nLiquidity Enhancement: Ensure, on a best effort basis, three Cardano Native Tokens (CNTs) achieve deeper liquidity on Centralized Exchanges (CEXs) with a minimum trading volume of $5,000, and maintain price stability within \u00b12%. Additionally, facilitate arbitrage-free token swaps on Decentralized Exchanges (DEXs) to optimize trading efficiency. \nCardano Project Agreements: Secure, on a best effort basis, contracts with three Cardano-based projects, each a $7,000/month retainer for market-making services to support liquidity and price stability.\nEcosystem Exchange Listing:\nTop-Tier Exchange Listings: Aim to list CNTs on leading CEXs as agreed by the Parties to increase visibility, accessibility, and trading volume for Cardano ecosystem tokens.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 1260.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 41580.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 41580.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 41580.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 30000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 495000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0004-25",
    "projectName": "Rainfire DAO - Cardano Builder DAO ",
    "vendor": "Rainfire DAO",
    "totalAmount": 12000000.0,
    "amountSpent": 12000000.0,
    "status": "Completed",
    "description": "The Cardano Builder DAO (CB DAO) is a smart contract-enforced, member-governed funding mechanism created to support the application-layer growth of the Cardano ecosystem",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 120000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 420000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 5790000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 5670000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0003-25",
    "projectName": "Cardano Foundation - Unveiling the First Unified Global Events Marketing Strategy for Cardano",
    "vendor": "Cardano Foundation",
    "totalAmount": 6000000.0,
    "amountSpent": 6000000.0,
    "status": "Completed",
    "description": "To revitalize Cardano's global presence and foster ecosystem growth, we aim to sponsor, host and participate in a dynamic series of events and side events in 2025 and 2026.\nThese events will target diverse audiences, including developers, enterprises, blockchain enthusiasts, and policymakers, to drive engagement, innovation, and adoption.\nExpenses incurred to provide the Services and events are included in the Fee, which may include travel and accommodation.\nEvents will be sponsored, hosted and participated in by CF, Rare Evo and Emurgo.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 5099175.67,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 900824.33,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0002-25",
    "projectName": "Cardano Foundation - Cardano Summit 2025 and regional tech events",
    "vendor": "Cardano Foundation",
    "totalAmount": 6000000.0,
    "amountSpent": 6000000.0,
    "status": "Completed",
    "description": "Subject to timely receipt of the Fees, the Supplier shall host a two day flagship Cardano summit and shall contract with various event organizers as listed in the Statement of Work for the organization of regional Cardano events over several months.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 4720000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 1280000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EMI-0001a-25",
    "projectName": "Catalyst FC - Catalyst 2025 Proposal",
    "vendor": "Catalyst FC",
    "totalAmount": 64300000.0,
    "amountSpent": 43300000.0,
    "status": "Paused",
    "description": "The Supplier will run a grants program known as Project Catalyst, which includes inviting interested parties to submit proposals as part of three funding rounds (Fund 14, Fund 15, and Fund 16). The Supplier, through its appointed administrator, will provide a platform to support the program, manage its operations and carry out all necessary activities to ensure the effective execution of the program\u2014from fund launch through to project reporting.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 41100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 1100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 1100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 21000000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EG-0002-25",
    "projectName": "Intersect MBO - A member-based organization for the Cardano ecosystem",
    "vendor": "Intersect MBO",
    "totalAmount": 15750000.0,
    "amountSpent": 11025000.0,
    "status": "Paused",
    "description": "Intersect will: \n1. Execute administrator role for proposals funded by Cardano treasury which requested\nIntersect to act as Administrator\n2. Through our members and committees provide support for Cardano\u2019s on-chain\ngovernance (for ADA Holders, DReps, SPOs and CC members)\n3. Through our members and committees facilitate proposal creation for Cardano Vision,\nRoadmap, and Budget\n4. Steward core infrastructure\na) Maintain and govern the open-source Cardano node repositories, including the Haskell codebases\nb)  Coordinate and release upgrades proposed by ecosystem contributors, ensuring safe deployment, roadmap alignment, and stakeholder readiness\nc) Provide stability and continuity across key engineering practices and upgrade cycles\n5. Provide easy participation via elected Committees and open working groups\na) Professional Coordination and support for 8 committees and 30+ working groups\nb) Provide members tooling to participate\n6. Support the emergence of new institutions like MBOs or DAOs",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 6300000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 4725000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 3150000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 1575000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EG-0001-25-02",
    "projectName": "AdaStat.net Cardano blockchain explorer (2 of 2)",
    "vendor": "addr1qyjk85v68tmpy9afm8l3k536sa98ktna5hknxlq3sdl2daall4ts4vx7py55p4whtyr3d3s5rgw7rdztv7jzqg4am7squssllz",
    "totalAmount": 59716.0,
    "amountSpent": 0.0,
    "status": "In Progress",
    "description": "We propose to continue development and support of the AdaStat.net Cardano blockchain explorer for the next 24 months. Planned work includes performance optimizations, improvements to UX/UI, and new features related to Cardano\u2019s evolving governance model and on-chain tooling (Smart Contract 1 of 2).",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 6714.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EG-0001-25",
    "projectName": "AdaStat.net Cardano blockchain explorer (1 of 2)",
    "vendor": "addr1qyjk85v68tmpy9afm8l3k536sa98ktna5hknxlq3sdl2daall4ts4vx7py55p4whtyr3d3s5rgw7rdztv7jzqg4am7squssllz",
    "totalAmount": 152284.0,
    "amountSpent": 63951.0,
    "status": "In Progress",
    "description": "We propose to continue development and support of the AdaStat.net Cardano blockchain explorer for the next 24 months. Planned work includes performance optimizations, improvements to UX/UI, and new features related to Cardano\u2019s evolving governance model and on-chain tooling (Smart Contract 1 of 2).",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 2120.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-15",
        "title": "Milestone m-15",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-16",
        "title": "Milestone m-16",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-17",
        "title": "Milestone m-17",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0023-25",
    "projectName": "NFTCDN - A free Native Asset CDN for Cardano Developers",
    "vendor": "NFTCDN",
    "totalAmount": 605000.0,
    "amountSpent": 202500.0,
    "status": "In Progress",
    "description": "Propose to deliver a free Native Asset Content Delivery Network (CDN) for Cardano, by making our existing NFTCDN services free to use for anyone building on Cardano. NFTCDN has been operating since 2022 and provides fast, reliable and resilient multimedia and metadata delivery through a globally distributed CDN, enabling projects to display native assets effortlessly.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 52500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 52500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 97500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 12500.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0022-25,EC-0015-25,ER-0005-25",
    "projectName": "MLabs- Core Tool Maintenance: Cardano.nix & Plutarch, Research towards Tooling for Elliptical Curves",
    "vendor": "addr1q86nycg8kryrkvskcdktvsup3gdmwnlk6z376rml5qfvccda0gvtkuuq7ypygj4ztfrvvemch6hd8ua42ccywcxkt4gqtznf6s",
    "totalAmount": 393042.0,
    "amountSpent": 189619.0,
    "status": "Paused",
    "description": "MLabs LTD will perform the maintenance and enhancement of Cardano.nix, a foundational toolset for building and deploying Cardano infrastructure with Nix.\nMLabs LTD will provide continuous support including maintenance releases, bug fixes, and compatibility updates for Plutarch throughout the 12-month funding period.\nThe Grumplestiltskin project is an applied research effort focused on building experimental Plutarch tooling to support parameterized elliptic curve and Galois field operations, and exploring the feasibility of zero-knowledge proof (ZKP) verification on Cardano.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 452.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 11305.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 11304.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 11304.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 10852.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 2435.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 60870.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 60870.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 60869.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 58434.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 1043.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 20670.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 20670.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 20670.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 20669.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-15",
        "title": "Milestone m-15",
        "amount": 20625.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0021-25",
    "projectName": "Vellum Labs: Developer-Focused Blockchain Explorer for Cardano",
    "vendor": "Vellum Labs",
    "totalAmount": 266667.0,
    "amountSpent": 266667.0,
    "status": "Completed",
    "description": "Cexplorer.io is already live and actively maintained by an experienced team of backend, frontend, and infrastructure developers. This proposal includes funding for ongoing maintenance, including server infrastructure, performance monitoring, bug fixes, and updates aligned with Cardano protocol changes.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 2666.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 64000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0020-25",
    "projectName": "Lantr - Scalus: DApps Development Platform",
    "vendor": "Lantr",
    "totalAmount": 657692.0,
    "amountSpent": 460384.42,
    "status": "In Progress",
    "description": "Scalus will deliver Scala 3 to the Cardano ecosystem, letting you write smart contracts, build transactions, and application layers - all with the same language and familiar tools.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 109615.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 110833.33,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 112660.35,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 127275.74,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 107788.56,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 89519.02,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0019-25",
    "projectName": "BloxBean Java Tools Maintenance and Enhancement",
    "vendor": "addr1q8jwgfgsykah9kawn7ve7lam7wrey4jery5yrn5xfuc23vhd332ffcu6l2jmzc22fym9szkejlt3cszkf53kd425gq6saxvzdt",
    "totalAmount": 99600.0,
    "amountSpent": 59760.0,
    "status": "In Progress",
    "description": "BloxBean provides several essential Java libraries and tools for building applications on Cardano. These tools\u2014CCL, Yaci, Yaci Store, and Yaci DevKit. \nUnder this Agreement, funding is allocated to support the addition of one full-time developer for a period of 12 months. The developer will focus on the following areas: Ongoing Maintenance, Feature Enhancements, Documentation and Developer Tools, Community Engagement & Support.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 19920.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 19920.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 19920.0,
        "status": "Matured",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 19920.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 19920.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0018-25",
    "projectName": "Tastenkunst GmbH - Eternl Maintenance",
    "vendor": "Tastenkunst GmbH",
    "totalAmount": 583000.0,
    "amountSpent": 345911.0,
    "status": "In Progress",
    "description": "Eternl has been a reliable and community-driven Cardano wallet since its launch in 2021 . It offers a secure, feature-rich experience across web, browser extension, iOS, and Android platforms, serving both everyday users and developers. Maintaining Eternl requires \u20ac30,000 per month. \nThis agreement enables Grantee to sustain these operational costs, ensuring Eternl continues to provide reliable access to the Cardano blockchain for the community.\n",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 5830.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 42757.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0017-25",
    "projectName": "Cooperativa de Trabajo Eryx - ZK Bridge",
    "vendor": "Cooperativa de Trabajo Eryx",
    "totalAmount": 700000.0,
    "amountSpent": 457000.0,
    "status": "In Progress",
    "description": "This Grantee will build a ZK bridge for Cardano, which Grantee will deploy on the Cardano testnet. As part of this initiative, Grantee will define a communication protocol for the bridge, provide the full source code of the smart contracts on the Cardano side, and produce comprehensive technical documentation detailing the protocol between Cardano and any other isomorphic blockchain.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 7000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 200000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 125000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 125000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 200000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 43000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0014-25",
    "projectName": "Harmonic Laboratories: Gerolamo - Cardano Node in typescript",
    "vendor": "addr1q9a80rmurvk388224szqxtdfn723yt2hmh2f3z7gkw2srczevw9gj6c93r2900smfyks6dyqayvra7hhectfuh35lhqqex327p",
    "totalAmount": 578571.0,
    "amountSpent": 483106.83,
    "status": "Paused",
    "description": "The scope of the project is to create a Cardano data node that can run in the browser. Cardano data node implies a subset of features of a full node, mainly the ability to follow the tip of the chain and update the local ledger state accordingly, while replaying to queries from the end user.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 5786.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 286392.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 190928.33,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 95464.17,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0013(6,10,4)-25",
    "projectName": "Open Source Committee - Developer Advocates Program, Committee Travel Budget, Bug Bounty",
    "vendor": "Open Source Committee",
    "totalAmount": 1010000.0,
    "amountSpent": 766000.0,
    "status": "Paused",
    "description": "Developer Advocate Program - The goal is to fund individuals to build reputation, visibility, and adoption for Cardano OS projects.\nCommittee Travel Budget - The goal is to enable OSC members to represent Cardano open source initiatives at global events, conferences, and partner summits, delivering public value back to the ecosystem.\nBug Bounty Program - The goal is to launch responsible vulnerability reporting, reward critical disclosures, and patch bugs.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 39990.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 10.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 70000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 60000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 50000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 18000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 2000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-14",
        "title": "Milestone 15",
        "amount": 34000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-15",
        "title": "Milestone 16",
        "amount": 50000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-16",
        "title": "Milestone 17",
        "amount": 50000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0013(1,2,7)-25",
    "projectName": "OSC - Maintainer Retainer, Tooling Sustainability, Security Incident Management Programs",
    "vendor": "OSC",
    "totalAmount": 3975000.0,
    "amountSpent": 840000.0,
    "status": "Paused",
    "description": "Maintainer Retainer Program - the goal is to enhance the maintainership of 25 core ecosystem projects with 50 individuals (maintainers) \u2018compensated\u2019 (this is half commitment than what was originally submitted in the budget proposal due to Budget delays and matching 1 year commonly-accepted approach).\nTooling Sustainability Program - The goal is to sustain and improve critical Cardano developer tooling by funding scoped maintenance and feature work across multiple projects. Tooling needed for Open Source Office and Open Source Committee delivery of this initiative, as required to achieve budget milestones will also be considered.\nSecurity Incident Management Program - The goal is to establish a responsive, reliable security incident coordination capability for Cardano open source projects by hiring one dedicated support staff and implementing foundational security tooling.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 500000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 300000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 300000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 100000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 100000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 75000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 200000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 165000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 50000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 200000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 200000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 500000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-14",
        "title": "Milestone 15",
        "amount": 500000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-15",
        "title": "Milestone 16",
        "amount": 460000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-16",
        "title": "Milestone 17",
        "amount": 20000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-17",
        "title": "Milestone 18",
        "amount": 20000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-18",
        "title": "Milestone 19",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-19",
        "title": "Milestone 20",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-20",
        "title": "Milestone 21",
        "amount": 100000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-21",
        "title": "Milestone 22",
        "amount": 25000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-22",
        "title": "Milestone 23",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0012-25",
    "projectName": "GO MAESTRO INC - Complete Web3 developer stack",
    "vendor": "GO MAESTRO INC",
    "totalAmount": 600000.0,
    "amountSpent": 600000.0,
    "status": "Completed",
    "description": "Maestro shall deliver a comprehensive infrastructure solution that positions Cardano as Bitcoin\u2019s primary smart contract and DeFi execution layer. Leveraging Maestro\u2019s enterprise-grade UTXO infrastructure platform, this integration will bridge Bitcoin's substantial liquidity and large user base directly into the Cardano ecosystem.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 6000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 94000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0011-25 EC-0005-25",
    "projectName": "VacuumLabs - Hardware Wallets Maintenance & Ledger App Rewrite",
    "vendor": "VacuumLabs",
    "totalAmount": 724800.0,
    "amountSpent": 362400.0,
    "status": "Paused",
    "description": "Work with Ledger team to design new UI according to the expectations. Implement a new UI into the Cardano Ledger App.\nUpdate Ledger and Trezor firmware and integration libraries with new relevant Cardano features or breaking changes. Update also if there are any breaking changes in Ledger and Trezor core firmware code, testing suites, etc.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 100000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 25000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 25000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 70800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 70800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 70800.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0009-25",
    "projectName": "zkFold ZK Rollup",
    "vendor": "addr1q8phtw2jlcwfxg8mhusvy7wuzxechtam5ehg4xqc7s8ut4r2lnqksm9q37dmlpjuyf2vp3qlarg5nrx56peqqwmme3gs9vp2d3",
    "totalAmount": 1161000.0,
    "amountSpent": 851610.0,
    "status": "In Progress",
    "description": "zkFold will develop and implement ZK rollups on Cardano to scale it efficiently, promoting broader adoption and supporting an ecosystem of decentralized applications and services.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 11610.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 180000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 170000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 170000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 160000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 160000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 160000.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 149390.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0008-25",
    "projectName": "Midgard Labs - Lucid Evolution Maintenance",
    "vendor": "Midgard Labs",
    "totalAmount": 130903.0,
    "amountSpent": 1309.03,
    "status": "Paused",
    "description": "Lucid Evolution is an open-source library designed to simplify and enhance the development of off-chain smart contract interactions on Cardano.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 1309.03,
        "status": "Matured",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 43635.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 43634.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 42324.97,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0006-25,EC-0007-25,EC-0010-25",
    "projectName": "TxPipe - Pallas, UTxO RPC, Dolos",
    "vendor": "TxPipe",
    "totalAmount": 662742.0,
    "amountSpent": 337995.42,
    "status": "In Progress",
    "description": "- Pallas (github.com/txpipe/pallas), a collection of Rust-native building blocks for the Cardano blockchain ecosystem.\n- UTxO RPC (https://utxorpc.org), an interface specification designed to simplify interactions with UTxO-based blockchains.\n- Dolos (https://dolos.txpipe.io/), a lightweight Cardano data node, designed as a backend for dApps.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone m-0",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 55228.5,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 53019.36,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 55227.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 55227.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 55230.0,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 53020.86,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 55228.5,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 53019.36,
        "status": "Active",
        "unlockDate": "",
        "description": ""
      }
    ]
  },
  {
    "id": "EC-0001-25",
    "projectName": "Midgard - Optimistic Rollups",
    "vendor": "Midgard",
    "totalAmount": 2162096.0,
    "amountSpent": 21621.0,
    "status": "Paused",
    "description": "Midgard is a modular framework for deploying optimistic rollup Layer 2s on the Cardano blockchain, designed to enhance transaction throughput, reduce costs, and enable advanced decentralized applications.",
    "milestones": [
      {
        "id": "m-0",
        "title": "Milestone 1",
        "amount": 21621.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 338725.0,
        "status": "Paused",
        "unlockDate": "",
        "description": ""
      }
    ]
  }
];