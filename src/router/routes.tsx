import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { usePermissionRoutes } from "@/hooks";
import { Main } from "@/layouts";
import { Login } from "@/pages/sys/login";
import { Page403 } from "@/pages/sys/page-403";
import { Page404 } from "@/pages/sys/page-404";
import { Page500 } from "@/pages/sys/page-500";

const loginRoutes = {
  path: "login",
  element: <Login />,
};

const errorRoutes = {
  element: <Main />,
  loader: () => {
    return { label: "Page Error" };
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
    element: <Main />,
    loader: () => {
      return { label: "Dashboard" };
    },
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard/workbench"} replace />,
      },
      ...permissionRoutes,
    ],
  };
  const routes = [loginRoutes, asyncRoutes, errorRoutes, pageNotFoundRoutes];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
