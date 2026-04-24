import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Wallet, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { intersectProjects } from '@/data/intersectData';

import { useLanguage } from '@/contexts/LanguageContext';

const FundRoundSection = () => {
  const { t } = useLanguage();
  const totalBudget = intersectProjects.reduce((sum, p) => sum + p.totalAmount, 0);
  const totalProjects = intersectProjects.length;
  const uniqueVendors = new Set(intersectProjects.map(p => p.vendor)).size;

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('fund.treasury_overview')}</h2>
        <Link to="/projects" className="text-cardano-blue hover:text-cardano-blue/80 flex items-center text-sm font-medium transition-colors">
          {t('fund.view_all_projects')} <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <Card className="border-none shadow-lg bg-white dark:bg-gray-800 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl">{t('fund.intersect_contracts')}</CardTitle>
          <CardDescription className="dark:text-gray-400">
            {t('fund.consolidated_data')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wallet className="h-5 w-5 text-cardano-blue" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('explorer.total_allocation')}</p>
              <p className="text-2xl font-black text-cardano-blue dark:text-blue-300">
                ₳{totalBudget.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('stats.total_projects')}</p>
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {totalProjects}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('stats.total_vendors')}</p>
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {uniqueVendors}
              </p>
            </div>
          </div>

          <Button asChild className="w-full bg-cardano-blue hover:bg-cardano-blue/90 h-12 text-base font-bold transition-all shadow-md">
            <Link to="/projects">
              {t('fund.explore_all_projects')}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default FundRoundSection;
