import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { m } from "framer-motion";
import { CSSProperties, useState } from "react";

import { IconButton, SvgIcon } from "@/components";
// import screenfull from "screenfull";
// import CyanBlur from "@/assets/images/background/cyan-blur.png";
// import RedBlur from "@/assets/images/background/red-blur.png";
// import { varHover } from "@/components/animate/variants/action";
import { useThemeToken } from "@/hooks";
import { useSetting } from "@/store";
// import { useSettingActions, useSettings } from "@/store/settingStore";
import { ThemeLayout } from "@/types/enum";
// import { colorPrimarys } from "@/theme/antd/theme";
// import { ThemeColorPresets, ThemeLayout, ThemeMode } from "#/enum";

/**
 * App Setting
 */
export function SettingButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const {
  //   colorPrimary,
  //   colorBgBase,
  //   colorTextSecondary,
  //   colorTextTertiary,
  //   colorBgContainer,
  // } = useThemeToken();

  // const settings = useSetting();
  // const {
  //   themeMode,
  //   themeColorPresets,
  //   themeLayout,
  //   themeStretch,
  //   breadCrumb,
  //   multiTab,
  // } = settings;
  // const { setSettings } = useSettingActions();

  const style: CSSProperties = {
    backdropFilter: "blur(20px)",
    // backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    // backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
    backgroundPosition: "right top, left bottom",
    backgroundSize: "50, 50%",
  };

  // const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen);
  // const toggleFullScreen = () => {
  //   if (screenfull.isEnabled) {
  //     screenfull.toggle();
  //     setIsFullscreen(!isFullscreen);
  //   }
  // };

  // const layoutBackground = (layout: ThemeLayout) =>
  //   themeLayout === layout
  //     ? `linear-gradient(135deg, ${colorBgBase} 0%, ${colorPrimary} 100%)`
  //     : "#919eab";

  return (
    <>
      <div className="flex items-center justify-center">
        <m.div
          animate={{
            rotate: [0, drawerOpen ? 0 : 360],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
          whileTap="tap"
          whileHover="hover"
          // variants={varHover(1.05)}
          onClick={() => setDrawerOpen(true)}
        >
          <IconButton className="h-10 w-10">
            <SvgIcon icon="ic-setting" size="24" />
          </IconButton>
        </m.div>
      </div>
      <Drawer
        placement="right"
        title="Settings"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closable={false}
        width={280}
        styles={{
          body: { padding: 0 },
          mask: { backgroundColor: "transparent" },
        }}
        style={style}
        extra={
          <IconButton
            onClick={() => setDrawerOpen(false)}
            className="h-9 w-9 hover:scale-105"
          >
            <CloseOutlined className="text-gray-400" />
          </IconButton>
        }
        // footer={
        //   <Button type="dashed" block size="large" onClick={toggleFullScreen}>
        //     <div className="flex items-center justify-center">
        //       {isFullscreen ? (
        //         <>
        //           <SvgIcon
        //             icon="ic-settings-exit-fullscreen"
        //             color={colorPrimary}
        //             className="!m-0"
        //           />
        //           <span className="ml-2">Exit FullScreen</span>
        //         </>
        //       ) : (
        //         <>
        //           <SvgIcon icon="ic-settings-fullscreen" className="!m-0" />
        //           <span className="ml-2 text-gray">FullScreen</span>
        //         </>
        //       )}
        //     </div>
        //   </Button>
        // }
      >
        <div className="flex flex-col gap-6 p-6">123123</div>
      </Drawer>
    </>
  );
}
