import { useEffect, useState } from "react";
import {
  useLocation,
  useMatches,
  useOutlet,
  useRouteLoaderData,
} from "react-router-dom";

import { RouteMeta } from "@/types";

export function useCurrentRouteMeta() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const matchs = useMatches();
  const [currentRouteMeta, setCurrentRouteMeta] = useState<RouteMeta>();
  const loaderData = useRouteLoaderData(pathname) as RouteMeta;

  useEffect(() => {
    const lastRoute = matchs[matchs.length - 1];
    if (!lastRoute) return;
    if (loaderData) {
      loaderData.outlet = outlet;
      loaderData.key = pathname;
      loaderData.hideTab = false;
      setCurrentRouteMeta({ ...loaderData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchs]);

  return currentRouteMeta;
}
