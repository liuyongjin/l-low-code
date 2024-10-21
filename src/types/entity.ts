// import { BasicStatus } from "./enum";

import { BasicStatus } from "./enum";

export interface UserTokenEntity {
  accessToken?: string;
  refreshToken?: string;
}

// export interface UserInfo {
//   id: string;
//   // email: string;
//   username: string;
//   password?: string;
//   // avatar?: string;
//   // role?: Role;
//   // status?: BasicStatus;
//   menus?: MenuEntity[];
// }

// export interface Organization {
//   id: string;
//   name: string;
//   status: "enable" | "disable";
//   desc?: string;
//   order?: number;
//   children?: Organization[];
// }

export interface MenuEntity {
  // label?: string;
  // icon?: string;
  // path?: string;
  // id: string;
  icon?: string;
  parentId: string;
  label?: string;
  path?: string;
  id: string;
  componentName?: string;
  component?: string;
  auth?: string[];
  status?: BasicStatus;
  children?: Array<MenuEntity>;
}

// export interface Permission {
//   id: string;
//   parentId: string;
//   // name: string;
//   label: string;
//   path: string;
//   // type: PermissionType;
//   // route: string;
//   // status?: BasicStatus;
//   // order?: number;
//   icon?: string;
//   componentName?: string;
//   component?: string;
//   // hide?: boolean;
//   // hideTab?: boolean;
//   // frameSrc?: string;
//   // newFeature?: boolean;
//   children?: Permission[];
// }

export interface RoleEntity {
  id: string;
  name: string;
  label: string;
  // status: BasicStatus;
  // order?: number;
  // desc?: string;
  // permission?: Permission[];
}
