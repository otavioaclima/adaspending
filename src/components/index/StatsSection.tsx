
import React from 'react';
import { BarChart3, TrendingUp, Award, Users } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { treasuryStats } from '@/data/mockData';

const StatsSection = () => {
  const formattedTotalFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(treasuryStats.totalFundsAvailable);
  
  const formattedAwardedFunds = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(treasuryStats.totalFundsAwarded);

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Treasury Size" value={formattedTotalFunds} icon={<BarChart3 className="h-5 w-5" />} className="bg-cardano-blue/10 border-cardano-blue/30" />
        <StatCard title="Total Funds Awarded" value={formattedAwardedFunds} icon={<TrendingUp className="h-5 w-5" />} className="bg-cardano-teal/10 border-cardano-teal/30" />
        <StatCard title="Funded Proposals" value={treasuryStats.fundedProposals} icon={<Award className="h-5 w-5" />} className="bg-cardano-coral/10 border-cardano-coral/30" />
        <StatCard title="Voter Participation" value={`${treasuryStats.averageVoterParticipation}%`} change="2.1% from last round" positive={true} icon={<Users className="h-5 w-5" />} className="bg-purple-100 border-purple-300" />
      </div>
    </section>
  );
};

export default StatsSection;
