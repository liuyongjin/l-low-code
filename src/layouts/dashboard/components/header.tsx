// import { IconButton, Iconify } from "@/components/icon";
// import LocalePicker from "@/components/locale-picker";

// import { createStyles } from "antd-style";

import { Button, Layout } from "antd";
import { Dispatch, SetStateAction } from "react";

import { IconButton, Iconify, LocalePicker } from "@/components";

import { AccountDropdown } from "./account-dropdown";
import { SettingButton } from "./setting-button";
// import { useSettingss } from "@/store/settingStore";
// import { useResponsive, useThemeToken } from "@/theme/hooks";
// import AccountDropdown from "../_common/account-dropdown";
// import BreadCrumb from "../_common/bread-crumb";
// import SettingButton from "../_common/setting-button";
// import { HEADER_HEIGHT, OFFSET_HEADER_HEIGHT } from "./config";
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
  // const { themeLayout, breadCrumb } = useSettingss();
  // const { styles } = useStyles();

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
        <div
          className="flex flex-grow items-center justify-between px-4 text-gray"
          // style={{
          //   // height: offsetTop ? OFFSET_HEADER_HEIGHT : HEADER_HEIGHT,
          //   transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          // }}
          // className={styles.bg}
        >
          <div className="flex items-baseline">
            {/* <div className="ml-4 hidden md:block">
              {breadCrumb ? <BreadCrumb /> : null}
            </div> */}
          </div>
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

// const useStyles = createStyles(({ css }) => {
//   return {
//     // bg: css`
//     //   background: red;
//     // `,
//     bg: {
//       background: "red",
//     },
//   };
// });
