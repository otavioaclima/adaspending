
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

// Note: The actual data has been moved to public/data/vendorProfiles.json
// and is loaded asynchronously via the useVendorProfiles hook.
export const vendorProfiles: VendorProfile[] = [];

// Helper function to find a vendor profile by name (case-insensitive, partial match)
export function getVendorProfile(profiles: VendorProfile[], vendorName: string): VendorProfile | undefined {
  if (!profiles) return undefined;
  const normalized = vendorName.toLowerCase().trim();
  return profiles.find(p =>
    p.name.toLowerCase() === normalized ||
    normalized.includes(p.name.toLowerCase()) ||
    p.name.toLowerCase().includes(normalized)
  );
}
