
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart3, TrendingUp, Users, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTreasuryAmount, getAdaPrice } from '@/services/cardanoscan';
import { intersectProjects } from '@/data/intersectData';
import { Skeleton } from '@/components/ui/skeleton';

const StatsSection = () => {
  const { t, language } = useLanguage();

  const { data: cardanoscanTreasury, isLoading: isTreasuryLoading } = useQuery({
    queryKey: ['cardanoscanTreasury'],
    queryFn: getTreasuryAmount,
  });

  const { data: adaPrice } = useQuery({
    queryKey: ['adaPrice'],
    queryFn: getAdaPrice,
    initialData: 0.45,
    refetchInterval: 60000,
  });

  // Calculate real financial stats from intersectProjects
  const INTERSECT_TOTAL_BUDGET = 345531529;
  const totalProjects = intersectProjects.length;
  const fundedProposals = intersectProjects.filter(p => p.status !== 'Paused').length;

  // Format numbers with commas
  const formatNumber = (num: number | undefined | null) => {
    if (num === undefined || num === null || isNaN(num)) return '0';
    return num.toLocaleString(language === 'JP' ? 'ja-JP' : language === 'PT' ? 'pt-BR' : language === 'ES' ? 'es-ES' : 'en-US', { maximumFractionDigits: 0 });
  };

  // Format currency
  const formatCurrency = (adaAmount: number) => {
    const usdAmount = adaPrice ? adaAmount * adaPrice : 0;
    return new Intl.NumberFormat(language === 'JP' ? 'ja-JP' : language === 'PT' ? 'pt-BR' : language === 'ES' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(usdAmount);
  };

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Treasury Size Card */}
        <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-cardano-blue/20 transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-cardano-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t('teaser.stats.total_size')}</h3>
              <div className="p-2 bg-cardano-blue/10 rounded-xl">
                <BarChart3 className="h-5 w-5 text-cardano-blue" />
              </div>
            </div>
            <div className="space-y-1">
              {isTreasuryLoading ? (
                <Skeleton className="h-10 w-32 bg-gray-200/50 dark:bg-gray-700/50" />
              ) : (
                <>
                  <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">₳{formatNumber(cardanoscanTreasury || 0)}</p>
                  <p className="text-sm font-bold text-gray-500/80 dark:text-gray-400/80">{formatCurrency(cardanoscanTreasury || 0)}</p>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Total Funds Awarded Card */}
        <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t('teaser.stats.total_awarded')}</h3>
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">₳{formatNumber(INTERSECT_TOTAL_BUDGET)}</p>
              <p className="text-sm font-bold text-gray-500/80 dark:text-gray-400/80">{formatCurrency(INTERSECT_TOTAL_BUDGET)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Proposals Card */}
        <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t('teaser.stats.total_proposals')}</h3>
              <div className="p-2 bg-purple-500/10 rounded-xl">
                <FileText className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{formatNumber(totalProjects)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Vendors Card */}
        <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-orange-500/20 transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t('stats.total_vendors')}</h3>
              <div className="p-2 bg-orange-500/10 rounded-xl">
                <Users className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">38</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsSection;

