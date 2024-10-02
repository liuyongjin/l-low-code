import { useCreation } from "ahooks";
import { isEmpty } from "ramda";
import { ComponentType } from "react";
// import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// import { CircleLoading } from "@/components";
import { ENTRY_PATH } from "@/constants";
import { useUserInfo } from "@/store";
import { Permission } from "@/types/entity";

// const entryPath = "/src/pages";
const pages = import.meta.glob("/src/pages/**/*.tsx");

// function resolveComponent(path: string) {
//   return pages[`${entryPath}${path}`];
// }

function transformToPermissionRoutes(permissions: Permission[]) {
  return permissions.map((permission) => {
    const {
      id,
      label,
      path,
      icon,
      componentName,
      component,
      children = [],
    } = permission;
    const route: RouteObject = {
      path: path,
      id: id,
      loader: () => {
        return { icon, label };
      },
      async lazy() {
        if (componentName && component) {
          // const importComponent = await import(`${ENTRY_PATH}${component}`);
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

    // if (component) {
    //   const Element = lazy(resolveComponent(component!) as any);
    //   route.element = (
    //     <Suspense fallback={<CircleLoading />}>
    //       <Element />
    //       {/* <div>{path}</div> */}
    //     </Suspense>
    //   );
    // }

    if (!isEmpty(children)) {
      route.children = transformToPermissionRoutes(children);
      // route.children.unshift({
      //   index: true,
      //   element: <Navigate to={children[0].route} replace />,
      // });
    }

    return route;
  });
}

export function usePermissionRoutes() {
  const { permissions = [] } = useUserInfo();
  return useCreation(() => {
    return transformToPermissionRoutes(permissions);
  }, []);
}
