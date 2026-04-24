
import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img src="/assets/257db3dc-2214-4178-afd2-70760c3899c4.png" alt="ADAspending Graph Logo" className="h-16 hover:opacity-90 transition-opacity" />
            </Link>
            <p className="mt-2 text-gray-400 text-sm max-w-xl">
              {t('teaser.footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap space-x-4 md:space-x-6 justify-end">
              <span className="text-gray-400 py-1">
                {t('teaser.footer.stay_in_touch')}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 justify-center md:justify-end">
              <a href="mailto:hello@adaspending.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <Mail size={18} />
                <span>hello@adaspending.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>{new Date().getFullYear()} ADAspending.com. {t('teaser.footer.copyright')}</p>
              <p>{t('teaser.footer.opensource')}</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://cardanofeed.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cardano Feed
              </a>
              <a href="https://cardano.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cardano
              </a>
              <a href="https://intersectmbo.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Intersect
              </a>
              <a href="https://governancespace.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                GovSpace
              </a>
              <a href="https://gov.tools/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                GovTool
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
