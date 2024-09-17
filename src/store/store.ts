import { configureStore } from "@reduxjs/toolkit";

import { settingSlice } from "./setting-slice";

export const store = configureStore({
  reducer: {
    setting: settingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// // // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
