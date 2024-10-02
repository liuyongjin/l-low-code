// import { IconButton, Iconify } from "@/components/icon";
// import LocalePicker from "@/components/locale-picker";

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

  return (
    <>
      <header className={`z-20 w-full flex items-center ${className}`}>
        <div
          className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
          style={{
            // height: offsetTop ? OFFSET_HEADER_HEIGHT : HEADER_HEIGHT,
            transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
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
