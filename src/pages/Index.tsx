
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/index/HeroSection';
import StatsSection from '@/components/index/StatsSection';
import FundRoundSection from '@/components/index/FundRoundSection';
import ChartsSection from '@/components/index/ChartsSection';
import ProposalsSection from '@/components/index/ProposalsSection';
import CallToActionSection from '@/components/index/CallToActionSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FundRoundSection />
      <ChartsSection />
      <ProposalsSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;
