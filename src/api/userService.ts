import { useQuery } from "@tanstack/react-query";

import { baseService } from "./baseService";

export interface SignInReq {
  username: string;
  password: string;
}

export interface SignUpReq extends SignInReq {
  email: string;
}

export type SignInRes = any;

export enum UserApi {
  Login = "/user/login",
}

export const login = (data: SignInReq) =>
  baseService.post<SignInRes>({ url: UserApi.Login, data });

export const useLogin = () => {
  return useQuery({
    enabled: false,
    queryKey: [UserApi.Login],
    queryFn: () => {
      return login({
        // username: "",
        // password: "",
      });
    },
  });
};

// console.log(
//   login({
//     username: "",
//     password: "",
//   }),
// );
