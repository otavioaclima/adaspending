
import { useQuery } from '@tanstack/react-query';
import { VendorProfile } from '../data/vendorProfiles';

export const useVendorProfiles = () => {
  return useQuery<VendorProfile[]>({
    queryKey: ['vendorProfiles'],
    queryFn: async () => {
      const response = await fetch('/data/vendorProfiles.json');
      if (!response.ok) throw new Error('Failed to fetch vendor profiles');
      return response.json();
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
