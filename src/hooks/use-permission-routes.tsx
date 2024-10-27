import { useCreation } from "ahooks";
import { isEmpty } from "ramda";
import { ComponentType } from "react";
import { RouteObject } from "react-router-dom";

import { ENTRY_PATH } from "@/constants";
import { useUserInfo } from "@/store";
import { MenuEntity } from "@/types/entity";

const pages = import.meta.glob("/src/pages/**/*.tsx");

function transformToPermissionRoutes(menus: MenuEntity[], level: number = 0) {
  return menus.map((menu) => {
    const {
      id,
      label,
      path,
      icon,
      componentName,
      component,
      children = [],
    } = menu;

    const route: RouteObject = {
      path: path,
      id: id,
      loader: () => {
        return { icon, label };
      },
      async lazy() {
        if (componentName && component) {
          const importComponent = (await pages[
            `${ENTRY_PATH}${component}`
          ]()) as { [key: string]: ComponentType };
          return {
            Component: importComponent[componentName],
          };
        }
        return { Component: null };
      },
    };

    if (!isEmpty(children)) {
      route.children = transformToPermissionRoutes(children, level + 1);
    }

    return route;
  });
}

export function usePermissionRoutes() {
  const { menus = [] } = useUserInfo();
  return useCreation(() => {
    return transformToPermissionRoutes(menus);
  }, [menus]);
}
