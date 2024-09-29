import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, theme } from "antd";
import { Suspense } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { CircleLoading } from "@/components";
import { MultiTabsProvider } from "@/provider";
import { useSetting } from "@/store";

import { Header } from "./components/header";
import { MultiTabs } from "./components/multi-tabs";
import { Nav } from "./components/nav";

const { Header: AntdHeader, Sider, Content } = Layout;

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { multiTab } = useSetting();
  // const [multiTab, setMultiTab] = useState(true);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Suspense fallback={<CircleLoading />}>
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="pt-12" />
          <Nav />
        </Sider>
        <Layout>
          <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
            <Flex gap="middle">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <Header />
            </Flex>
          </AntdHeader>
          <Content>
            {multiTab ? (
              <div
                style={{
                  margin: "16px 16px 0 16px",
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <MultiTabsProvider>
                  <MultiTabs offsetTop={false} />
                </MultiTabsProvider>
              </div>
            ) : (
              <div
                style={{
                  margin: "0 16px",
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet />
              </div>
            )}
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};