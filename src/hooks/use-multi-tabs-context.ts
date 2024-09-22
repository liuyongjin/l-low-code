import { useContext } from "react";

import { MultiTabsContext } from "@/provider";

export function useMultiTabsContext() {
  return useContext(MultiTabsContext);
}
