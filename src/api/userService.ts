import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export enum UserApi {
  Login = "/user/login",
}

export interface LoginReq {
  username?: string;
  password?: string;
}

export const login = (data: LoginReq) =>
  baseService.post({ url: UserApi.Login, data });

export const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: login,
  });

  return loginMutation.mutateAsync;
};
