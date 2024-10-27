import { Button, Layout } from "antd";
import { Dispatch, SetStateAction } from "react";

import { IconButton, Iconify, LocalePicker, SettingButton } from "@/components";

import { AccountDropdown } from "./account-dropdown";

const { Header: AntdHeader } = Layout;

type HeaderProps = {
  className?: string;
  collapsed: boolean;
  onCollapsed: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({
  className = "",
  collapsed = false,
  onCollapsed,
}: HeaderProps) => {
  return (
    <AntdHeader className="p-0 z-50">
      <header className={`z-20 w-full flex items-center ${className}`}>
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
          onClick={() => onCollapsed(!collapsed)}
        />
        <div className="flex flex-grow items-center justify-between px-4 text-gray">
          <div className="flex items-baseline"></div>
          <div className="flex">
            <IconButton
              onClick={() => window.open("https://github.com/liuyongjin")}
            >
              <Iconify icon="mdi:github" size={24} />
            </IconButton>
            <LocalePicker />
            <SettingButton />
            <AccountDropdown />
          </div>
        </div>
      </header>
    </AntdHeader>
  );
};
