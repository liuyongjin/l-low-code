import { useEffect, useState } from "react";
import {
  useLocation,
  useMatches,
  useOutlet,
  useRouteLoaderData,
} from "react-router-dom";

import { TabEntity } from "@/types";

export function useCurrentTabMeta() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const matchs = useMatches();
  const [currentTabMeta, setCurrentTabMeta] = useState<TabEntity>();
  const loaderData = useRouteLoaderData(pathname) as TabEntity;

  useEffect(() => {
    const lastRoute = matchs[matchs.length - 1];
    if (!lastRoute) return;
    if (loaderData) {
      loaderData.outlet = outlet;
      loaderData.key = pathname;
      loaderData.hideTab = false;
      setCurrentTabMeta({ ...loaderData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchs]);

  return currentTabMeta;
}
