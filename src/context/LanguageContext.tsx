import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../content/en';
import { de } from '../content/de';
import { fr } from '../content/fr';
import { it } from '../content/it';

export type Language = 'en' | 'de' | 'fr' | 'it';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

const dictionaries: Record<Language, any> = { en, de, fr, it };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string, fallback?: string) => string;
  getContent: (page: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('oralakeview_lang');
    return (saved === 'en' || saved === 'de' || saved === 'fr' || saved === 'it') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('oralakeview_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (keyPath: string, fallback: string = ''): string => {
    const keys = keyPath.split('.');
    let current = dictionaries[language] || dictionaries.en;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if translation missing
        let fallbackCurrent = dictionaries.en;
        for (const fk of keys) {
          if (fallbackCurrent && typeof fallbackCurrent === 'object' && fk in fallbackCurrent) {
            fallbackCurrent = fallbackCurrent[fk];
          } else {
            return fallback || keyPath;
          }
        }
        return typeof fallbackCurrent === 'string' ? fallbackCurrent : (fallback || keyPath);
      }
    }
    
    return typeof current === 'string' ? current : (fallback || keyPath);
  };

  const getContent = (page: string): any => {
    const dict = dictionaries[language] || dictionaries.en;
    return dict[page] || dictionaries.en[page] || {};
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getContent }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
