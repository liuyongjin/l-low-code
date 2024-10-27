import { BasicStatus } from "./enum";

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
export interface MenuEntity {
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

export interface RoleEntity {
  id: string;
  name: string;
  label: string;
}
