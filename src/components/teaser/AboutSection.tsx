
import React from 'react';
import { Globe, Search, Info, ChartBar, Clock, Link } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              {t('teaser.about.title').split('ADAspending')[0]}
              <span className="text-cardano-blue">ADAspending</span>
              {t('teaser.about.title').split('ADAspending')[1]}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              {t('teaser.about.description')}
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Globe className="h-6 w-6" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{t('teaser.about.item1')}</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Search className="h-6 w-6" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{t('teaser.about.item2')}</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <ChartBar className="h-6 w-6" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{t('teaser.about.item3')}</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{t('teaser.about.item4')}</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Link className="h-6 w-6" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{t('teaser.about.item5')}</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-8 mt-1 mr-3 text-cardano-blue">
                  <Info className="h-6 w-6" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{t('teaser.about.item6')}</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl dark:shadow-blue-900/10">
              <img 
                alt="Cardano Blockchain Technology" 
                className="w-full h-auto object-contain max-h-[300px]" 
                src="/assets/af43cb7f-1898-49c4-8d04-6a7e036cee61.png" 
              />
            </div>
            <p className="text-cardano-blue font-medium text-lg mt-4 text-center">{t('teaser.about.caption')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
