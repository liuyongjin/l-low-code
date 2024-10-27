import "antd/dist/reset.css";

import { ConfigProvider, theme } from "antd";
import { PropsWithChildren } from "react";

import { useLocale } from "@/hooks";
import { useSettings } from "@/store";
import { ThemeMode } from "@/types/enum";

import {
  colorPrimarys,
  customComponent,
  customThemeToken,
  themeModeToken,
} from "./theme";

export function AntdConfigProvider({ children }: PropsWithChildren) {
  const { themeMode, themeColorPresets } = useSettings();

  const { language } = useLocale();

  const algorithm =
    themeMode === ThemeMode.Light
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm;
  const colorPrimary = colorPrimarys[themeColorPresets];

  return (
    <ConfigProvider
      locale={language.antdLocal}
      theme={{
        cssVar: true,
        token: {
          colorPrimary,
          ...customThemeToken,
          ...themeModeToken[themeMode].token,
        },
        components: {
          ...customComponent,
          ...themeModeToken[themeMode].components,
        },
        algorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
