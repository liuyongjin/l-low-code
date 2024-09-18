import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "Dashboard",
    label: "Dashboard",
    icon: <MailOutlined />,
    children: [{ key: "/dashboard/workbench", label: "Workbench" }],
  },
  {
    key: "Management",
    label: "Management",
    icon: <AppstoreOutlined />,
    children: [{ key: "/management/permission", label: "Permission" }],
  },
];

export const Nav = () => {
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };

  return (
    <Menu
      // className="h-full !border-none"
      theme="dark"
      mode="inline"
      // defaultSelectedKeys={["1"]}
      items={items}
      // defaultOpenKeys={openKeys}
      // defaultSelectedKeys={[pathname]}
      // selectedKeys={[pathname]}
      // openKeys={openKeys}
      // onOpenChange={onOpenChange}
      onClick={handleClick}
      // style={menuStyle}
      // inlineCollapsed={collapsed}
    />
  );
};
