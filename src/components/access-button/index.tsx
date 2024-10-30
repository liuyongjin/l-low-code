import { Button, ButtonProps } from "antd";

import { AllowedAccess } from "../allowed-access";

export type AccessButtonProps = {
  permissions?: string[];
} & ButtonProps;

export const AccessButton = ({
  permissions,
  children,
  ...extra
}: AccessButtonProps) => {
  return (
    <AllowedAccess permissions={permissions}>
      <Button {...extra}>{children}</Button>
    </AllowedAccess>
  );
};
