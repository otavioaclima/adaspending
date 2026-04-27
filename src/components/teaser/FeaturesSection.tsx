import React from 'react';
import { BarChart3, Award, Database, Users, ChartLine, Search, LayoutTemplate } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Database,
      title: t('teaser.features.track.title'),
      desc: t('teaser.features.track.desc'),
      color: 'blue',
      gradient: 'from-blue-500/20 to-blue-400/5'
    },
    {
      icon: Award,
      title: t('teaser.features.review.title'),
      desc: t('teaser.features.review.desc'),
      color: 'emerald',
      gradient: 'from-emerald-500/20 to-emerald-400/5'
    },
    {
      icon: BarChart3,
      title: t('teaser.features.analyze.title'),
      desc: t('teaser.features.analyze.desc'),
      color: 'rose',
      gradient: 'from-rose-500/20 to-rose-400/5'
    },
    {
      icon: Search,
      title: t('teaser.features.search.title'),
      desc: t('teaser.features.search.desc'),
      color: 'indigo',
      gradient: 'from-indigo-500/20 to-indigo-400/5'
    },
    {
      icon: ChartLine,
      title: t('teaser.features.trends.title'),
      desc: t('teaser.features.trends.desc'),
      color: 'amber',
      gradient: 'from-amber-500/20 to-amber-400/5'
    },
    {
      icon: Users,
      title: t('teaser.features.insights.title'),
      desc: t('teaser.features.insights.desc'),
      color: 'purple',
      gradient: 'from-purple-500/20 to-purple-400/5'
    }
  ];

  return (
    <section id="features" className="py-16 px-4 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cardano-blue/5 dark:bg-cardano-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} 
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-cardano-blue/30 text-cardano-blue bg-cardano-blue/5 backdrop-blur-md rounded-full font-bold uppercase tracking-widest text-[10px]">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 dark:text-white tracking-tight leading-tight">
            {t('teaser.features.title_before')}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cardano-blue to-blue-400 bg-clip-text text-transparent">{t('teaser.features.title_highlight')}</span>
            {t('teaser.features.title_after')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            {t('teaser.features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative">
              {/* Card Container */}
              <div className="relative z-10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-gray-200/50 dark:border-white/5 shadow-2xl hover:shadow-cardano-blue/5 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`h-7 w-7 
                    ${feature.color === 'blue' ? 'text-blue-500' : ''}
                    ${feature.color === 'emerald' ? 'text-emerald-500' : ''}
                    ${feature.color === 'rose' ? 'text-rose-500' : ''}
                    ${feature.color === 'indigo' ? 'text-indigo-500' : ''}
                    ${feature.color === 'amber' ? 'text-amber-500' : ''}
                    ${feature.color === 'purple' ? 'text-purple-500' : ''}
                  `} />
                </div>
                
                <h3 className="text-xl font-black mb-3 dark:text-white tracking-tight leading-snug">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* Decorative element */}
                <div className="mt-auto pt-6 flex justify-end">
                  <div className="w-8 h-1 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:w-16 group-hover:bg-cardano-blue transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
