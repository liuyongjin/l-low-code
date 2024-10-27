import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard, CircleLoading } from "@/components";
import { useThemeToken } from "@/hooks";

import { HeaderSimple } from "./components/header-simple";

export const SimpleLayout = () => {
  const { colorBgElevated, colorTextBase } = useThemeToken();

  return (
    <AuthGuard>
      <Suspense fallback={<CircleLoading />}>
        <div
          className="flex h-screen w-full flex-col"
          style={{
            color: colorTextBase,
            background: colorBgElevated,
          }}
        >
          <HeaderSimple />
          <Outlet />
        </div>
      </Suspense>
    </AuthGuard>
  );
};
