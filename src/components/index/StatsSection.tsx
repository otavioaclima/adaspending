import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart3, TrendingUp, Briefcase, Users, Wallet, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { treasuryStats } from '@/data/mockData';
import { intersectProjects } from '@/data/intersectData';
import { getTreasuryAmount } from '@/services/cardanoscan';
import { Skeleton } from '@/components/ui/skeleton';

const StatsSection = () => {
  const { data: cardanoscanTreasury, isLoading: isTreasuryLoading } = useQuery({
    queryKey: ['cardanoscanTreasury'],
    queryFn: getTreasuryAmount,
  });

  const formatADA = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value) + ' ADA';
  };

  const totalProjects = intersectProjects.length;
  const uniqueVendors = new Set(intersectProjects.map(p => p.vendor)).size;

  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Box 1: Total Treasury Size */}
        {isTreasuryLoading ? (
          <Skeleton className="h-[120px] w-full" />
        ) : (
          <StatCard 
            title="Total Treasury Size" 
            value={formatADA(cardanoscanTreasury || 0)} 
            icon={<BarChart3 className="h-5 w-5" />} 
            className="bg-cardano-blue/10 dark:bg-cardano-blue/20 border-cardano-blue/30 dark:border-cardano-blue/40 h-full" 
          />
        )}
        
        {/* Box 2: Total Budget */}
        <StatCard 
          title="Intersect Budget" 
          value="350,000,000 ADA" 
          icon={<TrendingUp className="h-5 w-5" />} 
          className="bg-cardano-teal/10 dark:bg-cardano-teal/20 border-cardano-teal/30 dark:border-cardano-teal/40 h-full" 
        />

        {/* Box 3: Total Spent & Remaining */}
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex-1 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Financial Status</span>
              <Wallet className="h-4 w-4 text-orange-500" />
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <ArrowUpRight className="h-3 w-3 text-orange-500" />
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Total Spent</span>
                </div>
                <p className="text-sm font-black text-orange-600 dark:text-orange-500">₳{treasuryStats.totalSpent.toLocaleString()}</p>
              </div>
              <div className="h-px bg-gray-100 dark:bg-gray-700" />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <ArrowDownRight className="h-3 w-3 text-green-500" />
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Remaining</span>
                </div>
                <p className="text-sm font-black text-green-600 dark:text-green-500">₳{treasuryStats.remainingBudget.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Box 4: Total Projects */}
        <StatCard 
          title="Total Projects" 
          value={totalProjects.toString()} 
          icon={<Briefcase className="h-5 w-5" />} 
          className="bg-cardano-coral/10 dark:bg-cardano-coral/20 border-cardano-coral/30 dark:border-cardano-coral/40 h-full" 
        />

        {/* Box 5: Total Vendors */}
        <StatCard 
          title="Total Vendors" 
          value={uniqueVendors.toString()} 
          icon={<Users className="h-5 w-5" />} 
          className="bg-purple-100/50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-800 h-full" 
        />
      </div>
    </section>
  );
};

export default StatsSection;
