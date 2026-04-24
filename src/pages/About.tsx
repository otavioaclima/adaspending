
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, ShieldCheck, Database, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none bg-cardano-blue/5 shadow-none">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-cardano-blue mb-3">{t('about.mission_title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.mission_desc')}
              </p>
            </CardContent>
          </Card>
          <Card className="border-none bg-cardano-teal/5 shadow-none">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-cardano-teal mb-3">{t('about.vision_title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.vision_desc')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What we track */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('about.track_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-cardano-blue h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">{t('about.track_metrics')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.track_metrics_desc')}</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-green-600 dark:text-green-400 h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">{t('about.track_projects')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.track_projects_desc')}</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600 dark:text-purple-400 h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">{t('about.track_vendors')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.track_vendors_desc')}</p>
            </div>
          </div>
        </section>

        {/* Data Source Section (Adapted from USAspending) */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 italic text-cardano-teal">{t('about.data_source_title')}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('about.data_source_desc_long')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.community_note')}
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Database className="h-32 w-32 text-gray-700 opacity-50" />
            </div>
          </div>
        </section>

        {/* Community Note */}
        <div className="text-center text-gray-500 max-w-2xl mx-auto">
          <p className="text-sm">
            {t('about.disclaimer')}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
