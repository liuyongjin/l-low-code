import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export type PermissionsReq = object;

export enum ManagementApi {
  Permissions = "/user/permissions",
}

export const permissions = (data: PermissionsReq) =>
  baseService.post({ url: ManagementApi.Permissions, data });

export const usePermissions = () => {
  const permissionsMutation = useMutation({
    mutationFn: permissions,
  });

  return permissionsMutation.mutateAsync;
};
