import { createStyles } from "antd-style";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthGuard, CircleLoading } from "@/components";

import { HeaderSimple } from "./components/header-simple";

export const SimpleLayout = () => {
  const { styles } = useStyles();

  return (
    <AuthGuard>
      <Suspense fallback={<CircleLoading />}>
        <div className={styles.simpleLayout}>
          <HeaderSimple />
          <Outlet />
        </div>
      </Suspense>
    </AuthGuard>
  );
};

const useStyles = createStyles(({ token }) => {
  const { colorBgElevated, colorTextBase } = token;

  return {
    simpleLayout: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      height: "100vh",
      color: colorTextBase,
      background: colorBgElevated,
    },
  };
});
