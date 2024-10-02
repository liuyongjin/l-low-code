import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { UserInfo } from "@/types/entity";
import { StorageEnum } from "@/types/enum";
import { getItem, setItem } from "@/utils";

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
  initialState: getItem<UserInfo>(StorageEnum.User) || initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Partial<unknown>>) => {
      const userInfo = {
        ...state,
        ...action.payload,
      };
      console.log(userInfo);
      setItem(StorageEnum.User, userInfo);
      return userInfo;
    },
    // clearUserInfoAndToken
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export const useUserInfo = () =>
  useSelector((state: RootState) => state.userInfo);
