import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart3, TrendingUp, Briefcase, Users, Wallet, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { treasuryStats } from '@/data/mockData';
import { intersectProjects } from '@/data/intersectData';
import { getAdaPrice } from '@/services/cardanoscan';
import { getCexplorerStats } from '@/services/cexplorer';
import { Skeleton } from '@/components/ui/skeleton';

import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  const { data: cexplorerStats } = useQuery({
    queryKey: ['cexplorerStats'],
    queryFn: getCexplorerStats,
    initialData: {
      treasury: 1621148478,
      circulating: 35948271034
    }
  });

  const { data: adaPrice } = useQuery({
    queryKey: ['adaPrice'],
    queryFn: getAdaPrice,
    initialData: 0.62,
    refetchInterval: 60000, // Refresh every minute
  });

  const formatADA = (value: number) => {
    return '₳' + new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const totalProjects = intersectProjects.length;
  const uniqueVendors = new Set(intersectProjects.map(p => p.vendor)).size;
  // Treasury constants - Updated to match official Intersect financial reports
  const INTERSECT_TOTAL_BUDGET = 345531529;
  const BASELINE_SPENT = 168789504; // Baseline spent funds outside of tracked projects
  
  // Calculate real financial stats from intersectProjects
  const trackedSpent = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0);
  const totalSpent = BASELINE_SPENT + trackedSpent;
  const remainingBudget = INTERSECT_TOTAL_BUDGET - totalSpent;

  const formatNumber = (value: number, decimals: number = 0) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  };

  const formatUSD = (adaValue: number) => {
    if (!adaPrice) return null;
    const usd = adaValue * adaPrice;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(usd);
  };

  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Box 1: Total Treasury Size */}
        <StatCard 
          title={t('stats.total_treasury')} 
          value={formatADA(cexplorerStats?.treasury || 0)} 
          usdValue={formatUSD(cexplorerStats?.treasury || 0) || undefined}
          icon={<Wallet className="h-5 w-5 text-cardano-blue" />} 
          className="bg-cardano-blue/5 dark:bg-cardano-blue/10 border-cardano-blue/20 h-full" 
          valueClassName="text-cardano-blue dark:text-blue-400"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
        
        {/* Box 2: Intersect Budget */}
        <StatCard 
          title={t('stats.intersect_budget')} 
          value={`₳${formatNumber(INTERSECT_TOTAL_BUDGET)}`} 
          usdValue={formatUSD(INTERSECT_TOTAL_BUDGET) || undefined}
          icon={<BarChart3 className="h-5 w-5 text-cardano-blue" />} 
          className="bg-cardano-blue/5 dark:bg-cardano-blue/10 border-cardano-blue/20 h-full" 
          valueClassName="text-cardano-blue dark:text-blue-400"
          tooltipText={t('project.usd_conversion_tooltip')}
        />

        {/* Box 3: Total Spent */}
        <StatCard 
          title={t('stats.total_spent')} 
          value={`₳${formatNumber(totalSpent, 0)}`} 
          usdValue={formatUSD(totalSpent) || undefined}
          icon={<ArrowUpRight className="h-5 w-5 text-orange-500" />} 
          className="bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800/30 h-full" 
          valueClassName="text-orange-600 dark:text-orange-500"
          tooltipText={t('project.usd_conversion_tooltip')}
        />

        {/* Box 4: Remaining Budget */}
        <StatCard 
          title={t('stats.remaining_budget')} 
          value={`₳${formatNumber(remainingBudget, 0)}`} 
          usdValue={formatUSD(remainingBudget) || undefined}
          icon={<ArrowDownRight className="h-5 w-5 text-green-500" />} 
          className="bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-800/30 h-full" 
          valueClassName="text-green-600 dark:text-green-500"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
        
        {/* Box 5: Total Projects */}
        <StatCard 
          title={t('stats.total_projects')} 
          value={totalProjects.toString()} 
          icon={<Briefcase className="h-5 w-5 text-cardano-blue" />} 
          className="bg-gray-50 dark:bg-gray-800/40 border-gray-100 dark:border-gray-700 h-full" 
        />

        {/* Box 6: Total Vendors */}
        <StatCard 
          title={t('stats.total_vendors')} 
          value={uniqueVendors.toString()} 
          icon={<Users className="h-5 w-5 text-cardano-teal" />} 
          className="bg-gray-50 dark:bg-gray-800/40 border-gray-100 dark:border-gray-700 h-full" 
        />
      </div>
    </section>
  );
};

export default StatsSection;
