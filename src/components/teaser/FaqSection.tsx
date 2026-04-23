
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is ADAspending?",
      answer: "ADAspending is an open data source for tracking treasury spending on the Cardano blockchain. We provide transparency and accountability for community funds by making all spending data accessible and easy to understand."
    },
    {
      question: "Is ADAspending an open-source project?",
      answer: "ADAspending is a 100% open-source project."
    },
    {
      question: "How does ADAspending get its data?",
      answer: "All data is sourced directly from the public Cardano blockchain. We monitor treasury transactions and categorize them to provide insights into how funds are being used across different industries and vendors."
    },
    {
      question: "When will ADAspending launch?",
      answer: "ADAspending is currently in development and will be launching soon. Follow us on social media to stay updated on our progress and launch date."
    },
    {
      question: "Can I contribute to ADAspending?",
      answer: "Absolutely! ADAspending is a 100% open-source project. Once we launch, you can contribute to our codebase, suggest features, or help improve our data categorization."
    },
    {
      question: "How can I use ADAspending data?",
      answer: "Once launched, you'll be able to search and explore Cardano treasury spending by industry and recipient, track funding across time and categories, and analyze the allocation of community funds for greater transparency."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-cardano-blue/10 p-3 rounded-full">
              <HelpCircle className="h-8 w-8 text-cardano-blue" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about ADAspending and how it brings transparency to Cardano's treasury.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 text-gray-800 hover:text-cardano-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
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
