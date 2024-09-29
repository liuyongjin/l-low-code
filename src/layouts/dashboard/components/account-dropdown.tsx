import { Divider, MenuProps } from "antd";
import Dropdown, { DropdownProps } from "antd/es/dropdown/dropdown";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { IconButton, Iconify } from "@/components";
import { useRouter, useThemeToken } from "@/hooks";
import { useUserInfo } from "@/store";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

/**
 * Account Dropdown
 */
export function AccountDropdown() {
  const { replace } = useRouter();
  const { username, email, avatar } = useUserInfo();
  //   const { clearUserInfoAndToken } = useUserActions();
  //   const { backToLogin } = useLoginStateContext();
  const { t } = useTranslation();
  const logout = () => {
    try {
      // todo const logoutMutation = useMutation(userService.logout);
      // todo logoutMutation.mutateAsync();
      //   clearUserInfoAndToken();
      //   backToLogin();
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
        <div>{username}</div>
        <div className="text-gray">{email}</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
    </div>
  );

  const items: MenuProps["items"] = [
    {
      label: (
        <NavLink to="" target="_blank">
          {t("dashboard.menu.docs")}
        </NavLink>
      ),
      key: "0",
    },
    {
      label: <NavLink to={HOMEPAGE}>{t("dashboard.menu.dashboard")}</NavLink>,
      key: "1",
    },
    {
      label: (
        <NavLink to="/management/user/profile">
          {t("dashboard.menu.profile")}
        </NavLink>
      ),
      key: "2",
    },
    {
      label: (
        <NavLink to="/management/user/account">
          {t("dashboard.menu.account")}
        </NavLink>
      ),
      key: "3",
    },
    { type: "divider" },
    {
      label: (
        <button className="font-bold text-warning">
          {t("sys.login.logout")}
        </button>
      ),
      key: "4",
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