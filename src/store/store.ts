import { configureStore } from "@reduxjs/toolkit";

import { settingSlice } from "./setting-slice";
import { userInfoSlice } from "./user-info-slice";

export const store = configureStore({
  reducer: {
    setting: settingSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
