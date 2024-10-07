import { useMutation, useQuery } from "@tanstack/react-query";

import { UserInfoState } from "@/store";

import { baseService } from "./baseService";

export interface SignInReq {
  username?: string;
  password?: string;
}

export type SignInRes = {
  status: number;
  message: string;
  data: UserInfoState;
};

export enum UserApi {
  Login = "/user/login",
}

// baseService.post<SignInRes>({ url: UserApi.Login, data });
export const login = (data: SignInReq) =>
  baseService.post({ url: UserApi.Login, data });

export const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: (data: SignInReq) => {
      return login(data);
    },
  });
  // return useQuery({
  //   enabled: false,
  //   queryKey: [UserApi.Login],
  //   queryFn: () => {
  //     return login({
  //       // username: "",
  //       // password: "",
  //     });
  //   },
  // });
  return loginMutation.mutateAsync;
};
