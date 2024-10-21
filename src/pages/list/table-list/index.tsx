import { useMount } from "ahooks";
import { Button, Popconfirm, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { t } from "i18next";
import { useState } from "react";

import { useTableList } from "@/api";
import { IconButton, Iconify } from "@/components";
import { MenuEntity } from "@/types/entity";
import { BasicStatus } from "@/types/enum";

export const TableList = () => {
  const [dataSource, setDataSource] = useState([]);
  const tableList = useTableList();

  const getList = async () => {
    const res = await tableList({});
    console.log(res);
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
      render: (text, record) => (
        <div className="flex w-full justify-center text-gray">
          <IconButton>
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm
            title="Delete the Permission"
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <div>
              <IconButton>
                <Iconify
                  icon="mingcute:delete-2-fill"
                  size={18}
                  className="text-error"
                />
              </IconButton>
            </div>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="primary">New</Button>
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
