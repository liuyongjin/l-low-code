import { MockMethod } from "vite-plugin-mock";

const mockUserInfo = {
  id: "000001",
  username: "l-admin",
  role: {
    id: "id",
    name: "name",
  },
  permissions: [
    {
      label: "layout.menu.dashboard",
      icon: "material-symbols:data-thresholding-outline-rounded",
      path: "dashboard",
      id: "/dashboard",
      children: [
        {
          parentId: "/dashboard",
          label: "layout.menu.workbench",
          path: "workbench",
          id: "/dashboard/workbench",
          componentName: "Workbench",
          component: "/dashboard/workbench/index.tsx",
        },
      ],
    },
    {
      label: "layout.menu.management",
      icon: "material-symbols:admin-panel-settings-rounded",
      path: "management",
      id: "/management",
      children: [
        {
          parentId: "/management",
          label: "layout.menu.permission",
          path: "permission",
          id: "/management/permission",
          componentName: "Permission",
          component: "/management/permission/index.tsx",
        },
      ],
    },
  ],
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
