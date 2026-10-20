import { useQuery } from '@tanstack/react-query';
import { CalendarDays, Coins, ExternalLink, Heart, RefreshCw, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLanguage } from '@/contexts/LanguageContext';
import { allTimeTreasuryDonationsSnapshot, getAllTimeTreasuryDonations, getTreasuryDonations, treasuryDonationsSnapshot } from '@/services/treasuryDonations';

const localeForLanguage: Record<string, string> = {
  EN: 'en-US',
  PT: 'pt-BR',
  ES: 'es-ES',
  JP: 'ja-JP',
};

const formatAda = (lovelace: string, locale: string) =>
  new Intl.NumberFormat(locale, { maximumFractionDigits: 6 }).format(Number(lovelace) / 1_000_000);

const TreasuryDonations = () => {
  const { language, t } = useLanguage();
  const locale = localeForLanguage[language] || 'en-US';
  const query = useQuery({
    queryKey: ['treasuryDonations'],
    queryFn: getTreasuryDonations,
    initialData: treasuryDonationsSnapshot,
    initialDataUpdatedAt: 0,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });
  const allTimeQuery = useQuery({
    queryKey: ['treasuryDonationsAllTime'],
    queryFn: getAllTimeTreasuryDonations,
    initialData: allTimeTreasuryDonationsSnapshot,
    initialDataUpdatedAt: 0,
    staleTime: 6 * 60 * 60 * 1000,
    refetchInterval: 6 * 60 * 60 * 1000,
    retry: 1,
  });
  const data = query.data;
  const currentEpochTotal = data?.epochs.find((epoch) => epoch.epoch === data.currentEpoch)?.totalLovelace || '0';
  const previousEpochTotal = data?.epochs.find((epoch) => epoch.epoch === data.currentEpoch - 1)?.totalLovelace || '0';

  const stats = [
    { title: t('donations.all_time_total'), value: allTimeQuery.data ? `₳${formatAda(allTimeQuery.data.totalLovelace, locale)}` : '—', detail: allTimeQuery.isError ? t('donations.total_refresh_failed') : allTimeQuery.isFetching ? t('donations.total_refreshing') : t('donations.all_epochs').replace('{first}', String(allTimeQuery.data.firstEpoch)).replace('{last}', String(allTimeQuery.data.lastEpoch)), icon: Coins, color: 'text-emerald-600 dark:text-emerald-400' },
    { title: t('donations.current_epoch'), value: data ? `₳${formatAda(currentEpochTotal, locale)}` : '—', detail: data ? `${t('donations.epoch')} ${data.currentEpoch}` : '', icon: Heart, color: 'text-blue-600 dark:text-blue-400' },
    { title: t('donations.previous_epoch'), value: data ? `₳${formatAda(previousEpochTotal, locale)}` : '—', detail: data ? `${t('donations.epoch')} ${Math.max(0, data.currentEpoch - 1)}` : '', icon: TrendingUp, color: 'text-indigo-600 dark:text-indigo-400' },
    { title: t('donations.average_epoch'), value: data ? `₳${formatAda(data.averagePerEpochLovelace, locale)}` : '—', detail: data ? t('donations.epochs_included').replace('{count}', String(data.epochs.length)) : '', icon: CalendarDays, color: 'text-amber-600 dark:text-amber-400' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
            <Heart className="h-6 w-6 fill-current" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('donations.title')}</h1>
        </div>
        <p className="max-w-3xl text-gray-600 dark:text-gray-400">{t('donations.description')}</p>
      </div>

      {query.isLoading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => <Card key={stat.title} className="h-36 animate-pulse" />)}
        </div>
      ) : query.isError && !data ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="text-gray-600 dark:text-gray-300">{t('donations.load_error')}</p>
            <Button onClick={() => query.refetch()} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />{t('donations.retry')}
            </Button>
          </CardContent>
        </Card>
      ) : data ? (
        <>
          {(data.stale || query.isError || allTimeQuery.data?.stale || allTimeQuery.isError) && (
            <p className="mb-4 text-xs leading-5 text-gray-500 dark:text-gray-400" role="status">
              {t('donations.stale_notice')}
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="dark:border-gray-800 dark:bg-gray-800/40">
                  <CardHeader className="pb-2">
                    <CardTitle className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${stat.color}`}>
                      <Icon className="h-4 w-4" />{stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{stat.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="dark:border-gray-800 dark:bg-gray-800/40">
            <CardHeader>
              <CardTitle className="dark:text-white">{t('donations.history_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              {data.donations.length ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('donations.date')}</TableHead>
                        <TableHead>{t('donations.epoch')}</TableHead>
                        <TableHead>{t('donations.tx_id')}</TableHead>
                        <TableHead className="text-right">{t('donations.amount')}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.donations.map((donation) => (
                        <TableRow key={donation.txHash}>
                          <TableCell className="whitespace-nowrap text-gray-600 dark:text-gray-300">
                            {new Date(donation.blockTime).toLocaleString(locale)}
                          </TableCell>
                          <TableCell><Badge variant="outline">{donation.epoch}</Badge></TableCell>
                          <TableCell>
                            <a
                              href={`https://cexplorer.io/tx/${donation.txHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 font-mono text-xs text-cardano-blue hover:underline dark:text-cardano-teal"
                            >
                              {donation.txHash.slice(0, 12)}…{donation.txHash.slice(-8)}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </TableCell>
                          <TableCell className="text-right font-semibold text-gray-900 dark:text-gray-100">
                            ₳{formatAda(donation.lovelace, locale)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <p className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">{t('donations.empty')}</p>
              )}

              <div className="mt-8 border-t border-gray-100 pt-5 dark:border-gray-700">
                <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">{t('donations.epoch_history')}</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
                  {data.epochs.slice().reverse().map((epoch) => (
                    <div key={epoch.epoch} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/50">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t('donations.epoch')} {epoch.epoch}</p>
                      <p className="mt-1 font-semibold text-gray-900 dark:text-white">₳{formatAda(epoch.totalLovelace, locale)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{epoch.donationCount} {t('donations.transactions')}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-1 text-xs text-gray-500 dark:text-gray-400 sm:flex-row sm:justify-between">
                <span>{t('donations.source')}: {data.source}</span>
                <span>{t('donations.updated_at')}: {new Date(data.updatedAt).toLocaleString(locale)}</span>
              </div>
            </CardContent>
          </Card>
        </>
      ) : null}
    </div>
  );
};

export default TreasuryDonations;
