export interface TreasuryDonation {
  epoch: number;
  txHash: string;
  blockTime: string;
  lovelace: string;
}

export interface TreasuryDonationEpoch {
  epoch: number;
  donationCount: number;
  totalLovelace: string;
}

export interface TreasuryDonationsData {
  currentEpoch: number;
  firstEpoch: number;
  lastEpoch: number;
  totalLovelace: string;
  averagePerEpochLovelace: string;
  donationCount: number;
  epochs: TreasuryDonationEpoch[];
  donations: TreasuryDonation[];
  source: string;
  updatedAt: string;
  stale: boolean;
}

export const getTreasuryDonations = async (): Promise<TreasuryDonationsData> => {
  const response = await fetch('/api/v1/cardano/treasury-donations');
  if (!response.ok) throw new Error('Failed to fetch Cardano treasury donations');
  return response.json();
};
