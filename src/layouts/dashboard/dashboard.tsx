import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Layout, theme } from "antd";
import { Suspense } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { CircleLoading } from "@/components";

import { Header } from "./partial/header";
import { Nav } from "./partial/nav";

const { Header: AntdHeader, Sider, Content } = Layout;

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
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
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};
