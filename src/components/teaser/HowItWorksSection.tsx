import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Database, Zap, PieChart, Users, ChevronRight, ArrowDown } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: Database,
      title: t('teaser.how_it_works.step1.title'),
      desc: t('teaser.how_it_works.step1.desc'),
      color: 'blue'
    },
    {
      id: 2,
      icon: Zap,
      title: t('teaser.how_it_works.step2.title'),
      desc: t('teaser.how_it_works.step2.desc'),
      color: 'purple'
    },
    {
      id: 3,
      icon: PieChart,
      title: t('teaser.how_it_works.step3.title'),
      desc: t('teaser.how_it_works.step3.desc'),
      color: 'emerald'
    },
    {
      id: 4,
      icon: Users,
      title: t('teaser.how_it_works.step4.title'),
      desc: t('teaser.how_it_works.step4.desc'),
      color: 'amber'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.04] [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white tracking-tight">
            {t('teaser.how_it_works.title').split('ADAspending')[0]}
            <span className="text-cardano-blue">ADAspending</span>
            {t('teaser.how_it_works.title').split('ADAspending')[1]}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cardano-blue to-blue-400 mx-auto rounded-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative group">
                {/* Step Card */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative">
                    {/* Step Number Badge */}
                    <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white z-20
                      ${step.color === 'blue' ? 'bg-blue-500' : ''}
                      ${step.color === 'purple' ? 'bg-purple-500' : ''}
                      ${step.color === 'emerald' ? 'bg-emerald-500' : ''}
                      ${step.color === 'amber' ? 'bg-amber-500' : ''}
                      shadow-[0_4px_12px_rgba(0,0,0,0.15)]`}
                    >
                      {step.id}
                    </div>

                    {/* Icon Circle */}
                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 bg-white dark:bg-gray-900 border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                      ${step.color === 'blue' ? 'border-blue-100 dark:border-blue-900 group-hover:border-blue-500' : ''}
                      ${step.color === 'purple' ? 'border-purple-100 dark:border-purple-900 group-hover:border-purple-500' : ''}
                      ${step.color === 'emerald' ? 'border-emerald-100 dark:border-emerald-900 group-hover:border-emerald-500' : ''}
                      ${step.color === 'amber' ? 'border-amber-100 dark:border-amber-900 group-hover:border-amber-500' : ''}
                      shadow-xl dark:shadow-none shadow-gray-200/50 group-hover:shadow-2xl group-hover:shadow-current/10`}
                    >
                      <step.icon className={`h-8 w-8 
                        ${step.color === 'blue' ? 'text-blue-500' : ''}
                        ${step.color === 'purple' ? 'text-purple-500' : ''}
                        ${step.color === 'emerald' ? 'text-emerald-500' : ''}
                        ${step.color === 'amber' ? 'text-amber-500' : ''}
                      `} />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-black mb-3 dark:text-white tracking-tight">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
                
                {/* Arrow (Mobile/Tablet) */}
                {idx < steps.length - 1 && (
                  <div className="flex lg:hidden justify-center my-4 text-gray-300 dark:text-gray-800">
                    <ArrowDown className="h-6 w-6" />
                  </div>
                )}
                
                {/* Connector Decoration (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
