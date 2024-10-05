import { Button, Flex, Layout } from "antd";
import { createStyles } from "antd-style";
import { Suspense } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { CircleLoading, Iconify } from "@/components";
import { MultiTabsProvider } from "@/provider";
import { useSettings } from "@/store";

import { Header } from "./components/header";
import { MultiTabs } from "./components/multi-tabs";
import { Nav } from "./components/nav";

const { Header: AntdHeader, Sider, Content } = Layout;

export const Dashboard = () => {
  const { styles } = useStyles();
  const { multiTab } = useSettings();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="pt-12" />
        <Nav />
      </Sider>
      <Layout>
        <AntdHeader className="p-0">
          <Flex gap="middle">
            <Button
              className="!w-16 h-16"
              type="text"
              icon={
                collapsed ? (
                  <Iconify icon="ant-design:menu-unfold-outlined" size={18} />
                ) : (
                  <Iconify icon="ant-design:menu-fold-outlined" size={18} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
            />
            <Header />
          </Flex>
        </AntdHeader>
        <Content>
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
