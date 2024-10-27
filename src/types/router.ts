import { ReactElement } from "react";

export interface RouteMeta {
  /**
   * antd menu selectedKeys
   */
  key: string;
  /**
   * menu i18n label
   */
  label: string;
  /**
   * hide in multi tab
   */
  hideTab?: boolean;
  /**
   * react router outlet
   */
  outlet?: ReactElement | null;
  /**
   * timeStamp
   */
  timeStamp?: string;
}
