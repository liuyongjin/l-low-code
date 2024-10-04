import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { ThemeColorPresets, ThemeMode } from "@/types/enum";

import { RootState } from "./store";

const initialState = {
  themeMode: ThemeMode.Light,
  fixHeader: false,
  themeColorPresets: ThemeColorPresets.Default,
  // themeLayout: ThemeLayout.Vertical,
  // themeStretch: false,
  // breadCrumb: true,
  multiTab: true,
};

export type settingType = Partial<typeof initialState>;

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<settingType>) => {
      Object.assign(state, action.payload)
      // return {
      //   ...state,
      //   ...action.payload,
      // };
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export const useSettings = () =>
  useSelector((state: RootState) => state.settings);
