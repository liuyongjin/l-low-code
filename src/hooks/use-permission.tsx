import { useEffect, useState } from "react";
import { useLocation, useRouteLoaderData } from "react-router-dom";

import { TabEntity } from "@/types";

export const usePermission = (permissions?: string[]) => {
  const { pathname } = useLocation();
  const [allowedAccess, setAllowedAccess] = useState(false);
  const loaderData = useRouteLoaderData(pathname) as TabEntity;
  const { auth = [] } = loaderData;

  useEffect(() => {
    if (permissions && permissions?.length > 0) {
      const intersection = permissions.filter((permission: string) =>
        auth.includes(permission),
      );
      if (intersection.length > 0) {
        setAllowedAccess(true);
      }
    }
  }, [auth, permissions]);

  return allowedAccess;
};
