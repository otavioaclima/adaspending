
import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0c2e] to-[#020412] rounded-3xl text-white mb-10 shadow-2xl border border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cardano-blue/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12 md:py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-3/5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold mb-6 tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t('hero.live_data')}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            {t('hero.title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cardano-blue">{t('hero.title_part2')}</span> {t('hero.title_part3')}
          </h1>

          <p className="text-base md:text-lg mb-8 text-gray-400 leading-relaxed max-w-xl">
            {t('hero.subtitle')}
          </p>

          <div className="w-full max-w-md flex flex-col md:flex-row gap-2 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
            <div className="flex-grow flex items-center px-3">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <Input
                className="bg-transparent border-none focus-visible:ring-0 placeholder:text-gray-500 text-white text-base h-10"
                placeholder={t('hero.search_placeholder')}
              />
            </div>
            <Button className="bg-cardano-blue hover:bg-blue-600 text-white px-6 h-10 rounded-lg font-bold transition-all text-sm">
              {t('hero.search_button')}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4 text-[10px] uppercase tracking-wider font-bold text-gray-500">
            <TrendingUp className="h-3 w-3 text-blue-400" />
            <span>{t('hero.trending')}</span>
            <button className="hover:text-cardano-blue transition-colors">#IOG</button>
            <button className="hover:text-cardano-blue transition-colors">#Cardano Foundation</button>
            <button className="hover:text-cardano-blue transition-colors">#Intersct</button>
            <button className="hover:text-cardano-blue transition-colors">#Midgard</button>
            <button className="hover:text-cardano-blue transition-colors">#Builder DAO</button>
          </div>
        </div>

        <div className="lg:w-2/5 hidden lg:flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-cardano-blue/20 blur-[60px] rounded-full group-hover:bg-cardano-blue/30 transition-all duration-700"></div>
            <img
              src="/assets/hero-chart.png"
              alt="Cardano Chart"
              className="relative h-64 w-auto filter drop-shadow-2xl brightness-110 hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
