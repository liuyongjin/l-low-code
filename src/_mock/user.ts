import { MockMethod } from "vite-plugin-mock";

import { mockMenuData } from "./permissions";

const mockUserInfo = {
  id: "000001",
  username: "admin",
  menus: mockMenuData,
  token: "token",
};

export default [
  {
    url: "/api/user/login",
    method: "post",
    response: () => {
      return {
        status: 0,
        message: "成功",
        data: mockUserInfo,
      };
    },
  },
] as MockMethod[];
