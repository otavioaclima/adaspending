import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/data/translations/en';
import pt from '@/data/translations/pt';
import es from '@/data/translations/es';
import jp from '@/data/translations/jp';

export type Language = 'EN' | 'PT' | 'ES' | 'JP';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Translations = Record<string, string>;

const translationsMap: Record<Language, Translations> = {
  EN: en,
  PT: pt,
  ES: es,
  JP: jp,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('adaspending-lang') as Language) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('adaspending-lang', language);
  }, [language]);

  const t = (key: string): string => {
    const currentTranslations = translationsMap[language];
    const fallbackTranslations = translationsMap['EN'];
    
    return currentTranslations[key] ?? fallbackTranslations[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
