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
  telegram?: string;     // Telegram group/channel URL
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
    description: "All-in-one API for Cardano & IPFS. Built on Open Source",
  },
  {
    name: "MeshJS",
    logo: "https://pbs.twimg.com/profile_images/1919799058471796736/IgxbWqlZ_400x400.jpg",
    website: "https://meshjs.dev/",
    github: "https://github.com/MeshJS",
    twitter: "https://x.com/meshsdk",
    description: "Open source tools for devs building on Cardano & BTC - Born in Cardano, here to stay, here to build.",
  },
  {
    name: "TxPipe",
    logo: "https://pbs.twimg.com/profile_images/1648325976693063682/ain2rie9_400x400.png",
    website: "https://txpipe.io/",
    github: "https://github.com/txpipe",
    twitter: "https://x.com/txpipe_tools",
    description: "OpenSource tools and infrastructure for Cardano blockchain developers. We focus on integrating on-chain data with off-chain infrastructure.",
  },
  {
    name: "CardanoScan",
    logo: "https://pbs.twimg.com/profile_images/1288504899018174465/y6F-zEIW_400x400.jpg",
    website: "https://cardanoscan.io/",
    twitter: "https://x.com/cardanoscanio",
    description: "Cardano blockchain explorer.",
  },
  {
    name: "Cardano Foundation",
    logo: "https://pbs.twimg.com/profile_images/1765479184586166272/cziOm5PO_400x400.png",
    website: "https://cardanofoundation.org/",
    github: "https://github.com/cardano-foundation",
    twitter: "https://x.com/Cardano_CF",
    description: "Empowering the Cardano ecosystem and providing blockchain solutions for enterprises. Not-for-profit Swiss foundation.",
  },
  {
    name: "Intersect MBO",
    logo: "https://pbs.twimg.com/profile_images/1915364427215347712/Em_pojBT_400x400.png",
    website: "https://www.intersectmbo.org/",
    github: "https://github.com/IntersectMBO",
    twitter: "https://x.com/IntersectMBO",
    description: "A member-based organization for the Cardano ecosystem. Shaping the future of Cardano through open development, and supporting on-chain governance.",
  },
  {
    name: "Input Output Group",
    logo: "https://pbs.twimg.com/profile_images/1996963733072142336/xZXhikSs_400x400.jpg",
    website: "https://iog.io/",
    github: "https://github.com/input-output-hk",
    twitter: "https://x.com/IOGroup",
    description: "A Web3 venture studio Cascading Disruption. We build research-based products, foster frontier tech, and invest in projects that empower communities globally.",
  },
  {
    name: "IOR",
    logo: "https://pbs.twimg.com/profile_images/1996963733072142336/xZXhikSs_400x400.jpg",
    website: "https://iog.io/",
    github: "https://github.com/input-output-hk",
    twitter: "https://x.com/IOGroup",
    description: "Input Output Research (IOR) is the research division of IOG, responsible for the academic and scientific foundations of Cardano.",
  },
  {
    name: "VacuumLabs",
    logo: "https://pbs.twimg.com/profile_images/1453652153483079684/OZau3P8g_400x400.jpg",
    website: "https://vacuumlabs.com/",
    github: "https://github.com/vacuumlabs",
    twitter: "https://x.com/vacuumlabs",
    description: "Agile engineering teams and product designers for your fintech, online marketplace or digital product.",
  },
  {
    name: "AdaStat.net",
    logo: "https://pbs.twimg.com/profile_images/1601853682680840197/0olJJGNf_400x400.jpg",
    website: "https://adastat.net/",
    twitter: "https://x.com/ada_stat",
    description: "AdaStat.net is a Cardano blockchain analytics and statistics platform.",
  },
  {
    name: "Maestro",
    logo: "https://pbs.twimg.com/profile_images/1958050372729376768/MOgDR6OC_400x400.jpg",
    website: "https://www.gomaestro.org/",
    discord: "https://discord.gg/ES2rDhBJpN",
    github: "https://github.com/maestro-org",
    twitter: "https://x.com/GoMaestroOrg",
    description: "Building the banking rails of tomorrow. Bitcoin-native, onchain financial infrastructure for institutions, custodians, and miners.",
  },
  {
    name: "PyCardano",
    logo: "https://pbs.twimg.com/profile_images/1588038965885431811/wP_kibLj_400x400.jpg",
    website: "https://pycardano.readthedocs.io/",
    github: "https://github.com/Python-Cardano/pycardano",
    twitter: "https://x.com/PyCardano",
    description: "Write Cardano apps in Python.",
  },
  {
    name: "OpShin",
    logo: "https://pbs.twimg.com/profile_images/1633452582311010305/Klaxb8DA_400x400.jpg",
    website: "https://opshin.dev/",
    github: "https://github.com/OpShin",
    twitter: "https://x.com/OpShinDev",
    description: "Cardano Smart Contracts in Python. You want it. You buidl it.",
  },
  {
    name: "Midgard",
    logo: "https://pbs.twimg.com/profile_images/1860687097209692160/B3sFGqf8_400x400.jpg",
    website: "https://midgard.id/",
    twitter: "https://x.com/MidgardProtocol",
    description: "Midgard is building a Layer 2 optimistic rollup solution for Cardano.",
  },
  {
    name: "Midgard Labs",
    website: "https://midgard.id/",
    twitter: "https://x.com/MidgardProtocol",
    description: "Optimistic Rollup Layer2 | Dedicated to scaling Cardano.",
  },
  {
    name: "Snek Foundation",
    logo: "https://pbs.twimg.com/profile_images/2040094963178901504/8hlcOMHQ_400x400.jpg",
    website: "https://snek.foundation/",
    twitter: "https://x.com/snek",
    description: "The Snek Foundation is dedicated to managing and supporting the Snek ecosystem.",
  },
  {
    name: "UTxO Alliance",
    logo: "https://pbs.twimg.com/profile_images/1934592285389279232/uuOPg_he_400x400.jpg",
    website: "https://utxo-alliance.org/",
    twitter: "https://x.com/UTxOAlliance",
    description: "The UTXO Alliance is created to kickstart collaboration with individuals and organizations working to make the UTXO model more scalable, secure & interoperable.",
  },
  {
    name: "Open Source Committee (OSC)",
    logo: "https://pbs.twimg.com/media/GZ69gWaXsAAzJZq?format=jpg&name=large",
    website: "https://opensourcecommittee.docs.intersectmbo.org/",
    twitter: "https://x.com/UTxOAlliance",
    email: "open-source-committee@intersectmbo.org",
    description: "The Open Source Committee promotes open-source development within the Cardano ecosystem.",
  },
  {
    name: "Project Catalyst",
    logo: "https://pbs.twimg.com/profile_images/1780224211908243456/eh6xRQ6j_400x400.jpg",
    website: "https://projectcatalyst.io/",
    twitter: "https://x.com/Catalyst_onX",
    telegram: "https://t.me/cardanocatalyst",
    discord: "https://discord.gg/2RnUtK8",
    description: "🌎Driving decentralized ecosystem growth through tools and infrastructure to empower global communities. ➡ Discover ➡ Vote ➡ Fund innovative ideas",
  },
  {
    name: "Cardano Builder DAO",
    logo: "https://pbs.twimg.com/profile_images/1912287754903265280/p0Lw5iWI_400x400.jpg",
    website: "https://buildingoncardano.io/",
    twitter: "https://x.com/builder__dao",
    description: "Enabling Cardano Builders to realize their visions.",
  },
  {
    name: "Anzens",
    logo: "https://pbs.twimg.com/profile_images/1593218378818166785/-xCmF5Dj_400x400.jpg",
    website: "https://www.anzens.com/",
    twitter: "https://x.com/AnzensOfficial",
    email: "info@anzens.com",
    description: "Issuer of USDA, a fully reserved stablecoin built for Cardano. Enabling digital dollar transactions with compliance and security in mind.",
  },
  {
    name: "Flowdesk",
    logo: "https://pbs.twimg.com/profile_images/2037245250725425153/OhACb8Qm_400x400.png",
    website: "https://flowdesk.co/",
    twitter: "https://x.com/flowdesk_co",
    email: "team@flowdesk.co",
    description: "Full-service digital asset trading and technology firm. Market Making. OTC Trading.",
  },
  {
    name: "Eryx",
    logo: "https://pbs.twimg.com/profile_images/1681015471825383426/xnGsIrmG_400x400.jpg",
    website: "https://eryx.co/",
    twitter: "https://x.com/eryxcoop",
    description: "We are an Argentinian cooperative specializing in software development, computer vision, and cryptography. We empower through technology.",
  },
  {
    name: "Lantr",
    logo: "https://pbs.twimg.com/profile_images/1936116387329576960/Nwq_Q_wb_400x400.jpg",
    website: "https://lantr.io/",
    twitter: "https://x.com/lantr_io",
    discord: "https://discord.com/invite/B6tXmBzhTn",
    email: "contact@lantr.io",
    github: "https://github.com/lantr-io",
    description: "Blockchain R&D Lab | Our products: Scalus application platform · Bifrost Bitcoin-Cardano bridge · Vela decentralised stablecoin",
  },
  {
    name: "NFTCDN",
    logo: "https://pbs.twimg.com/profile_images/1973858188379189248/imD1lYqM_400x400.jpg",
    website: "https://nftcdn.io/",
    twitter: "https://twitter.com/nftcdn_io",
    discord: "https://discord.nftcdn.io/",
    github: "https://github.com/nftcdn",
    description: "We streamline displaying Cardano Native Assets (NFTs & FTs) on your website/app allowing you to focus on the success of your core products!",
  },
  {
    name: "Supplyoneers (DiscoverCardano)",
    logo: "https://pbs.twimg.com/profile_images/2035143275384860672/Ha4v4qQp_400x400.jpg",
    website: "https://discovercardano.io/",
    twitter: "https://x.com/DiscoverCardano",
    discord: "https://discord.gg/UZC8hCgJjq",
    telegram: "https://t.me/+YQckuHEkAGQyMGM0",
    description: "Our mission is to raise awareness and adoption of the Cardano ecosystem.",
  },
  {
    name: "Vellum Labs",
    logo: "https://pbs.twimg.com/profile_images/1933413044714954752/7cpgQJUA_400x400.jpg",
    twitter: "https://x.com/vellumlabs",
    description: "We are building on the hottest blockchain ever. What else but hot projects.",
  },
  {
    name: "Tastenkunst GmbH",
    logo: "https://pbs.twimg.com/profile_images/473768847107825664/XGFUvg1H_400x400.png",
    website: "https://tastenkunst.com/",
    twitter: "https://x.com/tastenkunst",
    description: "Interactive development studio from Leipzig.",
  },
  {
    name: "zkFold",
    logo: "https://pbs.twimg.com/profile_images/1980974097514340352/oR3lTlMb_400x400.jpg",
    website: "https://zkfold.io/",
    twitter: "https://x.com/zkFold",
    email: "info@zkfold.io",
    github: "https://github.com/zkFold",
    description: "Blockchain infrastructure company.",
  },
  {
    name: "Cardano Product Committee (CPC)",
    logo: "https://pbs.twimg.com/profile_images/1897655672277254144/PRaX21vV_400x400.jpg",
    website: "https://productcommittee.docs.intersectmbo.org/",
    twitter: "https://x.com/IntersectCPC",
    description: "The Cardano Product Committee of Intersect aims to help connect the community by facilitating processes to create a shared vision and shared roadmap.",
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
