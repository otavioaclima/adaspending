
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProposalCard from '@/components/ui/ProposalCard';
import { proposals } from '@/data/mockData';

const ProposalsSection = () => {
  // Get recent proposals (active and approved)
  const recentProposals = proposals
    .filter(p => p.status === 'active' || p.status === 'approved')
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 4);

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Recent Proposals</h2>
        <Link to="/awards" className="text-cardano-blue hover:text-cardano-blue/80 flex items-center text-sm font-medium">
          View all proposals <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recentProposals.map(proposal => (
          <ProposalCard 
            key={proposal.id} 
            id={proposal.id} 
            title={proposal.title} 
            category={proposal.category} 
            requestedAmount={proposal.requestedAmount} 
            status={proposal.status} 
            fundRound={proposal.fundRound} 
            recipient={proposal.recipient} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProposalsSection;
