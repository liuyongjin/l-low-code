import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { MenuEntity } from "@/types/entity";
import { StorageEnum } from "@/types/enum";
import { getItem, removeItem, setItem } from "@/utils";

import { RootState } from "./store";

export type UserInfoState = {
  id?: string;
  username?: string;
  role?: {
    id: string;
    name?: string;
  };
  menus?: MenuEntity[];
  token?: string;
};

const initialState: UserInfoState = {
  id: "xxxxqe",
  username: "xxxxqe",
  role: {
    id: "id",
    name: "name",
  },
  menus: [],
  token: "token",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: getItem<UserInfoState>(StorageEnum.UserInfo) || initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfoState>) => {
      const userInfo = {
        ...state,
        ...action.payload,
      };
      setItem(StorageEnum.UserInfo, userInfo);
      return userInfo;
    },
    clearUserInfo: () => {
      removeItem(StorageEnum.UserInfo);
      // removeItem(StorageEnum.Token);
      return {};
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;

export const useUserInfo = () =>
  useSelector((state: RootState) => state.userInfo);
