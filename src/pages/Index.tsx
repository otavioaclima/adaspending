
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/index/HeroSection';
import StatsSection from '@/components/index/StatsSection';
import FundRoundSection from '@/components/index/FundRoundSection';
import ChartsSection from '@/components/index/ChartsSection';
import ProposalsSection from '@/components/index/ProposalsSection';
import CallToActionSection from '@/components/index/CallToActionSection';
import ProposalBudgetComparator from "@/components/dashboard/ProposalBudgetComparator";
import OverspendingPanel from "@/components/dashboard/OverspendingPanel";
import TrackingAlerts from "@/components/dashboard/TrackingAlerts";
import Thermometer from "@/components/dashboard/Thermometer";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      {/* NEW SECTION - ANALYSIS PANELS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Analysis Panels</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <ProposalBudgetComparator />
          <Thermometer />
          <OverspendingPanel />
          <TrackingAlerts />
        </div>
      </section>
      <FundRoundSection />
      <ChartsSection />
      <ProposalsSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;

