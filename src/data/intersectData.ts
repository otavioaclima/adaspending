
export interface Milestone {
  id: string;
  title: string;
  amount: number;
  status: string;
  unlockDate: string;
  description: string;
  acceptanceCriteria?: string;
  evidenceStatus?: string;
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
  status: string;
  description?: string;
  milestones?: Milestone[];
}

// Note: The actual data has been moved to public/data/intersectData.json
// and is loaded asynchronously via the useIntersectData hook.
export const intersectProjects: IntersectProject[] = [];