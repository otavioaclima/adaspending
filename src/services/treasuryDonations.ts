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

export interface AllTimeTreasuryDonations {
  firstEpoch: number;
  lastEpoch: number;
  totalLovelace: string;
  epochsWithDonations: number;
  source: string;
  updatedAt: string;
  stale: boolean;
}

export const allTimeTreasuryDonationsSnapshot: AllTimeTreasuryDonations = {
  firstEpoch: 507,
  lastEpoch: 662,
  totalLovelace: '21997105500997',
  epochsWithDonations: 42,
  source: 'Koios · Cardano mainnet',
  updatedAt: '2026-10-20T14:15:48.719Z',
  stale: false,
};

// Small, verified recent-epoch snapshot lets the page render immediately while
// React Query refreshes it from the live Cardano data API in the background.
export const treasuryDonationsSnapshot: TreasuryDonationsData = {
  currentEpoch: 662,
  firstEpoch: 653,
  lastEpoch: 662,
  totalLovelace: '23847286',
  averagePerEpochLovelace: '2384728',
  donationCount: 1,
  epochs: [
    { epoch: 653, donationCount: 0, totalLovelace: '0' },
    { epoch: 654, donationCount: 0, totalLovelace: '0' },
    { epoch: 655, donationCount: 0, totalLovelace: '0' },
    { epoch: 656, donationCount: 0, totalLovelace: '0' },
    { epoch: 657, donationCount: 0, totalLovelace: '0' },
    { epoch: 658, donationCount: 0, totalLovelace: '0' },
    { epoch: 659, donationCount: 0, totalLovelace: '0' },
    { epoch: 660, donationCount: 0, totalLovelace: '0' },
    { epoch: 661, donationCount: 0, totalLovelace: '0' },
    { epoch: 662, donationCount: 1, totalLovelace: '23847286' },
  ],
  donations: [{
    epoch: 662,
    txHash: '922c2c350d7714c4b375da84293d7c03f8615b861044b483687c2ed61089a8b1',
    blockTime: '2026-10-19T17:11:53.000Z',
    lovelace: '23847286',
  }],
  source: 'Koios · Cardano mainnet',
  updatedAt: '2026-10-20T15:37:51.389Z',
  stale: false,
};

export const getTreasuryDonations = async (): Promise<TreasuryDonationsData> => {
  const response = await fetch('/api/v1/cardano/treasury-donations');
  if (!response.ok) throw new Error('Failed to fetch Cardano treasury donations');
  return response.json();
};

export const getAllTimeTreasuryDonations = async (): Promise<AllTimeTreasuryDonations> => {
  const response = await fetch('/api/v1/cardano/treasury-donations/all-time');
  if (!response.ok) throw new Error('Failed to fetch all-time Cardano treasury donations');
  return response.json();
};
