
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {/* Treasury Size Card */}
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('teaser.stats.total_size')}</h3>
              <BarChart3 className="h-5 w-5 text-cardano-blue" />
            </div>
            <div className="space-y-1">
              {isTreasuryLoading ? (
                <Skeleton className="h-8 w-24" />
              ) : (
                <>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">₳{formatNumber(cardanoscanTreasury || 0)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{formatCurrency(cardanoscanTreasury || 0)}</p>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Total Funds Awarded Card */}
        <Card className="bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('teaser.stats.total_awarded')}</h3>
              <TrendingUp className="h-5 w-5 text-cardano-teal" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₳{formatNumber(INTERSECT_TOTAL_BUDGET)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{formatCurrency(INTERSECT_TOTAL_BUDGET)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Proposals Card */}
        <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('teaser.stats.total_proposals')}</h3>
              <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(totalProjects)}</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Vendors Card */}
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('stats.total_vendors')}</h3>
              <Users className="h-5 w-5 text-cardano-coral" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">38</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsSection;

