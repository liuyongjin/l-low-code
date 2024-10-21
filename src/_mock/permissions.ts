import { MockMethod } from "vite-plugin-mock";

export const mockMenuData = [
  {
    parentId: "",
    label: "layout.menu.dashboard",
    icon: "material-symbols:data-thresholding-outline-rounded",
    path: "dashboard",
    id: "/dashboard",
    componentName: "",
    component: "",
    auth: [],
    status: "Enable",
    children: [
      {
        parentId: "/dashboard",
        label: "layout.menu.workbench",
        path: "workbench",
        id: "/dashboard/workbench",
        componentName: "Workbench",
        component: "/dashboard/workbench/index.tsx",
        auth: ["add", "delete", "view", "edit"],
        status: "Enable",
      },
    ],
  },
  {
    parentId: "",
    label: "layout.menu.list",
    icon: "material-symbols:data-thresholding-outline-rounded",
    path: "list",
    id: "/list",
    componentName: "",
    component: "",
    auth: [],
    status: "Enable",
    children: [
      {
        parentId: "/list",
        label: "layout.menu.table-list",
        path: "table-list",
        id: "/list/table-list",
        componentName: "TableList",
        component: "/list/table-list/index.tsx",
        auth: ["add", "delete", "view", "edit"],
      },
    ],
  },
  {
    parentId: "",
    label: "layout.menu.management",
    icon: "material-symbols:admin-panel-settings-rounded",
    path: "management",
    id: "/management",
    componentName: "",
    component: "",
    auth: [],
    status: "Enable",
    children: [
      {
        parentId: "/management",
        label: "layout.menu.permissions",
        path: "permissions",
        id: "/management/permissions",
        componentName: "Permissions",
        component: "/management/permissions/index.tsx",
        auth: ["add", "delete", "view", "edit"],
        status: "Enable",
      },
    ],
  },
];

export default [
  {
    url: "/api/user/permissions",
    method: "post",
    response: () => {
      return {
        status: 0,
        message: "成功",
        data: mockMenuData,
      };
    },
  },
] as MockMethod[];
