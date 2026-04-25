// Vendor profile data: logo, website, social links and contact info
// This data is maintained manually and supplements the financial data from intersectData.ts

export interface VendorProfile {
  name: string;
  logo?: string;         // URL to vendor logo image
  website?: string;      // Official website URL
  email?: string;        // Contact email
  discord?: string;      // Discord invite link
  github?: string;       // GitHub organization/user URL
  twitter?: string;      // X (Twitter) profile URL
  description?: string;  // Short bio / description
}

export const vendorProfiles: VendorProfile[] = [
  {
    name: "Blockfrost",
    logo: "https://pbs.twimg.com/profile_images/1683911708719316992/n9LpcKJk_400x400.png",
    website: "https://blockfrost.io/",
    discord: "https://discord.com/invite/MYWdT2Tbst",
    github: "https://github.com/blockfrost",
    twitter: "https://x.com/blockfrost_io",
    description: "Blockfrost is a hosted API and SaaS provider for the Cardano blockchain, offering instant access to Cardano's data and smart contracts.",
  },
  {
    name: "MeshJS",
    logo: "https://pbs.twimg.com/profile_images/1594083578986684416/2IIVLmj4_400x400.jpg",
    website: "https://meshjs.dev/",
    github: "https://github.com/MeshJS",
    twitter: "https://x.com/meshsdk",
    description: "Mesh provides all the tools required to build powerful dApps on Cardano, from low-level utilities to full-featured React components.",
  },
  {
    name: "TxPipe",
    logo: "https://pbs.twimg.com/profile_images/1535629940717400064/FLNKFKmD_400x400.jpg",
    website: "https://txpipe.io/",
    github: "https://github.com/txpipe",
    twitter: "https://x.com/txpipe_tools",
    description: "TxPipe builds open-source developer tools for Cardano, including Pallas (Rust primitives) and Oura (the tail of Cardano).",
  },
  {
    name: "CardanoScan",
    logo: "https://pbs.twimg.com/profile_images/1591484095897755648/OLVZ6_gO_400x400.jpg",
    website: "https://cardanoscan.io/",
    twitter: "https://x.com/CardanoScan",
    description: "CardanoScan is a leading Cardano blockchain explorer providing comprehensive data on transactions, blocks, pools, and tokens.",
  },
  {
    name: "Cardano Foundation",
    logo: "https://pbs.twimg.com/profile_images/1605582823197073412/lh0c7RKO_400x400.jpg",
    website: "https://cardanofoundation.org/",
    github: "https://github.com/cardano-foundation",
    twitter: "https://x.com/Cardano_CF",
    description: "The Cardano Foundation is an independent standards body that oversees and supervises the advancement of Cardano.",
  },
  {
    name: "Intersect MBO",
    logo: "https://pbs.twimg.com/profile_images/1717891015577124864/bsFpJ2pN_400x400.jpg",
    website: "https://www.intersectmbo.org/",
    github: "https://github.com/IntersectMBO",
    twitter: "https://x.com/IntersectMBO",
    description: "Intersect is a member-based organization for the Cardano ecosystem, facilitating the development and maintenance of Cardano.",
  },
  {
    name: "IOG",
    logo: "https://pbs.twimg.com/profile_images/1701916662681944064/3e0YWPKU_400x400.jpg",
    website: "https://iog.io/",
    github: "https://github.com/input-output-hk",
    twitter: "https://x.com/InputOutputHK",
    description: "Input Output Global (IOG) is a leading blockchain research and development company, and the engineering force behind Cardano.",
  },
  {
    name: "IOR",
    logo: "https://pbs.twimg.com/profile_images/1701916662681944064/3e0YWPKU_400x400.jpg",
    website: "https://iog.io/",
    github: "https://github.com/input-output-hk",
    twitter: "https://x.com/InputOutputHK",
    description: "Input Output Research (IOR) is the research division of IOG, responsible for the academic and scientific foundations of Cardano.",
  },
  {
    name: "VacuumLabs",
    logo: "https://pbs.twimg.com/profile_images/1356960042766372866/n3JSSgVk_400x400.jpg",
    website: "https://vacuumlabs.com/",
    github: "https://github.com/vacuumlabs",
    twitter: "https://x.com/vacuumlabs",
    description: "Vacuum Labs is a software development company specializing in blockchain and financial technology, with deep expertise in Cardano.",
  },
  {
    name: "AdaStat.net",
    website: "https://adastat.net/",
    twitter: "https://x.com/AdaStatNet",
    description: "AdaStat.net is a Cardano blockchain analytics and statistics platform.",
  },
  {
    name: "GO MAESTRO INC",
    logo: "https://pbs.twimg.com/profile_images/1594783069396963330/S3M2LZYX_400x400.jpg",
    website: "https://www.gomaestro.org/",
    discord: "https://discord.gg/ES2rDhBJpN",
    github: "https://github.com/maestro-org",
    twitter: "https://x.com/GoMaestroOrg",
    description: "Maestro provides enterprise-grade blockchain data and transaction management APIs for the Cardano ecosystem.",
  },
  {
    name: "PyCardano",
    website: "https://pycardano.readthedocs.io/",
    github: "https://github.com/Python-Cardano/pycardano",
    twitter: "https://x.com/PyCardano",
    description: "PyCardano is a standalone Cardano client library written in Python, allowing developers to build Cardano applications in Python.",
  },
  {
    name: "OpShin",
    website: "https://opshin.dev/",
    github: "https://github.com/OpShin",
    twitter: "https://x.com/OpShinDev",
    description: "OpShin is a simple programming language for Smart Contracts on Cardano based on Python.",
  },
  {
    name: "Midgard",
    website: "https://midgard.id/",
    twitter: "https://x.com/MidgardProtocol",
    description: "Midgard is building a Layer 2 optimistic rollup solution for Cardano.",
  },
  {
    name: "Midgard Labs",
    website: "https://midgard.id/",
    twitter: "https://x.com/MidgardProtocol",
    description: "Midgard Labs is the development team behind the Midgard Layer 2 protocol for Cardano.",
  },
  {
    name: "Snek Foundation",
    logo: "https://pbs.twimg.com/profile_images/1685037399777677312/GCDOzCaM_400x400.jpg",
    website: "https://snek.foundation/",
    twitter: "https://x.com/SnekFoundation",
    description: "Snek Foundation is a community-driven organization supporting the Cardano ecosystem.",
  },
  {
    name: "UTxO Alliance",
    website: "https://utxo-alliance.org/",
    twitter: "https://x.com/UTxOAlliance",
    description: "The UTxO Alliance is a consortium of blockchain projects that use UTxO-based accounting models.",
  },
  {
    name: "OSC",
    description: "The Open Source Committee (OSC) promotes open-source development within the Cardano ecosystem.",
  },
  {
    name: "Open Source Committee",
    description: "The Open Source Committee promotes open-source development within the Cardano ecosystem.",
  },
  {
    name: "Product Committee",
    description: "The Product Committee oversees product strategy and roadmap for the Cardano ecosystem.",
  },
];

// Helper function to find a vendor profile by name (case-insensitive, partial match)
export function getVendorProfile(vendorName: string): VendorProfile | undefined {
  const normalized = vendorName.toLowerCase().trim();
  return vendorProfiles.find(p =>
    p.name.toLowerCase() === normalized ||
    normalized.includes(p.name.toLowerCase()) ||
    p.name.toLowerCase().includes(normalized)
  );
}
