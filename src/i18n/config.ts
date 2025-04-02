import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationEN from './en/translation.json';
import translationES from './es/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: process.env.NODE_ENV === 'development',
    load: 'currentOnly',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
  });

export default i18n;