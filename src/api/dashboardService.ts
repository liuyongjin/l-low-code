import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export type DashboardReq = {};

export type DashboardRes = {};

export enum DashboardApi {
  Dashboard = "/dashboard/workbench",
}

export const workbench = (data: DashboardReq) =>
  baseService.post({ url: DashboardApi.Dashboard, data });

export const useDashboard = () => {
  const mutation = useMutation({
    mutationFn: (data: DashboardRes) => {
      return workbench(data);
    },
  });

  return mutation.mutateAsync;
};
