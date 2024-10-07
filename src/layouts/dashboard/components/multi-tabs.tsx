import { useFullscreen } from "ahooks";
import { Card, Dropdown, MenuProps, Tabs, TabsProps } from "antd";
import { body } from "framer-motion/client";
import {
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  ReactInstance,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { Iconify } from "@/components";
import { useMultiTabsContext, useRouter, useThemeToken } from "@/hooks";
import { KeepAliveTab } from "@/provider";
import { MultiTabOperation } from "@/types/enum";

// type MultiTabsProps = {
// };
export const MultiTabs = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [hoveringTabKey, setHoveringTabKey] = useState("");
  const [openDropdownTabKey, setopenDropdownTabKey] = useState("");
  const themeToken = useThemeToken();

  const tabContentRef = useRef(null);
  const [, { toggleFullscreen }] = useFullscreen(tabContentRef.current);

  const {
    tabs,
    activeTabRoutePath,
    // setTabs,
    closeTab,
    refreshTab,
    closeOthersTab,
    closeAll,
    closeLeft,
    closeRight,
  } = useMultiTabsContext();

  const menuItems = useMemo<MenuProps["items"]>(
    () => [
      {
        label: t(`layout.tab.${MultiTabOperation.FULLSCREEN}`),
        key: MultiTabOperation.FULLSCREEN,
        icon: <Iconify icon="material-symbols:fullscreen" size={18} />,
      },
      {
        label: t(`layout.tab.${MultiTabOperation.REFRESH}`),
        key: MultiTabOperation.REFRESH,
        icon: <Iconify icon="mdi:reload" size={18} />,
      },
      {
        label: t(`layout.tab.${MultiTabOperation.CLOSE}`),
        key: MultiTabOperation.CLOSE,
        icon: <Iconify icon="material-symbols:close" size={18} />,
        disabled: tabs.length === 1,
      },
      {
        type: "divider",
      },
      {
        label: t(`layout.tab.${MultiTabOperation.CLOSELEFT}`),
        key: MultiTabOperation.CLOSELEFT,
        icon: (
          <Iconify
            icon="material-symbols:tab-close-right-outline"
            size={18}
            className="rotate-180"
          />
        ),
        disabled: tabs.findIndex((tab) => tab.key === openDropdownTabKey) === 0,
      },
      {
        label: t(`layout.tab.${MultiTabOperation.CLOSERIGHT}`),
        key: MultiTabOperation.CLOSERIGHT,
        icon: (
          <Iconify icon="material-symbols:tab-close-right-outline" size={18} />
        ),
        disabled:
          tabs.findIndex((tab) => tab.key === openDropdownTabKey) ===
          tabs.length - 1,
      },
      {
        type: "divider",
      },
      {
        label: t(`layout.tab.${MultiTabOperation.CLOSEOTHERS}`),
        key: MultiTabOperation.CLOSEOTHERS,
        icon: <Iconify icon="material-symbols:tab-close-outline" size={18} />,
        disabled: tabs.length === 1,
      },
      {
        label: t(`layout.tab.${MultiTabOperation.CLOSEALL}`),
        key: MultiTabOperation.CLOSEALL,
        icon: <Iconify icon="mdi:collapse-all-outline" size={18} />,
      },
    ],
    [openDropdownTabKey, t, tabs],
  );

  useEffect(() => {
    if (!scrollContainer || !scrollContainer.current) {
      return;
    }
    const index = tabs.findIndex((tab) => tab.key === activeTabRoutePath);
    const currentTabElement = scrollContainer.current.querySelector(
      `#tab-${index}`,
    );
    if (currentTabElement) {
      currentTabElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeTabRoutePath, tabs]);

  const calcTabStyle: (tab: KeepAliveTab) => CSSProperties = useCallback(
    (tab) => {
      const isActive =
        tab.key === activeTabRoutePath || tab.key === hoveringTabKey;
      const result: CSSProperties = {
        borderRadius: "8px 8px 0 0",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: themeToken.colorBorderSecondary,
        backgroundColor: themeToken.colorBgLayout,
        transition:
          "color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      };

      if (isActive) {
        result.backgroundColor = themeToken.colorBgContainer;
        result.color = themeToken.colorPrimaryText;
      }
      return result;
    },
    [activeTabRoutePath, hoveringTabKey, themeToken],
  );

  const menuClick = useCallback(
    (
      menuInfo: {
        key: string;
        keyPath: string[];
        item: ReactInstance;
        domEvent: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>;
      },
      tab: KeepAliveTab,
    ) => {
      const { key, domEvent } = menuInfo;
      domEvent.stopPropagation();
      switch (key) {
        case MultiTabOperation.REFRESH:
          refreshTab(tab.key);
          break;
        case MultiTabOperation.CLOSE:
          closeTab(tab.key);
          break;
        case MultiTabOperation.CLOSEOTHERS:
          closeOthersTab(tab.key);
          break;
        case MultiTabOperation.CLOSELEFT:
          closeLeft(tab.key);
          break;
        case MultiTabOperation.CLOSERIGHT:
          closeRight(tab.key);
          break;
        case MultiTabOperation.CLOSEALL:
          closeAll();
          break;
        case MultiTabOperation.FULLSCREEN:
          toggleFullscreen();
          break;
        default:
          break;
      }
    },
    [
      refreshTab,
      closeTab,
      closeOthersTab,
      closeLeft,
      closeRight,
      closeAll,
      toggleFullscreen,
    ],
  );

  const onOpenChange = (open: boolean, tab: KeepAliveTab) => {
    if (open) {
      setopenDropdownTabKey(tab.key);
    } else {
      setopenDropdownTabKey("");
    }
  };

  const handleTabClick = ({ key }: KeepAliveTab) => {
    push(key);
  };

  const renderTabLabel = useCallback(
    (tab: KeepAliveTab) => {
      if (tab.hideTab) return null;
      return (
        <Dropdown
          trigger={["contextMenu"]}
          menu={{
            items: menuItems,
            onClick: (menuInfo) => menuClick(menuInfo, tab),
          }}
          onOpenChange={(open) => onOpenChange(open, tab)}
        >
          <div
            className="relative mx-px flex select-none items-center px-4 py-1"
            style={calcTabStyle(tab)}
            onMouseEnter={() => {
              if (tab.key === activeTabRoutePath) return;
              setHoveringTabKey(tab.key);
            }}
            onMouseLeave={() => setHoveringTabKey("")}
          >
            <div>{t(tab.label)}</div>
            <Iconify
              icon="ion:close-outline"
              size={18}
              className="cursor-pointer opacity-50"
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                closeTab(tab.key);
              }}
              style={{
                visibility:
                  (tab.key !== activeTabRoutePath &&
                    tab.key !== hoveringTabKey) ||
                  tabs.length === 1
                    ? "hidden"
                    : "visible",
              }}
            />
          </div>
        </Dropdown>
      );
    },
    [
      t,
      menuItems,
      activeTabRoutePath,
      hoveringTabKey,
      tabs.length,
      menuClick,
      closeTab,
      calcTabStyle,
    ],
  );

  const tabItems = useMemo(() => {
    return tabs?.map((tab) => ({
      label: tab.label,
      key: tab.key,
      closable: tabs.length > 1,
      children: (
        <Card
          ref={tabContentRef}
          key={tab.timeStamp}
          classNames={{ body: "!p-4" }}
        >
          {tab.outlet}
        </Card>
      ),
    }));
  }, [tabs]);

  const renderTabBar: TabsProps["renderTabBar"] = () => {
    return (
      <div className="z-2 w-full">
        <div className="flex w-full">
          <div ref={scrollContainer} className="hide-scrollbar flex w-full">
            {tabs.map((tab, index) => (
              <div
                id={`tab-${index}`}
                className="flex-shrink-0"
                key={tab.key}
                onClick={() => handleTabClick(tab)}
              >
                <div key={tab.key} className="w-auto">
                  {renderTabLabel(tab)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Tabs
      activeKey={activeTabRoutePath}
      items={tabItems}
      renderTabBar={renderTabBar}
    />
  );
};
