// import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "./store";

const initialState = {
  id: "xxxxqe",
  email: "xxxxqe",
  username: "xxxxqe",
  password: "xxxxqe",
  avatar: "xxxxqe",
  role: {},
  status: "ENABLE",
  permissions: [],
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
});

export const useUserInfo = () =>
  useSelector((state: RootState) => state.userInfo);
