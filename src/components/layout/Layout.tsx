
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon, BarChart3, Award, Users, FileText, Vote, Briefcase, Twitter, Mail, Heart, Info, ChevronDown, ExternalLink, X, Menu } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useQueryClient } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCexplorerStats } from '@/services/cexplorer';
import { getAdaPrice } from '@/services/cardanoscan';
import Footer from './Footer';

const Layout = ({ children, fullWidth = false }: { children: React.ReactNode, fullWidth?: boolean }) => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('adaspending-feedback-dismissed');
    if (!dismissed) {
      // Small delay to show after page load
      const timer = setTimeout(() => setShowFeedbackModal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseFeedback = () => {
    setShowFeedbackModal(false);
    localStorage.setItem('adaspending-feedback-dismissed', 'true');
  };

  const navigation = [
    { name: t('nav.overview'), href: '/overview', icon: BarChart3 },
    { name: t('nav.projects'), href: '/projects', icon: Briefcase },
    { name: t('nav.vendors'), href: '/vendors', icon: Users },
    { name: t('nav.explorer'), href: '/explorer', icon: FileText },
    { name: t('nav.donations'), href: '/donations', icon: Heart },
    { name: t('nav.analytics'), href: '/analytics', icon: BarChart3 },
    { name: t('nav.about'), href: '/about', icon: Info },
  ];

  const handlePrefetch = (href: string) => {
    if (href === '/overview' || href === '/analytics') {
      queryClient.prefetchQuery({ queryKey: ['cexplorerStats'], queryFn: getCexplorerStats });
      queryClient.prefetchQuery({ queryKey: ['adaPrice'], queryFn: getAdaPrice });
    }
    
    // Prefetch page chunks on hover for instant navigation
    if (href === '/about') import('@/pages/About');
    if (href === '/projects') import('@/pages/Projects');
    if (href === '/vendors') import('@/pages/Vendors');
    if (href === '/explorer') import('@/pages/SpendingExplorer');
    if (href === '/donations') import('@/pages/TreasuryDonations');
    if (href === '/analytics') import('@/pages/Analytics');
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer Top Bar */}
      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-1.5 px-4 text-center transition-colors shrink-0">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <div className="cardano-icon shrink-0" />
          <p className="text-[10px] md:text-[11px] font-medium text-gray-500 dark:text-gray-400">
            {t('layout.disclaimer')}
          </p>
        </div>
      </div>


      {/* Header */}
      <header className="bg-gradient-to-r from-[#131637] to-[#000111] border-b border-gray-800 sticky top-0 z-50 shrink-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="flex items-center"
              onMouseEnter={() => handlePrefetch('/')}
            >
              {isHomePage ? (
                <img
                  src="/assets/257db3dc-2214-4178-afd2-70760c3899c4.png"
                  alt="Cardano Treasury Explorer"
                  className="h-20 w-auto"
                  fetchpriority="high"
                />
              ) : (
                <img
                  src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
                  alt="ADAspending Logo"
                  className="h-10 w-auto"
                  fetchpriority="high"
                />
              )}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onMouseEnter={() => handlePrefetch(item.href)}
                className={`nav-link !text-white hover:text-gray-200 ${location.pathname === item.href ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white gap-2 px-2 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors">
                  <span className="text-lg">
                    {language === 'EN' ? '🇺🇸' : language === 'PT' ? '🇧🇷' : language === 'ES' ? '🇪🇸' : '🇯🇵'}
                  </span>
                  <span className="text-xs font-bold">{language}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#131637] border-gray-800 min-w-[140px] [&_*]:text-white">
                <DropdownMenuItem
                  onClick={() => setLanguage('EN')}
                  className="hover:!bg-white/10 focus:!bg-white/10 focus:!text-white !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>English (EN)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('PT')}
                  className="hover:!bg-white/10 focus:!bg-white/10 focus:!text-white !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇧🇷</span>
                  <span>Português (PT)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ES')}
                  className="hover:!bg-white/10 focus:!bg-white/10 focus:!text-white !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇪🇸</span>
                  <span>Español (ES)</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('JP')}
                  className="hover:!bg-white/10 focus:!bg-white/10 focus:!text-white !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇯🇵</span>
                  <span>日本語 (JP)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white hover:bg-white/10 hover:text-white transition-colors"
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

            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white transition-colors">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#131637] border-gray-800 text-white p-0 overflow-y-auto">
                  <SheetHeader className="p-6 border-b border-gray-800">
                    <SheetTitle className="text-white text-left flex items-center gap-3">
                      <img 
                        src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png" 
                        className="h-8 w-auto" 
                        alt="Logo" 
                      />
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex flex-col p-4 gap-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group active:scale-[0.98] focus:outline-none focus:bg-white/10 ${
                          location.pathname === item.href 
                            ? 'bg-cardano-blue text-white shadow-lg shadow-cardano-blue/20' 
                            : 'text-white hover:bg-white/5 active:bg-white/10'
                        }`}
                      >
                        <item.icon className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                          location.pathname === item.href ? 'text-white' : 'text-white/50'
                        }`} />
                        <span className="font-semibold text-[15px]">{item.name}</span>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-4 pt-6 border-t border-gray-800 px-6 pb-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4 px-1">{t('layout.theme')}</p>
                    <div className="grid grid-cols-2 gap-3 bg-black/20 p-1.5 rounded-2xl border border-white/5">
                       <Button 
                         variant="ghost" 
                         className={`flex items-center justify-center gap-2 h-11 rounded-xl transition-all duration-300 ${
                           theme === 'light' 
                             ? 'bg-white text-[#131637] shadow-lg' 
                             : 'text-white/60 hover:text-white hover:bg-white/5'
                         }`}
                         onClick={() => setTheme('light')}
                       >
                         <Sun className="h-4 w-4" />
                         <span className="text-xs font-bold uppercase tracking-wider">{t('layout.light_mode')}</span>
                       </Button>
                       <Button 
                         variant="ghost" 
                         className={`flex items-center justify-center gap-2 h-11 rounded-xl transition-all duration-300 ${
                           theme === 'dark' 
                             ? 'bg-white text-[#131637] shadow-lg' 
                             : 'text-white/60 hover:text-white hover:bg-white/5'
                         }`}
                         onClick={() => setTheme('dark')}
                       >
                         <Moon className="h-4 w-4" />
                         <span className="text-xs font-bold uppercase tracking-wider">{t('layout.dark_mode')}</span>
                       </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>



      {/* Main Content */}
      <main className={`flex-grow ${fullWidth ? 'w-full' : 'container mx-auto px-4 py-6'}`}>
        {children}
      </main>

      <Footer />
      {/* Floating Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed bottom-6 right-6 z-[100] max-w-[320px] bg-cardano-blue text-white p-5 rounded-2xl shadow-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <button
            onClick={handleCloseFeedback}
            className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
            aria-label="Close feedback"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight">Feedback</span>
            </div>
            
            <p className="text-xs leading-relaxed text-white/90">
              {t('banner.feedback_text')}
            </p>
            
            <a
              href="https://forms.gle/abZaMeFyUJHBYTXQA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 bg-white text-cardano-blue hover:bg-white/90 px-4 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 shadow-sm"
            >
              {t('banner.survey_link')}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

