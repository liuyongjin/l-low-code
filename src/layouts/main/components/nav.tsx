import { useCreation } from "ahooks";
import { Menu, MenuProps } from "antd";
import { t } from "i18next";
import i18n from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { UIMatch, useLocation, useMatches } from "react-router-dom";

import { Iconify } from "@/components";
import { useRouter } from "@/hooks";
import { useUserInfo } from "@/store";
import { MenuEntity } from "@/types/entity";

type MenuItem = Required<MenuProps>["items"][number];
// type MenuItem = GetProp<MenuProps, "items">[number];

export const Nav = () => {
  const { menus = [] } = useUserInfo();
  const formatMenuList = (items: MenuEntity[], level: number = 0) => {
    return items.map((item) => {
      const menu: MenuItem & {
        children?: MenuItem[];
      } = {
        key: item.id,
        label: t(item.label || ""),
      };
      if (level === 0 && item.icon) {
        menu.icon = <Iconify icon={item.icon} size={24} />;
      }
      if (item?.children?.length) {
        menu.children = formatMenuList(item.children, level + 1) || [];
      }
      return menu;
    });
  };

  const menuList = useCreation(() => {
    return formatMenuList(menus);
  }, [menus, i18n.language]);

  const { push } = useRouter();
  const { pathname } = useLocation();
  const matches = useMatches() as UIMatch<{ icon?: ReactNode }>[];

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const openKeys = matches
      .filter((match) => match.pathname !== "/" && match.data?.icon)
      .map((match) => match.pathname);
    setOpenKeys(openKeys);
  }, [matches]);

  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    push(key);
  };

  return (
    <Menu
      mode="inline"
      items={menuList}
      openKeys={openKeys}
      selectedKeys={[pathname]}
      onOpenChange={handleOpenChange}
      onClick={handleClick}
    />
  );
};
