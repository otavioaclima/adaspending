import React from 'react';
import { Globe, Search, ChartBar, Clock, Link as LinkIcon, Info, ShieldCheck, Database, LayoutPanelTop } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Globe, text: t('teaser.about.item1'), color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Database, text: t('teaser.about.item2'), color: 'text-cardano-blue', bg: 'bg-cardano-blue/10' },
    { icon: ChartBar, text: t('teaser.about.item3'), color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { icon: Clock, text: t('teaser.about.item4'), color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { icon: LinkIcon, text: t('teaser.about.item5'), color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: ShieldCheck, text: t('teaser.about.item6'), color: 'text-rose-500', bg: 'bg-rose-500/10' },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 dark:text-white tracking-tight leading-tight">
              {t('teaser.about.title').split('ADAspending')[0]}
              <span className="bg-gradient-to-r from-cardano-blue to-blue-400 bg-clip-text text-transparent">ADAspending</span>
              {t('teaser.about.title').split('ADAspending')[1]}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg font-medium leading-relaxed">
              {t('teaser.about.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex items-start p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300">
                  <div className={`p-2.5 ${feature.bg} rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-snug">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Visual Dashboard Representation */}
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-white/10 p-6 shadow-2xl overflow-hidden group">
              {/* Inner Dashboard Elements */}
              <div className="absolute top-0 right-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-6 w-6 rounded-lg bg-cardano-blue/20" />
                    <div className="h-6 w-6 rounded-lg bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-3">
                    <div className="h-2 w-10 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                    <div className="h-4 w-16 bg-cardano-blue/40 rounded" />
                  </div>
                  <div className="h-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-3">
                    <div className="h-2 w-10 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                    <div className="h-4 w-16 bg-emerald-500/40 rounded" />
                  </div>
                  <div className="h-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-3">
                    <div className="h-2 w-10 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                    <div className="h-4 w-16 bg-amber-500/40 rounded" />
                  </div>
                </div>
                
                <div className="h-40 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm p-6 overflow-hidden">
                  <div className="flex justify-between mb-4">
                    <div className="h-3 w-20 bg-gray-100 dark:bg-gray-700 rounded" />
                    <div className="h-3 w-10 bg-gray-100 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {[30, 60, 45, 90, 70, 50, 80, 40].map((h, i) => (
                      <div key={i} className="flex-1 bg-cardano-blue/20 rounded-t-lg group-hover:bg-cardano-blue/40 transition-all duration-700" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Verified Data</p>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">On-chain Transparency</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration for the image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
