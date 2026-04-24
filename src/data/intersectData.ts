
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
        "unlockDate": "Sep 30, 2025",
        "description": "Milestone 1 - Work Package 2025 Foundational Research Mid-Year Report\r Deliverables: Mid-year report showcasing the completed foundational research outputs.",
        "evidence": {
          "title": "Milestone 1 - Work Package 2025 Foundational Research Mid-Year Report",
          "link": "https://drive.google.com/file/d/1eaGqQ9t2rP12fhnTlrawZsngFIMOGKZt/view?usp=sharing",
          "transactionHash": "f32f61ad971d4f593a8ec9e31bbb109ca15f78e0283ef588728c444f9c6b41a2",
          "transactionLink": "https://cardanoscan.io/transaction/f32f61ad971d4f593a8ec9e31bbb109ca15f78e0283ef588728c444f9c6b41a2"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 7525000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 30, 2025",
        "description": "Milestone 2 - Work Package 2025 Technology Validation Mid-Year Report\r Deliverables: Mid-year report showcasing the completed technology validation outputs.",
        "evidence": {
          "title": "Milestone 2 - Work Package 2025 Technology Validation Mid-Year Report",
          "link": "https://drive.google.com/file/d/1Sh6R3Er7eLbgN7J0938wj7d_VX44bVv9/view?usp=sharing",
          "transactionHash": "c642aca6293bf29db80351e0550bbfb4e8aeb115006d303c7f601e60a1b492dd",
          "transactionLink": "https://cardanoscan.io/transaction/c642aca6293bf29db80351e0550bbfb4e8aeb115006d303c7f601e60a1b492dd"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 5895000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "Milestone 3 - Work Package 2025 Foundational Research End-Year Report\r Deliverables: End-year report showcasing 20 foundational research outputs (streams rolling into 2026 will be highlighted with supporting explanations)",
        "evidence": {
          "title": "Milestone 3 - Work Package 2025 Foundational Research End-Year Report",
          "link": "https://drive.google.com/file/d/1rKBrua1JxJiSsghJ9ARp2_oATGGeaTC6/view?usp=sharing",
          "transactionHash": "01c41c0099e049a3994f3be7c5650fa4ed5b95ecc4e6b48a3d50032793a9c05b",
          "transactionLink": "https://cardanoscan.io/transaction/01c41c0099e049a3994f3be7c5650fa4ed5b95ecc4e6b48a3d50032793a9c05b"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 7525000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "Milestone 4 - Work Package 2025 Technology Validation End-Year Report\r Deliverables: End-year report showcasing 6 technology validation outputs (streams rolling into 2026 will be highlighted with supporting explanations)",
        "evidence": {
          "title": "Milestone 4 - Work Package 2025 Technology Validation End-Year Report",
          "link": "https://drive.google.com/file/d/1TaaI_i2Drspmsa-VkW301JlUpNAMTG5T/view?usp=sharing",
          "transactionHash": "129137932f56934891aa3ada127b0d023a22d0f677fc49bacebd99f1d416e1be",
          "transactionLink": "https://cardanoscan.io/transaction/129137932f56934891aa3ada127b0d023a22d0f677fc49bacebd99f1d416e1be"
        }
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
        "unlockDate": "Aug 06, 2025",
        "description": "Milestone 0 - Kick Off",
        "evidence": {
          "title": "Milestone 1 - WS1.1 Hermes Infrastructure - Mobilization and Development",
          "link": "https://drive.google.com/file/d/1AQ66-_TRDGL-tmxmTEKBD_AEwqv6-0d8/view?usp=sharing",
          "transactionHash": "dc3673f9aebc29369aff77d2f13a742b102ae671c1178e9db037e954b1eaa724",
          "transactionLink": "https://cardanoscan.io/transaction/dc3673f9aebc29369aff77d2f13a742b102ae671c1178e9db037e954b1eaa724"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Milestone 1 - WS1.1 Hermes Infrastructure - Mobilization and Development\r Deliverables: 1. Project Plan & Technical Design Document: Comprehensive documentation detailing the execution strategy, architecture, key development phases, and projected timelines for the entire Hermes infrastructure workstream.",
        "evidence": {
          "title": "WS1.1 Hermes Infrastructure - Mobilization and Development",
          "link": "https://drive.google.com/file/d/1AQ66-_TRDGL-tmxmTEKBD_AEwqv6-0d8/view",
          "transactionHash": "3ea451007c916b802e35d99637c009dea256e384ac6726d1ad4138c0ef8bbc45",
          "transactionLink": "https://cardanoscan.io/transaction/3ea451007c916b802e35d99637c009dea256e384ac6726d1ad4138c0ef8bbc45"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Milestone 2 - WS2.1 Catalyst Interface Stream Mobilization and Development\r Deliverables: 1. Project Delivery Plan & Roadmap: Comprehensive documentation detailing the execution strategy, key development phases, and projected timelines for the entire workstream. 2. Community Reporting Framework: Establishment and documentation of the process and channels for: A. Monthly Update townhalls & AMAs; B. Monthly Update Report; C. Quarterly Product Demo; and D. Minimum of 2 dry runs, at least 1 of which will be with selected community members before releases.",
        "evidence": {
          "title": "WS2.1 Catalyst Interface Stream Mobilization and Development",
          "link": "https://drive.google.com/file/d/1rk4xE7-wTWEgMU8YLh2uo0jCz_yYaPoX/view",
          "transactionHash": "5cedfad0f8efb614a143f02380f926dd3fa64cd26ecfaecc02ecd99f7c24a286",
          "transactionLink": "https://cardanoscan.io/transaction/5cedfad0f8efb614a143f02380f926dd3fa64cd26ecfaecc02ecd99f7c24a286"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 1031800.0,
        "status": "Paused",
        "unlockDate": "Jan 29, 2027",
        "description": "Milestone 3 - WS1.2: Hermes Infrastructure - Completion and Production Readiness\r Deliverables: 1. Fully Deployed and Operational Hermes Infrastructure: Access to the production-ready, decentralized infrastructure, demonstrably replacing the functionalities of the previous federated system. 2. Final Technical Report & Performance Metrics: A comprehensive report detailing the completed architecture, all implemented features, outcomes of stress tests, performance benchmarks, and security audit results (if applicable). 3. Complete Documentation Suite: Updated technical documentation, deployment guides, operational manuals, and API specifications (if any) for the Hermes infrastructure. 4. Cumulative Progress Reports: A consolidated record of progress reports and technical updates provided throughout the project lifecycle.",
        "evidence": null
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 1031800.0,
        "status": "Paused",
        "unlockDate": "Jan 29, 2027",
        "description": "Milestone 4 - WS2.2 Catalyst Interface Stream Completion\r Deliverables: A report detailing the completion of the Community Reporting Framework of monthly townhalls and AMAs, monthly reports, quarterly product demos, and dry runs.",
        "evidence": null
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
        "unlockDate": "Dec 31, 2025",
        "description": "Milestone 1 - Establish a Foundation for Governance Measurement \r Deliverables: Research summary on decentralized governance measurement best practices. Governance measurement framework for Cardano. Defined list of governance metrics. Structured outline for the \"State of Governance\" report.",
        "evidence": {
          "title": "Milestone 1 - Establish a Foundation for Governance Measurement",
          "link": "https://drive.google.com/file/d/1NIDbegeJIf3psScn7U8GLiQMoMWDpqMH/view",
          "transactionHash": "b59a596867122dabf632d5b39c36342e48f5048f2612d467de6246ad0eb9d100",
          "transactionLink": "https://cardanoscan.io/transaction/b59a596867122dabf632d5b39c36342e48f5048f2612d467de6246ad0eb9d100"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 145695.0,
        "status": "Withdrawn",
        "unlockDate": "Mar 23, 2026",
        "description": "Milestone 2 - Collect and Aggregate Governance Insights \r Deliverables: A set of survey questions and interview scripts tailored to DReps, SPOs, CC members, and community projects. Collected responses from at least 25 DReps, 10 SPOs, 5 CC members, 3 governance tooling & data providers, and 10 community projects. A standardized workshop template for community members to use for hosting workshops and reporting findings. Interview notes or transcripts from up to 5 community members who manage governance-related forums. A compiled dataset of aggregated on-chain and off-chain data correlated with governance behaviors. A published version of the initial \"State of Governance\" report outline, with a record of stakeholder feedback received.",
        "evidence": {
          "title": "Milestone 2 - Collect and Aggregate Governance Insights",
          "link": "https://drive.google.com/file/d/1hz2kaD0Rirq2vdM-xl8qbOC3gQVMiUyI/view",
          "transactionHash": "876ac5552364529a922de7be0b59f4766785bb43f3df74562a5bc10bf8e8e5e9",
          "transactionLink": "https://cardanoscan.io/transaction/876ac5552364529a922de7be0b59f4766785bb43f3df74562a5bc10bf8e8e5e9"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 121695.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "Milestone 3 - Analyze Data to Identify Top Governance Improvement Priorities \r Deliverables: - Baseline values for each governance metric. List of recommended tools and dashboards for governance metric monitoring. Analysis output interpreting trends and prioritizing governance improvements. Published raw survey data and related information (excluding confidential data). Draft version of the \"State of Governance\" report for stakeholder review.",
        "evidence": null
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 243695.0,
        "status": "Active",
        "unlockDate": "Jul 08, 2026",
        "description": "Milestone 4 - Develop Actionable Recommendations for Top Governance Improvements \r Deliverables: Online workshop template for solution ideation. 10 completed community workshops across multiple time zones. Published unedited minutes and findings from workshops (excluding confidential content). Initial drafts of Cardano Problem Statements (CPSs) or Cardano Improvement Proposals (CIPs) or other appropriate format based on workshop themes. Final version of the \"State of Governance\" report. Governance process playbook detailing a repeatable community consultation process.",
        "evidence": null
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
        "unlockDate": "Sep 29, 2025",
        "description": "Milestone 1 - Blockfrost platform initial release and onboarding Deliverables: 1) First release (v0.0.1) of blockfrost-platform. 2) Onboarded (NFT licenses distributed for at least 100 Icebreakers). 3) Video demonstrating the above deliverables",
        "evidence": {
          "title": "Blockfrost platform initial release and onboarding",
          "link": "https://drive.google.com/file/d/1Ne1xLMFkGnIf_HeJlnjCbKp-t7sfzhhB/view",
          "transactionHash": "6270c40668a52ef768033f94f07565564b1a177e38b048ea2ef5dfa183e7fc29",
          "transactionLink": "https://cardanoscan.io/transaction/6270c40668a52ef768033f94f07565564b1a177e38b048ea2ef5dfa183e7fc29"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Milestone 2 - Blockfrost platform Transaction submission endpoint Deliverables: 1) Transaction endpoint feature (/tx/submit). 2) Video demo of the above deliverable",
        "evidence": {
          "title": "Blockfrost platform Transaction submission endpoint",
          "link": "https://drive.google.com/file/d/1j2aZI9cpotuHEUyCHmrehvSwgOPwpD2Q/view",
          "transactionHash": "6d27369ae3fcf0a79abd383c182beac84ae436c36a9bd4c28bafd14a49d8639d",
          "transactionLink": "https://cardanoscan.io/transaction/6d27369ae3fcf0a79abd383c182beac84ae436c36a9bd4c28bafd14a49d8639d"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Milestone 3 - Blockfrost platform support for Data nodes Deliverables: 1) Introduce feature to point Blockfrost platform to a Cardano Data node of users choice 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Blockfrost platform support for Data nodes",
          "link": "https://drive.google.com/file/d/1QPU9elcUgF6CJJmql9FrzuMvj-zaz8lX/view",
          "transactionHash": "5afe9cfccb08c56ff25a638c9db72c7bd8776454b3add66436bd0b2c9755a4fb",
          "transactionLink": "https://cardanoscan.io/transaction/5afe9cfccb08c56ff25a638c9db72c7bd8776454b3add66436bd0b2c9755a4fb"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Milestone 4 - Conformance testing Deliverables: 1) Release of a code repository including tooling and tests to validate Blockfrost API 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Conformance testing",
          "link": "https://drive.google.com/file/d/1BdCu12My2TQGa7BIbjDT6ReD2zSVbHvG/view",
          "transactionHash": "12063bce80fe307d5f468b9f92b1d15143bf491f072d851e9f82fdb01e913ffc",
          "transactionLink": "https://cardanoscan.io/transaction/12063bce80fe307d5f468b9f92b1d15143bf491f072d851e9f82fdb01e913ffc"
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Milestone 5 - Blockfrost Gateway Deliverables: 1) Release of a code repository including the first release of Blockfrost Gateway 2) Video demonstrating how it is working.",
        "evidence": {
          "title": "Blockfrost Gateway",
          "link": "https://drive.google.com/file/d/1SMuFaj4Twx0h_PsrSdS7JPYHBamefxrl/view",
          "transactionHash": "1b3ad01944e0b6155834161b2e1575757d59b49c05591d48ca6ec053e70b7cc9",
          "transactionLink": "https://cardanoscan.io/transaction/1b3ad01944e0b6155834161b2e1575757d59b49c05591d48ca6ec053e70b7cc9"
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Milestone 6 - Hydra payments between Platform and Gateway Deliverables: 1) Introduce the feature of micro-payment channels between Gateway and Platform 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Milestone 6: Hydra payments between Platform and Gateway",
          "link": "https://drive.google.com/file/d/1WuY6osIEJJpFUnBGAgCDunNg0fzk7J9b/view",
          "transactionHash": "66efb0b8579563064670c25c569ed69a75a121b644abee54b5470d91ddbee827",
          "transactionLink": "https://cardanoscan.io/transaction/66efb0b8579563064670c25c569ed69a75a121b644abee54b5470d91ddbee827"
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Milestone 7 - Hydra payments between the consumer and Platform Deliverables: 1) Introduce the feature of micro-payment channels between the API consumer and Gateway. 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Milestone 7: \u200b\u200bHydra payments between the consumer and Platform ",
          "link": "https://drive.google.com/file/d/1OaEy2AyR8uTZC_4MyIYlP7pBoYO_irie/view",
          "transactionHash": "1ef6d55ceba6666b1020cf81fab144b47371d85ca9d65ece910bbf861e1ed1de",
          "transactionLink": "https://cardanoscan.io/transaction/1ef6d55ceba6666b1020cf81fab144b47371d85ca9d65ece910bbf861e1ed1de"
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 162500.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "Milestone 8 - Security audit of the existing code Deliverables: 1) Report of the audit by a 3rd party. 2) Report on assessing the findings of the above report with potential fixes introduced to the code. 3) Video overview of process above, walkthrough of both reports",
        "evidence": null
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
        "unlockDate": "Aug 30, 2025",
        "description": "MS 17.1: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.1_&_MS17.2__Milestone_Acceptance_Form.docx",
          "link": " https://drive.google.com/file/d/12KSkWFyGzatUvf8JdkdCR5vGvmLJKwRC/view?usp=drive_link",
          "transactionHash": "fe4a4aa152e1c58258ef5bd2868215a27224f4ef2f4401ee2add30e1c91835dc",
          "transactionLink": "https://cardanoscan.io/transaction/fe4a4aa152e1c58258ef5bd2868215a27224f4ef2f4401ee2add30e1c91835dc"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 30, 2025",
        "description": "MS 17.2: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.1_&_MS17.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/12KSkWFyGzatUvf8JdkdCR5vGvmLJKwRC/view?usp=drive_link",
          "transactionHash": "bf62dc2af82b601a83cab86c3935ff7ad8814c2dbf013a74369f747f93421aa0",
          "transactionLink": "https://cardanoscan.io/transaction/bf62dc2af82b601a83cab86c3935ff7ad8814c2dbf013a74369f747f93421aa0"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS 17.3: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.3__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1gnU_MxZ1jYGIXOarIWpXWB7shJzn9EVv/view?usp=drive_link",
          "transactionHash": "264c58ee3b61e9cbea423f08f672a1226071aba82acd1c4a8d1d9ca709cd8d03",
          "transactionLink": "https://cardanoscan.io/transaction/264c58ee3b61e9cbea423f08f672a1226071aba82acd1c4a8d1d9ca709cd8d03"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS 17.4: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.4__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1JBAp4iGvFOjYbHui4Vzx4jfnOix-hyky/view?usp=drive_link",
          "transactionHash": "5ef85f197af9102ff1020bfe2e3a16baeca795d4048227162e9a719f5941dba3",
          "transactionLink": "https://cardanoscan.io/transaction/5ef85f197af9102ff1020bfe2e3a16baeca795d4048227162e9a719f5941dba3"
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS 17.5: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.5__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1KXJEYHHpEu4k8Ez7wOPnbg9ldCWnG0j_/view?usp=drive_link",
          "transactionHash": "fddd3a7b2b471b9c72853c483685b8cf00c3bd96ec098086edc0783d1af1c48e",
          "transactionLink": "https://cardanoscan.io/transaction/fddd3a7b2b471b9c72853c483685b8cf00c3bd96ec098086edc0783d1af1c48e"
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS 17.6: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.6__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1NC0SkUPn_AT4vLtidscT1siO9ZFVx51Z/view",
          "transactionHash": "2a11155ed383432b28a7292ff44c448956994507ae91f4c3548b44f18ced31d5",
          "transactionLink": "https://cardanoscan.io/transaction/2a11155ed383432b28a7292ff44c448956994507ae91f4c3548b44f18ced31d5"
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 28, 2026",
        "description": "MS 17.7: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.7__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1gvSW5W0rM0RORtSfSnSz-jRE6fEojiuS/view",
          "transactionHash": "f9fe2d46d43d6919bc135df5cf7cf854ccaa857327af30a7dc8a9edade4fb82d",
          "transactionLink": "https://cardanoscan.io/transaction/f9fe2d46d43d6919bc135df5cf7cf854ccaa857327af30a7dc8a9edade4fb82d"
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 2447000.0,
        "status": "Paused",
        "unlockDate": "Mar 30, 2026",
        "description": "MS 17.8: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 2447000.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS 17.9: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "May 30, 2026",
        "description": "MS 17.10: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "Jun 30, 2026",
        "description": "MS 17.11: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "Jul 31, 2026",
        "description": "MS 17.12: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS 18.1: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.1__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1feGKUM0ZfBB0qOLzXgmXUsySRQIVKmdo/view?usp=drive_link",
          "transactionHash": "80776e1082114fecf46d943896d7c23fa0296d408bae610bd8645fe006381dea",
          "transactionLink": "https://cardanoscan.io/transaction/80776e1082114fecf46d943896d7c23fa0296d408bae610bd8645fe006381dea"
        }
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS 18.2: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.2__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1Qv21pAyX3hY8D-myLtvlEEwtpY09KFW7/view?usp=drive_link",
          "transactionHash": "930d438554961f00c2f0b8aa51229f8cb74b0c12ebfd11cb067cf1fb1bfba919",
          "transactionLink": "https://cardanoscan.io/transaction/930d438554961f00c2f0b8aa51229f8cb74b0c12ebfd11cb067cf1fb1bfba919"
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS 18.3: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.3__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1aKL6VtqWfDHQarxb9cpT3PmwMTrsCND3/view",
          "transactionHash": "8439fe50501d94d4b73581798bdcfd922995e4650ec9270a0b2a531490889e6c",
          "transactionLink": "https://cardanoscan.io/transaction/8439fe50501d94d4b73581798bdcfd922995e4650ec9270a0b2a531490889e6c"
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS 18.4: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 28, 2026",
        "description": "MS 18.5: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.5__MAF",
          "link": "https://drive.google.com/file/d/1cieTHPZQLSgStlWcPL6aRGSmQZbnc4eX/view",
          "transactionHash": "8974c5f485a2c0fa09dc34a96854b9383e249dc8a8d20a6ac2912078daf1739f",
          "transactionLink": "https://cardanoscan.io/transaction/8974c5f485a2c0fa09dc34a96854b9383e249dc8a8d20a6ac2912078daf1739f"
        }
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 477867.0,
        "status": "Paused",
        "unlockDate": "Mar 30, 2026",
        "description": "MS 18.6: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 477867.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS 18.7: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 477867.0,
        "status": "Active",
        "unlockDate": "May 30, 2026",
        "description": "MS 18.8: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-21",
        "title": "Milestone MS-21",
        "amount": 477864.0,
        "status": "Active",
        "unlockDate": "Jun 30, 2026",
        "description": "MS 18.9: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
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
        "unlockDate": "Oct 30, 2025",
        "description": "MS14.1 - Plutus Core: CIP-0132: dropList primitive\r Deliverables: The dropList primitive for Plutus",
        "evidence": {
          "title": "MS14.1,_MS14.2_&_MS14.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1DbiUel7KVndBn2wGNsSR4_zVIaxn0oFi/view?usp=drive_link",
          "transactionHash": "8134b4b08e9e506a42c6b9cb2d3ae63c1b136b05f34cf26b383cff7003158a83",
          "transactionLink": "https://cardanoscan.io/transaction/8134b4b08e9e506a42c6b9cb2d3ae63c1b136b05f34cf26b383cff7003158a83"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS14.2 - Plutus Core: CIP-0109: modexp primitive\r Deliverables: The modexp primitive for Plutus",
        "evidence": {
          "title": "MS14.1_MS14.2_&_MS14.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1DbiUel7KVndBn2wGNsSR4_zVIaxn0oFi/view?usp=drive_link",
          "transactionHash": "b8c63a6800b06cd4793d47ecca26ba2866da6a270affd2036ab91f41cdcfc47d",
          "transactionLink": "https://cardanoscan.io/transaction/b8c63a6800b06cd4793d47ecca26ba2866da6a270affd2036ab91f41cdcfc47d"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS14.3 - Plutus Core: CIP-0138: builtin arrays\r Deliverables: The built-in array type, and primitives for operating on arrays",
        "evidence": {
          "title": "MS14.1_MS14.2_&_MS14.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1DbiUel7KVndBn2wGNsSR4_zVIaxn0oFi/view?usp=drive_link",
          "transactionHash": "dcfa08e0ccbaed36554a423c6ea3d7d8146d1d151fde208a0e7ad3a9baee445a",
          "transactionLink": "https://cardanoscan.io/transaction/dcfa08e0ccbaed36554a423c6ea3d7d8146d1d151fde208a0e7ad3a9baee445a"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS14.4 - Plutus Core: CIP-0153: builtin value\r Deliverables: The built-in value type, and primitives for operating on values",
        "evidence": null
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS14.5 - Plutus Core: CIP-0133: MSM primitive\r Deliverables: The MSM primitive for Plutus",
        "evidence": {
          "title": "MS14.5,_MS14.7_&_MS14.8__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1TgbDJXE98sVQDuDd9ChTJ-1Ygsn9U4YD/view?usp=drive_link",
          "transactionHash": "2c7fd85ff092ce4fbedd47f37a5f44f196691d2e9f3188588c1b33af65a18bd1",
          "transactionLink": "https://cardanoscan.io/transaction/2c7fd85ff092ce4fbedd47f37a5f44f196691d2e9f3188588c1b33af65a18bd1"
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS14.6 - Plutus Core: CIP-0112: Observe script type\r Deliverables: A new script purpose - Observe, for Plutus V4",
        "evidence": null
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS14.7- Plutus Core: Support case analysis on builtin types\r Deliverables: Support case analysis on Bool, Integer and Data",
        "evidence": {
          "title": "MS14.5,_MS14.7_&_MS14.8__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1TgbDJXE98sVQDuDd9ChTJ-1Ygsn9U4YD/view?usp=drive_link",
          "transactionHash": "2e8dd118e8fd1c60ae2f223c1a44019cded01a41784fd915f7a1228f16827fbf",
          "transactionLink": "https://cardanoscan.io/transaction/2e8dd118e8fd1c60ae2f223c1a44019cded01a41784fd915f7a1228f16827fbf"
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS14.8 - Plutus Core: Pattern matching primitives\r Deliverables: The pattern matching primitives for Plutus. May not be worthwhile once case analysis on builtin types is implemented - to be determined.",
        "evidence": {
          "title": "MS14.5,_MS14.7_&_MS14.8__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1TgbDJXE98sVQDuDd9ChTJ-1Ygsn9U4YD/view?usp=drive_link",
          "transactionHash": "7aee5a2e2d65cae592c387fe5c6a5880a83c741890399b2d6f5ba894767b5685",
          "transactionLink": "https://cardanoscan.io/transaction/7aee5a2e2d65cae592c387fe5c6a5880a83c741890399b2d6f5ba894767b5685"
        }
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS14.9 - Plutus Core: Introduce Plutus V4 as a new Plutus ledger language version\r Deliverables: Plutus V4",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS14.10 - Plutus Core: Plinth (Plutus Tx) compiler and library enhancement \r Deliverables: (1) support inlining for recursive bindings; (2) implement new compiler optimizations targeting new language extensions (3) make the new (data-based) API more comprehensive and efficient",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS14.11 - Plutus Core: Plinth (Plutus Tx) developer tooling enhancement\r Deliverables: (1) Remove the requirement of using Nix for setup (2) Support at least two major GHC versions (3) Make the UPLC executable easier to use",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS14.12 - Plutus Core: Plutus language performance benchmark \r Deliverables: Develop a benchmark comparing the performance of various surface languages targeting UPLC, such as Plinth, Aiken, plu-ts and Plutarch.",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "Oct 30, 2026",
        "description": "MS14.13 - Plutus Core: Plinth (Plutus Tx) compiler certifier: initial release\r Deliverables: Initial release of the certifier focusing on certifying UPLC optimizations",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS15.1 - Tiered Pricing Models: Transaction Prioritization Framework\r Deliverables: Test system with initial prioritization algorithms implemented",
        "evidence": null
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS15.2 - Tiered Pricing Models: AI Congestion Prediction Service\r Deliverables: Working AI service with historical and real-time data ingestion",
        "evidence": null
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS15.3 - Tiered Pricing Models: Wallet Integration & Testnet Launch\r Deliverables: Updated wallet UI; functioning testnet environment",
        "evidence": null
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS15.4 - Tiered Pricing Models: Assured Channel Design Finalization\r Deliverables: Assured channel specification; socialized CIP draft",
        "evidence": null
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 540800.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS15.5 - Tiered Pricing Models: Cardano Problem Statement & Revised CIPs\r Deliverables: CIP document(s) covering congestion handling and assured channel logic",
        "evidence": null
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 1126666.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS16.1 - Transaction Monitoring System: State-of-the-art report\r Deliverables: Report on fraud and anomaly detection. Specification of the Backend analysis",
        "evidence": null
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 1126666.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS16.2 - Transaction Monitoring System: Alpha version of the backend\r Deliverables: Release in the open source repository. Live version on a selection of Dapps or wallets on a testnet with a rough UI",
        "evidence": null
      },
      {
        "id": "MS-21",
        "title": "Milestone MS-21",
        "amount": 1126668.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS16.3 - Transaction Monitoring System: Frontend for data visualization and alert mechanism\r Deliverables: Code available in the open source repository. Website with the new Front end visualization. Roadmap for future integration",
        "evidence": null
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
        "unlockDate": "Oct 30, 2025",
        "description": "MS10.1 - LSM: Reception and review of the LSM functionality Deliverables: Integration code submitted , Comms, tutorials, guides, support",
        "evidence": {
          "title": "MS10.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1FTynLrO48pCGbD5L9fIGnuoyMzVIkLJ/view?usp=drive_link",
          "transactionHash": "98286fb318721b56ef3e655739316bd5970099dc9fcf5b962cc2e92f5c61e214",
          "transactionLink": "https://cardanoscan.io/transaction/98286fb318721b56ef3e655739316bd5970099dc9fcf5b962cc2e92f5c61e214"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS10.2 - LSM: Integration of LSM to the Node (as a beta feature) Deliverables: Report demonstrating readiness",
        "evidence": {
          "title": "MS10.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1Ab0v7V9_DpAbH0H2vFtUjLgwBaccKwgc/view?usp=drive_link",
          "transactionHash": "4e0ee348df8e0e6b9a1d3290231c4ced2a45eedf63a7c73e7c552d032217d2ec",
          "transactionLink": "https://cardanoscan.io/transaction/4e0ee348df8e0e6b9a1d3290231c4ced2a45eedf63a7c73e7c552d032217d2ec"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS10.3 - LSM: The LSM feature integrated into the Node passing P&T and Testing Deliverables: P&T and Testing report",
        "evidence": {
          "title": "MS10.3_&_MS10.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1dyajvpZK3MgDK5QvT_REy7AoeZhuERFa/view",
          "transactionHash": "b7f7142fd0d18fe3d0c37e48793f65c07fde6be248650be7771257ab99f09ae5",
          "transactionLink": "https://cardanoscan.io/transaction/b7f7142fd0d18fe3d0c37e48793f65c07fde6be248650be7771257ab99f09ae5"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS10.4 - LSM: Releasing a Node version that includes LSM as a beta feature Deliverables: New release in cardano-node github repo",
        "evidence": {
          "title": "MS10.3_&_MS10.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1dyajvpZK3MgDK5QvT_REy7AoeZhuERFa/view",
          "transactionHash": "f967824d2b67f8477cb67e49097cd107ecab24b5f8c705c994f422c3a96f340d",
          "transactionLink": "https://cardanoscan.io/transaction/f967824d2b67f8477cb67e49097cd107ecab24b5f8c705c994f422c3a96f340d"
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 450666.0,
        "status": "Paused",
        "unlockDate": "Feb 28, 2026",
        "description": "MS10.5 - LSM: Support the beta-users, obtain feedback and release patches as needed. Deliverables: Receive feedback from community and release patches as needed",
        "evidence": null
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 450666.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS10.6 - LSM: Upgrade LSM to 1.0 Deliverables: Node version release",
        "evidence": null
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 901333.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS11.1 - Ledger HD: Identifying the different data-sets that need to be moved from Memory to Drive. Deliverables: Integration code submitted , Comms, tutorials, guides, support",
        "evidence": {
          "title": " MS11.1__Milestone_Acceptance_Form",
          "link": "https://drive.google.com/file/d/12tf8AkUcQN80GqKgCcrbJcYloSAWaOXf/view",
          "transactionHash": "33470c9f5b21b52d9f6981a7638beff91718effc48a1ab9bfbea208989223966",
          "transactionLink": "https://cardanoscan.io/transaction/33470c9f5b21b52d9f6981a7638beff91718effc48a1ab9bfbea208989223966"
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 901333.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS11.2 - Ledger HD: Moving `Reward accounts` to Drive Deliverables: Community report demonstrating readiness",
        "evidence": null
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 901334.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS11.3 - Ledger HD: Moving `InstantStake` to Drive Deliverables: Community report demonstrating readiness",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 676000.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS12.1 - Revised Stake Pool Incentive: Identify the current issues with Stakepool schemes Deliverables: Community engagement links",
        "evidence": {
          "title": "MS12.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1tcmqxNO6CSxisz-fBZ_DwK3ITaPeKAum/view?usp=drive_link",
          "transactionHash": "7eb6857bfc3d3c3681f70fdf50c651420296d5ac2ed2865e175fff9888c7f564",
          "transactionLink": "https://cardanoscan.io/transaction/7eb6857bfc3d3c3681f70fdf50c651420296d5ac2ed2865e175fff9888c7f564"
        }
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 676000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS12.2 - Revised Stake Pool Incentive: Review legacy and any new proposals Deliverables: Community engagement links",
        "evidence": {
          "title": "MS12.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1uNxTX2M4GG41cK_6MLpS-GA8HBhKA41X/view?usp=drive_link",
          "transactionHash": "840ede3d7b0e408c2a257291a5f899dd444eca75974d86a860ff28a1bdec8fe7",
          "transactionLink": "https://cardanoscan.io/transaction/840ede3d7b0e408c2a257291a5f899dd444eca75974d86a860ff28a1bdec8fe7"
        }
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 676000.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS12.3 - Revised Stake Pool Incentive: Design evaluation and estimate for build Deliverables: Demonstration report (video or blog)",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 676000.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS12.4 - Revised Stake Pool Incentive: Produce a demo/show and tell of the proposal to showcase to the community and dReps Deliverables: Demonstration report (video or blog)",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS13.1 - Nested Transactions: Preparation work Deliverables: CIP-0118 is merged. Necessary tech debt is resolved. New Dijkstra era is defined.",
        "evidence": {
          "title": "MS13.1_&_MS13.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1tnZjKkqoQvIqnxOb6HJ1e_hQ2-z9q8w5/view?usp=drive_link",
          "transactionHash": "a27b99f2c2754091e2b5f220bbba58a46ddf0d7ded8eaf936781e036c4967ec1",
          "transactionLink": "https://cardanoscan.io/transaction/a27b99f2c2754091e2b5f220bbba58a46ddf0d7ded8eaf936781e036c4967ec1"
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS13.2 - Nested Transactions: Transaction definition Deliverables: New ledger era is integrated all the way into cardano-node",
        "evidence": {
          "title": "MS13.1_&_MS13.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1tnZjKkqoQvIqnxOb6HJ1e_hQ2-z9q8w5/view?usp=drive_link",
          "transactionHash": "411c5a901604dbe97780dc3d85dc8560e1cdb2882edb85394b771ff66eecd6ab",
          "transactionLink": "https://cardanoscan.io/transaction/411c5a901604dbe97780dc3d85dc8560e1cdb2882edb85394b771ff66eecd6ab"
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS13.3 - Nested Transactions: Ledger rules Deliverables: Specification in Agda is mostly complete.",
        "evidence": {
          "title": "MS13.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1brEOY5LohTw1_gaZ2y2cnraIzvs7mVwP/view?usp=drive_link",
          "transactionHash": "b74694a479ad679517e2d5bcf39b9d3c2051f8f65790c9ad74da493ca232283b",
          "transactionLink": "https://cardanoscan.io/transaction/b74694a479ad679517e2d5bcf39b9d3c2051f8f65790c9ad74da493ca232283b"
        }
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS13.4 - Nested Transactions: Plutus Context Deliverables: Ability to execute PlutusV4 script on a testnet.",
        "evidence": null
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 540800.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS13.5 - Nested Transactions: Testing and Conformance Deliverables: cardano-node release that is fully capable of handling Nested Transactions in the new Dijkstra era",
        "evidence": null
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
        "unlockDate": "Oct 30, 2025",
        "description": "MS7.1 - Minotaur AVS: Enable SPOs to Customize Rewards\r Deliverables: Validator can set custom fees applicable to a particular network, displayed with the Validators info in the Discover Validators webUI component",
        "evidence": {
          "title": "MS7.1_&_MS7.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/122SN4470teo-sMbtn_GqeZW1lfgPmAkC/view?usp=drive_link",
          "transactionHash": "40f31f856b6235698e1be11744689c7bbaaeebe1006b4cb05cf71080549b5804",
          "transactionLink": "https://cardanoscan.io/transaction/40f31f856b6235698e1be11744689c7bbaaeebe1006b4cb05cf71080549b5804"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS7.2 - Minotaur AVS: Assured liveness of the network\r Deliverables: Tests with runtime properties. Documentation and tutorials",
        "evidence": {
          "title": "MS7.1_&_MS7.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/122SN4470teo-sMbtn_GqeZW1lfgPmAkC/view?usp=drive_link",
          "transactionHash": "f5a1bd59d060a587159b97674e5018770e510b469af60654b44b5ef5b0fdae87",
          "transactionLink": "https://cardanoscan.io/transaction/f5a1bd59d060a587159b97674e5018770e510b469af60654b44b5ef5b0fdae87"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS7.3 - Minotaur AVS: Enable and support launch of first PC (Midnight) unlocking new revenue opportunities to validators\r Deliverables: Native Token Reserve as Cardano native asset. Enable governance management on Cardano",
        "evidence": {
          "title": "MS7.3_Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1_CggpxHNy62hFV-NSi1zC3Im8KzmqnW3/view?usp=drive_link",
          "transactionHash": "370ce49124bb3b122171fa0c7c8e59aa103d38e42729b0f67a4f41073daf1eaa",
          "transactionLink": "https://cardanoscan.io/transaction/370ce49124bb3b122171fa0c7c8e59aa103d38e42729b0f67a4f41073daf1eaa"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 760000.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS7.4 - Minotaur AVS: Clear UI/UX & online presence for onboarding validators\r Deliverables: Intuitive user experience. Dedicated Web Portal to Facilitate Validator Onboarding and Partner Chain Integration",
        "evidence": null
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 760000.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS7.5 - Minotaur AVS V1 feature set release\r Deliverables: Custom Fee settings. Automatic reward distribution (for Validators and Delegators). Transparent Reward Calculations",
        "evidence": null
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS8.1 - Mithril: Decentralized Mithril Signature Diffusion - Prototype\r Deliverables: N2C mini-protocols in Mithril signer and Cardano node. DMQ side-car node",
        "evidence": {
          "title": "MS8.1,_MS8.3_&_MS8.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1goXEkBfiAWAHqRhyR1qJ8ai9_nbzg0e-/view?usp=drive_link",
          "transactionHash": "ade62fea9085759fc6cce6d0173e1fbc6606959fff058372042cd0eff321421e",
          "transactionLink": "https://cardanoscan.io/transaction/ade62fea9085759fc6cce6d0173e1fbc6606959fff058372042cd0eff321421e"
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS8.2 - Mithril: Mithril Support for UTXO HD\r Deliverables: Support for current and new in- memory ledger state. Support for on disc ledger state",
        "evidence": {
          "title": "MS8.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/10GTyyxBKVXp8lzU_J_rqK09hJHABASJh/view?usp=drive_link",
          "transactionHash": "ed32163e6dbd111b88a691fe6d43c371cc8d56d776bbebf3906af18e3bfc60b6",
          "transactionLink": "https://cardanoscan.io/transaction/ed32163e6dbd111b88a691fe6d43c371cc8d56d776bbebf3906af18e3bfc60b6"
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS8.3 - Mithril: Decentralized Mithril Signature Diffusion - Mainnet\r Deliverables: Production ready p2p network based on DMQ. Signer communication through DMQ nodes. Aggregator communication through DMQ nodes",
        "evidence": {
          "title": "MS8.1,_MS8.3_&_MS8.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1goXEkBfiAWAHqRhyR1qJ8ai9_nbzg0e-/view?usp=drive_link",
          "transactionHash": "79544875caa654f30f57630cc4e8499b07980235029b98cb9fd7d711bd6ed793",
          "transactionLink": "https://cardanoscan.io/transaction/79544875caa654f30f57630cc4e8499b07980235029b98cb9fd7d711bd6ed793"
        }
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS8.4 - Mithril: Multiple Mithril Aggregators - Mainnet\r Deliverables: Updated Mithril protocol and mainnet deployment supporting multiple aggregators. Production-grade ALBA Aggregator, documentation, and operational guidelines.",
        "evidence": {
          "title": "MS8.1,_MS8.3_&_MS8.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1goXEkBfiAWAHqRhyR1qJ8ai9_nbzg0e-/view?usp=drive_link",
          "transactionHash": "eaa12a86486049f7bad5aefe85853fea8380fa900c4494e374e6d9f61746450b",
          "transactionLink": "https://cardanoscan.io/transaction/eaa12a86486049f7bad5aefe85853fea8380fa900c4494e374e6d9f61746450b"
        }
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS8.5 - Mithril: Mithril ZK proofs - Prototype\r Deliverables: ZKP-enhanced Mithril prototype, prototype testnet reports.",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS8.6 - Mithril: Mithril/Cardano Integration\r Deliverables: Integrated codebase, binaries, integration documentation, and testnet/mainnet deployment.",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS8.7 - Mithril: Mithril ZK proofs - Mainnet\r Deliverables: ZKP-enhanced Mithril release, mainnet rollout report, and updated documentation.",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 464750.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS8.8 - Mithril: Mithril Certificates for new datatypes\r Deliverables: Updated Mithril protocol and support modules for new datatypes.",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS9.1 - KES Agent: Development of KES Agent\r Deliverables: Integration code submitted, Comms, tutorials, guides, support",
        "evidence": {
          "title": "MS9.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1b6bKm20QJDr00h3Zp8GBvXpJK264pj8G/view?usp=drive_link",
          "transactionHash": "6c3c753432ccf7b4a7c3a83c4e916b710b166f768a2afc62229dc3b9aed672af",
          "transactionLink": "https://cardanoscan.io/transaction/6c3c753432ccf7b4a7c3a83c4e916b710b166f768a2afc62229dc3b9aed672af"
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS9.2 - KES Agent: Integration of KES Agent to the Node (as a beta feature)\r Deliverables: Report demonstrating readiness",
        "evidence": {
          "title": "MS9.2_&_MS9.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1LVSVbfLcD94s2ulPQTwkYc_FUDCtYlAW/view",
          "transactionHash": "78686a6e78d4a06ec486108668972da781425ce68d6a0bc9f1cafc68b513fff3",
          "transactionLink": "https://cardanoscan.io/transaction/78686a6e78d4a06ec486108668972da781425ce68d6a0bc9f1cafc68b513fff3"
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS9.3 - KES Agent: The KES Agent integrated into the Node passing P&T and Testing\r Deliverables: P&T and Testing reports",
        "evidence": {
          "title": "MS9.3_&_MS9.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1SkShR9kiW8cvaVUlMa1KHdahwQ_LSD8s/view",
          "transactionHash": "6a3d6fa37b52cc1b94c19ebcc019fe6910b861436e0681e638c8a8743e6641d5",
          "transactionLink": "https://cardanoscan.io/transaction/6a3d6fa37b52cc1b94c19ebcc019fe6910b861436e0681e638c8a8743e6641d5"
        }
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS9.4 - KES Agent: Releasing Node version that includes the KES Agent as a beta feature\r Deliverables: New release in cardano-node github repo",
        "evidence": {
          "title": "MS9.3_&_MS9.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1SkShR9kiW8cvaVUlMa1KHdahwQ_LSD8s/view",
          "transactionHash": "b71dea5798879482b5996de48b8d169dfc31222e96a79a84b6f8ad4fac8e04dd",
          "transactionLink": "https://cardanoscan.io/transaction/b71dea5798879482b5996de48b8d169dfc31222e96a79a84b6f8ad4fac8e04dd"
        }
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS9.5 - KES Agent: passing an audit\r Deliverables: Community update on the result of the audit.",
        "evidence": {
          "title": "MS9.2_&_MS9.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1LVSVbfLcD94s2ulPQTwkYc_FUDCtYlAW/view",
          "transactionHash": "c5b3295d55c5a8c8574f344741ad1cbf9caffba980dd0c098fb61653828b9979",
          "transactionLink": "https://cardanoscan.io/transaction/c5b3295d55c5a8c8574f344741ad1cbf9caffba980dd0c098fb61653828b9979"
        }
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 193143.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS9.6 - KES Agent: Support the beta-users, obtain feedback and release patches as needed.\r Deliverables: Receive feedback from community and release patches as needed",
        "evidence": null
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 193143.0,
        "status": "Paused",
        "unlockDate": "Feb 28, 2026",
        "description": "MS9.7 - KES Agent: Upgrade the KES Agent to 1.0\r Deliverables: Node version release",
        "evidence": null
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
        "unlockDate": "Jan 30, 2026",
        "description": "MS5.1 - Acropolis: Minimal necessary tracking of governance actions, stake distribution, reward accounts to derive Stake Pool Distribution\r Deliverables:  Implementation of modules to track stake, governance and rewards and deriving Stake Pool Distribution Report validating correctness and efficiency of SPD derivation",
        "evidence": {
          "title": "MS5.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1_WH7uCuy4PCuFnv1UEumks0H4gTqrTo9/view?usp=drive_link",
          "transactionHash": "587b685c5c6a30810a51403bde9a2950ad549b22d5ff5d2fd57c49d9ebf6d595",
          "transactionLink": "https://cardanoscan.io/transaction/587b685c5c6a30810a51403bde9a2950ad549b22d5ff5d2fd57c49d9ebf6d595"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS5.2 - Acropolis: Create REST APIs for ledger state, SPD and chain information\r Deliverables:  REST API implementations with comprehensive endpoints documented in OpenAPI (Swagger) Performance and load testing report confirming API reliability and response time",
        "evidence": {
          "title": "MS5.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1_WH7uCuy4PCuFnv1UEumks0H4gTqrTo9/view?usp=drive_link",
          "transactionHash": "8a4f6e082df061853539d4b979faa0859bf3ecffe5f7a6b1b564ecd1b285a3e7",
          "transactionLink": "https://cardanoscan.io/transaction/8a4f6e082df061853539d4b979faa0859bf3ecffe5f7a6b1b564ecd1b285a3e7"
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS5.3 - Acropolis: Integrate and test with chosen application team\r Deliverables:  Integration test cases, results, and identified improvement areas documented Integration and acceptance test report confirming successful interoperability",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "d8be3d2a65005de7c5ea858994c1926c2a0fcaa5d7db6f1d5d702422ce5c83a5",
          "transactionLink": "https://cardanoscan.io/transaction/d8be3d2a65005de7c5ea858994c1926c2a0fcaa5d7db6f1d5d702422ce5c83a5"
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS5.4 - Acropolis: Block header validation\r Deliverables:  Block header validation module Test reports",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "776c217d911b6dfea9f2fa8f7343479b0fa51fd0a5abc33fd949568d2f026d9a",
          "transactionLink": "https://cardanoscan.io/transaction/776c217d911b6dfea9f2fa8f7343479b0fa51fd0a5abc33fd949568d2f026d9a"
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS5.5 - Acropolis: Ledger state validation\r Deliverables:  Upgrades to ledger state derivation modules (see MS1) to report errors Test reports",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "5deccd211e55312f69182b5b7df81fd612e1cf16faa3d46b6bec432054d61f36",
          "transactionLink": "https://cardanoscan.io/transaction/5deccd211e55312f69182b5b7df81fd612e1cf16faa3d46b6bec432054d61f36"
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS5.6 - Acropolis: Transaction validation - phase 1\r Deliverables:  Transaction Phase 1 validation module Test cases and reports",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "a544b3bfdd4a23eb673816a91245da7fd247d5329012d91ae5e3e1129aec424d",
          "transactionLink": "https://cardanoscan.io/transaction/a544b3bfdd4a23eb673816a91245da7fd247d5329012d91ae5e3e1129aec424d"
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS5.7 - Acropolis: Transaction validation - phase 2\r Deliverables:  Transaction Phase 2 validation module Test cases and reports",
        "evidence": null
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS5.8 - Acropolis: Multi-peer networking\r Deliverables:  P2P network module Chain selection / consensus module Test network infrastructure and reports",
        "evidence": null
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS5.9 - Acropolis: Chain storage\r Deliverables:  Block store module Test reports",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Jul 30, 2026",
        "description": "MS5.10 - Acropolis: ChainSync / BlockFetch server\r Deliverables:  Block server module Test reports",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Jul 30, 2026",
        "description": "MS5.11 - Acropolis: Relay node\r Deliverables:  Additional modules as required Configuration files and installation guides Live test reports from participation in preview testnet",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Oct 30, 2026",
        "description": "MS5.12 - Acropolis: Mempool & block production\r Deliverables:  Mempool and block building modules. Test reports from manually triggered & dry run block production",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "Oct 30, 2026",
        "description": "MS5.13 - Acropolis: Block producing node - testnet\r Deliverables:  KES store / agent, VRF lottery modules, upgrades to P2P for contribution. Test reports from operation on preview testnet",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 289718.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2027",
        "description": "MS5.14 - Acropolis: Block producing node - mainnet\r Deliverables:  Test reports from operation on mainnet",
        "evidence": {
          "title": "MS6.1_&_MS6.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1s5Bzt3TPuZHUzYrPOkeZweYKLisCmRBo/view?usp=drive_link",
          "transactionHash": "32610e32496770f0c3a6973b8afe21a4ca40fe5524673c5eba906cb228ac3c6f",
          "transactionLink": "https://cardanoscan.io/transaction/32610e32496770f0c3a6973b8afe21a4ca40fe5524673c5eba906cb228ac3c6f"
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS6.1 - Hydra Development: Hydra V1 feature set\r Deliverables:  Improved event sourcing; Bounded memory; production grade monitoring and operations",
        "evidence": {
          "title": "MS6.1_&_MS6.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1s5Bzt3TPuZHUzYrPOkeZweYKLisCmRBo/view?usp=drive_link",
          "transactionHash": "a9daccdddcb8ed38f7580132823ff4814b5ff3f4efddda499ea1b0b5bdcaa1cc",
          "transactionLink": "https://cardanoscan.io/transaction/a9daccdddcb8ed38f7580132823ff4814b5ff3f4efddda499ea1b0b5bdcaa1cc"
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS6.2 - Hydra Development: CNT payments across Heads\r Deliverables:  Backend that routes payments between Hydra heads; monitor and rebalance liquidity between heads",
        "evidence": {
          "title": "MS6.1_&_MS6.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1s5Bzt3TPuZHUzYrPOkeZweYKLisCmRBo/view?usp=drive_link",
          "transactionHash": "f2801856ee7cd78eb1899f1d64307613458e8eb4719c6ae11d851d83b5c7dbcc",
          "transactionLink": "https://cardanoscan.io/transaction/f2801856ee7cd78eb1899f1d64307613458e8eb4719c6ae11d851d83b5c7dbcc"
        }
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS6.3 - Hydra Development: Lightweight Hydra node\r Deliverables:  Compile to WASM; mobile/browser compatible network stack; off-chain protocol simplifications (allow being offline in 2 party head)",
        "evidence": {
          "title": "MS6.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1MWwLAKaIuBGEd9nnsggLHJJ0e_SqwwB1/view?usp=drive_link",
          "transactionHash": "6eaf1a4f32f1d1da8376fb7fed08947fc22baeb9a970beece4a52fb12613d370",
          "transactionLink": "https://cardanoscan.io/transaction/6eaf1a4f32f1d1da8376fb7fed08947fc22baeb9a970beece4a52fb12613d370"
        }
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 743600.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS6.4 - Hydra Development: Early bitcoin lightning interoperability\r Deliverables:  Backend that routes payments from hydra to lightning node; Browser application that scans a lightning invoice and converts it to a payment in a hydra head",
        "evidence": null
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 743600.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS6.5 - Hydra Development: Resolve known problems, audit, UX improvements, marketing initiatives\r Deliverables:  Partial fanout; no more known issues; no new issues unsolved by audit; updated website and docs, workshops at conferences",
        "evidence": null
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
        "unlockDate": "Oct 30, 2025",
        "description": "MS1.1 - Automatic Formal Verification: Reasoning Core\r Deliverables: Documentation of the optimization and translation rules Code for the reasoning core available on the open-source Github",
        "evidence": {
          "title": "MS1.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1hPnyySylLhBZoH68g8MpOWXsvFplxbXL/view?usp=drive_link",
          "transactionHash": "119ce023f3d1d957fb4b9c420a72fbc93211dcee1b9e8f36f8e23b7af061d6c2",
          "transactionLink": "https://cardanoscan.io/transaction/119ce023f3d1d957fb4b9c420a72fbc93211dcee1b9e8f36f8e23b7af061d6c2"
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 929500.0,
        "status": "Paused",
        "unlockDate": "Apr 30, 2026",
        "description": "MS1.2 - Automatic Formal Verification: Blockchain formalization\r Deliverables: Documentation of the operators and state transition Documentation of the ledger rules implemented Code available on the open source Github",
        "evidence": null
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 929500.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS1.3 - Automatic Formal Verification: Universal annotation language\r Deliverables: Documentation and formal spec Presentation at the UPLC 2025 Examples in the open source repository",
        "evidence": null
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 929500.0,
        "status": "Active",
        "unlockDate": "Oct 30, 2026",
        "description": "MS1.4 - Automatic Formal Verification: Plinth Bridge\r Deliverables: Code available in either the plutus repository as a compiler option or in the afv tool repository Examples in the afv tool repository with both correct properties and counter example generation",
        "evidence": {
          "title": "MS17.4__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1JBAp4iGvFOjYbHui4Vzx4jfnOix-hyky/view?usp=drive_link",
          "transactionHash": "619e2284d5e1b3883439baf42ad32578368e5fae9c4fff4cf7d60e2948d0b348",
          "transactionLink": "https://cardanoscan.io/transaction/619e2284d5e1b3883439baf42ad32578368e5fae9c4fff4cf7d60e2948d0b348"
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 1577333.0,
        "status": "Paused",
        "unlockDate": "Jan 30, 2026",
        "description": "MS2.1 - Property Based Testing Tool: Library \"tool\"\r Deliverables: Code available in open source 5 examples showcasing the tool usage and capabilities",
        "evidence": null
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 1577333.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS2.2 - Property Based Testing Tool:CLI Tool\r Deliverables: Release of the binaries in the open source repository Source code available in the open source repository",
        "evidence": null
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 1577334.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS2.3 - Property Based Testing Tool: VSCode extension\r Deliverables: Release of the source code in an open source repository Packaged of the extension for the market place",
        "evidence": null
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 518093.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS3.1 - Static Analyzer: Proof of concept\r Deliverables: Source code available in an open-source repository Tests to verify the discovery of each weaknesses Tests to verify that we only target on-chain code",
        "evidence": {
          "title": "MS3.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1klS1Z9aLja1HmrKyGQoTBlBxRPBFsT5z/view?usp=drive_link",
          "transactionHash": "4c11f98ec58d5c60a5f8f6b8d6a30cf762a53242b6bed62f9cacb15a05315d73",
          "transactionLink": "https://cardanoscan.io/transaction/4c11f98ec58d5c60a5f8f6b8d6a30cf762a53242b6bed62f9cacb15a05315d73"
        }
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 518093.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 28, 2026",
        "description": "MS3.2 - Static Analyzer: List of coding rules and antipatterns\r Deliverables: A report of all weaknesses and a classification",
        "evidence": {
          "title": "MS3.2__Milestone_Acceptance_Form",
          "link": "https://drive.google.com/file/d/1i_ytaROsj_heUBqjLOcw6jGUrD1mFZAq/view",
          "transactionHash": "c9aa801d75c0914ee1288fed3c784000e6610c80094a09324b02ef6b57f8ff89",
          "transactionLink": "https://cardanoscan.io/transaction/c9aa801d75c0914ee1288fed3c784000e6610c80094a09324b02ef6b57f8ff89"
        }
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 518094.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS3.3 - Static Analyzer: Stable release\r Deliverables: Stable release in the open source repository",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 30, 2025",
        "description": "MS4.1 - Leios: Progress report on impact analysis and technical requirements\r Deliverables: 1. Impact Analysis Report, 2. CIP Published",
        "evidence": {
          "title": "MS4.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1r8lhW4DlHrjhPzgxE6oWP2L1lAjKjd81/view?usp=drive_link",
          "transactionHash": "5ccc7c8e3e589561bba6cdceec418917756ecfd6b5724ada1739df9c3977dd7b",
          "transactionLink": "https://cardanoscan.io/transaction/5ccc7c8e3e589561bba6cdceec418917756ecfd6b5724ada1739df9c3977dd7b"
        }
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 30, 2025",
        "description": "MS4.2 - Leios: Progress report on technical design, implementation plan\r Deliverables: 1. Technical Design and Implementation Plan, 2. Cardano Blueprints updated with necessary Leios changes",
        "evidence": {
          "title": "MS4.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1OPbVFqdu0i4afaLOqpS0WdYOt6Cge2q5/view?usp=drive_link",
          "transactionHash": "e78344c2c47179947dff23e218fe68bfbeba5bc4a6ef79196743d388f995de7e",
          "transactionLink": "https://cardanoscan.io/transaction/e78344c2c47179947dff23e218fe68bfbeba5bc4a6ef79196743d388f995de7e"
        }
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 30, 2025",
        "description": "MS4.3 - Leios: Quality and performance benchmarking strategy\r Deliverables: 1. Threat Model, 2. Selected experiments or analysis of key threats and mitigations, 3. Early load test (or equivalent) in a controlled environment",
        "evidence": {
          "title": "MS4.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1yZkJfT23h2mDQ2fiSPtAwOn_vh9AWf1-/view?usp=drive_link",
          "transactionHash": "c82f3da96cb53f563da96ea680f1a3180d6305b90301c32040bdd3a6ffaa4c52",
          "transactionLink": "https://cardanoscan.io/transaction/c82f3da96cb53f563da96ea680f1a3180d6305b90301c32040bdd3a6ffaa4c52"
        }
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS4.4 - Leios: Initial code changes\r Deliverables: Code changes merged into Intersect GitHub repository",
        "evidence": {
          "title": "MS4.4_&_MS4.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1j5w9Ylc_bbUF5avdY14KxYqyM3XE_Jvp/view?usp=drive_link",
          "transactionHash": "f22f50686bd52f819d0f79fa7b3ebe5ecb2e31c98ef1b174f19dccc19f4bc5e6",
          "transactionLink": "https://cardanoscan.io/transaction/f22f50686bd52f819d0f79fa7b3ebe5ecb2e31c98ef1b174f19dccc19f4bc5e6"
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 30, 2026",
        "description": "MS4.5 - Leios: Formal specification and Conformance tests\r Deliverables: Formal specs and conformance tests documented",
        "evidence": {
          "title": "MS4.4_&_MS4.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1j5w9Ylc_bbUF5avdY14KxYqyM3XE_Jvp/view?usp=drive_link",
          "transactionHash": "ea07303b63c36810ce4aa577eda1a081243df36bf1e289fb12b0ea7caaf2396a",
          "transactionLink": "https://cardanoscan.io/transaction/ea07303b63c36810ce4aa577eda1a081243df36bf1e289fb12b0ea7caaf2396a"
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 2366000.0,
        "status": "Active",
        "unlockDate": "Jul 30, 2026",
        "description": "MS4.6 - Leios: Second phase of code changes\r Deliverables: Code changes merged into Intersect GitHub repository. Leios-enabled Cardno node usable in a public Devnet",
        "evidence": null
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
        "unlockDate": "Nov 27, 2025",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 22, 2025",
        "description": "",
        "evidence": null
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
        "unlockDate": "Oct 29, 2025",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 15000.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 5000.0,
        "status": "Active",
        "unlockDate": "Sep 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 9000.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 1000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 30000.0,
        "status": "Matured",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Committee Workshops (milestone 2 of workshop initiative)",
          "link": "https://drive.google.com/drive/folders/1sqNlButjvd7suR41odWIp6US_1gsuDr3",
          "transactionHash": "62af5e47c0715ecae27b6260d39bfb652656f7dcb6da4fa87f662c6545328255",
          "transactionLink": "https://cardanoscan.io/transaction/62af5e47c0715ecae27b6260d39bfb652656f7dcb6da4fa87f662c6545328255"
        }
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 30000.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 30000.0,
        "status": "Paused",
        "unlockDate": "Jan 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 1 - PyCardano Maintenance, Support & Impact Tracking [August 2025]",
          "link": "https://drive.google.com/file/d/1bJZi8yYDoU3h6Hm17n__vcaiSWuW5-i5/view",
          "transactionHash": "484177595366cf2985674c8672ac3b263d9cebbabdfbedd50d6b8281bb6faffd",
          "transactionLink": "https://cardanoscan.io/transaction/484177595366cf2985674c8672ac3b263d9cebbabdfbedd50d6b8281bb6faffd"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 2 - PyCardano Maintenance, Support & Impact Tracking [September 2025]",
          "link": "https://drive.google.com/file/d/1vPTGNeBscKLw-7WmHma_gJi6bNan65Wx/view?usp=drive_link",
          "transactionHash": "9eb351f913c417e90a964fe639c89c0b9674ff6963fe5a28e9daa9a88b8635fb",
          "transactionLink": "https://cardanoscan.io/transaction/9eb351f913c417e90a964fe639c89c0b9674ff6963fe5a28e9daa9a88b8635fb"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 3 - PyCardano Maintenance, Support & Impact Tracking [October 2025]",
          "link": "https://drive.google.com/file/d/1mmiiLJNLpQtejffMGjlpU6V1V38Zspui/view?usp=sharing",
          "transactionHash": "b8c263530288890d771c88b63caa94fd7d802400f7c1597b884129705fb04d39",
          "transactionLink": "https://cardanoscan.io/transaction/b8c263530288890d771c88b63caa94fd7d802400f7c1597b884129705fb04d39"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 4 - PyCardano Maintenance, Support & Impact Tracking [November 2025]",
          "link": "https://drive.google.com/file/d/1SA7pyYGvtkLB1CTedvbakU7QhCQNvikW/view?usp=sharing",
          "transactionHash": "9a379706ce1c042b68ece3dc5b06256c2a5d76a2ed3c370f0241676b3e9febd4",
          "transactionLink": "https://cardanoscan.io/transaction/9a379706ce1c042b68ece3dc5b06256c2a5d76a2ed3c370f0241676b3e9febd4"
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 5 - PyCardano Maintenance, Support & Impact Tracking [December 2025]",
          "link": "https://drive.google.com/file/d/1sYUfIHDA4d0XE7IQkHvFCoCpN3X26677/view?usp=sharing",
          "transactionHash": "30800d921866af7d2fcf0be3ba815488a5e35a8dc4ba4abe653ebe53c3a68792",
          "transactionLink": "https://cardanoscan.io/transaction/30800d921866af7d2fcf0be3ba815488a5e35a8dc4ba4abe653ebe53c3a68792"
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 6 - PyCardano Maintenance, Support & Impact Tracking [January 2026]",
          "link": "https://drive.google.com/file/d/1Ft58v3o8JhM8GObwnX_xWWNbD9R5lCnq/view?usp=sharing",
          "transactionHash": "efceae8a8998e4df317f2d538eb912fcdae258e7d773ac6104d8c8129064c4e2",
          "transactionLink": "https://cardanoscan.io/transaction/efceae8a8998e4df317f2d538eb912fcdae258e7d773ac6104d8c8129064c4e2"
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "Mar 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 7 - PyCardano Maintenance, Support & Impact Tracking [Febuary 2026]",
          "link": "https://drive.google.com/file/d/1pwmtM9k3UbCUZAVn-9ag5uDo1SjtxZL7/view?usp=sharing",
          "transactionHash": "5c88278a616a3b7718fa3a8a74f410a0ea0b390f21506b43c5e479b74318be0c",
          "transactionLink": "https://cardanoscan.io/transaction/5c88278a616a3b7718fa3a8a74f410a0ea0b390f21506b43c5e479b74318be0c"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "Apr 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 8 - PyCardano Maintenance, Support & Impact Tracking [March 2026]",
          "link": "https://drive.google.com/file/d/1U5_ZUxB0DZayjHdGnnwFIdDcZ-u9rjQL/view?usp=drive_link",
          "transactionHash": "eb64afbac502d6e74eb2eaac0a0306331dff781afc85c5bd5be2d821b164dcc7",
          "transactionLink": "https://cardanoscan.io/transaction/eb64afbac502d6e74eb2eaac0a0306331dff781afc85c5bd5be2d821b164dcc7"
        }
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 23089.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 1 Acceptance Form",
          "link": "https://drive.google.com/file/d/1mTZJu3kA4zk223g0cmvPwcQXua41iMAA/view?usp=sharing",
          "transactionHash": "455483309e666ee92824686ea514a1323fea3d6ecfe7608872ae43bf1661cc23",
          "transactionLink": "https://cardanoscan.io/transaction/455483309e666ee92824686ea514a1323fea3d6ecfe7608872ae43bf1661cc23"
        }
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 66637.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 Acceptance Form",
          "link": "https://drive.google.com/file/d/1mTZJu3kA4zk223g0cmvPwcQXua41iMAA/view?usp=sharing",
          "transactionHash": "5c57440fc9e7b2d224e8553fbe4990e276a32d2441da31a54c0e2848ff50eafa",
          "transactionLink": "https://cardanoscan.io/transaction/5c57440fc9e7b2d224e8553fbe4990e276a32d2441da31a54c0e2848ff50eafa"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 66637.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 64637.89,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Dec 10, 2025",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 900000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Anzens - Milestone 2 Acceptance Form - 2025-10-30_signed",
          "link": "https://drive.google.com/file/d/1uE0llS2x96azeLOWAOJdaGqSBJD-AZao/view?usp=drive_link",
          "transactionHash": "a8c5034608045e48c7a29b4dc5e61f38a6e75904bb523a7fe4c68a44531aac22",
          "transactionLink": "https://cardanoscan.io/transaction/a8c5034608045e48c7a29b4dc5e61f38a6e75904bb523a7fe4c68a44531aac22"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 450000.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Anzens - Milestone 3 Acceptance Form - 2026-01-30",
          "link": "https://drive.google.com/file/d/1m5AJtTOfAMwpZ2m1YNcICkj-bQ0C7__g/view?usp=sharing",
          "transactionHash": "7360576ae7bd3248f379963877caffb9ee4d3691250ef49f672eb5def7e26e17",
          "transactionLink": "https://cardanoscan.io/transaction/7360576ae7bd3248f379963877caffb9ee4d3691250ef49f672eb5def7e26e17"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 900000.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Anzens - Milestone 3 Acceptance Form - 2026-01-30_signed",
          "link": "https://drive.google.com/drive/u/1/folders/13JNc0hTJAaQHQ8ql2qj20kcMi9QN1d1B",
          "transactionHash": "ec622118600cd92c4651841f3d3fa9a57f88410a28e345fed2b1a60fefeb2547",
          "transactionLink": "https://cardanoscan.io/transaction/ec622118600cd92c4651841f3d3fa9a57f88410a28e345fed2b1a60fefeb2547"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 900000.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 800000.0,
        "status": "Active",
        "unlockDate": "Nov 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 375000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Discover Crdano Ecosystem Pavilions EMI-0007-25",
          "link": "https://drive.google.com/file/d/1b21MqL7bfK9mJ0dyPtplYcUpiCy5uiD0/view?usp=sharing",
          "transactionHash": "c87f528456692b57488b7d04c1f4053fb878537e055b4e180531b8898a5def41",
          "transactionLink": "https://cardanoscan.io/transaction/c87f528456692b57488b7d04c1f4053fb878537e055b4e180531b8898a5def41"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 69750.0,
        "status": "Matured",
        "unlockDate": "Dec 31, 2025",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 41580.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone_Acceptance_Form_-_2025_-6a_MMaaS_-Strike_Finance_v2.PDF",
          "link": "https://drive.google.com/file/d/1C4eSb8IABp3_S5xd8BGEH9hbWvAfE3IL/view",
          "transactionHash": "03a7cc20d0eaa46ee0d9d705a73340d15ace8eccb07f0c9940ad20ce730ca788",
          "transactionLink": "https://cardanoscan.io/transaction/03a7cc20d0eaa46ee0d9d705a73340d15ace8eccb07f0c9940ad20ce730ca788"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 41580.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Minswap- Market Making Service Pool",
          "link": "https://drive.google.com/file/d/1MoGz-Y59FbrFAijw0fn3a3-7BBtnMgjP/view",
          "transactionHash": "06400975adb3dbbaad29359e25a560bedd9fb227aa085b95db6384d8c3114a01",
          "transactionLink": "https://cardanoscan.io/transaction/06400975adb3dbbaad29359e25a560bedd9fb227aa085b95db6384d8c3114a01"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 41580.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 30000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 495000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "Mar 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 16, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 420000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 16, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "DAO Launch and Members Onboarded",
          "link": "https://docs.google.com/document/d/1qncozGb_DMgm3ogVczvdLAOhCiEQaLhh6W2NtMiYzdc/edit?usp=sharing",
          "transactionHash": "6e1a9a48cbe077885b672d07548897ad03a1c6066b4618f9df6c0647db3d4581",
          "transactionLink": "https://cardanoscan.io/transaction/6e1a9a48cbe077885b672d07548897ad03a1c6066b4618f9df6c0647db3d4581"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 5790000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 16, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Create Temperature checks for Governance Round 1",
          "link": "https://drive.google.com/file/d/1PTLMzzV0lxsUJiPSQtcEBL4urg0mg5x0/view?usp=sharing",
          "transactionHash": "0a4b43adaad122032d3c4273b122e6cce62339c3148d5792524ed7bf0d56f2a2",
          "transactionLink": "https://cardanoscan.io/transaction/0a4b43adaad122032d3c4273b122e6cce62339c3148d5792524ed7bf0d56f2a2"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 5670000.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 16, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Create temperature checks governance round 2 Deliverables: Live temperature checks for all eligible proposals Updated governance records reflecting participation and progression from Round 1",
          "link": "https://drive.google.com/file/d/1x66bRPDaIXk0mMU5EKwvXtLodKP_9bzL/view?usp=sharing",
          "transactionHash": "6046475721b4c392bfb29836e381a87f2f08155df00d83724d154e4d725aca1e",
          "transactionLink": "https://cardanoscan.io/transaction/6046475721b4c392bfb29836e381a87f2f08155df00d83724d154e4d725aca1e"
        }
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
        "unlockDate": "Aug 16, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 900824.33,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 2 Report ",
          "link": "https://drive.google.com/file/d/1kJgiSfntkhjK9FzCD6uIw6uk1F8wbeWD/view",
          "transactionHash": "ab4492426519fa921d9ceb475399358eea0b8843e9a2332e9dbd1cf7de882a90",
          "transactionLink": "https://cardanoscan.io/transaction/ab4492426519fa921d9ceb475399358eea0b8843e9a2332e9dbd1cf7de882a90"
        }
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 1280000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - Interim Reporting",
          "link": "https://ipfs.io/ipfs/QmbT99fZGdiKKYwGzu8vCV17VQHZCoY8USDdngNAbkTKMG",
          "transactionHash": "eeaf39d77e95263d442f32458d7c1440510b08fa2f280f7a35064d4e221183ca",
          "transactionLink": "https://cardanoscan.io/transaction/eeaf39d77e95263d442f32458d7c1440510b08fa2f280f7a35064d4e221183ca"
        }
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
        "unlockDate": "Aug 06, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Fund14 Proposal Submission Stage Closed",
          "link": "https://drive.google.com/file/d/1eUe3nTUgk9aK82MXTK_74kOHAQxvqDr4/view",
          "transactionHash": "6db20bb408c4ad1e43798d3d4891903744404d3c7d4562d91db60620b4b30734",
          "transactionLink": "https://cardanoscan.io/transaction/6db20bb408c4ad1e43798d3d4891903744404d3c7d4562d91db60620b4b30734"
        }
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 1100000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Fund14 Proposal Submission Stage Closed",
          "link": "https://drive.google.com/file/d/1eUe3nTUgk9aK82MXTK_74kOHAQxvqDr4/view",
          "transactionHash": "b4d7a78ec2c8d9c810bd1d8fe46ad11798d613e0cc763b9f7fedccbb82d97847",
          "transactionLink": "https://cardanoscan.io/transaction/b4d7a78ec2c8d9c810bd1d8fe46ad11798d613e0cc763b9f7fedccbb82d97847"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 1100000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 21000000.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Intersect - Intersect Programme Management Q3 25 Progress Report",
          "link": "https://drive.google.com/file/d/1mZch4MBO6WNH8noEPnkKcT0OqECnbEy8/view?usp=sharing",
          "transactionHash": "8a53e7c92f43556c0975320c623fb2c986111dd84735fcdb18961d4c20dfe14f",
          "transactionLink": "https://cardanoscan.io/transaction/8a53e7c92f43556c0975320c623fb2c986111dd84735fcdb18961d4c20dfe14f"
        }
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 4725000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Q4 Milestone Acceptance Form ",
          "link": "https://drive.google.com/file/d/1NlhBwATO2T-VFjfn1C69c1L8ZiLmeo_z/view?usp=sharing",
          "transactionHash": "f8791ff743742ef3fd17fdeaaa11430800ec58e0adf58f8acd0c44e5351a0c4d",
          "transactionLink": "https://cardanoscan.io/transaction/f8791ff743742ef3fd17fdeaaa11430800ec58e0adf58f8acd0c44e5351a0c4d"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 3150000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 1575000.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Feb 27, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Mar 30, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Apr 29, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "May 29, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 6714.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2027",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone Acceptance Form - August 2025",
          "link": "https://drive.google.com/file/d/1Xt9yOYL2hU6jMN8fqnDAmQ31U72h0cu4/view",
          "transactionHash": "a9ed5696fc1d91bfbbe9076707f72e2ae7fbfa75a60bde1a0dab5199bbf649e4",
          "transactionLink": "https://cardanoscan.io/transaction/a9ed5696fc1d91bfbbe9076707f72e2ae7fbfa75a60bde1a0dab5199bbf649e4"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Sep 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1S6dIxgE7Wb0h_I7TdZC1XODcCPAdq79b/view",
          "transactionHash": "e96544bf42a1f957716d8888702ed077e643239eb85c582c6ed52c0326622d2f",
          "transactionLink": "https://cardanoscan.io/transaction/e96544bf42a1f957716d8888702ed077e643239eb85c582c6ed52c0326622d2f"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Oct 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/19RvRPlE1td9LJ51wibQaxTXZEk75fmnd/view",
          "transactionHash": "0a7fc25f66aec3783c174686113dea16320511e151a609873cdd7ee176c0a4a1",
          "transactionLink": "https://cardanoscan.io/transaction/0a7fc25f66aec3783c174686113dea16320511e151a609873cdd7ee176c0a4a1"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Nov 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1UURlKkvG-iFiLVt4NAjG9Aqluiwh9Cye/view",
          "transactionHash": "145dc042092a99e209520f0de5576d527131a570dfa3f8cebde755af865c3ae2",
          "transactionLink": "https://cardanoscan.io/transaction/145dc042092a99e209520f0de5576d527131a570dfa3f8cebde755af865c3ae2"
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Dec 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1YqBQtZ-4S6qLA1m7ZChiQEukws_2ulvG/view",
          "transactionHash": "952fbc23947cb643356152e2d26fb87753533810790641527ade413df7d9229d",
          "transactionLink": "https://cardanoscan.io/transaction/952fbc23947cb643356152e2d26fb87753533810790641527ade413df7d9229d"
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Jan 2026 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1Pc3vLHBuWGAAzYiOFqHFsoKQrfGf4BKu/view",
          "transactionHash": "e0fb0c9ec844a5f86e73d22e017041232616cedea78ddd9e58ffd8879ff71177",
          "transactionLink": "https://cardanoscan.io/transaction/e0fb0c9ec844a5f86e73d22e017041232616cedea78ddd9e58ffd8879ff71177"
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "Mar 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Feb 2026 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/17II45b5HT9o-8Mgtk9anWRoXpsPEm466/view",
          "transactionHash": "f41f3908d8da1c7e4ba72ab574f5b006e2bbf7e4063e62d875e326c30271f420",
          "transactionLink": "https://cardanoscan.io/transaction/f41f3908d8da1c7e4ba72ab574f5b006e2bbf7e4063e62d875e326c30271f420"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Apr 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Mar 2026 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1JyJStmmSpQdq79gjRifGss6ywnZ4y8xU/view",
          "transactionHash": "8947b905733bc20980305d21748211b6b4c8a238372ab3cd5d252c508a844d69",
          "transactionLink": "https://cardanoscan.io/transaction/8947b905733bc20980305d21748211b6b4c8a238372ab3cd5d252c508a844d69"
        }
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Sep 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Oct 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone m-15",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "Nov 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-16",
        "title": "Milestone m-16",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Dec 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-17",
        "title": "Milestone m-17",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "Jan 29, 2027",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 21, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 52500.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 1 - NFTCDN - Milestone 2 - EC-0023-2025",
          "link": "https://drive.google.com/file/d/1JNCSf6XV15mAD7lRUoCBLaEYwAPMWbKs/view?usp=drive_link",
          "transactionHash": "fdd254277c02d7e98fd70a8138b001f41b95c3a77c601a132356e6e384877abb",
          "transactionLink": "https://cardanoscan.io/transaction/fdd254277c02d7e98fd70a8138b001f41b95c3a77c601a132356e6e384877abb"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 97500.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 14, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 2 - NFTCDN - Milestone 3 EC-0023-2025",
          "link": "https://drive.google.com/file/d/154t6U64aGBTAf3u2OmB9HWKvUFjV5MY8/view?usp=drive_link",
          "transactionHash": "a6a12456a258b5e28b8f9ca790ce623b0d75d5943d5c7fc34b2daadf4d67ea8a",
          "transactionLink": "https://cardanoscan.io/transaction/a6a12456a258b5e28b8f9ca790ce623b0d75d5943d5c7fc34b2daadf4d67ea8a"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "Apr 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 3 - NFTCDN - Milestone 4 EC-0023-2025",
          "link": "https://drive.google.com/file/d/1F3q8ThQxhTaEs4R0xzXZ7Wg-qBz3ZUOB/view?usp=sharing",
          "transactionHash": "2b9b5f035d399c52bca90e45b1fdc99e21efa64b1b66d8582498083c879b06ba",
          "transactionLink": "https://cardanoscan.io/transaction/2b9b5f035d399c52bca90e45b1fdc99e21efa64b1b66d8582498083c879b06ba"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "Oct 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "Feb 14, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 12500.0,
        "status": "Active",
        "unlockDate": "Apr 29, 2027",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 11305.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2- Quarterly dependency update (Cardano. Nix) ",
          "link": "https://drive.google.com/file/d/17bADlCKl02PUlP39v3qlkNJJ4WSBkW8n/view",
          "transactionHash": "cc142d91cb25912e6d5c1dfe1157949cd67f47314823c1c7c495280c2a01d5da",
          "transactionLink": "https://cardanoscan.io/transaction/cc142d91cb25912e6d5c1dfe1157949cd67f47314823c1c7c495280c2a01d5da"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 11304.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Quarterly Dependency Update",
          "link": "https://drive.google.com/file/d/1jcmX0_FMvNIhTKIH9XfmF4Az0wGG9JRN/view",
          "transactionHash": "ce291f36935ff550c23d1a50d9df80910346a0901fd67f495c27075e2c4b6254",
          "transactionLink": "https://cardanoscan.io/transaction/ce291f36935ff550c23d1a50d9df80910346a0901fd67f495c27075e2c4b6254"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 11304.0,
        "status": "Paused",
        "unlockDate": "Mar 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 10852.0,
        "status": "Active",
        "unlockDate": "Jun 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 2435.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 60870.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Quarterly Dependency Update (Plutarch)",
          "link": "https://drive.google.com/file/d/1jcmX0_FMvNIhTKIH9XfmF4Az0wGG9JRN/view",
          "transactionHash": "96009311ecd86d08189d11dc15056871770c3dc8653b96476d809cbec2d1785d",
          "transactionLink": "https://cardanoscan.io/transaction/96009311ecd86d08189d11dc15056871770c3dc8653b96476d809cbec2d1785d"
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 60870.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Quarterly Dependency Update (Plutarch)",
          "link": "https://drive.google.com/file/d/1jcmX0_FMvNIhTKIH9XfmF4Az0wGG9JRN/view",
          "transactionHash": "5ed349ac3897b96da6d99b54b749137b20758a15095105b2fb0ac322033b2cc8",
          "transactionLink": "https://cardanoscan.io/transaction/5ed349ac3897b96da6d99b54b749137b20758a15095105b2fb0ac322033b2cc8"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 60869.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 58434.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 1043.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 20670.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2- Galois Field operations in Plutarch",
          "link": "https://drive.google.com/file/d/1ik6PJoHqzAyoeTRoQj68B40OoSG-zRCR/view",
          "transactionHash": "d30dd5cab801fe5b2f73bd10929d07f6d1ec5e038f5ee4329fa81bed1313a711",
          "transactionLink": "https://cardanoscan.io/transaction/d30dd5cab801fe5b2f73bd10929d07f6d1ec5e038f5ee4329fa81bed1313a711"
        }
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 20670.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Elliptic Curve Operations in Plutarch",
          "link": "https://drive.google.com/file/d/1t63Ikb4JA7ZAIGTls97BwN6C4mELyNyE/view",
          "transactionHash": "01cc36a2b0b289df7c84e71c8e2952f3de052182a891ecde1a7eb096cbcb3f6c",
          "transactionLink": "https://cardanoscan.io/transaction/01cc36a2b0b289df7c84e71c8e2952f3de052182a891ecde1a7eb096cbcb3f6c"
        }
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 20670.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 20669.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone m-15",
        "amount": 20625.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/17A9aYq1gIaJ3f-AM36R_cySk8euw7IPp/view?usp=sharing",
          "transactionHash": "aea8c00948334a35916f94aa68c50d978dd3230c2a7e0d10093fe98043a405f9",
          "transactionLink": "https://cardanoscan.io/transaction/aea8c00948334a35916f94aa68c50d978dd3230c2a7e0d10093fe98043a405f9"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/16Q3CkuQImC0LLASuaPnPNa9EYRXLHLXQ/view",
          "transactionHash": "0daf99a64745e1ba2d354a37d54c37f86ec648ca2e65ea4fed619f0b2439c254",
          "transactionLink": "https://cardanoscan.io/transaction/0daf99a64745e1ba2d354a37d54c37f86ec648ca2e65ea4fed619f0b2439c254"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/1FkhTb6g37mFDQUJTRo6n2cNa8KXE7i0m/view",
          "transactionHash": "f0220079096f3468f8c0b5bba6ae740f618d17178670d802559b93a2f962e7f4",
          "transactionLink": "https://cardanoscan.io/transaction/f0220079096f3468f8c0b5bba6ae740f618d17178670d802559b93a2f962e7f4"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 64000.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/1HC_iGZHGfjSWRInO0I618Njq0Vd__Th6/view",
          "transactionHash": "13db13226d1864fca92b7d398145c8f5e89d2ceac1686e1c0df3379b9ff6b4b3",
          "transactionLink": "https://cardanoscan.io/transaction/13db13226d1864fca92b7d398145c8f5e89d2ceac1686e1c0df3379b9ff6b4b3"
        }
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 110833.33,
        "status": "Withdrawn",
        "unlockDate": "Dec 14, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Lantr - MAF - Scalus Milestone 2 - Adoption and Onboarding",
          "link": "https://drive.google.com/file/d/1ESCwxkdOrH-ne2-REIXRGZQI91_CWwam/view ",
          "transactionHash": "d0cdc89d6b76fddbcccc7700db0ce6d9a139e633b8a581196be9669f4cfe9701",
          "transactionLink": "https://cardanoscan.io/transaction/d0cdc89d6b76fddbcccc7700db0ce6d9a139e633b8a581196be9669f4cfe9701"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 112660.35,
        "status": "Withdrawn",
        "unlockDate": "Feb 14, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Lantr - MAF - Scalus Milestone 3 - Off-chain libraries",
          "link": "https://drive.google.com/file/d/1GJlWjLMWomh0rU88HqC771jXDTs-SxTo/view",
          "transactionHash": "e5e39de4966aa35c79ec312bd267801dcfea8e07d44030781f0921775afb200d",
          "transactionLink": "https://cardanoscan.io/transaction/e5e39de4966aa35c79ec312bd267801dcfea8e07d44030781f0921775afb200d"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 127275.74,
        "status": "Withdrawn",
        "unlockDate": "Mar 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Lantr - MAF - Scalus Milestone 4 - Testing capabilities",
          "link": "https://drive.google.com/file/d/1o7UiKFc-qGOXs3W084_1w4nm5GzjR8D2/view",
          "transactionHash": "558e9d5f7c0a4278ccace06df62519cde4df134abab079d0caf152bf208ea84f",
          "transactionLink": "https://cardanoscan.io/transaction/558e9d5f7c0a4278ccace06df62519cde4df134abab079d0caf152bf208ea84f"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 107788.56,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 89519.02,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 19920.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - New release and Yaci Store Scope Indexer Use Case-1",
          "link": "https://drive.google.com/file/d/1x3rkh3PcEH7M2rwpTPQ5NVx2THBg5sq3/view",
          "transactionHash": "556a4086cbbea55f581298eacbeda6f76a6b84a32249d66b8fe633f972cc727c",
          "transactionLink": "https://cardanoscan.io/transaction/556a4086cbbea55f581298eacbeda6f76a6b84a32249d66b8fe633f972cc727c"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 19920.0,
        "status": "Matured",
        "unlockDate": "Mar 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - New Release and Cardano Client Lib tutorials",
          "link": "https://drive.google.com/file/d/14Bw9SK_PLRNXASxvCaY1Rf1uEt8mjo80/view?usp=sharing",
          "transactionHash": "83af7fac77332692238f915575e46b49fec1829848cab1416624f3531641feb3",
          "transactionLink": "https://cardanoscan.io/transaction/83af7fac77332692238f915575e46b49fec1829848cab1416624f3531641feb3"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 19920.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 19920.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - EM08/25",
          "link": "https://drive.google.com/file/d/1L-teiCMro7gf77R59gNGUE4oORzVH4vT/view?usp=sharing",
          "transactionHash": "24e7c271ec879e6423a640756ce0536f0b0ef811520ca727e91e34d80a350ad3",
          "transactionLink": "https://cardanoscan.io/transaction/24e7c271ec879e6423a640756ce0536f0b0ef811520ca727e91e34d80a350ad3"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - EM09/25",
          "link": "https://drive.google.com/file/d/1P1Fn_svDBkSbUlGs-4gtq9C-GdA8sO6w/view",
          "transactionHash": "e5a272230f5362f104c7e056557e105452b259a19bcb34888a70b5813d126243",
          "transactionLink": "https://cardanoscan.io/transaction/e5a272230f5362f104c7e056557e105452b259a19bcb34888a70b5813d126243"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 - EM10/25",
          "link": "https://drive.google.com/file/d/1WzpdSebWN5dpA074qkAeggQER5bt26T2/view?usp=sharing ",
          "transactionHash": "d9042b5ae794d8a4ebac2e04ad4d1576f527e483439bb75f1f80863b51ddcc23",
          "transactionLink": "https://cardanoscan.io/transaction/d9042b5ae794d8a4ebac2e04ad4d1576f527e483439bb75f1f80863b51ddcc23"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 5 - EM11/25",
          "link": "https://drive.google.com/file/d/1s5h5AkR-WzMWE3GPjNgkL6iIfqAi9qV_/view",
          "transactionHash": "182b8f195bb8bcf3457fb26c94b0f19a0319a784e4a778a77da9bf60c646818e",
          "transactionLink": "https://cardanoscan.io/transaction/182b8f195bb8bcf3457fb26c94b0f19a0319a784e4a778a77da9bf60c646818e"
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 6 - EM12/25",
          "link": "https://drive.google.com/file/d/12sGQeOzaIn2QYrFSwhdqFlMOuSYs1R6m/view?usp=sharing",
          "transactionHash": "41ce449bb16da5d6242f356fe90a39f287b551484b471739c51d9c206da1cf3d",
          "transactionLink": "https://cardanoscan.io/transaction/41ce449bb16da5d6242f356fe90a39f287b551484b471739c51d9c206da1cf3d"
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 7 - EM01/26",
          "link": "https://drive.google.com/file/d/1MnAULT4PcCD4cOCNQhI5klIPDfMKoZZA/view?usp=sharing ",
          "transactionHash": "5e1808775c22d8400704142031ee9ed69ce2d9eaf0c36b08f8eda9cbfbcc537e",
          "transactionLink": "https://cardanoscan.io/transaction/5e1808775c22d8400704142031ee9ed69ce2d9eaf0c36b08f8eda9cbfbcc537e"
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "Mar 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 8 - EM02/26",
          "link": "https://drive.google.com/file/d/18147wACQrWD0zU3N1McbACrlKg807UdZ/view",
          "transactionHash": "b3f6255f2b531ae85e4e876a625875cf3dc90527ad5d0325c349173d01e3ceee",
          "transactionLink": "https://cardanoscan.io/transaction/b3f6255f2b531ae85e4e876a625875cf3dc90527ad5d0325c349173d01e3ceee"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "Apr 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 9 - EM03/26",
          "link": "https://drive.google.com/file/d/1pm8zBIJMGNLIYcUsdwY-TT9vVKzpV6B8/view",
          "transactionHash": "d8e0c729dba61e44993a2b60f3654ad6b4b3baa78eac7f65b9fb1edf4ce58afe",
          "transactionLink": "https://cardanoscan.io/transaction/d8e0c729dba61e44993a2b60f3654ad6b4b3baa78eac7f65b9fb1edf4ce58afe"
        }
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 42757.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 200000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Documentation of the communication protocol",
          "link": "https://drive.google.com/file/d/1KcsbA2dhm92ZGBrXeDtIu-eFKqaSZm3n/view",
          "transactionHash": "4b2dc0b6fb1c6861f7f58775ea3f764984ffb03bf1c464db84f4819b0f3ef7e3",
          "transactionLink": "https://cardanoscan.io/transaction/4b2dc0b6fb1c6861f7f58775ea3f764984ffb03bf1c464db84f4819b0f3ef7e3"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 125000.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Bridge smart contract in Aiken for locking funds in the Cardano side",
          "link": "https://drive.google.com/file/d/15b8H-mxo_4rT9N_d0elFfhXPHZfT3Iz3/view",
          "transactionHash": "5a42a6193552328dff546c512657344d84ae4eb7f7d5c86ed11c2b004aba0c62",
          "transactionLink": "https://cardanoscan.io/transaction/5a42a6193552328dff546c512657344d84ae4eb7f7d5c86ed11c2b004aba0c62"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 125000.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Bridge smart contracts in Aiken for minting wrapped assets.",
          "link": "https://drive.google.com/file/d/1KxWWEsBGRrOQDWdBsKcMD1bqVq6DZV0k/view?usp=sharing",
          "transactionHash": "2d0a90266b78b7c7d18e253a45663d3147a5456639bc5e5b7117e32bea32cdca",
          "transactionLink": "https://cardanoscan.io/transaction/2d0a90266b78b7c7d18e253a45663d3147a5456639bc5e5b7117e32bea32cdca"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 200000.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 43000.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 286392.5,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Gerolamo executable",
          "link": "https://drive.google.com/file/d/1uTLNWby2GNK8qYhfq-8eTYQ3yXwAvs1w/view",
          "transactionHash": "1ef7a0542a6c18e69991277689d25056943b4f3a26917783fca8af9e1534d68b",
          "transactionLink": "https://cardanoscan.io/transaction/1ef7a0542a6c18e69991277689d25056943b4f3a26917783fca8af9e1534d68b"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 190928.33,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "https://drive.google.com/file/d/1g9H8etSUZ3jxEETLq_PS1UahMx30tbWg/view",
          "link": "https://drive.google.com/file/d/1g9H8etSUZ3jxEETLq_PS1UahMx30tbWg/view",
          "transactionHash": "be43513af2eb73dfdb4a86c9168501315ddfd263b62e04650b68a2fef6e9477e",
          "transactionLink": "https://cardanoscan.io/transaction/be43513af2eb73dfdb4a86c9168501315ddfd263b62e04650b68a2fef6e9477e"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 95464.17,
        "status": "Paused",
        "unlockDate": "Mar 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "M2 - Developer Advocates",
          "link": "https://drive.google.com/file/d/1uvEAxpi4F4VRqFC7Wdl_Kt4_Z3TtU-JA/view",
          "transactionHash": "88c540151c1d2296e156c292b494e41574b6229de854233f9eff8e4212dadc47",
          "transactionLink": "https://cardanoscan.io/transaction/88c540151c1d2296e156c292b494e41574b6229de854233f9eff8e4212dadc47"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "M3 - Developer Advocates",
          "link": "https://drive.google.com/file/d/1jv9ki-DD-NLro3UPlX3FQxZuvwtNhkuD/view",
          "transactionHash": "ffdd943ec4a11e2a3c865b146ebc167fb1a1418ad7e6bbd7d069ff54be0a23f8",
          "transactionLink": "https://cardanoscan.io/transaction/ffdd943ec4a11e2a3c865b146ebc167fb1a1418ad7e6bbd7d069ff54be0a23f8"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 39990.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 10.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 70000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "M8 - Travel",
          "link": "https://drive.google.com/file/d/11vFTWSPque3NjnLhfC1RL6qJKkxJhAam/view",
          "transactionHash": "3288a835ce8b1adab515cc1aa6771e6db9c7cb2490fe37f7b578a89f37ae64a1",
          "transactionLink": "https://cardanoscan.io/transaction/3288a835ce8b1adab515cc1aa6771e6db9c7cb2490fe37f7b578a89f37ae64a1"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 60000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Open Source Committee Travel Budget - Q1 Events",
          "link": "https://drive.google.com/file/d/1Voy66eSyWQ4vCqaGFjMR-o8C-BIc8wRJ/view",
          "transactionHash": "3ad4fd02801f63d6705a5a44276b0180f1040397d67270109bff3fd7d34602ae",
          "transactionLink": "https://cardanoscan.io/transaction/3ad4fd02801f63d6705a5a44276b0180f1040397d67270109bff3fd7d34602ae"
        }
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 50000.0,
        "status": "Paused",
        "unlockDate": "Mar 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 18000.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 2000.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 14, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "4.2 - TxPipe GitHoney Build Contract",
          "link": "https://drive.google.com/file/d/1NLaam0tQS9YkElfK19OZ1H6XqunHAFRx/view",
          "transactionHash": "463e2143c97d986740c47390d60fa13cb1ed9d8ec8889e2f43303b87d0f262ad",
          "transactionLink": "https://cardanoscan.io/transaction/463e2143c97d986740c47390d60fa13cb1ed9d8ec8889e2f43303b87d0f262ad"
        }
      },
      {
        "id": "m-14",
        "title": "Milestone 15",
        "amount": 34000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone 16",
        "amount": 50000.0,
        "status": "Paused",
        "unlockDate": "Mar 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-16",
        "title": "Milestone 17",
        "amount": 50000.0,
        "status": "Active",
        "unlockDate": "Nov 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 10, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 1.1 - Upfront Maintainer Retainer funding",
          "link": "https://drive.google.com/file/d/1ZT88kT29O48EUzT0zkH-DT-LEq-C8cRj/view?usp=sharing",
          "transactionHash": "6e320bb4ac24814e67df67f49a0e6b7b4eca9f48666c77ac977f0960fbbb5e13",
          "transactionLink": "https://cardanoscan.io/transaction/6e320bb4ac24814e67df67f49a0e6b7b4eca9f48666c77ac977f0960fbbb5e13"
        }
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 300000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Maintainer Retainer Program - Onboarding",
          "link": "https://drive.google.com/file/d/1c16UHE6MAPywxzdKEarnamEQOur-GvAi/view",
          "transactionHash": "68f0cea150be63db0c599d072fd94a4fe4ca002811f9b1744188035dbf094464",
          "transactionLink": "https://cardanoscan.io/transaction/68f0cea150be63db0c599d072fd94a4fe4ca002811f9b1744188035dbf094464"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 300000.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 100000.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 100000.0,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 75000.0,
        "status": "Active",
        "unlockDate": "Oct 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 200000.0,
        "status": "Active",
        "unlockDate": "Oct 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 165000.0,
        "status": "Active",
        "unlockDate": "Dec 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 50000.0,
        "status": "Active",
        "unlockDate": "Jan 29, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "Jan 29, 2027",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 10, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 200000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 14, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "2.2 - Scoping",
          "link": "https://drive.google.com/file/d/1mLqz1syVJZLmN-viu2bezrATJSFSp6ll/view?usp=sharing",
          "transactionHash": "22fc23a52f91472255de7c3b650160fb5508293c0b6f7c0aa88832d541d77f9f",
          "transactionLink": "https://cardanoscan.io/transaction/22fc23a52f91472255de7c3b650160fb5508293c0b6f7c0aa88832d541d77f9f"
        }
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 200000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 500000.0,
        "status": "Paused",
        "unlockDate": "Mar 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone 15",
        "amount": 500000.0,
        "status": "Active",
        "unlockDate": "May 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone 16",
        "amount": 460000.0,
        "status": "Active",
        "unlockDate": "Jul 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-16",
        "title": "Milestone 17",
        "amount": 20000.0,
        "status": "Active",
        "unlockDate": "Sep 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-17",
        "title": "Milestone 18",
        "amount": 20000.0,
        "status": "Active",
        "unlockDate": "Nov 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-18",
        "title": "Milestone 19",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 10, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-19",
        "title": "Milestone 20",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 14, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "7.2 - Role Advertising",
          "link": "https://drive.google.com/file/d/1CufR0nvLnVRcJgjOmZmV-EYXh8K_kmft/view?usp=sharing",
          "transactionHash": "e2bacc88c76a7a0c143f187c1cb48d233733fab71faab017e02965ddb08cc06e",
          "transactionLink": "https://cardanoscan.io/transaction/e2bacc88c76a7a0c143f187c1cb48d233733fab71faab017e02965ddb08cc06e"
        }
      },
      {
        "id": "m-20",
        "title": "Milestone 21",
        "amount": 100000.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-21",
        "title": "Milestone 22",
        "amount": 25000.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-22",
        "title": "Milestone 23",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "Jan 29, 2027",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 Acceptance Form",
          "link": "https://drive.google.com/drive/folders/1T8w-MGLd7koVrRx0UMifB3mLpyR8lZNZ?usp=sharing",
          "transactionHash": "d1d9baf27c322ac9f905ea0886fe0b477622d2012934acca7448a2f2b0508cde",
          "transactionLink": "https://cardanoscan.io/transaction/d1d9baf27c322ac9f905ea0886fe0b477622d2012934acca7448a2f2b0508cde"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Mempool Monitoring API",
          "link": "https://drive.google.com/file/d/1bVA3xtuKTFLq44XcNFdk9Lrf3Z7neLMk/view?usp=sharing",
          "transactionHash": "b381d398c31a95c3a7a569789d2507a43d30a0b0f107be34c648f2e66abb5122",
          "transactionLink": "https://cardanoscan.io/transaction/b381d398c31a95c3a7a569789d2507a43d30a0b0f107be34c648f2e66abb5122"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 - Event Notification API",
          "link": "https://drive.google.com/file/d/1qjKfL3IVj5jn5WO1x1kFhqHHdyUUvaVK/view?usp=sharing",
          "transactionHash": "854063e313b57f88bb370db4fc6ed7babcaaef5b56396c2e2c0f7d4212b076b5",
          "transactionLink": "https://cardanoscan.io/transaction/854063e313b57f88bb370db4fc6ed7babcaaef5b56396c2e2c0f7d4212b076b5"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 5 - Wallet API",
          "link": "https://drive.google.com/file/d/1b38He1ZBEs4to30UMTztxqzpGlYDzB7D/view?usp=sharing",
          "transactionHash": "20895cf2be525b6e2943ac4d9c20ca57c8e02055acf41aa1bdf2e6fc0801ec54",
          "transactionLink": "https://cardanoscan.io/transaction/20895cf2be525b6e2943ac4d9c20ca57c8e02055acf41aa1bdf2e6fc0801ec54"
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 6 - Market Price API",
          "link": "https://drive.google.com/file/d/1-b7vlnXRcETnnL8YRJg1GoxzCkzrWhOM/view?usp=sharing",
          "transactionHash": "97b398d281f8dfd12fd70a887de7ead7332f73fec5ea4bc099da94666434fcba",
          "transactionLink": "https://cardanoscan.io/transaction/97b398d281f8dfd12fd70a887de7ead7332f73fec5ea4bc099da94666434fcba"
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 94000.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 14, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/1H6hgQJjhyP75dsbDVAAx3aIJz7bu_8-5/view",
          "transactionHash": "b68fef4cc955c66666aba259671264e915f50c66b2f216ab5dc993eb33a0a555",
          "transactionLink": "https://cardanoscan.io/transaction/b68fef4cc955c66666aba259671264e915f50c66b2f216ab5dc993eb33a0a555"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 100000.0,
        "status": "Paused",
        "unlockDate": "Jan 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 25000.0,
        "status": "Paused",
        "unlockDate": "Feb 14, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 25000.0,
        "status": "Paused",
        "unlockDate": "Mar 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Maintenance report",
          "link": "https://drive.google.com/file/d/1lqOryXw3vt51bTb3obOWyFu8vOT9_8SS/view?usp=sharing",
          "transactionHash": "bce9a29f71a4e9cbf510adfe5036866d38614ac3a88f6ca051c28c4c174ee109",
          "transactionLink": "https://cardanoscan.io/transaction/bce9a29f71a4e9cbf510adfe5036866d38614ac3a88f6ca051c28c4c174ee109"
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "Dec 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone acceptance form + maintenance report",
          "link": "https://drive.google.com/file/d/1qbPhURhQ5SehF4rN5YJ52y6fJysacjLi/view?usp=drive_link",
          "transactionHash": "ef43761347a3f8bd72017d87d784fe657d359ea7655ea74db73031cb1b06d1ab",
          "transactionLink": "https://cardanoscan.io/transaction/ef43761347a3f8bd72017d87d784fe657d359ea7655ea74db73031cb1b06d1ab"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 70800.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 70800.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 70800.0,
        "status": "Active",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 180000.0,
        "status": "Withdrawn",
        "unlockDate": "Sep 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - Documentation",
          "link": "https://drive.google.com/file/d/1CqBIIxYyOo1OrsShUrEDj3Gfb6fT_7u_/view?usp=drive_link",
          "transactionHash": "c98ca847fb3be8347cb2305068944b6a034499ca257662f12d5e6add5dc98d3d",
          "transactionLink": "https://cardanoscan.io/transaction/c98ca847fb3be8347cb2305068944b6a034499ca257662f12d5e6add5dc98d3d"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 170000.0,
        "status": "Withdrawn",
        "unlockDate": "Oct 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Rollup validation logic",
          "link": "https://drive.google.com/file/d/1UzAmU_3k6ePHQ9tpMQosTHPpFr2ljlTt/view?usp=sharing",
          "transactionHash": "a365dcb6f9a46fa398300425c0411e6dea6f4538cf1574e5c143f386dd72805a",
          "transactionLink": "https://cardanoscan.io/transaction/a365dcb6f9a46fa398300425c0411e6dea6f4538cf1574e5c143f386dd72805a"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 170000.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 - Transaction building logic",
          "link": "https://drive.google.com/file/d/12M3sWO4c7ud6YfWJDqw-X8C_rKmV7Idg/view?usp=sharing",
          "transactionHash": "f076da798b0ea2bd0dc17b231a2c4b022c5a4654aee860eaebdf8e8adcdf69c6",
          "transactionLink": "https://cardanoscan.io/transaction/f076da798b0ea2bd0dc17b231a2c4b022c5a4654aee860eaebdf8e8adcdf69c6"
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 160000.0,
        "status": "Withdrawn",
        "unlockDate": "Jan 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 5 - Rollup data and update transactions on Cardano",
          "link": "https://drive.google.com/file/d/1cztCZmnPWniky_Qgs0Gei_mfUN3mK1fv/view",
          "transactionHash": "422aa7fdac2d5bd4ca937baa7c8efbdaf65cb2ab95586b1fe39c90fca7a5bd7b",
          "transactionLink": "https://cardanoscan.io/transaction/422aa7fdac2d5bd4ca937baa7c8efbdaf65cb2ab95586b1fe39c90fca7a5bd7b"
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 160000.0,
        "status": "Withdrawn",
        "unlockDate": "Mar 29, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 6 - Transaction aggregation",
          "link": "https://drive.google.com/file/d/1rND3JaXXlduAInpbls_sY_QZvFnxlr6L/view?usp=drive_link",
          "transactionHash": "a0c85f08db84af661b631cf4529ba6e9ec465fc4494fb6f8742b9905a7828ae9",
          "transactionLink": "https://cardanoscan.io/transaction/a0c85f08db84af661b631cf4529ba6e9ec465fc4494fb6f8742b9905a7828ae9"
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 160000.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 149390.0,
        "status": "Active",
        "unlockDate": "Jul 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 43635.0,
        "status": "Paused",
        "unlockDate": "Jan 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 43634.0,
        "status": "Paused",
        "unlockDate": "Mar 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 42324.97,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 \u2013 Pallas maintenance and enhancement Q1",
          "link": "https://drive.google.com/file/d/1LZPOhCzadVRGJRuYb4NH8CGY9Udcbbrr/view",
          "transactionHash": "21e9ed8ef408939498a8baba8dff1d372acc221c6b3919e937c4796126abc0a9",
          "transactionLink": "https://cardanoscan.io/transaction/21e9ed8ef408939498a8baba8dff1d372acc221c6b3919e937c4796126abc0a9"
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Pallas maintenance and enhancement Q2",
          "link": "https://drive.google.com/file/d/1R68re-nMisGBon0dDH-wqsNaBb3sBTSi/view?usp=sharing",
          "transactionHash": "de3da75cf8956d280ce742aa319ea97914a0fc2120f9009c69b72d45aa0cffa0",
          "transactionLink": "https://cardanoscan.io/transaction/de3da75cf8956d280ce742aa319ea97914a0fc2120f9009c69b72d45aa0cffa0"
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 55228.5,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 53019.36,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 55227.0,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - UTxO RPC maintenance and enhancement Q1",
          "link": "https://drive.google.com/file/d/12ppMOZOEudd7Rglg6-UeuBNdfL89bkxT/view?authuser=1",
          "transactionHash": "6b645f07c1469a904b4c7c7d017da3330e7b5f214aa666dd4e0bf08d190d70d0",
          "transactionLink": "https://cardanoscan.io/transaction/6b645f07c1469a904b4c7c7d017da3330e7b5f214aa666dd4e0bf08d190d70d0"
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 55227.0,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - UTxO RPC maintenance and enhancement Q2",
          "link": "https://drive.google.com/file/d/19FTAHQrvJy74xvMO5HdUmJnObNi8_Ye5/view",
          "transactionHash": "c87ddba47095786885e24cc81cb0a248a21398eaba7f9c141b0afc4f1a7e5861",
          "transactionLink": "https://cardanoscan.io/transaction/c87ddba47095786885e24cc81cb0a248a21398eaba7f9c141b0afc4f1a7e5861"
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 55230.0,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 53020.86,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "Aug 11, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "Nov 29, 2025",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 \u2013 Dolos maintenance and enhancement Q1",
          "link": "https://drive.google.com/file/d/1OUA5awgcnHMp2AXLNmTTATQ1d92b5e6I/view",
          "transactionHash": "734bedf762ee027191b95b78c3aa771a1e3070bcbc2f35e65775254b3c7e1e95",
          "transactionLink": "https://cardanoscan.io/transaction/734bedf762ee027191b95b78c3aa771a1e3070bcbc2f35e65775254b3c7e1e95"
        }
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "Feb 27, 2026",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Dolos maintenance and enhancement Q2",
          "link": "https://drive.google.com/file/d/1Zo8_g5g2UB-wbcHg1FgAyV8SPGlVAj7v/view",
          "transactionHash": "8f2ca40866c9af3976bce24914330ce9ab0e7e58b4ea119ccc3fdc7a8490cfae",
          "transactionLink": "https://cardanoscan.io/transaction/8f2ca40866c9af3976bce24914330ce9ab0e7e58b4ea119ccc3fdc7a8490cfae"
        }
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 55228.5,
        "status": "Active",
        "unlockDate": "May 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 53019.36,
        "status": "Active",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
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
        "unlockDate": "Jul 31, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "Oct 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "Dec 29, 2025",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "Feb 27, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "Apr 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "Jun 29, 2026",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 338725.0,
        "status": "Paused",
        "unlockDate": "Aug 29, 2026",
        "description": "",
        "evidence": null
      }
    ]
  }
];