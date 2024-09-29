import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { ThemeColorPresets, ThemeLayout, ThemeMode } from "@/types/enum";

import { RootState } from "./store";

const initialState = {
  themeColorPresets: ThemeColorPresets.Default,
  themeMode: ThemeMode.Light,
  themeLayout: ThemeLayout.Vertical,
  themeStretch: false,
  breadCrumb: true,
  multiTab: true,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSettings: (
      state,
      action: PayloadAction<Partial<typeof initialState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
      // state.multiTab = action.payload.multiTab;
      // return state;
      // state = {
      //   ...state,
      //   ...action.payload,
      // };
    },
  },
});

export const { setSettings } = settingSlice.actions;

export const useSetting = () =>
  useSelector((state: RootState) => state.setting);
