import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export type PermissionsReq = {};

export type PermissionsRes = {};

export enum ManagementApi {
  Permissions = "/user/permissions",
}

export const permissions = (data: PermissionsRes) =>
  baseService.post({ url: ManagementApi.Permissions, data });

export const usePermissions = () => {
  const permissionsMutation = useMutation({
    mutationFn: (data: PermissionsReq) => {
      return permissions(data);
    },
  });
  return permissionsMutation.mutateAsync;
};
