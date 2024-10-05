// import { IconButton, Iconify } from "@/components/icon";
// import LocalePicker from "@/components/locale-picker";

// import { createStyles } from "antd-style";

import { IconButton, Iconify } from "@/components";

import { AccountDropdown } from "./account-dropdown";
import { LocalePicker } from "./locale-picker";
import { SettingButton } from "./setting-button";
// import { useSettingss } from "@/store/settingStore";
// import { useResponsive, useThemeToken } from "@/theme/hooks";
// import AccountDropdown from "../_common/account-dropdown";
// import BreadCrumb from "../_common/bread-crumb";
// import SettingButton from "../_common/setting-button";
// import { HEADER_HEIGHT, OFFSET_HEADER_HEIGHT } from "./config";

type HeaderProps = {
  className?: string;
  offsetTop?: boolean;
};

export const Header = ({ className = "", offsetTop = false }: HeaderProps) => {
  // const { themeLayout, breadCrumb } = useSettingss();
  // const { styles } = useStyles();

  return (
    <>
      <header className={`z-20 w-full flex items-center ${className}`}>
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
    </>
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
