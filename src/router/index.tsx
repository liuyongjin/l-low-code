// import { lazy } from "react";
import {
	Navigate,
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { Login } from "@/pages/sys/login/Login";

const LoginRoute = {
	path: "login",
	// Component: lazy(() => import("@/pages/sys/login/Login")),
	element: <Login />,
	// async lazy() {
	// 	const { Login } = await import("@/pages/sys/login/Login");
	// 	return { Component: Login };
	// },
	// lazy: () => import("../pages/sys/login/Login"),
};

export const Router = () => {
	const routes = [
		{
			path: "/",
			element: <div>Hello world!</div>,
		},
		LoginRoute,
		{ path: "404", element: <div>404</div> },
		{
			path: "*",
			element: <Navigate to="/404" replace />,
		},
	];
	// const router = createHashRouter(routes as unknown as RouteObject[]);
	const router = createBrowserRouter(routes as RouteObject[]);
	return <RouterProvider router={router} />;
};
