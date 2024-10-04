import "antd/dist/reset.css";

import { ConfigProvider, theme } from "antd";
import { PropsWithChildren } from "react";

import { useLocale } from "@/hooks";
import { useSettings } from "@/store";
import { ThemeMode } from "@/types/enum";

import {
  colorPrimarys,
  customComponentConfig,
  customThemeTokenConfig,
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
          ...customThemeTokenConfig,
          ...themeModeToken[themeMode].token,
        },
        components: {
          ...customComponentConfig,
          ...themeModeToken[themeMode].components,
        },
        algorithm,
      }}
    >
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      {/* <StyleProvider hashPriority="high"> */}
      {children}
      {/* </StyleProvider> */}
    </ConfigProvider>
  );
}