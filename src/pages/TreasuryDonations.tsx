import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Heart, Coins, TrendingUp, ExternalLink, Calendar, History } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const donationsData = [
  { epoch: 626, date: '2025-04-24', amount: 505, txId: 'a7b3...c9d1' },
  { epoch: 626, date: '2025-04-23', amount: 505, txId: 'e8f2...a1b3' },
  { epoch: 625, date: '2025-04-19', amount: 1010, txId: 'f2e4...b8a0' },
  { epoch: 623, date: '2025-04-09', amount: 1010, txId: 'd6c5...e3f2' },
  { epoch: 622, date: '2025-04-04', amount: 1010, txId: 'c1d0...a4b9' },
  { epoch: 621, date: '2025-03-30', amount: 1010, txId: 'b9a8...f7e6' },
  { epoch: 620, date: '2025-03-25', amount: 1010, txId: 'e5d4...c3b2' },
  { epoch: 619, date: '2025-03-20', amount: 1010, txId: 'a1b2...d3c4' },
  { epoch: 618, date: '2025-03-15', amount: 1010, txId: 'f9e8...d7c6' },
  { epoch: 617, date: '2025-03-10', amount: 1010, txId: 'b5a4...e3f2' },
];

const epochsData = [
  { epoch: 626, amount: 1010, txCount: 2 },
  { epoch: 625, amount: 1010, txCount: 1 },
  { epoch: 624, amount: 0, txCount: 0 },
  { epoch: 623, amount: 1010, txCount: 1 },
  { epoch: 622, amount: 1010, txCount: 1 },
  { epoch: 621, amount: 1010, txCount: 1 },
  { epoch: 620, amount: 1010, txCount: 1 },
  { epoch: 619, amount: 1010, txCount: 1 },
  { epoch: 618, amount: 1010, txCount: 1 },
  { epoch: 617, amount: 1010, txCount: 1 },
];

const TreasuryDonations = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'donations' | 'epochs'>('donations');

  return (
    <Layout>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-red-600 dark:text-red-400">
            <Heart className="h-6 w-6 fill-current" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('donations.title')}</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          {t('donations.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-red-100 dark:border-red-900/50 bg-red-50/30 dark:bg-red-900/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-2">
              <Coins className="h-4 w-4" />
              {t('donations.total_donated')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₳ 2,010,753</p>
            <p className="text-xs text-red-600/70 dark:text-red-400/70 mt-1 font-medium">
              {t('donations.this_epoch_plus').replace('{amount}', '1,010')}
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              {t('donations.current_epoch')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₳ 1,010</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{t('donations.epoch')} 626</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <History className="h-4 w-4" />
              {t('donations.previous_epoch')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₳ 1,010</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Epoch 625</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {t('donations.avg_per_epoch')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₳ 909</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
              {t('donations.last_epochs').replace('{count}', '10')}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="dark:bg-gray-800/40 dark:border-gray-800 transition-colors">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <CardTitle className="dark:text-white">{t('donations.history_title')}</CardTitle>
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
            <Button
              variant={viewMode === 'donations' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('donations')}
              className={viewMode === 'donations' ? 'bg-white dark:bg-cardano-blue shadow-sm dark:text-white' : 'text-gray-500 dark:text-gray-400'}
            >
              {t('donations.recent_donations')}
            </Button>
            <Button
              variant={viewMode === 'epochs' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('epochs')}
              className={viewMode === 'epochs' ? 'bg-white dark:bg-cardano-blue shadow-sm dark:text-white' : 'text-gray-500 dark:text-gray-400'}
            >
              {t('donations.epoch_by_epoch')}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700">
                  {viewMode === 'donations' ? (
                    <>
                      <TableHead className="dark:text-gray-300">{t('donations.date')}</TableHead>
                      <TableHead className="dark:text-gray-300">{t('donations.epoch')}</TableHead>
                      <TableHead className="dark:text-gray-300">{t('donations.tx_id')}</TableHead>
                      <TableHead className="text-right dark:text-gray-300">{t('donations.amount')}</TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead className="dark:text-gray-300">{t('donations.epoch')}</TableHead>
                      <TableHead className="dark:text-gray-300">{t('donations.transactions')}</TableHead>
                      <TableHead className="text-right dark:text-gray-300">{t('donations.amount')}</TableHead>
                    </>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {viewMode === 'donations' ? (
                  donationsData.map((donation, index) => (
                    <TableRow key={index} className="border-gray-200 dark:border-gray-700">
                      <TableCell className="font-medium text-gray-600 dark:text-gray-400">{donation.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="dark:border-gray-700 dark:text-gray-300">{donation.epoch}</Badge>
                      </TableCell>
                      <TableCell>
                        <a
                          href={`https://cexplorer.io/tx/${donation.txId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cardano-blue dark:text-cardano-teal hover:underline flex items-center gap-1 font-mono text-xs"
                        >
                          {donation.txId}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </TableCell>
                      <TableCell className="text-right font-bold text-gray-900 dark:text-gray-100">
                        ₳ {donation.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  epochsData.map((epoch, index) => (
                    <TableRow key={index} className="border-gray-200 dark:border-gray-700">
                      <TableCell className="font-bold text-gray-900 dark:text-gray-100">
                        {t('donations.epoch')} {epoch.epoch}
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {epoch.txCount} {t('donations.contributions')}
                      </TableCell>
                      <TableCell className="text-right font-bold text-gray-900 dark:text-gray-100">
                        ₳ {epoch.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://cexplorer.io/treasury/donation?tab=donations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-cardano-blue dark:hover:text-cardano-teal underline transition-colors"
            >
              {t('donations.view_all')}
            </a>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default TreasuryDonations;
