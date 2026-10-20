import { useQuery } from '@tanstack/react-query';
import { IntersectProject } from '../data/intersectData';

export interface IntersectVendorDirectoryData {
  projects: IntersectProject[];
  financialSummary: {
    totalAllocatedAda: number;
    withdrawnMilestoneAda: number;
    remainingMilestoneAda: number;
  };
  source: string;
  updatedAt: string;
  upstreamUpdatedAt?: string | null;
  stale: boolean;
}

export const useIntersectVendorProjects = () => {
  return useQuery<IntersectVendorDirectoryData>({
    queryKey: ['intersectVendorProjects'],
    queryFn: async () => {
      const response = await fetch('/api/v1/data/intersect-vendor-projects');
      if (!response.ok) throw new Error('Failed to fetch live Intersect vendor projects');
      return response.json();
    },
    staleTime: 15 * 60 * 1000,
    refetchInterval: 15 * 60 * 1000,
  });
};
