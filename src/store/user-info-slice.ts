import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { UserInfo } from "@/types/entity";
import { StorageEnum } from "@/types/enum";
import { getItem, removeItem, setItem } from "@/utils";

import { RootState } from "./store";

type UserInfoState = {
  id?: string;
  email?: string;
  username?: string;
  password?: string;
  avatar?: string;
  role?: any;
  status?: string;
  permissions?: any;
  token?: string;
};

const initialState: UserInfoState = {
  id: "xxxxqe",
  email: "xxxxqe",
  username: "xxxxqe",
  password: "xxxxqe",
  avatar: "xxxxqe",
  role: {},
  status: "ENABLE",
  permissions: [],
  token: "token",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: getItem<UserInfo>(StorageEnum.User) || initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfoState>) => {
      const userInfo = {
        ...state,
        ...action.payload,
      };
      // console.log(userInfo);
      setItem(StorageEnum.User, userInfo);
      // state.permissions = action.payload.permissions;
      return userInfo;
    },
    clearUserInfo: () => {
      removeItem(StorageEnum.User);
      // removeItem(StorageEnum.Token);
      return {};
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;

export const useUserInfo = () =>
  useSelector((state: RootState) => state.userInfo);
