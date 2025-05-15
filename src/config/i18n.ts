import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locals/en';
import ar from '../locals/ar';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
