import { useMutation } from "@tanstack/react-query";

import { baseService } from "./baseService";

export type TableListReq = {};

export type TableListRes = {};

export enum ListApi {
  TableList = "/list/table-list",
}

export const tableList = (data: TableListReq) =>
  baseService.post({ url: ListApi.TableList, data });

export const useTableList = () => {
  const mutation = useMutation({
    mutationFn: (data: TableListRes) => {
      return tableList(data);
    },
  });

  return mutation.mutateAsync;
};
