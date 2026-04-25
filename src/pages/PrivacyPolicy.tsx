
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4 prose prose-blue dark:prose-invert lg:prose-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">
          {t('privacy.title')}
        </h1>
        
        <p className="lead text-gray-600 dark:text-gray-400">
          {t('privacy.intro')}
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. {t('privacy.section1_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>{t('privacy.section1_blockchain')}:</strong> {t('privacy.section1_blockchain_desc')}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <strong>{t('privacy.section1_personal')}:</strong> {t('privacy.section1_personal_desc')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. {t('privacy.section2_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('privacy.section2_desc')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. {t('privacy.section3_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('privacy.section3_desc')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. {t('privacy.section4_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('privacy.section4_desc')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            5. {t('privacy.section5_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('privacy.section5_desc')}
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-500 italic">
          {t('cookies.last_updated')}: April 2024
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
