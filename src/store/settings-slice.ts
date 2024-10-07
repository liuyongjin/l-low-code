import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { StorageEnum, ThemeColorPresets, ThemeMode } from "@/types/enum";
import { getItem, removeItem, setItem } from "@/utils";

import { RootState } from "./store";

type SettingsState = {
  themeMode: ThemeMode;
  fixHeader: boolean;
  themeColorPresets: ThemeColorPresets;
  multiTab: boolean;
};

const initialState: SettingsState = {
  themeMode: ThemeMode.Light,
  fixHeader: true,
  themeColorPresets: ThemeColorPresets.Default,
  multiTab: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: getItem<SettingsState>(StorageEnum.Settings) || initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsState>) => {
      const newState = Object.assign(state, action.payload);
      // console.log(JSON.stringify(newState));
      setItem(StorageEnum.Settings, newState);
      // return {
      //   ...state,
      //   ...action.payload,
      // };
    },
    clearSettings() {
      removeItem(StorageEnum.Settings);
    },
  },
});

export const { setSettings, clearSettings } = settingsSlice.actions;

export const useSettings = () =>
  useSelector((state: RootState) => state.settings);
