
import React from 'react';
import { Users, Globe, Award, ExternalLink, Building, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WhoWeAreSection = () => {
  const { t } = useLanguage();

  return (
    <section id="who-we-are" className="py-24 px-4 bg-gradient-to-br from-white to-cardano-light dark:from-black dark:to-gray-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-white/80 dark:bg-gray-800 border-cardano-teal/30 text-cardano-blue font-medium">
            {t('teaser.who_we_are.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cardano-dark dark:text-white">{t('teaser.who_we_are.title')}</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('teaser.who_we_are.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/90 dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-cardano-blue" aria-hidden="true" />
            <CardContent className="p-8">
              <div className="rounded-full bg-cardano-light dark:bg-gray-700 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-cardano-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cardano-dark dark:text-white">{t('teaser.who_we_are.card1.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('teaser.who_we_are.card1.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="secondary" className="bg-cardano-light/70 dark:bg-gray-700/70 text-cardano-blue dark:text-cardano-light hover:bg-cardano-light">{t('teaser.who_we_are.card1.badge1')}</Badge>
                <Badge variant="secondary" className="bg-cardano-light/70 dark:bg-gray-700/70 text-cardano-blue dark:text-cardano-light hover:bg-cardano-light">{t('teaser.who_we_are.card1.badge2')}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-cardano-teal" aria-hidden="true" />
            <CardContent className="p-8">
              <div className="rounded-full bg-cardano-light dark:bg-gray-700 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-cardano-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cardano-dark dark:text-white">{t('teaser.who_we_are.card2.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('teaser.who_we_are.card2.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="secondary" className="bg-cardano-light/70 dark:bg-gray-700/70 text-cardano-teal dark:text-cardano-light hover:bg-cardano-light">{t('teaser.who_we_are.card2.badge1')}</Badge>
                <Badge variant="secondary" className="bg-cardano-light/70 dark:bg-gray-700/70 text-cardano-teal dark:text-cardano-light hover:bg-cardano-light">{t('teaser.who_we_are.card2.badge2')}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-cardano-coral" aria-hidden="true" />
            <CardContent className="p-8">
              <div className="rounded-full bg-cardano-light dark:bg-gray-700 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-cardano-coral" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cardano-dark dark:text-white">{t('teaser.who_we_are.card3.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('teaser.who_we_are.card3.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="secondary" className="bg-cardano-light/70 dark:bg-gray-700/70 text-cardano-coral dark:text-cardano-light hover:bg-cardano-light">{t('teaser.who_we_are.card3.badge1')}</Badge>
                <Badge variant="secondary" className="bg-cardano-light/70 dark:bg-gray-700/70 text-cardano-coral dark:text-cardano-light hover:bg-cardano-light">{t('teaser.who_we_are.card3.badge2')}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-xl overflow-hidden border dark:border-gray-700">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <Users className="h-20 w-20 text-cardano-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-cardano-dark dark:text-white">{t('teaser.who_we_are.trust.title')}</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-cardano-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>{t('teaser.who_we_are.trust.item1')}</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-cardano-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>{t('teaser.who_we_are.trust.item2')}</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-cardano-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>{t('teaser.who_we_are.trust.item3')}</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="bg-cardano-blue hover:bg-cardano-blue/90" asChild>
                      <a href="https://governancespace.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>GovernanceSpace</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button className="bg-cardano-blue hover:bg-cardano-blue/90" asChild>
                      <a href="https://cardanofeed.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>CardanoFeed</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
