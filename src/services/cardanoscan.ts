
export interface NetworkState {
  treasury: string;
  reserves: string;
  circulatingSupply: string;
  totalSupply: string;
  activeStake: string;
  liveStake: string;
}

const API_KEY = import.meta.env.VITE_CARDANOSCAN_API_KEY;
const BASE_URL = 'https://api.cardanoscan.io/api/v1';

export const getNetworkState = async (): Promise<NetworkState> => {
  if (!API_KEY) {
    console.warn('VITE_CARDANOSCAN_API_KEY is not defined');
  }

  const response = await fetch(`${BASE_URL}/network/state`, {
    headers: {
      'apiKey': API_KEY || '',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch network state from Cardanoscan');
  }

  const data = await response.json();
  return data;
};

export const lovelaceToAda = (lovelace: string | number): number => {
  return Number(lovelace) / 1000000;
};
