import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en_US from "./lang/en_US";
import zh_CN from "./lang/zh_CN";

const defaultLng = "zh_CN";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    debug: false,
    lng: defaultLng,
    fallbackLng: defaultLng,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en_US: { translation: en_US },
      zh_CN: { translation: zh_CN },
    },
  });
