import i18next from 'i18next';
import LanguageDetector from 'i18next-electron-language-detector';
import pt from '../locales/i18n/pt.json';
import en from '../locales/i18n/en.json';
import es from '../locales/i18n/es.json';

const currentLocale = LanguageDetector.detect();
const convertedLocale = currentLocale.startsWith('es')
  ? 'es'
  : currentLocale.replace('-', '_');

i18next.init({
  lng: convertedLocale,
  fallbackLng: 'pt_BR',
  resources: {
    pt_BR: pt,
    en_US: en,
    en,
    es,
    pt
  }
});

export default i18next;
