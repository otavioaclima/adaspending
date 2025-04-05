
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProposalStatus = 'approved' | 'rejected' | 'active' | 'completed' | 'pending';

interface ProposalCardProps {
  id: string;
  title: string;
  category: string;
  requestedAmount: number;
  status: ProposalStatus;
  fundRound: string;
  recipient: string;
  className?: string;
}

const statusStyles: Record<ProposalStatus, string> = {
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  active: 'bg-blue-100 text-blue-800',
  completed: 'bg-purple-100 text-purple-800',
  pending: 'bg-yellow-100 text-yellow-800',
};

const ProposalCard = ({
  id,
  title,
  category,
  requestedAmount,
  status,
  fundRound,
  recipient,
  className,
}: ProposalCardProps) => {
  return (
    <Link to={`/proposals/${id}`} className={cn("block", className)}>
      <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="outline">{fundRound}</Badge>
            <Badge variant="outline" className="ml-2">{category}</Badge>
          </div>
          <Badge className={cn(statusStyles[status])}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        
        <h3 className="mt-2 text-lg font-medium text-gray-900 line-clamp-2">{title}</h3>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{recipient}</span>
          </div>
          <div className="text-cardano-blue font-bold">
            {requestedAmount.toLocaleString()} ADA
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProposalCard;
