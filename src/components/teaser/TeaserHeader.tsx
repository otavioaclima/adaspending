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
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 md:px-12 flex justify-between items-center">
      <div className="hidden md:block">
        {/* Placeholder for left side if needed, or just keep flex justify-between */}
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10 gap-2 px-3 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
            >
              <span className="text-lg leading-none">
                {language === 'EN' ? '🇺🇸' : language === 'PT' ? '🇧🇷' : language === 'ES' ? '🇪🇸' : '🇯🇵'}
              </span>
              <span className="text-xs font-bold tracking-wider">{language}</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#131637] border-gray-800 text-white min-w-[150px] shadow-2xl backdrop-blur-md bg-opacity-95">
            <DropdownMenuItem 
              onClick={() => setLanguage('EN')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-2.5 px-3"
            >
              <span className="text-lg leading-none">🇺🇸</span>
              <span className="text-sm">English (EN)</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('PT')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-2.5 px-3"
            >
              <span className="text-lg leading-none">🇧🇷</span>
              <span className="text-sm">Português (PT)</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('ES')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-2.5 px-3"
            >
              <span className="text-lg leading-none">🇪🇸</span>
              <span className="text-sm">Español (ES)</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage('JP')} 
              className="hover:!bg-white/10 focus:!bg-white/10 cursor-pointer flex items-center gap-3 py-2.5 px-3"
            >
              <span className="text-lg leading-none">🇯🇵</span>
              <span className="text-sm">日本語 (JP)</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white hover:bg-white/10 transition-colors"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button asChild variant="outline" className="hidden sm:flex bg-white/10 border-white/20 text-white hover:bg-white hover:text-cardano-blue transition-all group ml-2">
          <Link to="/overview">
            {t('teaser.hero.start_exploring')}
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default TeaserHeader;
