import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { usePermissionRoutes } from "@/hooks";
import { Dashboard } from "@/layouts";
import { Login } from "@/pages/sys/login";
import { Page403 } from "@/pages/sys/page-403";
import { Page404 } from "@/pages/sys/page-404";
import { Page500 } from "@/pages/sys/page-500";

const loginRoutes = {
  path: "login",
  // Component: lazy(() => import("@/pages/sys/login/Login")),
  element: <Login />,
  // async lazy() {
  // 	const { Login } = await import("@/pages/sys/login/Login");
  // 	return { Component: Login };
  // },
  // lazy: () => import("../pages/sys/login/Login"),
};

const errorRoutes = {
  element: <Dashboard />,
  loader: () => {
    return { label: "Dashboard Error" };
  },
  children: [
    { path: "403", element: <Page403 /> },
    { path: "404", element: <Page404 /> },
    { path: "500", element: <Page500 /> },
  ],
};

const pageNotFoundRoutes = {
  path: "*",
  element: <Navigate to="/404" replace />,
};

export const Router = () => {
  const permissionRoutes = usePermissionRoutes();
  const asyncRoutes: RouteObject = {
    path: "/",
    id: "/",
    element: <Dashboard />,
    loader: () => {
      return { label: "Dashboard" };
    },
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard/workbench"} replace />,
      },
      // {
      //   path: "dashboard",
      //   children: [
      //     {
      //       path: "workbench",
      //       id: "/dashboard/workbench",
      //       element: <Workbench />,
      //       loader: () => {
      //         return { label: "Workbench" };
      //       },
      //     },
      //   ],
      // },
      // {
      //   path: "management",
      //   children: [
      //     {
      //       path: "permission",
      //       id: "/management/permission",
      //       element: <Permission />,
      //       loader: () => {
      //         return { label: "Permission" };
      //       },
      //     },
      //   ],
      // },
      ...permissionRoutes,
    ],
  };
  // as RouteObject[]
  const routes = [loginRoutes, asyncRoutes, errorRoutes, pageNotFoundRoutes];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
