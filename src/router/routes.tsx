// import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { Dashboard } from "@/layouts";
import { Page403 } from "@/pages/sys/error/Page403";
import { Page404 } from "@/pages/sys/error/Page404";
import { Page500 } from "@/pages/sys/error/Page500";
import { Login } from "@/pages/sys/login/Login";

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
        element: <div>dashboard/workbench</div>,
      },
    ],
  };

  const routes = [loginRoutes, asyncRoutes, errorRoutes, pageNotFoundRoutes];
  console.log(routes);
  // const router = createHashRouter(routes as unknown as RouteObject[]);
  const router = createBrowserRouter(routes as RouteObject[]);
  return <RouterProvider router={router} />;
};
