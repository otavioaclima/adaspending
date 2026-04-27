
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sun, Moon, BarChart3, Award, Users, FileText, Vote, Briefcase, Twitter, Mail, Heart, Info, ChevronDown, ExternalLink, X, Menu, Search } from 'lucide-react';
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
  const navigate = useNavigate();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsMenuOpen(false);
      navigate(`/projects?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
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
    // Prefetch common API data for dashboard pages
    if (['/overview', '/analytics', '/projects', '/vendors'].includes(href)) {
      queryClient.prefetchQuery({ queryKey: ['cexplorerStats'], queryFn: getCexplorerStats });
      queryClient.prefetchQuery({ queryKey: ['adaPrice'], queryFn: getAdaPrice });
    }
    
    // Prefetch page chunks for instant navigation
    switch(href) {
      case '/overview': import('@/pages/Index'); break;
      case '/about': import('@/pages/About'); break;
      case '/projects': import('@/pages/Projects'); break;
      case '/vendors': import('@/pages/Vendors'); break;
      case '/explorer': import('@/pages/SpendingExplorer'); break;
      case '/donations': import('@/pages/TreasuryDonations'); break;
      case '/analytics': import('@/pages/Analytics'); break;
      default: break;
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Disclaimer Top Bar */}
      <div className="bg-gray-100 dark:bg-[#0f172a] border-b border-gray-200 dark:border-white/5 py-1.5 px-4 text-center transition-colors shrink-0">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <div className="cardano-icon shrink-0" />
          <p className="text-[10px] md:text-[11px] font-normal md:font-bold text-gray-500 dark:text-gray-400 tracking-wide whitespace-nowrap">
            {t('layout.disclaimer')}
          </p>
        </div>
      </div>


      {/* Header - Premium Dark Blue (Matching Hero) */}
      <header className="bg-[#020617] dark:bg-[#020617] backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shrink-0 transition-all duration-500 shadow-xl">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="flex items-center group"
              onMouseEnter={() => handlePrefetch('/')}
            >
              {isHomePage ? (
                <img
                  src="/assets/257db3dc-2214-4178-afd2-70760c3899c4.png"
                  alt="Cardano Treasury Explorer"
                  className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105"
                  fetchpriority="high"
                />
              ) : (
                <img
                  src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
                  alt="ADAspending Logo"
                  className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
                  fetchpriority="high"
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onMouseEnter={() => handlePrefetch(item.href)}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                  location.pathname === item.href 
                    ? 'bg-white text-cardano-blue shadow-lg' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2 px-3 h-10 rounded-xl transition-all">
                  <span className="text-lg">
                    {language === 'EN' ? '🇺🇸' : language === 'PT' ? '🇧🇷' : language === 'ES' ? '🇪🇸' : '🇯🇵'}
                  </span>
                  <span className="text-xs font-black tracking-widest">{language}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/95 dark:bg-[#0f172a]/95 border-gray-200 dark:border-white/10 min-w-[160px] backdrop-blur-xl rounded-2xl p-1 shadow-2xl">
                <DropdownMenuItem
                  onClick={() => setLanguage('EN')}
                  className="hover:!bg-cardano-blue/10 focus:!bg-cardano-blue/10 cursor-pointer flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors font-bold text-sm"
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('PT')}
                  className="hover:!bg-cardano-blue/10 focus:!bg-cardano-blue/10 cursor-pointer flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors font-bold text-sm"
                >
                  <span className="text-lg">🇧🇷</span>
                  <span>Português</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('ES')}
                  className="hover:!bg-cardano-blue/10 focus:!bg-cardano-blue/10 cursor-pointer flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors font-bold text-sm"
                >
                  <span className="text-lg">🇪🇸</span>
                  <span>Español</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('JP')}
                  className="hover:!bg-cardano-blue/10 focus:!bg-cardano-blue/10 cursor-pointer flex items-center gap-3 py-2.5 px-4 rounded-xl transition-colors font-bold text-sm"
                >
                  <span className="text-lg">🇯🇵</span>
                  <span>日本語</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white hover:bg-white/10 h-10 w-10 rounded-xl transition-all"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-amber-400" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-10 w-10 rounded-xl transition-all">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white dark:bg-[#020617] border-gray-200 dark:border-white/5 text-gray-900 dark:text-white p-0 overflow-y-auto [&>button]:text-white [&>button]:opacity-100">
                  <SheetHeader className="p-6 bg-[#020617] border-b border-white/10">
                    <SheetTitle className="text-left flex items-center gap-3">
                      <img 
                        src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png" 
                        className="h-8 w-auto" 
                        alt="Logo" 
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="p-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/10">
                    <div className="relative group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-cardano-blue transition-colors" />
                      <Input 
                        placeholder={t('hero.search_placeholder')}
                        className="pl-10 h-11 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-xl focus-visible:ring-cardano-blue shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      />
                    </div>
                  </div>
                  
                  <nav className="flex flex-col p-4 gap-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group active:scale-[0.98] focus:outline-none ${
                          location.pathname === item.href 
                            ? 'bg-cardano-blue text-white shadow-lg shadow-cardano-blue/20' 
                            : 'text-gray-600 dark:text-white/70 hover:bg-cardano-blue/5 dark:hover:bg-white/5 active:bg-cardano-blue/10'
                        }`}
                      >
                        <item.icon className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                          location.pathname === item.href ? 'text-white' : 'text-gray-400 dark:text-white/40'
                        }`} />
                        <span className="font-bold text-[15px]">{item.name}</span>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-4 pt-6 border-t border-gray-100 dark:border-white/5 px-6 pb-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-4 px-1">{t('layout.theme')}</p>
                    <div className="grid grid-cols-2 gap-3 bg-gray-50 dark:bg-black/20 p-1.5 rounded-2xl border border-gray-100 dark:border-white/5">
                       <Button 
                         variant="ghost" 
                         className={`flex items-center justify-center gap-2 h-11 rounded-xl transition-all duration-300 ${
                           theme === 'light' 
                             ? 'bg-white dark:bg-gray-800 text-cardano-blue shadow-md' 
                             : 'text-gray-500 dark:text-white/60 hover:text-cardano-blue dark:hover:text-white hover:bg-white/50'
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
                             ? 'bg-cardano-blue text-white shadow-lg shadow-cardano-blue/20' 
                             : 'text-gray-500 dark:text-white/60 hover:text-cardano-blue dark:hover:text-white hover:bg-white/50'
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
