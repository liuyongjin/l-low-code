import { useMount } from "ahooks";
import { Button, Popconfirm, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { t } from "i18next";
import { useState } from "react";

import { usePermissions } from "@/api";
import { AllowedAccess, IconButton, Iconify } from "@/components";
import { MenuEntity } from "@/types/entity";
import { BasicStatus } from "@/types/enum";

export const Permissions = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const permissions = usePermissions();

  const getList = async () => {
    const res = await permissions({});
    setDataSource(res);
  };

  useMount(() => {
    getList();
  });

  const columns: ColumnsType<MenuEntity> = [
    {
      title: "Name",
      dataIndex: "label",
      width: 300,
      render: (text) => {
        return <div>{t(text)}</div>;
      },
    },
    {
      title: "Icon",
      dataIndex: "icon",
      width: 60,
      render: (text) => {
        if (!text) {
          return "-";
        }
        return <Iconify className="!m-0" icon={text} size={18} />;
      },
    },
    {
      title: "Component",
      dataIndex: "component",
      render: (text) => {
        if (!text) {
          return "-";
        }
        return text;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 120,
      render: (text) => (
        <Tag
          bordered={false}
          color={text === BasicStatus.DISABLE ? "error" : "success"}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: "Action",
      align: "center",
      width: 100,
      render: (_, record) => {
        return (
          <div className="flex w-full justify-center text-gray">
            {record.editable === false ? null : (
              <AllowedAccess permissions={["edit"]}>
                <IconButton>
                  <Iconify icon="solar:pen-bold-duotone" size={18} />
                </IconButton>
              </AllowedAccess>
            )}
            {record.deletable === false ? null : (
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
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="primary">New</Button>
      </div>
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};
