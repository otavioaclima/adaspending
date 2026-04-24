
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800 py-8 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
              {/* Light mode logo (dark text) */}
              <img
                src="/assets/e4da4614-7cea-4f9c-853c-3f019f7932ca.png"
                alt="Cardano Treasury Explorer"
                className="h-8 w-auto dark:hidden"
              />
              {/* Dark mode logo (white text) */}
              <img
                src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
                alt="Cardano Treasury Explorer"
                className="h-8 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              {t('footer.description').split('. ').map((sentence, i, arr) => (
                <span key={i}>
                  {sentence}{i < arr.length - 1 ? '.' : ''}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wider">{t('footer.explore')}</h3>
              <ul className="space-y-2">
                <li><Link to="/overview" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.overview')}</Link></li>
                <li><Link to="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.projects')}</Link></li>
                <li><Link to="/vendors" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.vendors')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wider">{t('footer.data')}</h3>
              <ul className="space-y-2">
                <li><Link to="/explorer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.explorer')}</Link></li>
                <li><Link to="/donations" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.donations')}</Link></li>
                <li><Link to="/analytics" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.analytics')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wider">{t('footer.resources')}</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link to="/accessibility" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">{t('footer.accessibility')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wider">{t('footer.useful_links')}</h3>
              <ul className="space-y-2">
                <li><a href="https://cardano.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">Cardano</a></li>
                <li><a href="https://www.intersectmbo.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">Intersect</a></li>
                <li><a href="https://cardanofoundation.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">Cardano Foundation</a></li>
                <li><a href="https://governancespace.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">Governance Space</a></li>
                <li><a href="https://cardanofeed.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue transition-colors">Cardano Feed</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wider">{t('footer.contact')}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@adaspending.com"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue flex items-center gap-2 transition-colors"
                  >
                    <Mail size={14} className="text-cardano-blue" />
                    {t('footer.email')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ADAspending_com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue flex items-center gap-2 transition-colors"
                  >
                    <Twitter size={14} className="text-cardano-blue" />
                    Twitter (X)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-500">
          <p>© {new Date().getFullYear()} ADAspending.com. {t('footer.copyright')}</p>
          <p className="mt-1">{t('footer.opensource')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
