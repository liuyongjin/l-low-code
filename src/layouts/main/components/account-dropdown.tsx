import { Divider, MenuProps } from "antd";
import Dropdown, { DropdownProps } from "antd/es/dropdown/dropdown";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { IconButton, Iconify } from "@/components";
import { useRouter, useThemeToken } from "@/hooks";
import { clearSettings, clearUserInfo, useUserInfo } from "@/store";

export function AccountDropdown() {
  const { replace } = useRouter();
  const { username } = useUserInfo();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const logout = () => {
    try {
      dispatch(clearUserInfo());
      dispatch(clearSettings());
    } catch (error) {
      console.log(error);
    } finally {
      replace("/login");
    }
  };

  const { colorBgElevated, borderRadiusLG, boxShadowSecondary } =
    useThemeToken();

  const contentStyle: React.CSSProperties = {
    minWidth: 180,
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
  };

  const dropdownRender: DropdownProps["dropdownRender"] = (menu) => (
    <div style={contentStyle}>
      <div className="flex flex-col items-start p-4">
        <div className="text-gray">{username}</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
    </div>
  );

  const items: MenuProps["items"] = [
    {
      label: (
        <NavLink to="/management/permissions">
          {t("layout.account.permissions")}
        </NavLink>
      ),
      key: "1",
    },
    { type: "divider" },
    {
      label: (
        <button className="font-bold text-warning">
          {t("sys.login.logout")}
        </button>
      ),
      key: "2",
      onClick: logout,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={dropdownRender}
    >
      <div>
        <IconButton className="h-10 w-10 transform-none px-0 hover:scale-105">
          <Iconify icon="tabler:user-circle" size={24} />
        </IconButton>
      </div>
    </Dropdown>
  );
}
