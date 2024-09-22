import { useEffect, useState } from "react";
import {
  // useLoaderData,
  useLocation,
  useMatches,
  useOutlet,
  useRouteLoaderData,
} from "react-router-dom";

import { RouteMeta } from "@/types/router";

import { useRouter } from "./use-router";

const { HOMEPAGE } = import.meta.env;
/**
 * 返回当前路由Meta信息
 */
export function useCurrentRouteMeta() {
  const { pathname } = useLocation();
  const { push } = useRouter();

  // 获取路由组件实例
  const outlet = useOutlet();

  // 获取所有匹配的路由
  const matchs = useMatches();

  const [currentRouteMeta, setCurrentRouteMeta] = useState<RouteMeta>();

  const loaderData = useRouteLoaderData(
    pathname.split("/").pop() || "",
  ) as RouteMeta;
  // console.log(loaderData, pathname);

  useEffect(() => {
    // 获取当前匹配的路由
    const lastRoute = matchs[matchs.length - 1];
    if (!lastRoute) return;
    if (loaderData) {
      loaderData.outlet = outlet;
      loaderData.key = pathname;
      loaderData.disabled = false;
      loaderData.hideMenu = false;
      loaderData.hideTab = false;
      setCurrentRouteMeta({ ...loaderData });
      console.log(loaderData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchs]);

  return currentRouteMeta;
}

// /**
//  * replace `user/:id`  to `/user/1234512345`
//  */
// export const replaceDynamicParams = (
//   menuKey: string,
//   params: Params<string>,
// ) => {
//   let replacedPathName = menuKey;

//   // 解析路由路径中的参数名称
//   const paramNames = menuKey.match(/:\w+/g);

//   if (paramNames) {
//     paramNames.forEach((paramName) => {
//       // 去掉冒号，获取参数名称
//       const paramKey = paramName.slice(1);
//       // 检查params对象中是否有这个参数
//       if (params[paramKey]) {
//         // 使用params中的值替换路径中的参数
//         replacedPathName = replacedPathName.replace(
//           paramName,
//           params[paramKey]!,
//         );
//       }
//     });
//   }

//   return replacedPathName;
// };
