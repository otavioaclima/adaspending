
import { useIntersectVendorProjects } from './useIntersectVendorProjects';

export const useIntersectData = () => {
  const query = useIntersectVendorProjects();
  return { ...query, data: query.data?.projects };
};
