import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export enum ListApi {
  TableList = "/list/table-list",
}

export type TableListReq = object;

export const tableList = (data: TableListReq) =>
  baseService.post({ url: ListApi.TableList, data });

export const useTableList = () => {
  const mutation = useMutation({
    mutationFn: tableList,
  });

  return mutation.mutateAsync;
};
