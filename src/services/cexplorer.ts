
export interface CexplorerNetworkStats {
  treasury: string;
  reserves: string;
  circulating_supply?: string;
  total_supply?: string;
}

const API_KEY = import.meta.env.VITE_CEXPLORER_API_KEY;
const BASE_URL = 'https://api.cexplorer.io/v1';

const fetchCexplorer = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'x-api-key': API_KEY || '',
    },
  });

  if (!response.ok) {
    throw new Error(`Cexplorer API error: ${response.statusText}`);
  }

  return await response.json();
};

export const getTreasuryAmount = async (): Promise<number> => {
  try {
    const data = await fetchCexplorer('/network/pots');
    const treasuryLovelace = data.data?.treasury || 0;
    return Number(treasuryLovelace) / 1000000;
  } catch (error) {
    console.error('Error fetching treasury from Cexplorer:', error);
    throw error;
  }
};

export const getNetworkState = async () => {
  try {
    const potsData = await fetchCexplorer('/network/pots');
    const statsData = await fetchCexplorer('/network/stats');
    
    return {
      treasury: potsData.data?.treasury || '0',
      reserves: potsData.data?.reserves || '0',
      circulatingSupply: statsData.data?.circulating_supply || '0',
      totalSupply: statsData.data?.total_supply || '0',
      activeStake: statsData.data?.active_stake || '0',
      liveStake: statsData.data?.live_stake || '0',
    };
  } catch (error) {
    console.error('Error fetching network state from Cexplorer:', error);
    throw error;
  }
};

export const lovelaceToAda = (lovelace: string | number): number => {
  return Number(lovelace) / 1000000;
};
