import { Affix, Layout } from "antd";
import { createStyles } from "antd-style";
import { Suspense, useRef } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { CircleLoading } from "@/components";
import { MultiTabsProvider } from "@/provider";
import { useSettings } from "@/store";

import { Header } from "./components/header";
import { MultiTabs } from "./components/multi-tabs";
import { Nav } from "./components/nav";

const { Sider, Content } = Layout;

export const Main = () => {
  const { styles } = useStyles();
  const { fixHeader, multiTab } = useSettings();
  const [collapsed, setCollapsed] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Nav />
      </Sider>
      <Layout className="overflow-auto" ref={container}>
        <Affix
          offsetTop={0}
          // todo: fix warning for 'Added non-passive event listener'
          target={() => (fixHeader ? container.current : window)}
        >
          <div>
            <Header collapsed={collapsed} onCollapsed={setCollapsed} />
          </div>
        </Affix>
        <Content className="z-1">
          {multiTab ? (
            <div className="p-4 rounded-lg min-h-80">
              <MultiTabsProvider>
                <MultiTabs />
              </MultiTabsProvider>
            </div>
          ) : (
            <div className={styles.outletWrapper}>
              <Suspense fallback={<CircleLoading />}>
                <Outlet />
              </Suspense>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

const useStyles = createStyles(({ token }) => {
  const { colorBgContainer, borderRadiusLG, margin, padding } = token;
  return {
    outletWrapper: {
      margin: margin,
      padding: padding,
      minHeight: 320,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    },
  };
});
