import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: <MailOutlined />,
    children: [{ key: "/dashboard/workbench", label: "Workbench" }],
  },
  {
    key: "/management",
    label: "Management",
    icon: <AppstoreOutlined />,
    children: [{ key: "/management/permission", label: "Permission" }],
  },
];

export const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const matches = useMatches();

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const openKeys = matches
      .filter((match) => match.pathname !== "/")
      .map((match) => match.pathname);
    setOpenKeys(openKeys);
  }, [matches]);

  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };

  return (
    <Menu
      // className="h-full !border-none"
      theme="dark"
      mode="inline"
      items={items}
      // defaultOpenKeys={openKeys}
      // defaultSelectedKeys={[pathname]}
      // selectedKeys={[pathname]}
      // openKeys={openKeys}
      // onOpenChange={handleOpenChange}
      onClick={handleClick}
      // style={menuStyle}
      // inlineCollapsed={collapsed}
    />
  );
};
