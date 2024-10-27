import { ThemeConfig } from "antd";

import { ThemeColorPresets } from "@/types/enum";

const customThemeToken: ThemeConfig["token"] = {};

const customComponent: ThemeConfig["components"] = {};

const colorPrimarys: {
  [k in ThemeColorPresets]: string;
} = {
  default: "#00a76f",
  cyan: "#078DEE",
  purple: "#7635DC",
  blue: "#2065D1",
  orange: "#FDA92D",
  red: "#FF3030",
};

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
