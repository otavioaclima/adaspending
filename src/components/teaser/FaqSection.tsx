
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

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
    <section className="py-16 px-4 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-cardano-blue/10 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-cardano-blue" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('teaser.faq.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('teaser.faq.description')}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border dark:border-gray-700">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b dark:border-gray-700 last:border-none">
                <AccordionTrigger className="text-left px-6 text-gray-800 dark:text-gray-200 hover:text-cardano-blue dark:hover:text-cardano-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600 dark:text-gray-400">
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
