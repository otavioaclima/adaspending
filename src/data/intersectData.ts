
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
        "description": "Milestone 1 - Work Package 2025 Foundational Research Mid-Year Report\r Deliverables: Mid-year report showcasing the completed foundational research outputs.",
        "evidence": {
          "title": "Milestone 1 - Work Package 2025 Foundational Research Mid-Year Report",
          "link": "https://drive.google.com/file/d/1eaGqQ9t2rP12fhnTlrawZsngFIMOGKZt/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 7525000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 2 - Work Package 2025 Technology Validation Mid-Year Report\r Deliverables: Mid-year report showcasing the completed technology validation outputs.",
        "evidence": {
          "title": "Milestone 2 - Work Package 2025 Technology Validation Mid-Year Report",
          "link": "https://drive.google.com/file/d/1Sh6R3Er7eLbgN7J0938wj7d_VX44bVv9/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 5895000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 3 - Work Package 2025 Foundational Research End-Year Report\r Deliverables: End-year report showcasing 20 foundational research outputs (streams rolling into 2026 will be highlighted with supporting explanations)",
        "evidence": {
          "title": "Milestone 3 - Work Package 2025 Foundational Research End-Year Report",
          "link": "https://drive.google.com/file/d/1rKBrua1JxJiSsghJ9ARp2_oATGGeaTC6/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 7525000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 4 - Work Package 2025 Technology Validation End-Year Report\r Deliverables: End-year report showcasing 6 technology validation outputs (streams rolling into 2026 will be highlighted with supporting explanations)",
        "evidence": {
          "title": "Milestone 4 - Work Package 2025 Technology Validation End-Year Report",
          "link": "https://drive.google.com/file/d/1TaaI_i2Drspmsa-VkW301JlUpNAMTG5T/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
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
        "unlockDate": "",
        "description": "Milestone 0 - Kick Off",
        "evidence": {
          "title": "Milestone 1 - WS1.1 Hermes Infrastructure - Mobilization and Development",
          "link": "https://drive.google.com/file/d/1AQ66-_TRDGL-tmxmTEKBD_AEwqv6-0d8/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 1 - WS1.1 Hermes Infrastructure - Mobilization and Development\r Deliverables: 1. Project Plan & Technical Design Document: Comprehensive documentation detailing the execution strategy, architecture, key development phases, and projected timelines for the entire Hermes infrastructure workstream.",
        "evidence": {
          "title": "WS1.1 Hermes Infrastructure - Mobilization and Development",
          "link": "https://drive.google.com/file/d/1AQ66-_TRDGL-tmxmTEKBD_AEwqv6-0d8/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 1031800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 2 - WS2.1 Catalyst Interface Stream Mobilization and Development\r Deliverables: 1. Project Delivery Plan & Roadmap: Comprehensive documentation detailing the execution strategy, key development phases, and projected timelines for the entire workstream. 2. Community Reporting Framework: Establishment and documentation of the process and channels for: A. Monthly Update townhalls & AMAs; B. Monthly Update Report; C. Quarterly Product Demo; and D. Minimum of 2 dry runs, at least 1 of which will be with selected community members before releases.",
        "evidence": {
          "title": "WS2.1 Catalyst Interface Stream Mobilization and Development",
          "link": "https://drive.google.com/file/d/1rk4xE7-wTWEgMU8YLh2uo0jCz_yYaPoX/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 1031800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "Milestone 3 - WS1.2: Hermes Infrastructure - Completion and Production Readiness\r Deliverables: 1. Fully Deployed and Operational Hermes Infrastructure: Access to the production-ready, decentralized infrastructure, demonstrably replacing the functionalities of the previous federated system. 2. Final Technical Report & Performance Metrics: A comprehensive report detailing the completed architecture, all implemented features, outcomes of stress tests, performance benchmarks, and security audit results (if applicable). 3. Complete Documentation Suite: Updated technical documentation, deployment guides, operational manuals, and API specifications (if any) for the Hermes infrastructure. 4. Cumulative Progress Reports: A consolidated record of progress reports and technical updates provided throughout the project lifecycle.",
        "evidence": null
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 1031800.0,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "Milestone 1 - Establish a Foundation for Governance Measurement \r Deliverables: Research summary on decentralized governance measurement best practices. Governance measurement framework for Cardano. Defined list of governance metrics. Structured outline for the \"State of Governance\" report.",
        "evidence": {
          "title": "Milestone 1 - Establish a Foundation for Governance Measurement",
          "link": "https://drive.google.com/file/d/1NIDbegeJIf3psScn7U8GLiQMoMWDpqMH/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 145695.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 2 - Collect and Aggregate Governance Insights \r Deliverables: A set of survey questions and interview scripts tailored to DReps, SPOs, CC members, and community projects. Collected responses from at least 25 DReps, 10 SPOs, 5 CC members, 3 governance tooling & data providers, and 10 community projects. A standardized workshop template for community members to use for hosting workshops and reporting findings. Interview notes or transcripts from up to 5 community members who manage governance-related forums. A compiled dataset of aggregated on-chain and off-chain data correlated with governance behaviors. A published version of the initial \"State of Governance\" report outline, with a record of stakeholder feedback received.",
        "evidence": {
          "title": "Milestone 2 - Collect and Aggregate Governance Insights",
          "link": "https://drive.google.com/file/d/1hz2kaD0Rirq2vdM-xl8qbOC3gQVMiUyI/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 121695.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "Milestone 3 - Analyze Data to Identify Top Governance Improvement Priorities \r Deliverables: - Baseline values for each governance metric. List of recommended tools and dashboards for governance metric monitoring. Analysis output interpreting trends and prioritizing governance improvements. Published raw survey data and related information (excluding confidential data). Draft version of the \"State of Governance\" report for stakeholder review.",
        "evidence": null
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 243695.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "Milestone 1 - Blockfrost platform initial release and onboarding Deliverables: 1) First release (v0.0.1) of blockfrost-platform. 2) Onboarded (NFT licenses distributed for at least 100 Icebreakers). 3) Video demonstrating the above deliverables",
        "evidence": {
          "title": "Blockfrost platform initial release and onboarding",
          "link": "https://drive.google.com/file/d/1Ne1xLMFkGnIf_HeJlnjCbKp-t7sfzhhB/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 2 - Blockfrost platform Transaction submission endpoint Deliverables: 1) Transaction endpoint feature (/tx/submit). 2) Video demo of the above deliverable",
        "evidence": {
          "title": "Blockfrost platform Transaction submission endpoint",
          "link": "https://drive.google.com/file/d/1j2aZI9cpotuHEUyCHmrehvSwgOPwpD2Q/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 3 - Blockfrost platform support for Data nodes Deliverables: 1) Introduce feature to point Blockfrost platform to a Cardano Data node of users choice 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Blockfrost platform support for Data nodes",
          "link": "https://drive.google.com/file/d/1QPU9elcUgF6CJJmql9FrzuMvj-zaz8lX/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 4 - Conformance testing Deliverables: 1) Release of a code repository including tooling and tests to validate Blockfrost API 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Conformance testing",
          "link": "https://drive.google.com/file/d/1BdCu12My2TQGa7BIbjDT6ReD2zSVbHvG/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 5 - Blockfrost Gateway Deliverables: 1) Release of a code repository including the first release of Blockfrost Gateway 2) Video demonstrating how it is working.",
        "evidence": {
          "title": "Blockfrost Gateway",
          "link": "https://drive.google.com/file/d/1SMuFaj4Twx0h_PsrSdS7JPYHBamefxrl/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 6 - Hydra payments between Platform and Gateway Deliverables: 1) Introduce the feature of micro-payment channels between Gateway and Platform 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Milestone 6: Hydra payments between Platform and Gateway",
          "link": "https://drive.google.com/file/d/1WuY6osIEJJpFUnBGAgCDunNg0fzk7J9b/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 162500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Milestone 7 - Hydra payments between the consumer and Platform Deliverables: 1) Introduce the feature of micro-payment channels between the API consumer and Gateway. 2) Video demonstrating the above deliverable",
        "evidence": {
          "title": "Milestone 7: \u200b\u200bHydra payments between the consumer and Platform ",
          "link": "https://drive.google.com/file/d/1OaEy2AyR8uTZC_4MyIYlP7pBoYO_irie/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 162500.0,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "MS 17.1: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.1_&_MS17.2__Milestone_Acceptance_Form.docx",
          "link": " https://drive.google.com/file/d/12KSkWFyGzatUvf8JdkdCR5vGvmLJKwRC/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 17.2: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.1_&_MS17.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/12KSkWFyGzatUvf8JdkdCR5vGvmLJKwRC/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 17.3: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.3__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1gnU_MxZ1jYGIXOarIWpXWB7shJzn9EVv/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 17.4: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.4__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1JBAp4iGvFOjYbHui4Vzx4jfnOix-hyky/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 17.5: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.5__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1KXJEYHHpEu4k8Ez7wOPnbg9ldCWnG0j_/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 17.6: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.6__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1NC0SkUPn_AT4vLtidscT1siO9ZFVx51Z/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 2447000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 17.7: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": {
          "title": "MS17.7__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1gvSW5W0rM0RORtSfSnSz-jRE6fEojiuS/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 2447000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS 17.8: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 2447000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS 17.9: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS 17.10: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS 17.11: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 2447000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS 17.12: Monthly Maintenance and Support\r Deliverables: Monthly reports with accompanying presentation to the relevant Intersect Committee",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 18.1: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.1__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1feGKUM0ZfBB0qOLzXgmXUsySRQIVKmdo/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 18.2: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.2__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1Qv21pAyX3hY8D-myLtvlEEwtpY09KFW7/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 18.3: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.3__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1aKL6VtqWfDHQarxb9cpT3PmwMTrsCND3/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 18.4: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 477867.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS 18.5: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": {
          "title": "MS18.5__MAF",
          "link": "https://drive.google.com/file/d/1cieTHPZQLSgStlWcPL6aRGSmQZbnc4eX/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 477867.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS 18.6: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 477867.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS 18.7: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 477867.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS 18.8: Monthly T&M payment of funding allocated to independent audits and security assurance for key deliverables.\r Deliverables: Reports that accompany key deliverables.",
        "evidence": null
      },
      {
        "id": "MS-21",
        "title": "Milestone MS-21",
        "amount": 477864.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "MS14.1 - Plutus Core: CIP-0132: dropList primitive\r Deliverables: The dropList primitive for Plutus",
        "evidence": {
          "title": "MS14.1,_MS14.2_&_MS14.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1DbiUel7KVndBn2wGNsSR4_zVIaxn0oFi/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS14.2 - Plutus Core: CIP-0109: modexp primitive\r Deliverables: The modexp primitive for Plutus",
        "evidence": {
          "title": "MS14.1_MS14.2_&_MS14.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1DbiUel7KVndBn2wGNsSR4_zVIaxn0oFi/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS14.3 - Plutus Core: CIP-0138: builtin arrays\r Deliverables: The built-in array type, and primitives for operating on arrays",
        "evidence": {
          "title": "MS14.1_MS14.2_&_MS14.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1DbiUel7KVndBn2wGNsSR4_zVIaxn0oFi/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS14.4 - Plutus Core: CIP-0153: builtin value\r Deliverables: The built-in value type, and primitives for operating on values",
        "evidence": null
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS14.5 - Plutus Core: CIP-0133: MSM primitive\r Deliverables: The MSM primitive for Plutus",
        "evidence": {
          "title": "MS14.5,_MS14.7_&_MS14.8__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1TgbDJXE98sVQDuDd9ChTJ-1Ygsn9U4YD/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS14.6 - Plutus Core: CIP-0112: Observe script type\r Deliverables: A new script purpose - Observe, for Plutus V4",
        "evidence": null
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS14.7- Plutus Core: Support case analysis on builtin types\r Deliverables: Support case analysis on Bool, Integer and Data",
        "evidence": {
          "title": "MS14.5,_MS14.7_&_MS14.8__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1TgbDJXE98sVQDuDd9ChTJ-1Ygsn9U4YD/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS14.8 - Plutus Core: Pattern matching primitives\r Deliverables: The pattern matching primitives for Plutus. May not be worthwhile once case analysis on builtin types is implemented - to be determined.",
        "evidence": {
          "title": "MS14.5,_MS14.7_&_MS14.8__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1TgbDJXE98sVQDuDd9ChTJ-1Ygsn9U4YD/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS14.9 - Plutus Core: Introduce Plutus V4 as a new Plutus ledger language version\r Deliverables: Plutus V4",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 416000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS14.10 - Plutus Core: Plinth (Plutus Tx) compiler and library enhancement \r Deliverables: (1) support inlining for recursive bindings; (2) implement new compiler optimizations targeting new language extensions (3) make the new (data-based) API more comprehensive and efficient",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS14.11 - Plutus Core: Plinth (Plutus Tx) developer tooling enhancement\r Deliverables: (1) Remove the requirement of using Nix for setup (2) Support at least two major GHC versions (3) Make the UPLC executable easier to use",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS14.12 - Plutus Core: Plutus language performance benchmark \r Deliverables: Develop a benchmark comparing the performance of various surface languages targeting UPLC, such as Plinth, Aiken, plu-ts and Plutarch.",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 416000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS14.13 - Plutus Core: Plinth (Plutus Tx) compiler certifier: initial release\r Deliverables: Initial release of the certifier focusing on certifying UPLC optimizations",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS15.1 - Tiered Pricing Models: Transaction Prioritization Framework\r Deliverables: Test system with initial prioritization algorithms implemented",
        "evidence": null
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS15.2 - Tiered Pricing Models: AI Congestion Prediction Service\r Deliverables: Working AI service with historical and real-time data ingestion",
        "evidence": null
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS15.3 - Tiered Pricing Models: Wallet Integration & Testnet Launch\r Deliverables: Updated wallet UI; functioning testnet environment",
        "evidence": null
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS15.4 - Tiered Pricing Models: Assured Channel Design Finalization\r Deliverables: Assured channel specification; socialized CIP draft",
        "evidence": null
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 540800.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS15.5 - Tiered Pricing Models: Cardano Problem Statement & Revised CIPs\r Deliverables: CIP document(s) covering congestion handling and assured channel logic",
        "evidence": null
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 1126666.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS16.1 - Transaction Monitoring System: State-of-the-art report\r Deliverables: Report on fraud and anomaly detection. Specification of the Backend analysis",
        "evidence": null
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 1126666.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS16.2 - Transaction Monitoring System: Alpha version of the backend\r Deliverables: Release in the open source repository. Live version on a selection of Dapps or wallets on a testnet with a rough UI",
        "evidence": null
      },
      {
        "id": "MS-21",
        "title": "Milestone MS-21",
        "amount": 1126668.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "MS10.1 - LSM: Reception and review of the LSM functionality Deliverables: Integration code submitted , Comms, tutorials, guides, support",
        "evidence": {
          "title": "MS10.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1FTynLrO48pCGbD5L9fIGnuoyMzVIkLJ/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS10.2 - LSM: Integration of LSM to the Node (as a beta feature) Deliverables: Report demonstrating readiness",
        "evidence": {
          "title": "MS10.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1Ab0v7V9_DpAbH0H2vFtUjLgwBaccKwgc/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS10.3 - LSM: The LSM feature integrated into the Node passing P&T and Testing Deliverables: P&T and Testing report",
        "evidence": {
          "title": "MS10.3_&_MS10.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1dyajvpZK3MgDK5QvT_REy7AoeZhuERFa/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 450667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS10.4 - LSM: Releasing a Node version that includes LSM as a beta feature Deliverables: New release in cardano-node github repo",
        "evidence": {
          "title": "MS10.3_&_MS10.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1dyajvpZK3MgDK5QvT_REy7AoeZhuERFa/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 450666.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS10.5 - LSM: Support the beta-users, obtain feedback and release patches as needed. Deliverables: Receive feedback from community and release patches as needed",
        "evidence": null
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 450666.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS10.6 - LSM: Upgrade LSM to 1.0 Deliverables: Node version release",
        "evidence": null
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 901333.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS11.1 - Ledger HD: Identifying the different data-sets that need to be moved from Memory to Drive. Deliverables: Integration code submitted , Comms, tutorials, guides, support",
        "evidence": {
          "title": " MS11.1__Milestone_Acceptance_Form",
          "link": "https://drive.google.com/file/d/12tf8AkUcQN80GqKgCcrbJcYloSAWaOXf/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 901333.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS11.2 - Ledger HD: Moving `Reward accounts` to Drive Deliverables: Community report demonstrating readiness",
        "evidence": null
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 901334.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS11.3 - Ledger HD: Moving `InstantStake` to Drive Deliverables: Community report demonstrating readiness",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 676000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS12.1 - Revised Stake Pool Incentive: Identify the current issues with Stakepool schemes Deliverables: Community engagement links",
        "evidence": {
          "title": "MS12.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1tcmqxNO6CSxisz-fBZ_DwK3ITaPeKAum/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 676000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS12.2 - Revised Stake Pool Incentive: Review legacy and any new proposals Deliverables: Community engagement links",
        "evidence": {
          "title": "MS12.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1uNxTX2M4GG41cK_6MLpS-GA8HBhKA41X/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 676000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS12.3 - Revised Stake Pool Incentive: Design evaluation and estimate for build Deliverables: Demonstration report (video or blog)",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 676000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS12.4 - Revised Stake Pool Incentive: Produce a demo/show and tell of the proposal to showcase to the community and dReps Deliverables: Demonstration report (video or blog)",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS13.1 - Nested Transactions: Preparation work Deliverables: CIP-0118 is merged. Necessary tech debt is resolved. New Dijkstra era is defined.",
        "evidence": {
          "title": "MS13.1_&_MS13.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1tnZjKkqoQvIqnxOb6HJ1e_hQ2-z9q8w5/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS13.2 - Nested Transactions: Transaction definition Deliverables: New ledger era is integrated all the way into cardano-node",
        "evidence": {
          "title": "MS13.1_&_MS13.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1tnZjKkqoQvIqnxOb6HJ1e_hQ2-z9q8w5/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 540800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS13.3 - Nested Transactions: Ledger rules Deliverables: Specification in Agda is mostly complete.",
        "evidence": {
          "title": "MS13.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1brEOY5LohTw1_gaZ2y2cnraIzvs7mVwP/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 540800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS13.4 - Nested Transactions: Plutus Context Deliverables: Ability to execute PlutusV4 script on a testnet.",
        "evidence": null
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 540800.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "MS7.1 - Minotaur AVS: Enable SPOs to Customize Rewards\r Deliverables: Validator can set custom fees applicable to a particular network, displayed with the Validators info in the Discover Validators webUI component",
        "evidence": {
          "title": "MS7.1_&_MS7.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/122SN4470teo-sMbtn_GqeZW1lfgPmAkC/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS7.2 - Minotaur AVS: Assured liveness of the network\r Deliverables: Tests with runtime properties. Documentation and tutorials",
        "evidence": {
          "title": "MS7.1_&_MS7.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/122SN4470teo-sMbtn_GqeZW1lfgPmAkC/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 760000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS7.3 - Minotaur AVS: Enable and support launch of first PC (Midnight) unlocking new revenue opportunities to validators\r Deliverables: Native Token Reserve as Cardano native asset. Enable governance management on Cardano",
        "evidence": {
          "title": "MS7.3_Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1_CggpxHNy62hFV-NSi1zC3Im8KzmqnW3/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 760000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS7.4 - Minotaur AVS: Clear UI/UX & online presence for onboarding validators\r Deliverables: Intuitive user experience. Dedicated Web Portal to Facilitate Validator Onboarding and Partner Chain Integration",
        "evidence": null
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 760000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS7.5 - Minotaur AVS V1 feature set release\r Deliverables: Custom Fee settings. Automatic reward distribution (for Validators and Delegators). Transparent Reward Calculations",
        "evidence": null
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS8.1 - Mithril: Decentralized Mithril Signature Diffusion - Prototype\r Deliverables: N2C mini-protocols in Mithril signer and Cardano node. DMQ side-car node",
        "evidence": {
          "title": "MS8.1,_MS8.3_&_MS8.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1goXEkBfiAWAHqRhyR1qJ8ai9_nbzg0e-/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS8.2 - Mithril: Mithril Support for UTXO HD\r Deliverables: Support for current and new in- memory ledger state. Support for on disc ledger state",
        "evidence": {
          "title": "MS8.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/10GTyyxBKVXp8lzU_J_rqK09hJHABASJh/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS8.3 - Mithril: Decentralized Mithril Signature Diffusion - Mainnet\r Deliverables: Production ready p2p network based on DMQ. Signer communication through DMQ nodes. Aggregator communication through DMQ nodes",
        "evidence": {
          "title": "MS8.1,_MS8.3_&_MS8.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1goXEkBfiAWAHqRhyR1qJ8ai9_nbzg0e-/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 464750.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS8.4 - Mithril: Multiple Mithril Aggregators - Mainnet\r Deliverables: Updated Mithril protocol and mainnet deployment supporting multiple aggregators. Production-grade ALBA Aggregator, documentation, and operational guidelines.",
        "evidence": {
          "title": "MS8.1,_MS8.3_&_MS8.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1goXEkBfiAWAHqRhyR1qJ8ai9_nbzg0e-/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS8.5 - Mithril: Mithril ZK proofs - Prototype\r Deliverables: ZKP-enhanced Mithril prototype, prototype testnet reports.",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS8.6 - Mithril: Mithril/Cardano Integration\r Deliverables: Integrated codebase, binaries, integration documentation, and testnet/mainnet deployment.",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 464750.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS8.7 - Mithril: Mithril ZK proofs - Mainnet\r Deliverables: ZKP-enhanced Mithril release, mainnet rollout report, and updated documentation.",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 464750.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS8.8 - Mithril: Mithril Certificates for new datatypes\r Deliverables: Updated Mithril protocol and support modules for new datatypes.",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS9.1 - KES Agent: Development of KES Agent\r Deliverables: Integration code submitted, Comms, tutorials, guides, support",
        "evidence": {
          "title": "MS9.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1b6bKm20QJDr00h3Zp8GBvXpJK264pj8G/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS9.2 - KES Agent: Integration of KES Agent to the Node (as a beta feature)\r Deliverables: Report demonstrating readiness",
        "evidence": {
          "title": "MS9.2_&_MS9.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1LVSVbfLcD94s2ulPQTwkYc_FUDCtYlAW/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS9.3 - KES Agent: The KES Agent integrated into the Node passing P&T and Testing\r Deliverables: P&T and Testing reports",
        "evidence": {
          "title": "MS9.3_&_MS9.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1SkShR9kiW8cvaVUlMa1KHdahwQ_LSD8s/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS9.4 - KES Agent: Releasing Node version that includes the KES Agent as a beta feature\r Deliverables: New release in cardano-node github repo",
        "evidence": {
          "title": "MS9.3_&_MS9.4__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1SkShR9kiW8cvaVUlMa1KHdahwQ_LSD8s/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 193143.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS9.5 - KES Agent: passing an audit\r Deliverables: Community update on the result of the audit.",
        "evidence": {
          "title": "MS9.2_&_MS9.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1LVSVbfLcD94s2ulPQTwkYc_FUDCtYlAW/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 193143.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS9.6 - KES Agent: Support the beta-users, obtain feedback and release patches as needed.\r Deliverables: Receive feedback from community and release patches as needed",
        "evidence": null
      },
      {
        "id": "MS-20",
        "title": "Milestone MS-20",
        "amount": 193143.0,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "MS5.1 - Acropolis: Minimal necessary tracking of governance actions, stake distribution, reward accounts to derive Stake Pool Distribution\r Deliverables:  Implementation of modules to track stake, governance and rewards and deriving Stake Pool Distribution Report validating correctness and efficiency of SPD derivation",
        "evidence": {
          "title": "MS5.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1_WH7uCuy4PCuFnv1UEumks0H4gTqrTo9/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS5.2 - Acropolis: Create REST APIs for ledger state, SPD and chain information\r Deliverables:  REST API implementations with comprehensive endpoints documented in OpenAPI (Swagger) Performance and load testing report confirming API reliability and response time",
        "evidence": {
          "title": "MS5.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1_WH7uCuy4PCuFnv1UEumks0H4gTqrTo9/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS5.3 - Acropolis: Integrate and test with chosen application team\r Deliverables:  Integration test cases, results, and identified improvement areas documented Integration and acceptance test report confirming successful interoperability",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS5.4 - Acropolis: Block header validation\r Deliverables:  Block header validation module Test reports",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS5.5 - Acropolis: Ledger state validation\r Deliverables:  Upgrades to ledger state derivation modules (see MS1) to report errors Test reports",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 289714.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS5.6 - Acropolis: Transaction validation - phase 1\r Deliverables:  Transaction Phase 1 validation module Test cases and reports",
        "evidence": {
          "title": "MS5.1,_MS5.3,_MS5.4,_MS5.5_&_MS5.6__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1nXEh_Ll9GeSAVLVKAxe8n9Qs77p9eQ2K/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.7 - Acropolis: Transaction validation - phase 2\r Deliverables:  Transaction Phase 2 validation module Test cases and reports",
        "evidence": null
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.8 - Acropolis: Multi-peer networking\r Deliverables:  P2P network module Chain selection / consensus module Test network infrastructure and reports",
        "evidence": null
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.9 - Acropolis: Chain storage\r Deliverables:  Block store module Test reports",
        "evidence": null
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.10 - Acropolis: ChainSync / BlockFetch server\r Deliverables:  Block server module Test reports",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.11 - Acropolis: Relay node\r Deliverables:  Additional modules as required Configuration files and installation guides Live test reports from participation in preview testnet",
        "evidence": null
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.12 - Acropolis: Mempool & block production\r Deliverables:  Mempool and block building modules. Test reports from manually triggered & dry run block production",
        "evidence": null
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 289714.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.13 - Acropolis: Block producing node - testnet\r Deliverables:  KES store / agent, VRF lottery modules, upgrades to P2P for contribution. Test reports from operation on preview testnet",
        "evidence": null
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 289718.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS5.14 - Acropolis: Block producing node - mainnet\r Deliverables:  Test reports from operation on mainnet",
        "evidence": {
          "title": "MS6.1_&_MS6.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1s5Bzt3TPuZHUzYrPOkeZweYKLisCmRBo/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS6.1 - Hydra Development: Hydra V1 feature set\r Deliverables:  Improved event sourcing; Bounded memory; production grade monitoring and operations",
        "evidence": {
          "title": "MS6.1_&_MS6.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1s5Bzt3TPuZHUzYrPOkeZweYKLisCmRBo/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS6.2 - Hydra Development: CNT payments across Heads\r Deliverables:  Backend that routes payments between Hydra heads; monitor and rebalance liquidity between heads",
        "evidence": {
          "title": "MS6.1_&_MS6.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1s5Bzt3TPuZHUzYrPOkeZweYKLisCmRBo/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-17",
        "title": "Milestone MS-17",
        "amount": 743600.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS6.3 - Hydra Development: Lightweight Hydra node\r Deliverables:  Compile to WASM; mobile/browser compatible network stack; off-chain protocol simplifications (allow being offline in 2 party head)",
        "evidence": {
          "title": "MS6.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1MWwLAKaIuBGEd9nnsggLHJJ0e_SqwwB1/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-18",
        "title": "Milestone MS-18",
        "amount": 743600.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS6.4 - Hydra Development: Early bitcoin lightning interoperability\r Deliverables:  Backend that routes payments from hydra to lightning node; Browser application that scans a lightning invoice and converts it to a payment in a hydra head",
        "evidence": null
      },
      {
        "id": "MS-19",
        "title": "Milestone MS-19",
        "amount": 743600.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "MS1.1 - Automatic Formal Verification: Reasoning Core\r Deliverables: Documentation of the optimization and translation rules Code for the reasoning core available on the open-source Github",
        "evidence": {
          "title": "MS1.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1hPnyySylLhBZoH68g8MpOWXsvFplxbXL/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-2",
        "title": "Milestone MS-2",
        "amount": 929500.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS1.2 - Automatic Formal Verification: Blockchain formalization\r Deliverables: Documentation of the operators and state transition Documentation of the ledger rules implemented Code available on the open source Github",
        "evidence": null
      },
      {
        "id": "MS-3",
        "title": "Milestone MS-3",
        "amount": 929500.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS1.3 - Automatic Formal Verification: Universal annotation language\r Deliverables: Documentation and formal spec Presentation at the UPLC 2025 Examples in the open source repository",
        "evidence": null
      },
      {
        "id": "MS-4",
        "title": "Milestone MS-4",
        "amount": 929500.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS1.4 - Automatic Formal Verification: Plinth Bridge\r Deliverables: Code available in either the plutus repository as a compiler option or in the afv tool repository Examples in the afv tool repository with both correct properties and counter example generation",
        "evidence": {
          "title": "MS17.4__Milestone_Acceptance_Form.docx ",
          "link": "https://drive.google.com/file/d/1JBAp4iGvFOjYbHui4Vzx4jfnOix-hyky/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-5",
        "title": "Milestone MS-5",
        "amount": 1577333.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "MS2.1 - Property Based Testing Tool: Library \"tool\"\r Deliverables: Code available in open source 5 examples showcasing the tool usage and capabilities",
        "evidence": null
      },
      {
        "id": "MS-6",
        "title": "Milestone MS-6",
        "amount": 1577333.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS2.2 - Property Based Testing Tool:CLI Tool\r Deliverables: Release of the binaries in the open source repository Source code available in the open source repository",
        "evidence": null
      },
      {
        "id": "MS-7",
        "title": "Milestone MS-7",
        "amount": 1577334.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS2.3 - Property Based Testing Tool: VSCode extension\r Deliverables: Release of the source code in an open source repository Packaged of the extension for the market place",
        "evidence": null
      },
      {
        "id": "MS-8",
        "title": "Milestone MS-8",
        "amount": 518093.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS3.1 - Static Analyzer: Proof of concept\r Deliverables: Source code available in an open-source repository Tests to verify the discovery of each weaknesses Tests to verify that we only target on-chain code",
        "evidence": {
          "title": "MS3.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1klS1Z9aLja1HmrKyGQoTBlBxRPBFsT5z/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-9",
        "title": "Milestone MS-9",
        "amount": 518093.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS3.2 - Static Analyzer: List of coding rules and antipatterns\r Deliverables: A report of all weaknesses and a classification",
        "evidence": {
          "title": "MS3.2__Milestone_Acceptance_Form",
          "link": "https://drive.google.com/file/d/1i_ytaROsj_heUBqjLOcw6jGUrD1mFZAq/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-10",
        "title": "Milestone MS-10",
        "amount": 518094.0,
        "status": "Active",
        "unlockDate": "",
        "description": "MS3.3 - Static Analyzer: Stable release\r Deliverables: Stable release in the open source repository",
        "evidence": null
      },
      {
        "id": "MS-11",
        "title": "Milestone MS-11",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS4.1 - Leios: Progress report on impact analysis and technical requirements\r Deliverables: 1. Impact Analysis Report, 2. CIP Published",
        "evidence": {
          "title": "MS4.1__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1r8lhW4DlHrjhPzgxE6oWP2L1lAjKjd81/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-12",
        "title": "Milestone MS-12",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS4.2 - Leios: Progress report on technical design, implementation plan\r Deliverables: 1. Technical Design and Implementation Plan, 2. Cardano Blueprints updated with necessary Leios changes",
        "evidence": {
          "title": "MS4.2__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1OPbVFqdu0i4afaLOqpS0WdYOt6Cge2q5/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-13",
        "title": "Milestone MS-13",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS4.3 - Leios: Quality and performance benchmarking strategy\r Deliverables: 1. Threat Model, 2. Selected experiments or analysis of key threats and mitigations, 3. Early load test (or equivalent) in a controlled environment",
        "evidence": {
          "title": "MS4.3__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1yZkJfT23h2mDQ2fiSPtAwOn_vh9AWf1-/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-14",
        "title": "Milestone MS-14",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS4.4 - Leios: Initial code changes\r Deliverables: Code changes merged into Intersect GitHub repository",
        "evidence": {
          "title": "MS4.4_&_MS4.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1j5w9Ylc_bbUF5avdY14KxYqyM3XE_Jvp/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-15",
        "title": "Milestone MS-15",
        "amount": 2366000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "MS4.5 - Leios: Formal specification and Conformance tests\r Deliverables: Formal specs and conformance tests documented",
        "evidence": {
          "title": "MS4.4_&_MS4.5__Milestone_Acceptance_Form.docx",
          "link": "https://drive.google.com/file/d/1j5w9Ylc_bbUF5avdY14KxYqyM3XE_Jvp/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "MS-16",
        "title": "Milestone MS-16",
        "amount": 2366000.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
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
        "unlockDate": "",
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
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 15000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 5000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 9000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 1000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 30000.0,
        "status": "Matured",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Committee Workshops (milestone 2 of workshop initiative)",
          "link": "https://drive.google.com/drive/folders/1sqNlButjvd7suR41odWIp6US_1gsuDr3",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 30000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 30000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 10000.0,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 1 - PyCardano Maintenance, Support & Impact Tracking [August 2025]",
          "link": "https://drive.google.com/file/d/1bJZi8yYDoU3h6Hm17n__vcaiSWuW5-i5/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 2 - PyCardano Maintenance, Support & Impact Tracking [September 2025]",
          "link": "https://drive.google.com/file/d/1vPTGNeBscKLw-7WmHma_gJi6bNan65Wx/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 3 - PyCardano Maintenance, Support & Impact Tracking [October 2025]",
          "link": "https://drive.google.com/file/d/1mmiiLJNLpQtejffMGjlpU6V1V38Zspui/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 4 - PyCardano Maintenance, Support & Impact Tracking [November 2025]",
          "link": "https://drive.google.com/file/d/1SA7pyYGvtkLB1CTedvbakU7QhCQNvikW/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 5 - PyCardano Maintenance, Support & Impact Tracking [December 2025]",
          "link": "https://drive.google.com/file/d/1sYUfIHDA4d0XE7IQkHvFCoCpN3X26677/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 6 - PyCardano Maintenance, Support & Impact Tracking [January 2026]",
          "link": "https://drive.google.com/file/d/1Ft58v3o8JhM8GObwnX_xWWNbD9R5lCnq/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 26233.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 7 - PyCardano Maintenance, Support & Impact Tracking [Febuary 2026]",
          "link": "https://drive.google.com/file/d/1pwmtM9k3UbCUZAVn-9ag5uDo1SjtxZL7/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Month 8 - PyCardano Maintenance, Support & Impact Tracking [March 2026]",
          "link": "https://drive.google.com/file/d/1U5_ZUxB0DZayjHdGnnwFIdDcZ-u9rjQL/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 26233.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 23089.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 1 Acceptance Form",
          "link": "https://drive.google.com/file/d/1mTZJu3kA4zk223g0cmvPwcQXua41iMAA/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 66637.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 Acceptance Form",
          "link": "https://drive.google.com/file/d/1mTZJu3kA4zk223g0cmvPwcQXua41iMAA/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 66637.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 64637.89,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 900000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Anzens - Milestone 2 Acceptance Form - 2025-10-30_signed",
          "link": "https://drive.google.com/file/d/1uE0llS2x96azeLOWAOJdaGqSBJD-AZao/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 450000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Anzens - Milestone 3 Acceptance Form - 2026-01-30",
          "link": "https://drive.google.com/file/d/1m5AJtTOfAMwpZ2m1YNcICkj-bQ0C7__g/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 900000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Anzens - Milestone 3 Acceptance Form - 2026-01-30_signed",
          "link": "https://drive.google.com/drive/u/1/folders/13JNc0hTJAaQHQ8ql2qj20kcMi9QN1d1B",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 900000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 800000.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 375000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Discover Crdano Ecosystem Pavilions EMI-0007-25",
          "link": "https://drive.google.com/file/d/1b21MqL7bfK9mJ0dyPtplYcUpiCy5uiD0/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 69750.0,
        "status": "Matured",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 41580.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone_Acceptance_Form_-_2025_-6a_MMaaS_-Strike_Finance_v2.PDF",
          "link": "https://drive.google.com/file/d/1C4eSb8IABp3_S5xd8BGEH9hbWvAfE3IL/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 41580.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Minswap- Market Making Service Pool",
          "link": "https://drive.google.com/file/d/1MoGz-Y59FbrFAijw0fn3a3-7BBtnMgjP/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 41580.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 30000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 495000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 495000.0,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 420000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "DAO Launch and Members Onboarded",
          "link": "https://docs.google.com/document/d/1qncozGb_DMgm3ogVczvdLAOhCiEQaLhh6W2NtMiYzdc/edit?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 5790000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Create temperature checks for governance round 1",
          "link": "https://docs.google.com/document/d/1PN_s7QlhIZXiDGbNk_4MdJGcDxbbFWEjIUltKZ3sMyk/edit?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 5670000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 Evidence: Temperature Checks Completed",
          "link": "https://docs.google.com/document/d/1QGuCx7au6-mJ_8U_JK43V4d24DLnM_lJefPGQzB0rZM/edit?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 900824.33,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - Interim Reporting",
          "link": "https://ipfs.io/ipfs/QmbT99fZGdiKKYwGzu8vCV17VQHZCoY8USDdngNAbkTKMG",
          "transactionHash": "",
          "transactionLink": ""
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 1280000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - Interim Reporting",
          "link": "https://ipfs.io/ipfs/QmbT99fZGdiKKYwGzu8vCV17VQHZCoY8USDdngNAbkTKMG",
          "transactionHash": "",
          "transactionLink": ""
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
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Fund14 Proposal Submission Stage Closed",
          "link": "https://drive.google.com/file/d/1eUe3nTUgk9aK82MXTK_74kOHAQxvqDr4/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 1100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Fund14 Proposal Submission Stage Closed",
          "link": "https://drive.google.com/file/d/1eUe3nTUgk9aK82MXTK_74kOHAQxvqDr4/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 1100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 21000000.0,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone Acceptance Form",
          "link": "https://drive.google.com/file/d/1pD0ysdt8fXrhGPrfYciCoALcj5bkhgJk/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 4725000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Q4 Milestone Acceptance Form ",
          "link": "https://drive.google.com/file/d/1NlhBwATO2T-VFjfn1C69c1L8ZiLmeo_z/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 3150000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 1575000.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 6714.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone Acceptance Form - August 2025",
          "link": "https://drive.google.com/file/d/1Xt9yOYL2hU6jMN8fqnDAmQ31U72h0cu4/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Sep 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1S6dIxgE7Wb0h_I7TdZC1XODcCPAdq79b/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Oct 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/19RvRPlE1td9LJ51wibQaxTXZEk75fmnd/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Nov 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1UURlKkvG-iFiLVt4NAjG9Aqluiwh9Cye/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Dec 2025 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1YqBQtZ-4S6qLA1m7ZChiQEukws_2ulvG/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Jan 2026 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1Pc3vLHBuWGAAzYiOFqHFsoKQrfGf4BKu/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 8833.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Feb 2026 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/17II45b5HT9o-8Mgtk9anWRoXpsPEm466/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Mar 2026 MAF - AdaStat.net (EG-0001-25)",
          "link": "https://drive.google.com/file/d/1JyJStmmSpQdq79gjRifGss6ywnZ4y8xU/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone m-15",
        "amount": 8834.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-16",
        "title": "Milestone m-16",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-17",
        "title": "Milestone m-17",
        "amount": 8833.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 52500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 1 - NFTCDN - Milestone 2 - EC-0023-2025",
          "link": "https://drive.google.com/file/d/1JNCSf6XV15mAD7lRUoCBLaEYwAPMWbKs/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 97500.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 2 - NFTCDN - Milestone 3 EC-0023-2025",
          "link": "https://drive.google.com/file/d/154t6U64aGBTAf3u2OmB9HWKvUFjV5MY8/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF 3 - NFTCDN - Milestone 4 EC-0023-2025",
          "link": "https://drive.google.com/file/d/1F3q8ThQxhTaEs4R0xzXZ7Wg-qBz3ZUOB/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 97500.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 12500.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 11305.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2- Quarterly dependency update (Cardano. Nix) ",
          "link": "https://drive.google.com/file/d/17bADlCKl02PUlP39v3qlkNJJ4WSBkW8n/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 11304.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Quarterly Dependency Update (Cardano.nix)",
          "link": "https://drive.google.com/file/d/1NMH2siGkN_gmmZGQ1Ac0JGPVTrBlM-S2/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 11304.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 10852.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 2435.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 60870.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Quarterly Dependency Update (Plutarch)",
          "link": "https://drive.google.com/file/d/1jcmX0_FMvNIhTKIH9XfmF4Az0wGG9JRN/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 60870.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Quarterly Dependency Update (Plutarch)",
          "link": "https://drive.google.com/file/d/1jcmX0_FMvNIhTKIH9XfmF4Az0wGG9JRN/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 60869.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 58434.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 1043.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 20670.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2- Galois Field operations in Plutarch",
          "link": "https://drive.google.com/file/d/1ik6PJoHqzAyoeTRoQj68B40OoSG-zRCR/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 20670.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Elliptic Curve Operations in Plutarch",
          "link": "https://drive.google.com/file/d/1t63Ikb4JA7ZAIGTls97BwN6C4mELyNyE/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 20670.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 20669.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone m-15",
        "amount": 20625.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/17A9aYq1gIaJ3f-AM36R_cySk8euw7IPp/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/16Q3CkuQImC0LLASuaPnPNa9EYRXLHLXQ/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 66667.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/1FkhTb6g37mFDQUJTRo6n2cNa8KXE7i0m/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 64000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/1HC_iGZHGfjSWRInO0I618Njq0Vd__Th6/view",
          "transactionHash": "",
          "transactionLink": ""
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 110833.33,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Lantr - MAF - Scalus Milestone 2 - Adoption and Onboarding",
          "link": "https://drive.google.com/file/d/1ESCwxkdOrH-ne2-REIXRGZQI91_CWwam/view ",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 112660.35,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Lantr - MAF - Scalus Milestone 3 - Off-chain libraries",
          "link": "https://drive.google.com/file/d/1GJlWjLMWomh0rU88HqC771jXDTs-SxTo/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 127275.74,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Lantr - MAF - Scalus Milestone 4 - Testing capabilities",
          "link": "https://drive.google.com/file/d/1o7UiKFc-qGOXs3W084_1w4nm5GzjR8D2/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 107788.56,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 89519.02,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 19920.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - New release and Yaci Store Scope Indexer Use Case-1",
          "link": "https://drive.google.com/file/d/1x3rkh3PcEH7M2rwpTPQ5NVx2THBg5sq3/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 19920.0,
        "status": "Matured",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - New Release and Cardano Client Lib tutorials",
          "link": "https://drive.google.com/file/d/14Bw9SK_PLRNXASxvCaY1Rf1uEt8mjo80/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 19920.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 19920.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - EM08/25",
          "link": "https://drive.google.com/file/d/1L-teiCMro7gf77R59gNGUE4oORzVH4vT/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - EM09/25",
          "link": "https://drive.google.com/file/d/1P1Fn_svDBkSbUlGs-4gtq9C-GdA8sO6w/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 - EM10/25",
          "link": "https://drive.google.com/file/d/1WzpdSebWN5dpA074qkAeggQER5bt26T2/view?usp=sharing ",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 5 - EM11/25",
          "link": "https://drive.google.com/file/d/1s5h5AkR-WzMWE3GPjNgkL6iIfqAi9qV_/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 6 - EM12/25",
          "link": "https://drive.google.com/file/d/12sGQeOzaIn2QYrFSwhdqFlMOuSYs1R6m/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 7 - EM01/26",
          "link": "https://drive.google.com/file/d/1MnAULT4PcCD4cOCNQhI5klIPDfMKoZZA/view?usp=sharing ",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 48583.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 8 - EM02/26",
          "link": "https://drive.google.com/file/d/18147wACQrWD0zU3N1McbACrlKg807UdZ/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 9 - EM03/26",
          "link": "https://drive.google.com/file/d/1pm8zBIJMGNLIYcUsdwY-TT9vVKzpV6B8/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 48583.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 42757.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 200000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Documentation of the communication protocol",
          "link": "https://drive.google.com/file/d/1KcsbA2dhm92ZGBrXeDtIu-eFKqaSZm3n/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 125000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Bridge smart contract in Aiken for locking funds in the Cardano side",
          "link": "https://drive.google.com/file/d/15b8H-mxo_4rT9N_d0elFfhXPHZfT3Iz3/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 125000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Bridge smart contracts in Aiken for minting wrapped assets.",
          "link": "https://drive.google.com/file/d/1KxWWEsBGRrOQDWdBsKcMD1bqVq6DZV0k/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 200000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 43000.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 286392.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Gerolamo executable",
          "link": "https://drive.google.com/file/d/1uTLNWby2GNK8qYhfq-8eTYQ3yXwAvs1w/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 190928.33,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "https://drive.google.com/file/d/1g9H8etSUZ3jxEETLq_PS1UahMx30tbWg/view",
          "link": "https://drive.google.com/file/d/1g9H8etSUZ3jxEETLq_PS1UahMx30tbWg/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 95464.17,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "M2 - Developer Advocates",
          "link": "https://drive.google.com/file/d/1uvEAxpi4F4VRqFC7Wdl_Kt4_Z3TtU-JA/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "M3 - Developer Advocates",
          "link": "https://drive.google.com/file/d/1jv9ki-DD-NLro3UPlX3FQxZuvwtNhkuD/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 40000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 39990.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 10.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 70000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "M8 - Travel",
          "link": "https://drive.google.com/file/d/11vFTWSPque3NjnLhfC1RL6qJKkxJhAam/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 60000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Open Source Committee Travel Budget - Q1 Events",
          "link": "https://drive.google.com/file/d/1Voy66eSyWQ4vCqaGFjMR-o8C-BIc8wRJ/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 50000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 18000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 2000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 50000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 416000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "4.2 - TxPipe GitHoney Build Contract",
          "link": "https://drive.google.com/file/d/1NLaam0tQS9YkElfK19OZ1H6XqunHAFRx/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-14",
        "title": "Milestone 15",
        "amount": 34000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone 16",
        "amount": 50000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-16",
        "title": "Milestone 17",
        "amount": 50000.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 1.1 - Upfront Maintainer Retainer funding",
          "link": "https://drive.google.com/file/d/1ZT88kT29O48EUzT0zkH-DT-LEq-C8cRj/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 300000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Maintainer Retainer Program - Onboarding",
          "link": "https://drive.google.com/file/d/1c16UHE6MAPywxzdKEarnamEQOur-GvAi/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 300000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 100000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 100000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 75000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 200000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone 8",
        "amount": 165000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-8",
        "title": "Milestone 9",
        "amount": 50000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone 10",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone 11",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone 12",
        "amount": 200000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "2.2 - Scoping",
          "link": "https://drive.google.com/file/d/1mLqz1syVJZLmN-viu2bezrATJSFSp6ll/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-12",
        "title": "Milestone 13",
        "amount": 200000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-13",
        "title": "Milestone 14",
        "amount": 500000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone 15",
        "amount": 500000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-15",
        "title": "Milestone 16",
        "amount": 460000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-16",
        "title": "Milestone 17",
        "amount": 20000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-17",
        "title": "Milestone 18",
        "amount": 20000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-18",
        "title": "Milestone 19",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-19",
        "title": "Milestone 20",
        "amount": 20000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "7.2 - Role Advertising",
          "link": "https://drive.google.com/file/d/1CufR0nvLnVRcJgjOmZmV-EYXh8K_kmft/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-20",
        "title": "Milestone 21",
        "amount": 100000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-21",
        "title": "Milestone 22",
        "amount": 25000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-22",
        "title": "Milestone 23",
        "amount": 10000.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 Acceptance Form",
          "link": "https://drive.google.com/drive/folders/1T8w-MGLd7koVrRx0UMifB3mLpyR8lZNZ?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Mempool Monitoring API",
          "link": "https://drive.google.com/file/d/1bVA3xtuKTFLq44XcNFdk9Lrf3Z7neLMk/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 - Event Notification API",
          "link": "https://drive.google.com/file/d/1qjKfL3IVj5jn5WO1x1kFhqHHdyUUvaVK/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 5 - Wallet API",
          "link": "https://drive.google.com/file/d/1b38He1ZBEs4to30UMTztxqzpGlYDzB7D/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 6 - Market Price API",
          "link": "https://drive.google.com/file/d/1-b7vlnXRcETnnL8YRJg1GoxzCkzrWhOM/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 94000.0,
        "status": "Withdrawn",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 100000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "MAF",
          "link": "https://drive.google.com/file/d/1H6hgQJjhyP75dsbDVAAx3aIJz7bu_8-5/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 100000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 25000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 25000.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Maintenance report",
          "link": "https://drive.google.com/file/d/1lqOryXw3vt51bTb3obOWyFu8vOT9_8SS/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 70800.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone acceptance form + maintenance report",
          "link": "https://drive.google.com/file/d/1qbPhURhQ5SehF4rN5YJ52y6fJysacjLi/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 70800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 70800.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 70800.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 180000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - Documentation",
          "link": "https://drive.google.com/file/d/1CqBIIxYyOo1OrsShUrEDj3Gfb6fT_7u_/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 170000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - Rollup validation logic",
          "link": "https://drive.google.com/file/d/1UzAmU_3k6ePHQ9tpMQosTHPpFr2ljlTt/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 170000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 4 - Transaction building logic",
          "link": "https://drive.google.com/file/d/12M3sWO4c7ud6YfWJDqw-X8C_rKmV7Idg/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 160000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 5 - Rollup data and update transactions on Cardano",
          "link": "https://drive.google.com/file/d/1cztCZmnPWniky_Qgs0Gei_mfUN3mK1fv/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 160000.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 6 - Transaction aggregation",
          "link": "https://drive.google.com/file/d/1rND3JaXXlduAInpbls_sY_QZvFnxlr6L/view?usp=drive_link",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 160000.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 149390.0,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 43635.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 43634.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 42324.97,
        "status": "Paused",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone m-1",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 \u2013 Pallas maintenance and enhancement Q1",
          "link": "https://drive.google.com/file/d/1LZPOhCzadVRGJRuYb4NH8CGY9Udcbbrr/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-2",
        "title": "Milestone m-2",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Pallas maintenance and enhancement Q2",
          "link": "https://drive.google.com/file/d/1R68re-nMisGBon0dDH-wqsNaBb3sBTSi/view?usp=sharing",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-3",
        "title": "Milestone m-3",
        "amount": 55228.5,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone m-4",
        "amount": 53019.36,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone m-5",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone m-6",
        "amount": 55227.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 - UTxO RPC maintenance and enhancement Q1",
          "link": "https://drive.google.com/file/d/12ppMOZOEudd7Rglg6-UeuBNdfL89bkxT/view?authuser=1",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-7",
        "title": "Milestone m-7",
        "amount": 55227.0,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 - UTxO RPC maintenance and enhancement Q2",
          "link": "https://drive.google.com/file/d/19FTAHQrvJy74xvMO5HdUmJnObNi8_Ye5/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-8",
        "title": "Milestone m-8",
        "amount": 55230.0,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-9",
        "title": "Milestone m-9",
        "amount": 53020.86,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-10",
        "title": "Milestone m-10",
        "amount": 2209.14,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-11",
        "title": "Milestone m-11",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 2 \u2013 Dolos maintenance and enhancement Q1",
          "link": "https://drive.google.com/file/d/1OUA5awgcnHMp2AXLNmTTATQ1d92b5e6I/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-12",
        "title": "Milestone m-12",
        "amount": 55228.5,
        "status": "Withdrawn",
        "unlockDate": "",
        "description": "Evidence submitted via the Cardano Treasury Admin.",
        "evidence": {
          "title": "Milestone 3 \u2013 Dolos maintenance and enhancement Q2",
          "link": "https://drive.google.com/file/d/1Zo8_g5g2UB-wbcHg1FgAyV8SPGlVAj7v/view",
          "transactionHash": "",
          "transactionLink": ""
        }
      },
      {
        "id": "m-13",
        "title": "Milestone m-13",
        "amount": 55228.5,
        "status": "Active",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-14",
        "title": "Milestone m-14",
        "amount": 53019.36,
        "status": "Active",
        "unlockDate": "",
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
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-1",
        "title": "Milestone 2",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-2",
        "title": "Milestone 3",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-3",
        "title": "Milestone 4",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-4",
        "title": "Milestone 5",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-5",
        "title": "Milestone 6",
        "amount": 360350.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      },
      {
        "id": "m-6",
        "title": "Milestone 7",
        "amount": 338725.0,
        "status": "Paused",
        "unlockDate": "",
        "description": "",
        "evidence": null
      }
    ]
  }
];