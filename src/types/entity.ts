import { ReactElement } from "react";

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
  deletable?: boolean;
  editable?: boolean;
}

export interface TabEntity {
  /**
   * selectedKeys
   */
  key: string;
  /**
   * i18n label
   */
  label: string;
  /**
   * hide in multi tab
   */
  hideTab?: boolean;
  /**
   * auth
   */
  auth?: string[];
  /**
   * react router outlet
   */
  outlet?: ReactElement | null;
  /**
   * timeStamp
   */
  timeStamp?: string;
}
