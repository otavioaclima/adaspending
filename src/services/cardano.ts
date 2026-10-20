export interface CardanoStats {
  treasury: number;
  circulating: number;
  epoch: number;
  blockTime: string;
  source?: string;
  updatedAt?: string;
  stale?: boolean;
}

export const getCardanoStats = async (): Promise<CardanoStats> => {
  const response = await fetch('/api/v1/cardano/treasury-stats');
  if (!response.ok) throw new Error('Failed to fetch Cardano mainnet statistics');
  return response.json();
};
