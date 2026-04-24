
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useLanguage } from '@/contexts/LanguageContext';

const CallToActionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-r from-cardano-blue/10 to-cardano-teal/10 rounded-lg p-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {t('cta.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/proposals">
              <Search className="h-4 w-4 mr-2" />
              {t('cta.search_proposals')}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/vendors">
              <Users className="h-4 w-4 mr-2" />
              {t('cta.view_vendors')}
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/explorer">
              <BarChart3 className="h-4 w-4 mr-2" />
              {t('cta.spending_explorer')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
