
import React from 'react';
import { BarChart3, Award, Database, Users, ChartLine, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {t('teaser.features.title_before')}
          <span className="text-cardano-blue dark:text-blue-400">{t('teaser.features.title_highlight')}</span>
          {t('teaser.features.title_after')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
          {t('teaser.features.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-blue/10 text-cardano-blue rounded-full mb-4">
              <Database className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{t('teaser.features.track.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('teaser.features.track.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-teal/10 text-cardano-teal rounded-full mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{t('teaser.features.review.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('teaser.features.review.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-coral/10 text-cardano-coral rounded-full mb-4">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{t('teaser.features.analyze.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('teaser.features.analyze.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-blue/10 text-cardano-blue rounded-full mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{t('teaser.features.search.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('teaser.features.search.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-teal/10 text-cardano-teal rounded-full mb-4">
              <ChartLine className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{t('teaser.features.trends.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('teaser.features.trends.desc')}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center bg-cardano-coral/10 text-cardano-coral rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{t('teaser.features.insights.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('teaser.features.insights.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
