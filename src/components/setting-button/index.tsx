import { useFullscreen } from "ahooks";
import { Button, Card, Drawer, Switch } from "antd";
import { createStyles } from "antd-style";
import { m } from "framer-motion";
import { t } from "i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { IconButton, Iconify, SvgIcon } from "@/components";
import { useThemeToken } from "@/hooks";
import { setSettings, SettingsState, useSettings } from "@/store";
import { colorPrimarys } from "@/theme/antd/theme";
import { ThemeColorPresets, ThemeMode } from "@/types/enum";

export function SettingButton() {
  const { styles } = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { colorPrimary } = useThemeToken();
  const { themeMode, fixHeader, themeColorPresets, multiTab } = useSettings();
  const dispatch = useDispatch();

  const handleSetSetting = (newSetSetting: Partial<SettingsState>) => {
    dispatch(setSettings(newSetSetting));
  };

  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body);

  return (
    <>
      <div className="flex items-center justify-center">
        <m.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
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
            <div className={styles.modeTitle}>{t("layout.settings.mode")}</div>
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
            <div className={styles.presetsTitle}>
              {t("layout.settings.presets")}
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {Object.entries(colorPrimarys).map(([preset, color]) => (
                <Card
                  key={preset}
                  className="flex h-16 w-full cursor-pointer items-center justify-center"
                  style={{
                    backgroundColor:
                      themeColorPresets === preset ? `${color}14` : "",
                  }}
                  onClick={() =>
                    handleSetSetting({
                      themeColorPresets: preset as ThemeColorPresets,
                    })
                  }
                >
                  <div style={{ color }}>
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
            <div className={styles.pageTitle}>{t("layout.settings.page")}</div>
            <div className="flex flex-col gap-2">
              <div className={styles.fixHeader}>
                <div>{t("layout.settings.fixHeader")}</div>
                <Switch
                  size="small"
                  checked={fixHeader}
                  onChange={(checked) =>
                    handleSetSetting({ fixHeader: checked })
                  }
                />
              </div>
              <div className={styles.multiTab}>
                <div>{t("layout.settings.multiTab")}</div>
                <Switch
                  size="small"
                  checked={multiTab}
                  onChange={(checked) =>
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

const useStyles = createStyles(({ token }) => {
  const { colorTextSecondary, colorTextTertiary } = token;

  return {
    modeTitle: {
      marginBottom: "0.4rem",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: colorTextSecondary,
    },
    presetsTitle: {
      marginBottom: "0.4rem",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: colorTextSecondary,
    },
    pageTitle: {
      marginBottom: "0.4rem",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: colorTextSecondary,
    },
    fixHeader: {
      marginBottom: "0.2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: colorTextTertiary,
    },
    multiTab: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: colorTextTertiary,
    },
  };
});
