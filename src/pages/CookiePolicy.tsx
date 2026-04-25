
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4 prose prose-blue dark:prose-invert lg:prose-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b dark:border-gray-800 pb-4">
          {t('cookies.title')}
        </h1>
        
        <p className="lead text-gray-600 dark:text-gray-400">
          {t('cookies.intro')}
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            1. {t('cookies.section1_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('cookies.section1_content')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            2. {t('cookies.section2_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('cookies.section2_content')}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mt-4">
            <li><strong>{t('cookies.theme_pref')}:</strong> {t('cookies.theme_pref_desc')}</li>
            <li><strong>{t('cookies.lang_pref')}:</strong> {t('cookies.lang_pref_desc')}</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            3. {t('cookies.section3_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('cookies.section3_content')}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            4. {t('cookies.section4_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('cookies.section4_content')}
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-500 italic">
          {t('cookies.last_updated')}: April 2024
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
