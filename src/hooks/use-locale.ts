import type { Locale as AntdLocal } from "antd/es/locale";
import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";
import { useTranslation } from "react-i18next";

import { Locale, LocalEnum } from "@/types";

type Language = {
  locale: keyof typeof LocalEnum;
  icon: string;
  label: string;
  antdLocal: AntdLocal;
};

export const LANGUAGE_MAP: Record<Locale, Language> = {
  [LocalEnum.zh_CN]: {
    locale: LocalEnum.zh_CN,
    label: "Chinese",
    icon: "icon-park-outline:chinese-one",
    antdLocal: zh_CN,
  },
  [LocalEnum.en_US]: {
    locale: LocalEnum.en_US,
    label: "English",
    icon: "icon-park-outline:english",
    antdLocal: en_US,
  },
};

export function useLocale() {
  const { i18n } = useTranslation();

  const locale = (i18n.resolvedLanguage || LocalEnum.en_US) as Locale;
  const language = LANGUAGE_MAP[locale];
  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
  };

  return {
    locale,
    language,
    setLocale,
  };
}
