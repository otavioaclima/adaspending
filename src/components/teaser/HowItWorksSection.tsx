
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
          {t('teaser.how_it_works.title').split('ADAspending')[0]}
          <span className="text-cardano-blue">ADAspending</span>
          {t('teaser.how_it_works.title').split('ADAspending')[1]}
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">{t('teaser.how_it_works.step1.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('teaser.how_it_works.step1.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">{t('teaser.how_it_works.step2.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('teaser.how_it_works.step2.desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">{t('teaser.how_it_works.step3.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('teaser.how_it_works.step3.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cardano-blue text-white font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">{t('teaser.how_it_works.step4.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('teaser.how_it_works.step4.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
