import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useCurrentTabMeta, useRouter } from "@/hooks";
import { TabEntity } from "@/types";
import { getTimeStamp } from "@/utils";

interface MultiTabsContextType {
  tabs: TabEntity[];
  activeTabRoutePath?: string;
  setTabs: (tabs: TabEntity[]) => void;
  closeTab: (path?: string) => void;
  closeOthersTab: (path?: string) => void;
  closeAll: () => void;
  closeLeft: (path: string) => void;
  closeRight: (path: string) => void;
  refreshTab: (path: string) => void;
}

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

export const MultiTabsContext = createContext<MultiTabsContextType>({
  tabs: [],
  activeTabRoutePath: "",
  setTabs: () => {},
  closeTab: () => {},
  closeOthersTab: () => {},
  closeAll: () => {},
  closeLeft: () => {},
  closeRight: () => {},
  refreshTab: () => {},
});

export function MultiTabsProvider({ children }: PropsWithChildren) {
  const { push } = useRouter();
  const [tabs, setTabs] = useState<TabEntity[]>([]);

  const currentTabMeta = useCurrentTabMeta();
  const activeTabRoutePath = useMemo(() => {
    if (!currentTabMeta) return "";

    const { key } = currentTabMeta;
    return key;
  }, [currentTabMeta]);

  /**
   * Close specified tab
   */
  const closeTab = useCallback(
    (path = activeTabRoutePath) => {
      const tempTabs = [...tabs];
      if (tempTabs.length === 1) return;

      const deleteTabIndex = tempTabs.findIndex((item) => item.key === path);
      if (deleteTabIndex === -1) return;

      if (deleteTabIndex > 0) {
        push(tempTabs[deleteTabIndex - 1].key);
      } else {
        push(tempTabs[deleteTabIndex + 1].key);
      }

      tempTabs.splice(deleteTabIndex, 1);
      setTabs(tempTabs);
    },
    [activeTabRoutePath, push, tabs],
  );

  /**
   * Close other tabs besides the specified tab
   */
  const closeOthersTab = useCallback(
    (path = activeTabRoutePath) => {
      setTabs((prev) => prev.filter((item) => item.key === path));
      if (path !== activeTabRoutePath) {
        push(path);
      }
    },
    [activeTabRoutePath, push],
  );

  /**
   * Close all tabs then navigate to the home page
   */
  const closeAll = useCallback(() => {
    setTabs([]);
    push(HOMEPAGE);
  }, [push]);

  /**
   * Close all tabs in the left of specified tab
   */
  const closeLeft = useCallback(
    (path: string) => {
      const currentTabIndex = tabs.findIndex((item) => item.key === path);
      const newTabs = tabs.slice(currentTabIndex);
      setTabs(newTabs);
      push(path);
    },
    [push, tabs],
  );

  /**
   * Close all tabs in the right of specified tab
   */
  const closeRight = useCallback(
    (path: string) => {
      const currentTabIndex = tabs.findIndex((item) => item.key === path);
      const newTabs = tabs.slice(0, currentTabIndex + 1);
      setTabs(newTabs);
      push(path);
    },
    [push, tabs],
  );

  /**
   * Refresh specified tab
   */
  const refreshTab = useCallback(
    (path = activeTabRoutePath) => {
      setTabs((prev) => {
        const index = prev.findIndex((item) => item.key === path);

        if (index >= 0) {
          prev[index].timeStamp = getTimeStamp();
        }

        return [...prev];
      });
    },
    [activeTabRoutePath],
  );

  useEffect(() => {
    setTabs((prev) => prev.filter((item) => !item.hideTab));
    if (!currentTabMeta) return;
    const { key } = currentTabMeta;
    const isExisted = tabs.find((item) => item.key === key);
    if (!isExisted) {
      setTabs((prev) => [
        ...prev,
        {
          ...currentTabMeta,
          key,
          timeStamp: getTimeStamp(),
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTabMeta]);

  const defaultValue: MultiTabsContextType = useMemo(
    () => ({
      tabs,
      activeTabRoutePath,
      setTabs,
      closeTab,
      closeOthersTab,
      refreshTab,
      closeAll,
      closeLeft,
      closeRight,
    }),
    [
      activeTabRoutePath,
      closeAll,
      closeLeft,
      closeOthersTab,
      closeRight,
      closeTab,
      refreshTab,
      tabs,
    ],
  );

  return (
    <MultiTabsContext.Provider value={defaultValue}>
      {children}
    </MultiTabsContext.Provider>
  );
}
