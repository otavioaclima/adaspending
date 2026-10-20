import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a0b1e] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
                alt="ADAspending Logo"
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              {t('teaser.footer.description')}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://x.com/ADAspending_com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cardano-blue hover:text-white transition-all border border-white/10"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:hello@adaspending.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cardano-blue hover:text-white transition-all border border-white/10"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/otavioaclima/adaspending"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cardano-blue hover:text-white transition-all border border-white/10"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cardano-blue mb-6">{t('footer.explore')}</h3>
              <ul className="space-y-4">
                <li><Link to="/overview" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.overview')}</Link></li>
                <li><Link to="/projects" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.projects')}</Link></li>
                <li><Link to="/vendors" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.vendors')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cardano-blue mb-6">{t('footer.data')}</h3>
              <ul className="space-y-4">
                <li><Link to="/explorer" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.explorer')}</Link></li>
                <li><Link to="/donations" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.donations')}</Link></li>
                <li><Link to="/analytics" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.analytics')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cardano-blue mb-6">{t('footer.resources')}</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-sm text-white/50 hover:text-white transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link to="/cookies" className="text-sm text-white/50 hover:text-white transition-colors">{t('footer.cookies')}</Link></li>
                <li><Link to="/accessibility" className="text-sm text-white/50 hover:text-white transition-colors">{t('footer.accessibility')}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cardano-blue mb-6">{t('footer.useful_links')}</h3>
              <ul className="space-y-4">
                <li><a href="https://cardano.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">Cardano <ExternalLink size={10} /></a></li>
                <li><a href="https://www.intersectmbo.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">Intersect <ExternalLink size={10} /></a></li>
                <li><a href="https://cardanofoundation.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">Cardano Foundation <ExternalLink size={10} /></a></li>
                <li><a href="https://governancespace.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">Governance Space <ExternalLink size={10} /></a></li>
                <li><a href="https://cardanofeed.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">Cardano Feed <ExternalLink size={10} /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 text-center">
          <p>© {new Date().getFullYear()} ADAspending.com. {t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <p>{t('footer.opensource')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
