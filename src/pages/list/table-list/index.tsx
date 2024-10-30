import { useMount } from "ahooks";
import { Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";

import { useTableList } from "@/api";
import { AccessButton, AllowedAccess, IconButton, Iconify } from "@/components";
import { MenuEntity } from "@/types/entity";

export const TableList = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const tableList = useTableList();

  const getList = async () => {
    const res = await tableList({});
    setDataSource(res);
  };

  useMount(() => {
    getList();
  });

  const columns: ColumnsType<MenuEntity> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 100,
    },
    {
      title: "Description",
      dataIndex: "desc",
      width: 200,
    },
    {
      title: "Number of service calls",
      dataIndex: "callNo",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Last scheduled time",
      dataIndex: "updatedAt",
    },
    {
      title: "Action",
      key: "operation",
      align: "center",
      width: 100,
      render: () => (
        <div className="flex w-full justify-center text-gray">
          <AllowedAccess permissions={["edit"]}>
            <IconButton>
              <Iconify icon="solar:pen-bold-duotone" size={18} />
            </IconButton>
          </AllowedAccess>
          <Popconfirm
            title="Delete the Permission"
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <div>
              <AllowedAccess permissions={["delete"]}>
                <IconButton>
                  <Iconify
                    icon="mingcute:delete-2-fill"
                    size={18}
                    className="text-error"
                  />
                </IconButton>
              </AllowedAccess>
            </div>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-end mb-4">
        <AccessButton type="primary" permissions={["add"]}>
          New
        </AccessButton>
      </div>
      <Table
        rowKey="key"
        size="small"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};
