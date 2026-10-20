export interface CexplorerStats {
  treasury: number;
  circulating: number;
  epoch?: number;
  source?: string;
  updatedAt?: string;
}

export const getCexplorerStats = async (): Promise<CexplorerStats> => {
  const response = await fetch('/api/v1/cardano/treasury-stats');
  if (!response.ok) throw new Error('Failed to fetch Cardano treasury stats');
  return response.json();
};
