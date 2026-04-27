import React from 'react';
import { Users, Globe, Award, ExternalLink, Building, Heart, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";

const WhoWeAreSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="who-we-are" className="py-20 px-4 relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cardano-blue/5 dark:bg-cardano-blue/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-cardano-blue/30 text-cardano-blue bg-cardano-blue/5 backdrop-blur-md rounded-full font-bold uppercase tracking-widest text-[10px]">
            {t('teaser.who_we_are.badge')}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">
            {t('teaser.who_we_are.title').split(' ')[0]} <span className="bg-gradient-to-r from-cardano-blue to-blue-400 bg-clip-text text-transparent">{t('teaser.who_we_are.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {t('teaser.who_we_are.subtitle')}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <Carousel 
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="basis-[90%]">
                <div className="p-2 h-full">
                  <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-cardano-blue/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/5 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-cardano-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <CardContent className="p-8 relative z-10 flex flex-col h-full">
                      <div className="rounded-2xl bg-cardano-blue/10 dark:bg-cardano-blue/20 p-4 w-16 h-16 flex items-center justify-center mb-8">
                        <Building className="h-8 w-8 text-cardano-blue" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">{t('teaser.who_we_are.card1.title')}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                        {t('teaser.who_we_are.card1.desc')}
                      </p>
                      
                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card1.badge1')}</Badge>
                          <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card1.badge2')}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="basis-[90%]">
                <div className="p-2 h-full">
                  <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/5 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <CardContent className="p-8 relative z-10 flex flex-col h-full">
                      <div className="rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 p-4 w-16 h-16 flex items-center justify-center mb-8">
                        <Globe className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">{t('teaser.who_we_are.card2.title')}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                        {t('teaser.who_we_are.card2.desc')}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card2.badge1')}</Badge>
                        <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card2.badge2')}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="basis-[90%]">
                <div className="p-2 h-full">
                  <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/5 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <CardContent className="p-8 relative z-10 flex flex-col h-full">
                      <div className="rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 p-4 w-16 h-16 flex items-center justify-center mb-8">
                        <Heart className="h-8 w-8 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">{t('teaser.who_we_are.card3.title')}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                        {t('teaser.who_we_are.card3.desc')}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card3.badge1')}</Badge>
                        <Badge variant="secondary" className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card3.badge2')}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === i ? "w-6 bg-cardano-blue" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-20">
          {/* Card 1: Experienced Team */}
          <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-cardano-blue/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-cardano-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardContent className="p-10 relative z-10 flex flex-col h-full">
              <div className="rounded-2xl bg-cardano-blue/10 dark:bg-cardano-blue/20 p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Building className="h-8 w-8 text-cardano-blue" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">{t('teaser.who_we_are.card1.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                {t('teaser.who_we_are.card1.desc')}
              </p>
              
              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card1.badge1')}</Badge>
                  <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card1.badge2')}</Badge>
                </div>
                
                <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex gap-3">
                  <a href="https://governancespace.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:text-cardano-blue transition-colors" title="GovernanceSpace">
                    <Globe className="h-4 w-4" />
                  </a>
                  <a href="https://cardanofeed.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:text-cardano-blue transition-colors" title="CardanoFeed">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Our Mission */}
          <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardContent className="p-10 relative z-10 flex flex-col h-full">
              <div className="rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Globe className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">{t('teaser.who_we_are.card2.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                {t('teaser.who_we_are.card2.desc')}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card2.badge1')}</Badge>
                <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card2.badge2')}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Our Commitment */}
          <Card className="group relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardContent className="p-10 relative z-10 flex flex-col h-full">
              <div className="rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">{t('teaser.who_we_are.card3.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
                {t('teaser.who_we_are.card3.desc')}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card3.badge1')}</Badge>
                <Badge variant="secondary" className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-none font-bold text-[10px] uppercase tracking-wider">{t('teaser.who_we_are.card3.badge2')}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credibility Banner - Replacing the old Trust card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-8 bg-gray-50/50 dark:bg-gray-900/50 rounded-[3rem] border border-gray-200/50 dark:border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cardano-blue/10 rounded-2xl">
              <Award className="h-6 w-6 text-cardano-blue" />
            </div>
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{t('teaser.who_we_are.trust.item1')}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl">
              <CheckCircle2 className="h-6 w-6 text-purple-500" />
            </div>
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{t('teaser.who_we_are.trust.item2')}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl">
              <Users className="h-6 w-6 text-emerald-500" />
            </div>
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{t('teaser.who_we_are.trust.item3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
