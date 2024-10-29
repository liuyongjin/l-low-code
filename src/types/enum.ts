export enum BasicStatus {
  DISABLE,
  ENABLE,
}

export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
}

export enum StorageEnum {
  UserInfo = "userinfo",
  Settings = "settings",
  I18N = "i18nextLng",
}

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export enum ThemeColorPresets {
  Default = "default",
  Blue = "blue",
  Orange = "orange",
  Red = "red",
}

export enum LocalEnum {
  en_US = "en_US",
  zh_CN = "zh_CN",
}

export enum MultiTabOperation {
  FULLSCREEN = "fullscreen",
  REFRESH = "refresh",
  CLOSE = "close",
  CLOSEOTHERS = "closeOthers",
  CLOSEALL = "closeAll",
  CLOSELEFT = "closeLeft",
  CLOSERIGHT = "closeRight",
}
