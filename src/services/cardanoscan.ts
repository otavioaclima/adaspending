
export interface NetworkState {
  treasury: string;
  reserves: string;
  circulatingSupply: string;
  totalSupply: string;
  epoch?: number;
  blockTime?: string;
  source?: string;
  updatedAt?: string;
  stale?: boolean;
}

export const getNetworkState = async (): Promise<NetworkState> => {
  const response = await fetch('/api/v1/cardano/network-state');
  if (!response.ok) {
    throw new Error('Failed to fetch Cardano mainnet network state');
  }
  return response.json();
};

export const lovelaceToAda = (lovelace: string | number): number => {
  return Number(lovelace) / 1000000;
};

export const getTreasuryAmount = async (): Promise<number> => {
  try {
    const networkState = await getNetworkState();
    return lovelaceToAda(networkState.treasury);
  } catch (error) {
    console.error('Error fetching treasury data:', error);
    return 0;
  }
};

export const getAdaCirculating = async (): Promise<number> => {
  try {
    const networkState = await getNetworkState();
    return lovelaceToAda(networkState.circulatingSupply);
  } catch (error) {
    console.error('Error fetching circulating supply:', error);
    return 0;
  }
};

export const getAdaPrice = async (): Promise<number> => {
  const response = await fetch('/api/v1/markets/ada-price');
  if (!response.ok) throw new Error('Failed to fetch ADA price');
  const data = await response.json();
  return data.usd;
};
