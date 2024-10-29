import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export enum DashboardApi {
  Dashboard = "/dashboard/workbench",
}

export type DashboardReq = object;

export const workbench = (data: DashboardReq) =>
  baseService.post({ url: DashboardApi.Dashboard, data });

export const useWorkbench = () => {
  const mutation = useMutation({
    mutationFn: workbench,
  });

  return mutation.mutateAsync;
};
