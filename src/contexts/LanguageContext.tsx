import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'PT' | 'ES' | 'JP';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Translations = Record<string, string>;

const translationLoaders: Record<Language, () => Promise<{ default: Translations }>> = {
  EN: () => import('@/data/translations/en'),
  PT: () => import('@/data/translations/pt'),
  ES: () => import('@/data/translations/es'),
  JP: () => import('@/data/translations/jp'),
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('adaspending-lang') as Language) || 'EN';
  });
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [fallbackTranslations, setFallbackTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    localStorage.setItem('adaspending-lang', language);
    
    // Load current language
    translationLoaders[language]().then(module => {
      setTranslations(module.default);
    }).catch(err => console.error(`Failed to load translations for ${language}:`, err));

    // Load EN as fallback if not already loaded
    if (language !== 'EN' && !fallbackTranslations) {
      translationLoaders['EN']().then(module => {
        setFallbackTranslations(module.default);
      }).catch(err => console.error('Failed to load fallback translations (EN):', err));
    }
  }, [language, fallbackTranslations]);

  const t = (key: string): string => {
    if (!translations) return key;
    return translations[key] ?? fallbackTranslations?.[key] ?? key;
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
