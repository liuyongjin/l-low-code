import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export enum ManagementApi {
  Permissions = "/management/permissions",
}

export type PermissionsReq = object;

export const permissions = (data: PermissionsReq) =>
  baseService.post({ url: ManagementApi.Permissions, data });

export const usePermissions = () => {
  const permissionsMutation = useMutation({
    mutationFn: permissions,
  });

  return permissionsMutation.mutateAsync;
};
