import { PropsWithChildren } from "react";

import { usePermission } from "@/hooks";

export type AllowedAccessProps = {
  permissions?: string[];
} & PropsWithChildren;

export const AllowedAccess = ({
  permissions = [],
  children,
}: AllowedAccessProps) => {
  const allowedAccess = usePermission(permissions);

  if (allowedAccess) {
    return children;
  }

  return null;
};
