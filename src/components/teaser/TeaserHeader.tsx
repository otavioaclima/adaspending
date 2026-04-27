
import React from 'react';
import { useTheme } from '@/components/theme-provider';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sun, Moon, ChevronDown, ChevronRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TeaserHeader = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 md:px-12 flex justify-between items-center bg-transparent">
      <div className="hidden md:block">
        {/* Placeholder for left side if needed */}
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
        {/* Language Switcher - Glass Style */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md hover:text-white gap-2 px-4 py-5 rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0 transition-all active:scale-95"
            >
              <span className="text-xl leading-none">
                {language === 'EN' ? '🇺🇸' : language === 'PT' ? '🇧🇷' : language === 'ES' ? '🇪🇸' : '🇯🇵'}
              </span>
              <span className="text-xs font-black tracking-widest">{language}</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#020617]/90 border-white/10 text-white min-w-[180px] shadow-2xl backdrop-blur-xl rounded-2xl p-1 animate-in fade-in zoom-in-95 duration-200">
            <DropdownMenuItem 
              onClick={() => setLanguage('EN')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-3 px-4 rounded-xl transition-colors"
            >
              <span className="text-xl leading-none">🇺🇸</span>
              <span className="text-sm font-bold">English</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('PT')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-3 px-4 rounded-xl transition-colors"
            >
              <span className="text-xl leading-none">🇧🇷</span>
              <span className="text-sm font-bold">Português</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('ES')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-3 px-4 rounded-xl transition-colors"
            >
              <span className="text-xl leading-none">🇪🇸</span>
              <span className="text-sm font-bold">Español</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('JP')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-3 px-4 rounded-xl transition-colors"
            >
              <span className="text-xl leading-none">🇯🇵</span>
              <span className="text-sm font-bold">日本語</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle - Glass Style */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md h-10 w-10 md:h-11 md:w-11 rounded-xl transition-all active:scale-95"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Start Exploring Button - Premium Style */}
        <Button asChild className="hidden sm:flex bg-white text-[#020617] hover:bg-white/90 px-6 h-10 md:h-11 rounded-xl font-black text-sm transition-all group ml-2 shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95 overflow-hidden border-none">
          <Link to="/overview" className="flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cardano-blue/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            {t('teaser.hero.start_exploring')}
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default TeaserHeader;
