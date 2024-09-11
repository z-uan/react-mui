import i18n from 'i18next';
import Cookies from 'js-cookie';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import vi from './locates/vi/translation.json';
import zh from './locates/zh/translation.json';

export const COOKIE_KEY = 'lng';
export const COOKIE_LNG = Cookies.get(COOKIE_KEY);
export const DEFAULT_LANGUAGE = COOKIE_LNG || 'vi';
export const DEFAULT_NAMESPACE = 'translation';

export const resources = {
  vi: {
    [DEFAULT_NAMESPACE]: vi,
  },
  zh: {
    [DEFAULT_NAMESPACE]: zh,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: DEFAULT_NAMESPACE,
    ns: [DEFAULT_NAMESPACE],
    resources,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
      ],
      caches: ['cookie'],
      lookupCookie: COOKIE_KEY,
    },
  });

export default i18n;
