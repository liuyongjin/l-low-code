import { configureStore } from "@reduxjs/toolkit";

import { settingsSlice } from "./settings-slice";
import { userInfoSlice } from "./user-info-slice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
