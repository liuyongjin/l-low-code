import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { UserInfo } from "@/types/entity";
import { StorageEnum } from "@/types/enum";
import { getItem, removeItem, setItem } from "@/utils";

import { RootState } from "./store";

interface Permission {
  label?: string;
  icon?: string;
  path?: string;
  id: string;
  children?: Array<{
    parentId: string;
    label?: string;
    path?: string;
    id: string;
    componentName?: string;
    component?: string;
  }>;
}

type UserInfoState = {
  id?: string;
  username?: string;
  role?: {
    id: string;
    name?: string;
  };
  permissions?: Permission[];
  token?: string;
};

const initialState: UserInfoState = {
  id: "xxxxqe",
  username: "xxxxqe",
  role: {
    id: "id",
    name: "name",
  },
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
