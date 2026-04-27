
import { useQuery } from '@tanstack/react-query';
import { IntersectProject } from '../data/intersectData';

export const useIntersectData = () => {
  return useQuery<IntersectProject[]>({
    queryKey: ['intersectData'],
    queryFn: async () => {
      const response = await fetch('/data/intersectData.json');
      if (!response.ok) throw new Error('Failed to fetch intersect data');
      return response.json();
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
