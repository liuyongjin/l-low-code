import { Divider, MenuProps } from "antd";
import Dropdown, { DropdownProps } from "antd/es/dropdown/dropdown";
import { createStyles } from "antd-style";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { IconButton, Iconify } from "@/components";
import { useRouter } from "@/hooks";
import { clearSettings, clearUserInfo, useUserInfo } from "@/store";

export function AccountDropdown() {
  const { styles } = useStyles();
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

  const dropdownRender: DropdownProps["dropdownRender"] = (menu) => (
    <div className={styles.dropdownRender}>
      <div className="flex flex-col items-start p-2">
        <div className="text-gray">{username}</div>
      </div>
      <Divider className="m-0" />
      {React.cloneElement(menu as React.ReactElement, {
        style: {
          boxShadow: "none",
          padding: 0,
        },
      })}
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
    { type: "divider", style: { margin: 0 } },
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

const useStyles = createStyles(({ token }) => {
  const { colorBgElevated, borderRadiusLG, boxShadowSecondary } = token;

  return {
    dropdownRender: {
      minWidth: 180,
      backgroundColor: colorBgElevated,
      borderRadius: borderRadiusLG,
      boxShadow: boxShadowSecondary,
    },
  };
});
