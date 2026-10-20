
export interface Milestone {
  id: string;
  title: string;
  amount: number;
  status: string;
  unlockDate: string;
  description: string;
  acceptanceCriteria?: string;
  evidenceStatus?: string;
  withdrawalTime?: string | null;
  withdrawalTxHash?: string | null;
  evidence?: {
    title: string;
    link: string;
    transactionHash?: string;
    transactionLink?: string;
  };
}

export interface IntersectProject {
  id: string;
  projectName: string;
  vendor: string;
  totalAmount: number;
  amountSpent: number;
  amountRemaining?: number;
  status: string;
  description?: string;
  milestones?: Milestone[];
  fundedAt?: string | null;
  fundTxHash?: string | null;
  lastEventAt?: string | null;
  vendorAddress?: string;
  vendorIdentitySource?: string;
  officialProjectId?: string;
  contractInstance?: string | null;
}

// Intersect project data is fetched from the live same-origin API.
export const intersectProjects: IntersectProject[] = [];
