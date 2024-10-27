import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { LocalEnum, StorageEnum } from "@/types";
import { getStringItem } from "@/utils";

import en_US from "./lang/en_US/index.json";
import zh_CN from "./lang/zh_CN/index.json";

const defaultLng =
  getStringItem(StorageEnum.I18N) || (LocalEnum.zh_CN as string);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
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
