import { ThemeConfig } from "antd";

import { colorPrimarys } from "@/theme/antd/theme";

const customThemeToken: ThemeConfig["token"] = {};

const customComponent: ThemeConfig["components"] = {};

const themeModeToken: Record<"dark" | "light", ThemeConfig> = {
  dark: {
    token: {},
    components: {},
  },
  light: {
    components: {
      Layout: {
        headerBg: "rgb(255, 255, 255)",
        siderBg: "rgb(255, 255, 255)",
      },
    },
  },
};

export { colorPrimarys, customComponent, customThemeToken, themeModeToken };
