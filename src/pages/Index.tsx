import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/index/HeroSection';
import StatsSection from '@/components/index/StatsSection';
const FundRoundSection = React.lazy(() => import('@/components/index/FundRoundSection'));
const ChartsSection = React.lazy(() => import('@/components/index/ChartsSection'));


import ProposalBudgetComparator from "@/components/dashboard/ProposalBudgetComparator";
import OverspendingPanel from "@/components/dashboard/OverspendingPanel";
import TrackingAlerts from "@/components/dashboard/TrackingAlerts";
import Thermometer from "@/components/dashboard/Thermometer";
const IntersectProjectsTable = React.lazy(() => import("@/components/dashboard/IntersectProjectsTable"));

import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('overview.analysis_panels')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProposalBudgetComparator />
          <Thermometer />
          <OverspendingPanel />
        </div>
      </section>
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('overview.project_showcases')}</h2>
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
        </div>
        <TrackingAlerts />
      </section>
      <section className="mb-10 content-visibility-auto">
        <React.Suspense fallback={<div className="h-40 flex items-center justify-center bg-gray-50/50 dark:bg-gray-800/50 rounded-xl animate-pulse" />}>
          <IntersectProjectsTable />
        </React.Suspense>
      </section>
      <React.Suspense fallback={<div className="h-40 flex items-center justify-center bg-gray-50/50 dark:bg-gray-800/50 rounded-xl animate-pulse" />}>
        <FundRoundSection />
        <ChartsSection />
      </React.Suspense>


    </Layout>
  );
};

export default Index;
