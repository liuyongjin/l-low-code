// import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { Dashboard } from "@/layouts";
import { Workbench } from "@/pages/dashboard/workbench/workbench";
import { Permission } from "@/pages/management/permission/permission";
import { Login } from "@/pages/sys/login/login";
import { Page403 } from "@/pages/sys/page-403/page-403";
import { Page404 } from "@/pages/sys/page-404/page-404";
import { Page500 } from "@/pages/sys/page-500/page-500";

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
  const asyncRoutes: RouteObject = {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard/workbench"} replace />,
      },
      {
        path: "dashboard/workbench",
        element: <Workbench />,
      },
      {
        path: "management/permission",
        element: <Permission />,
      },
    ],
  };

  const routes = [loginRoutes, asyncRoutes, errorRoutes, pageNotFoundRoutes];
  // const router = createHashRouter(routes as unknown as RouteObject[]);
  const router = createBrowserRouter(routes as RouteObject[]);
  return <RouterProvider router={router} />;
};
