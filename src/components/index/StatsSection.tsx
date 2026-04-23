import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart3, TrendingUp, Award, Users } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { treasuryStats } from '@/data/mockData';
import { getNetworkState, lovelaceToAda } from '@/services/cexplorer';
import { Skeleton } from '@/components/ui/skeleton';

const StatsSection = () => {
  const { data: networkState, isLoading: isNetworkLoading } = useQuery({
    queryKey: ['networkState'],
    queryFn: getNetworkState,
  });

  const { data: cexplorerTreasury, isLoading: isTreasuryLoading } = useQuery({
    queryKey: ['cexplorerTreasury'],
    queryFn: async () => {
      const state = await getNetworkState();
      return lovelaceToAda(state.treasury);
    },
  });

  const formatADA = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value) + ' ADA';
  };
  
  const formattedAwardedFunds = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(treasuryStats.totalFundsAwarded) + ' ADA';

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isTreasuryLoading ? (
          <Skeleton className="h-24 w-full" />
        ) : (
          <StatCard 
            title="Total Treasury Size" 
            value={formatADA(cexplorerTreasury || 0)} 
            icon={<BarChart3 className="h-5 w-5" />} 
            className="bg-cardano-blue/10 border-cardano-blue/30" 
          />
        )}
        
        <StatCard title="Total Funds Awarded" value={formattedAwardedFunds} icon={<TrendingUp className="h-5 w-5" />} className="bg-cardano-teal/10 border-cardano-teal/30" />
        <StatCard title="Funded Proposals" value={treasuryStats.fundedProposals} icon={<Award className="h-5 w-5" />} className="bg-cardano-coral/10 border-cardano-coral/30" />
        
        {isNetworkLoading ? (
          <Skeleton className="h-24 w-full" />
        ) : (
          <StatCard 
            title="ADA Circulating" 
            value={formatADA(lovelaceToAda(networkState?.circulatingSupply || 0))} 
            icon={<Users className="h-5 w-5" />} 
            className="bg-purple-100 border-purple-300" 
          />
        )}
      </div>
    </section>
  );
};

export default StatsSection;
