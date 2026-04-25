const BASE_URL = 'https://api-mainnet-stage.cexplorer.io/v1';

export interface CexplorerStats {
  treasury: number;
  circulating: number;
}

/**
 * Fetches treasury and circulating supply data from Cexplorer API.
 * 
 * Rules applied:
 * - Treasury size and Circulating supply only from Cexplorer.
 * - ADA Circulating = 45,000,000,000 - (Reserves / 1,000,000)
 */
export const getCexplorerStats = async (): Promise<CexplorerStats> => {
  try {
    // 1. Get block tip to find current epoch
    const tipResponse = await fetch(`${BASE_URL}/block/tip`);
    if (!tipResponse.ok) throw new Error('Failed to fetch block tip');
    const tipData = await tipResponse.json();
    const currentEpoch = tipData.data.tip.data[0].epoch_no;

    // 2. Get stats for current epoch
    const statsResponse = await fetch(`${BASE_URL}/epoch/stats?no=${currentEpoch}`);
    if (!statsResponse.ok) throw new Error(`Failed to fetch stats for epoch ${currentEpoch}`);
    const statsData = await statsResponse.json();
    const pots = statsData.data.pots;

    // Conversion from Lovelace to ADA
    const treasury = pots.treasury / 1000000;
    const reserves = pots.reserves / 1000000;
    
    // ADA Circulating = 45,000,000,000 - (Reserves / 1,000,000)
    const circulating = 45000000000 - reserves;

    return {
      treasury,
      circulating,
    };
  } catch (error) {
    console.error('Error fetching Cexplorer stats:', error);
    // Fallback values or rethrow
    throw error;
  }
};
