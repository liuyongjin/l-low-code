import { Line } from "@ant-design/charts";
import { useMount } from "ahooks";
import { Descriptions, DescriptionsProps, Flex, Statistic } from "antd";
import { createStyles } from "antd-style";
import { useState } from "react";

import { useDashboard } from "@/api";
import { Iconify } from "@/components";
import { useThemeToken } from "@/hooks";
import { useSettings } from "@/store";
import { ThemeMode } from "@/types/enum";

export const Workbench = () => {
  const { themeMode } = useSettings();
  const { colorPrimary } = useThemeToken();
  const { styles } = useStyles(themeMode);
  const [dataSource, setDataSource] = useState([]);
  const dashboard = useDashboard();

  const getData = async () => {
    const res = await dashboard({});
    setDataSource(res);
  };

  useMount(() => {
    getData();
  });

  const lineConfig = {
    data: dataSource[0] || [],
    title: {
      visible: true,
    },
    colorField: colorPrimary,
    axis: {
      x: {
        label: false,
        tick: false,
      },
      y: {
        label: false,
        grid: false,
        tick: false,
      },
    },
    xField: "year",
    yField: "value",
  };

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "UserName",
      children: <p>Zhou Maomao</p>,
    },
    {
      key: "2",
      label: "Telephone",
      children: <p>1810000000</p>,
    },
    {
      key: "3",
      label: "Live",
      children: <p>Hangzhou, Zhejiang</p>,
    },
    {
      key: "4",
      label: "Remark",
      children: <p>empty</p>,
    },
    {
      key: "5",
      label: "Address",
      children: (
        <p>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</p>
      ),
    },
  ];

  const multLineConfig = {
    title: {
      visible: true,
      text: "多折线图",
    },
    description: {
      visible: true,
      text: "通过回调函数指定折线颜色",
    },
    colorField: colorPrimary,
    padding: "auto",
    forceFit: true,
    data: dataSource[3] || [],
    xField: "date",
    yField: "value",
    axis: {
      x: {
        label: false,
        tick: false,
      },
      y: {
        label: false,
        grid: false,
        tick: false,
      },
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    legend: { position: "right-top" },
    seriesField: "type",
    color: (d) => {
      return d === "register" ? "#93D072" : "#2D71E7";
    },
    responsive: true,
  };

  return (
    <div className={styles.workbenchWrapper}>
      <Flex gap="middle">
        <div className={styles.chartWrapper}>
          <Statistic
            className={styles.statistic}
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: colorPrimary }}
            prefix={<Iconify icon="ri:arrow-up-line" />}
            suffix="%"
          />
          <Line {...lineConfig} />
        </div>
        <div className={styles.chartWrapper}>
          <Statistic
            className={styles.statistic}
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: colorPrimary }}
            prefix={<Iconify icon="ri:arrow-up-line" />}
            suffix="%"
          />
          <Line {...lineConfig} />
        </div>
        <div className={styles.chartWrapper}>
          <Statistic
            className={styles.statistic}
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: colorPrimary }}
            prefix={<Iconify icon="ri:arrow-up-line" />}
            suffix="%"
          />
          <Line {...lineConfig} />
        </div>
      </Flex>
      <Descriptions
        className={styles.descriptionsWrapper}
        title="User Info"
        items={items}
      />
      <Line className={styles.multLine} {...multLineConfig} />
      <Line className={styles.multLine} {...multLineConfig} />
    </div>
  );
};

const useStyles = createStyles((_, themeMode) => {
  return {
    workbenchWrapper: {
      background: themeMode === ThemeMode.Light ? "#f5f5f5" : "",
      borderRadius: "0.5rem",
      padding: "1rem",
    },
    chartWrapper: {
      display: "flex",
      flex: "1",
      borderRadius: "0.5rem",
      height: "12rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
    statistic: {
      width: "9rem",
      padding: "1rem",
    },
    descriptionsWrapper: {
      marginTop: "1rem",
      borderRadius: "0.5rem",
      padding: "1rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
    multLine: {
      height: "18rem !important",
      marginTop: "1rem",
      borderRadius: "0.5rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
  };
});
