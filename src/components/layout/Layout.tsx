
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon, BarChart3, Award, Users, FileText, Vote, Briefcase, Twitter, Mail, Heart, Info, ChevronDown, ExternalLink } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from '@/contexts/LanguageContext';

const Layout = ({ children, fullWidth = false }: { children: React.ReactNode, fullWidth?: boolean }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.overview'), href: '/overview', icon: BarChart3 },
    { name: t('nav.projects'), href: '/projects', icon: Briefcase },
    { name: t('nav.vendors'), href: '/vendors', icon: Users },
    { name: t('nav.explorer'), href: '/explorer', icon: FileText },
    { name: t('nav.donations'), href: '/donations', icon: Heart },
    { name: t('nav.analytics'), href: '/analytics', icon: BarChart3 },
    { name: t('nav.about'), href: '/about', icon: Info },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer Top Bar */}
      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-1.5 px-4 text-center transition-colors shrink-0">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <img src="/assets/cardano.ico" alt="Cardano logo" className="w-4 h-4 opacity-80" />
          <p className="text-[10px] md:text-[11px] font-medium text-gray-500 dark:text-gray-400">
            {t('layout.disclaimer')}
          </p>
        </div>
      </div>

      {/* Feedback Banner */}
      <div className="bg-cardano-blue py-2 px-4 text-center transition-colors shrink-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <p className="text-xs md:text-sm font-medium text-white">
            {t('banner.feedback_text')}
          </p>
          <a
            href="https://forms.gle/abZaMeFyUJHBYTXQA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-bold text-white underline hover:text-white/80 transition-colors flex items-center gap-1"
          >
            {t('banner.survey_link')}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#131637] to-[#000111] border-b border-gray-800 sticky top-0 z-50 shrink-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              {isHomePage ? (
                <img
                  src="/assets/257db3dc-2214-4178-afd2-70760c3899c4.png"
                  alt="Cardano Treasury Explorer"
                  className="h-20 w-auto"
                />
              ) : (
                <img
                  src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
                  alt="ADAspending Logo"
                  className="h-10 w-auto"
                />
              )}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link !text-white hover:text-gray-200 ${location.pathname === item.href ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="!text-white hover:bg-white/10 gap-2 px-2 focus-visible:ring-0 focus-visible:ring-offset-0">
                  <span className="text-lg">
                    {language === 'EN' ? '🇺🇸' : language === 'PT' ? '🇧🇷' : language === 'ES' ? '🇪🇸' : '🇯🇵'}
                  </span>
                  <span className="text-xs font-bold">{language}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#131637] border-gray-800 text-white min-w-[140px]">
                <DropdownMenuItem
                  onClick={() => setLanguage('EN')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>English (EN)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('PT')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇧🇷</span>
                  <span>Português (PT)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ES')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇪🇸</span>
                  <span>Español (ES)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('JP')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇯🇵</span>
                  <span>日本語 (JP)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="!text-white hover:bg-white/10"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b bg-white shrink-0">
        <div className="container mx-auto p-2 overflow-x-auto text-center">
          <div className="flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap
                  ${location.pathname === item.href
                    ? 'bg-cardano-blue text-white'
                    : 'text-gray-700 hover:bg-cardano-blue/10 hover:text-cardano-blue'}`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={`flex-grow ${fullWidth ? 'w-full' : 'container mx-auto px-4 py-6'}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800 py-8 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
                <img
                  src="/assets/e4da4614-7cea-4f9c-853c-3f019f7932ca.png"
                  alt="Cardano Treasury Explorer"
                  className="h-8 w-auto"
                />
                {/* ADAspending text removed */}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {t('footer.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('footer.explore')}</h3>
                <ul className="space-y-1">
                  <li><Link to="/overview" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.overview')}</Link></li>

                  <li><Link to="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.projects')}</Link></li>
                  <li><Link to="/vendors" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.vendors')}</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('footer.data')}</h3>
                <ul className="space-y-1">
                  <li><Link to="/explorer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.explorer')}</Link></li>
                  <li><Link to="/donations" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.donations')}</Link></li>
                  <li><Link to="/analytics" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.analytics')}</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('footer.resources')}</h3>
                <ul className="space-y-1">
                  <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('nav.about')}</Link></li>
                  <li><Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('footer.privacy')}</Link></li>
                  <li><Link to="/accessibility" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">{t('footer.accessibility')}</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('footer.contact')}</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:hello@adaspending.com"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue flex items-center gap-2"
                    >
                      <Mail size={14} />
                      {t('footer.email')}
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
    </div>
  );
};

export default Layout;

