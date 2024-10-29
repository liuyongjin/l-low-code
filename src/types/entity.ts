import { BasicStatus } from "./enum";

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
