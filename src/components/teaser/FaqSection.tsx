import React from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FaqSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('teaser.faq.q1.q'),
      answer: t('teaser.faq.q1.a')
    },
    {
      question: t('teaser.faq.q2.q'),
      answer: t('teaser.faq.q2.a')
    },
    {
      question: t('teaser.faq.q3.q'),
      answer: t('teaser.faq.q3.a')
    },
    {
      question: t('teaser.faq.q4.q'),
      answer: t('teaser.faq.q4.a')
    },
    {
      question: t('teaser.faq.q5.q'),
      answer: t('teaser.faq.q5.a')
    },
    {
      question: t('teaser.faq.q6.q'),
      answer: t('teaser.faq.q6.a')
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cardano-blue/5 dark:bg-cardano-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-cardano-blue/30 text-cardano-blue bg-cardano-blue/5 backdrop-blur-md rounded-full font-bold uppercase tracking-widest text-[10px]">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white tracking-tight leading-tight">
            {t('teaser.faq.title').split(' ')[0]} <span className="bg-gradient-to-r from-cardano-blue to-blue-400 bg-clip-text text-transparent">{t('teaser.faq.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            {t('teaser.faq.description')}
          </p>
        </div>
        
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-none bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl px-6 shadow-sm hover:shadow-md hover:border-cardano-blue/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-black text-gray-900 dark:text-white hover:no-underline group transition-colors">
                  <span className="flex-1 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
