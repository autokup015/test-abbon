import type { FC, PropsWithChildren } from 'react';

import i18next from 'i18next';

import { initReactI18next, I18nextProvider as Provider } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import En from './en.json';

import Th from './th.json';

// ---------------------------------------------------------------------------------

import type Thai from './th.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'default';

    // custom resources type

    resources: {
      default: typeof Thai;
    };
  }
}

// ----------------------------------------------------------------------

const lng = localStorage.getItem('i18nextLng') ?? 'th';

const resources = {
  en: {
    translation: En,
  },
  th: {
    translation: Th,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false,
    },
  });

// ----------------------------------------------------------------------

const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider i18n={i18next}>{children}</Provider>;
};

export { I18nProvider };
