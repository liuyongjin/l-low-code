import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { CircleLoading } from "@/components";

import { Nav } from "./partial/Nav";

export const Dashboard = () => {
  return (
    <Suspense fallback={<CircleLoading />}>
      <Nav />
      <Outlet />
    </Suspense>
  );
};
