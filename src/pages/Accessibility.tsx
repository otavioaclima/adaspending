
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Accessibility = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4 prose prose-blue dark:prose-invert lg:prose-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">
          {t('accessibility.title')}
        </h1>
        
        <p className="lead text-gray-600 dark:text-gray-400">
          {t('accessibility.intro')}
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t('accessibility.section1_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('accessibility.section1_desc')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t('accessibility.section2_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('accessibility.section2_desc')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mt-4">
            <li><strong>{t('accessibility.keyboard')}:</strong> {t('accessibility.keyboard_desc')}</li>
            <li><strong>{t('accessibility.screen_reader')}:</strong> {t('accessibility.screen_reader_desc')}</li>
            <li><strong>{t('accessibility.typography')}:</strong> {t('accessibility.typography_desc')}</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t('accessibility.section3_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('accessibility.section3_desc')}
          </p>
        </section>

        <section className="mt-8 bg-cardano-blue/5 dark:bg-cardano-blue/10 p-6 rounded-xl border border-cardano-blue/20 dark:border-cardano-blue/30 transition-colors">
          <h2 className="text-xl font-bold text-cardano-blue mb-2">
            {t('accessibility.section4_title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t('accessibility.section4_desc')}
          </p>
          <p className="font-bold text-lg mt-2">
            <a href="mailto:hello@adaspending.com" className="text-cardano-blue hover:underline">hello@adaspending.com</a>
          </p>
        </section>
        
        <div className="mt-12 text-sm text-gray-500 italic">
          {t('cookies.last_updated')}: April 2024
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;
