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

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<settingType>) => {
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

export const { setSetting } = settingSlice.actions;

export const useSetting = () =>
  useSelector((state: RootState) => state.setting);
