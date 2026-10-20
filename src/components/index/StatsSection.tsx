
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart3, TrendingUp, Briefcase, Users, Wallet, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { useIntersectVendorProjects } from '@/hooks/useIntersectVendorProjects';
import { getAdaPrice } from '@/services/market';
import { getCardanoStats } from '@/services/cardano';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t, language } = useLanguage();
  const { data: vendorDirectory } = useIntersectVendorProjects();
  const intersectProjects = vendorDirectory?.projects || [];

  const { data: cardanoStats } = useQuery({
    queryKey: ['cardanoStats'],
    queryFn: getCardanoStats,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 2,
  });

  const { data: adaPrice } = useQuery({
    queryKey: ['adaPrice'],
    queryFn: getAdaPrice,
    refetchInterval: 60000,
    retry: 2,
  });

  const formatADA = (value: number) => {
    return '₳' + new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const totalProjects = intersectProjects.length;
  const uniqueVendors = React.useMemo(() => 
    new Set(intersectProjects.map(p => p.vendor)).size
  , [intersectProjects]);

  const financialSummary = vendorDirectory?.financialSummary;

  const formatNumber = (value: number, decimals: number = 0) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  };

  const formatUSD = (adaValue: number) => {
    if (adaPrice === undefined) return null;
    const usd = adaValue * adaPrice;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(usd);
  };

  const locale = { EN: 'en-US', PT: 'pt-BR', ES: 'es-ES', JP: 'ja-JP' }[language];
  const blockUpdatedAt = cardanoStats?.blockTime
    ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }).format(new Date(cardanoStats.blockTime))
    : null;

  return (
    <section className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard 
          title={t('stats.total_treasury')} 
          value={cardanoStats ? formatADA(cardanoStats.treasury) : '—'} 
          usdValue={cardanoStats ? formatUSD(cardanoStats.treasury) || undefined : undefined}
          icon={<Wallet className="h-5 w-5 text-cardano-blue" />} 
          className="bg-cardano-blue/5 dark:bg-cardano-blue/10 border-cardano-blue/20 h-full" 
          valueClassName="text-cardano-blue dark:text-blue-400"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
        
        <StatCard 
          title={t('stats.tracked_allocation')}
          value={financialSummary ? `₳${formatNumber(financialSummary.totalAllocatedAda)}` : '—'}
          usdValue={financialSummary ? formatUSD(financialSummary.totalAllocatedAda) || undefined : undefined}
          icon={<BarChart3 className="h-5 w-5 text-cardano-blue" />} 
          className="bg-cardano-blue/5 dark:bg-cardano-blue/10 border-cardano-blue/20 h-full" 
          valueClassName="text-cardano-blue dark:text-blue-400"
          tooltipText={t('project.usd_conversion_tooltip')}
        />

        <StatCard 
          title={t('stats.withdrawn_milestone_value')}
          value={financialSummary ? `₳${formatNumber(financialSummary.withdrawnMilestoneAda, 0)}` : '—'}
          usdValue={financialSummary ? formatUSD(financialSummary.withdrawnMilestoneAda) || undefined : undefined}
          icon={<ArrowUpRight className="h-5 w-5 text-orange-500" />} 
          className="bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800/30 h-full" 
          valueClassName="text-orange-600 dark:text-orange-500"
          tooltipText={t('project.usd_conversion_tooltip')}
        />

        <StatCard 
          title={t('stats.not_marked_withdrawn')}
          value={financialSummary ? `₳${formatNumber(financialSummary.remainingMilestoneAda, 0)}` : '—'}
          usdValue={financialSummary ? formatUSD(financialSummary.remainingMilestoneAda) || undefined : undefined}
          icon={<ArrowDownRight className="h-5 w-5 text-green-500" />} 
          className="bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-800/30 h-full" 
          valueClassName="text-green-600 dark:text-green-500"
          tooltipText={t('project.usd_conversion_tooltip')}
        />
        
        <StatCard 
          title={t('stats.total_projects')} 
          value={vendorDirectory ? totalProjects.toString() : '—'}
          icon={<Briefcase className="h-5 w-5 text-cardano-blue" />} 
          className="bg-gray-50 dark:bg-gray-800/40 border-gray-100 dark:border-gray-700 h-full" 
        />

        <StatCard 
          title={t('stats.total_vendors')} 
          value={vendorDirectory ? uniqueVendors.toString() : '—'}
          icon={<Users className="h-5 w-5 text-cardano-teal" />} 
          className="bg-gray-50 dark:bg-gray-800/40 border-gray-100 dark:border-gray-700 h-full" 
        />
      </div>
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400" role="status">
        {cardanoStats ? (
          <>
            {t('stats.data_source')}: {cardanoStats.source} · {t('stats.epoch')} {cardanoStats.epoch}
            {blockUpdatedAt && <> · {t('stats.block_updated')}: <time dateTime={cardanoStats.blockTime}>{blockUpdatedAt} UTC</time></>}
            {cardanoStats.stale && <span className="text-amber-600 dark:text-amber-400"> · {t('stats.stale_data')}</span>}
          </>
        ) : t('stats.data_unavailable')}
      </p>
      {vendorDirectory && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t('vendors.data_source')}: {vendorDirectory.source}
          {vendorDirectory.upstreamUpdatedAt && <> · API response {new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }).format(new Date(vendorDirectory.upstreamUpdatedAt))} UTC</>}
        </p>
      )}
      {vendorDirectory?.sync && vendorDirectory.sync.state !== 'current' && (
        <p className="text-xs text-gray-500 dark:text-gray-400" role="status">
          {vendorDirectory.sync.state === 'delayed'
            ? t('stats.intersect_sync_delayed').replace('{days}', ((vendorDirectory.sync.lagHours || 0) / 24).toFixed(1))
            : t('stats.intersect_sync_unknown')}
        </p>
      )}
      <p className="text-xs text-gray-500 dark:text-gray-400">{t('stats.withdrawn_milestone_note')}</p>
    </section>
  );
};

export default StatsSection;
