import { useFullscreen } from "ahooks";
import { Button, Card, Drawer, Switch } from "antd";
import { m } from "framer-motion";
import { t } from "i18next";
import { CSSProperties, useState } from "react";
import { useDispatch } from "react-redux";

import { IconButton, Iconify, SvgIcon } from "@/components";
// import CyanBlur from "@/assets/images/background/cyan-blur.png";
// import RedBlur from "@/assets/images/background/red-blur.png";
// import { varHover } from "@/components/animate/variants/action";
import { useThemeToken } from "@/hooks";
import { setSettings, SettingsState, useSettings } from "@/store";
import { colorPrimarys } from "@/theme/antd/theme";
import { ThemeColorPresets, ThemeMode } from "@/types/enum";

export function SettingButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {
    colorPrimary,
    // colorBgBase,
    colorTextSecondary,
    colorTextTertiary,
    // colorBgContainer,
  } = useThemeToken();
  const { themeMode, fixHeader, themeColorPresets, multiTab } = useSettings();
  const dispatch = useDispatch();

  const handleSetSetting = (newSetSetting: Partial<SettingsState>) => {
    dispatch(setSettings(newSetSetting));
  };

  const style: CSSProperties = {
    backdropFilter: "blur(20px)",
    // backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
    backgroundRepeat: "no-repeat, no-repeat",
    // backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
    backgroundPosition: "right top, left bottom",
    backgroundSize: "50, 50%",
  };

  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body);

  // console.log(fixHeader);

  // const layoutBackground = (layout: ThemeLayout) =>
  //   themeLayout === layout
  //     ? `linear-gradient(135deg, ${colorBgBase} 0%, ${colorPrimary} 100%)`
  //     : "#919eab";
  // useWhyDidYouUpdate("useWhyDidYouUpdateComponent", {
  //   ...props,
  //   dispatch,
  //   drawerOpen,
  //   colorPrimary,
  //   colorTextSecondary,
  //   colorTextTertiary,
  //   themeMode,
  //   fixHeader,
  //   themeColorPresets,
  //   multiTab,
  //   isFullscreen,
  // });

  return (
    <>
      <div className="flex items-center justify-center">
        <m.div
          animate={{
            // rotate: [0, drawerOpen ? 0 : 360],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
          // whileTap="tap"
          // whileHover="hover"
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
        title={t("layout.settings.settings")}
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
            className="h-10 w-10"
          >
            <Iconify
              className="text-gray-400"
              icon="material-symbols:close"
              size={24}
            />
          </IconButton>
        }
        footer={
          <Button type="dashed" block size="large" onClick={toggleFullscreen}>
            <div className="flex items-center justify-center">
              {isFullscreen ? (
                <>
                  <SvgIcon
                    icon="ic-settings-exit-fullscreen"
                    color={colorPrimary}
                    className="!m-0"
                  />
                  <span className="ml-2">
                    {t("layout.settings.exitFullScreen")}
                  </span>
                </>
              ) : (
                <>
                  <SvgIcon icon="ic-settings-fullscreen" className="!m-0" />
                  <span className="ml-2 text-gray">
                    {t("layout.settings.fullScreen")}
                  </span>
                </>
              )}
            </div>
          </Button>
        }
      >
        <div className="flex flex-col gap-6 p-6">
          {/* theme mode start */}
          <div>
            <div
              className="mb-3 text-base font-semibold"
              style={{ color: colorTextSecondary }}
            >
              {t("layout.settings.mode")}
            </div>
            <div className="flex flex-row gap-4">
              <Card
                onClick={() => handleSetSetting({ themeMode: ThemeMode.Light })}
                className="flex h-20 w-full cursor-pointer items-center justify-center"
              >
                <SvgIcon
                  icon="ic-settings-mode-sun"
                  size="24"
                  color={themeMode === ThemeMode.Light ? colorPrimary : ""}
                />
              </Card>
              <Card
                onClick={() => handleSetSetting({ themeMode: ThemeMode.Dark })}
                className="flex h-20 w-full cursor-pointer items-center justify-center"
              >
                <SvgIcon
                  icon="ic-settings-mode-moon"
                  size="24"
                  color={themeMode === ThemeMode.Dark ? colorPrimary : ""}
                />
              </Card>
            </div>
          </div>
          {/* theme mode end */}

          {/* theme presets start */}
          <div>
            <div
              className="mb-3 text-base font-semibold"
              style={{ color: colorTextSecondary }}
            >
              {t("layout.settings.presets")}
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {Object.entries(colorPrimarys).map(([preset, color]) => (
                <Card
                  key={preset}
                  className="flex h-14 w-full cursor-pointer items-center justify-center"
                  style={{
                    backgroundColor:
                      themeColorPresets === preset ? `${color}14` : "",
                  }}
                  onClick={() =>
                    // setThemeColorPresets(preset as ThemeColorPresets)
                    handleSetSetting({
                      themeColorPresets: preset as ThemeColorPresets,
                    })
                  }
                >
                  <div style={{ color }}>
                    {/* <MdCircle
                      style={{
                        fontSize: themeColorPresets === preset ? 24 : 12,
                      }}
                    /> */}
                    <Iconify
                      icon="material-symbols:circle"
                      size={themeColorPresets === preset ? 24 : 12}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          {/* theme presets end */}

          {/* Page config start */}
          <div>
            <div
              className="mb-3 text-base font-semibold"
              style={{ color: colorTextSecondary }}
            >
              {t("layout.settings.page")}
            </div>
            <div className="flex flex-col gap-2">
              <div
                className="flex items-center justify-between"
                style={{ color: colorTextTertiary }}
              >
                <div>{t("layout.settings.fixHeader")}</div>
                <Switch
                  size="small"
                  checked={fixHeader}
                  onChange={(checked) =>
                    //  setBreadCrumn(checked)
                    handleSetSetting({ fixHeader: checked })
                  }
                />
              </div>
              <div
                className="flex items-center justify-between"
                style={{ color: colorTextTertiary }}
              >
                <div>{t("layout.settings.multiTab")}</div>
                <Switch
                  size="small"
                  checked={multiTab}
                  onChange={(checked) =>
                    // setMultiTab(checked)
                    handleSetSetting({ multiTab: checked })
                  }
                />
              </div>
            </div>
          </div>
          {/* Page config end */}
        </div>
      </Drawer>
    </>
  );
}
