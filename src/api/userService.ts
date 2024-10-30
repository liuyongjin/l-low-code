import { useMutation } from "@tanstack/react-query";

import { UserInfoState } from "@/store";

import { baseService } from "./baseService";

export enum UserApi {
  Login = "/user/login",
}

export type LoginReq = {
  username?: string;
  password?: string;
};

export const login = (data: LoginReq) =>
  baseService.post({ url: UserApi.Login, data }) as Promise<UserInfoState>;

export const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: login,
  });

  return loginMutation.mutateAsync;
};
