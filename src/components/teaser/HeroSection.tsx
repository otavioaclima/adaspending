
import React, { useState, useEffect, useMemo } from 'react';
import { ChevronRight, ChevronDown, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { useIntersectData } from '@/hooks/useIntersectData';
import { useQuery } from '@tanstack/react-query';
import { getCexplorerStats } from '@/services/cexplorer';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const { data: intersectProjects = [] } = useIntersectData();
  
  const { data: cexplorerStats } = useQuery({
    queryKey: ['cexplorerStats'],
    queryFn: getCexplorerStats,
    initialData: {
      treasury: 1621148478,
      circulating: 35948271034
    }
  });

  const phrases = [
    t('teaser.hero.phrases.0'),
    t('teaser.hero.phrases.1'),
    t('teaser.hero.phrases.2')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const formatADA = (value: number) => {
    return '₳' + new Intl.NumberFormat(language === 'JP' ? 'ja-JP' : language === 'PT' ? 'pt-BR' : 'en-US', {
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="relative bg-[#020617] pt-20 pb-10 md:pt-28 md:pb-14 min-h-[75vh] flex items-center overflow-hidden transition-colors duration-1000">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cardano-blue/20 blur-[140px] rounded-full animate-soft-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-purple-600/10 blur-[140px] rounded-full animate-soft-pulse" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-400/5 blur-[120px] rounded-full animate-pulse" />
        
        {/* Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            color: '#3b82f6'
          }} 
        />

        {/* Floating Geometric Shapes (Glass style) */}
        <div className="absolute top-[15%] left-[10%] w-24 h-24 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 rotate-12 animate-float-slow hidden lg:block" />
        <div className="absolute bottom-[20%] right-[15%] w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 animate-float-slow hidden lg:block" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
              {t('hero.tracking_treasury')}: {formatADA(cexplorerStats?.treasury || 0)}
            </span>
          </div>

          <Link to="/" className="group mb-12">
            <div className="relative">
              <div className="absolute -inset-6 bg-cardano-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                alt="ADAspending Logo" 
                className="h-16 md:h-20 animate-float object-contain w-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-all duration-700 relative z-10" 
                src="/assets/1b553c01-58c1-4454-8098-2be801352be8.png" 
                fetchpriority="high"
                loading="eager"
              />
            </div>
          </Link>

          <div className="max-w-4xl mx-auto h-24 md:h-32 flex items-center justify-center mb-10 md:mb-8">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight transition-all duration-500 animate-in fade-in zoom-in-95 duration-700" key={currentPhraseIndex}>
              {phrases[currentPhraseIndex].includes('Cardano') ? (
                <>
                  {phrases[currentPhraseIndex].split('Cardano')[0]}
                  <span className="bg-gradient-to-r from-cardano-blue to-blue-400 bg-clip-text text-transparent">
                    Cardano
                  </span>
                  {phrases[currentPhraseIndex].split('Cardano')[1]}
                </>
              ) : phrases[currentPhraseIndex]}
            </h1>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto mb-14 md:mb-12 text-base md:text-lg font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {t('teaser.hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-14 md:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button asChild size="lg" className="group relative bg-white text-[#020617] hover:bg-white/90 px-10 py-6 text-lg font-black rounded-xl shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all hover:scale-105 active:scale-95 overflow-hidden border-none">
              <Link to="/overview" className="flex items-center gap-2">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cardano-blue/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                {t('teaser.hero.start_exploring')}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Quick Features Row - Centralized */}
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-6 opacity-30 hover:opacity-100 transition-opacity duration-700 animate-in fade-in duration-1000 delay-700 mb-4">
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">{t('nav.explorer')}</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">{t('nav.analytics')}</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-4 w-4 text-purple-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Blockchain Data</span>
            </div>
          </div>

          {/* Scroll Down Animation - In Flow with balanced spacing */}
          <div className="flex flex-col items-center justify-center mt-4 cursor-pointer animate-bounce group" onClick={scrollToNextSection}>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] mb-2 text-white/30 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300">
              {t('teaser.hero.scroll')}
            </span>
            <div className="p-1.5 rounded-full border border-white/10 bg-white/5 text-white/30 group-hover:text-white transition-colors">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
