import { useMount } from "ahooks";
import { Descriptions, DescriptionsProps, Flex, Statistic } from "antd";
import { createStyles } from "antd-style";
import { useState } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useWorkbench } from "@/api";
import { Iconify } from "@/components";
import { useThemeToken } from "@/hooks";
import { useSettings } from "@/store";
import { ThemeMode } from "@/types/enum";

export const Workbench = () => {
  const { themeMode } = useSettings();
  const { colorPrimary, colorText } = useThemeToken();
  const { styles } = useStyles(themeMode);
  const [dataSource, setDataSource] = useState<any>([]);
  const workbench = useWorkbench();

  const getData = async () => {
    const res = await workbench({});
    setDataSource(res);
  };

  useMount(() => {
    getData();
  });

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

  return (
    <div className={styles.workbench}>
      <Flex gap="middle">
        <div className={styles.chart}>
          <Statistic
            className={styles.statistic}
            title="Active Users"
            value={7.28}
            precision={2}
            valueStyle={{ color: colorPrimary }}
            prefix={<Iconify icon="ri:arrow-up-line" />}
            suffix="%"
          />
          <LineChart width={100} height={120} data={dataSource[0] || []}>
            <Tooltip
              itemStyle={{
                color: colorText,
              }}
              contentStyle={{
                background: "transparent",
                border: "none",
              }}
            />
            <XAxis dataKey="year" hide />
            <YAxis hide />
            <Line
              type="monotone"
              name="users"
              dataKey="value"
              stroke={colorPrimary}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
        <div className={styles.chart}>
          <Statistic
            className={styles.statistic}
            title="Total Installed"
            value={6.28}
            precision={2}
            valueStyle={{ color: colorPrimary }}
            prefix={<Iconify icon="ri:arrow-up-line" />}
            suffix="%"
          />
          <LineChart width={100} height={120} data={dataSource[1] || []}>
            <Tooltip
              itemStyle={{
                color: colorText,
              }}
              contentStyle={{
                background: "transparent",
                border: "none",
              }}
            />
            <XAxis dataKey="year" hide />
            <YAxis hide />
            <Line
              type="monotone"
              name="installed"
              dataKey="value"
              stroke={colorPrimary}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
        <div className={styles.chart}>
          <Statistic
            className={styles.statistic}
            title="Total Downloads"
            value={11.28}
            precision={2}
            valueStyle={{ color: colorPrimary }}
            prefix={<Iconify icon="ri:arrow-up-line" />}
            suffix="%"
          />
          <LineChart width={100} height={120} data={dataSource[2] || []}>
            <Tooltip
              itemStyle={{
                color: colorText,
              }}
              contentStyle={{
                background: "transparent",
                border: "none",
              }}
            />
            <XAxis dataKey="year" hide />
            <YAxis hide />
            <Line
              type="monotone"
              name="downloads"
              dataKey="value"
              stroke={colorPrimary}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
      </Flex>
      <Descriptions
        className={styles.descriptions}
        title="User Info"
        items={items}
      />
      <div className={styles.radar}>
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={dataSource[3] || []}
          >
            <Tooltip
              itemStyle={{
                color: colorText,
              }}
              contentStyle={{
                background: "transparent",
                border: "none",
              }}
            />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name="Lily"
              dataKey="A"
              stroke={colorPrimary}
              fill={colorPrimary}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.multLine}>
        <ResponsiveContainer>
          <BarChart data={dataSource[4] || []}>
            <Tooltip
              itemStyle={{
                color: colorText,
              }}
              contentStyle={{
                background: "transparent",
                border: "none",
              }}
            />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Bar dataKey="uv" fill={colorPrimary} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const useStyles = createStyles((_, themeMode) => {
  return {
    workbench: {
      background: themeMode === ThemeMode.Light ? "#f5f5f5" : "",
      borderRadius: "0.5rem",
      padding: "1rem",
    },
    chart: {
      display: "flex",
      alignItems: "center",
      flex: "1",
      borderRadius: "0.5rem",
      height: "8rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
    statistic: {
      fontWeight: 600,
      width: "9rem",
      padding: "1rem",
    },
    descriptions: {
      marginTop: "1rem",
      borderRadius: "0.5rem",
      padding: "1rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
    multLine: {
      height: "18rem !important",
      marginTop: "1rem",
      padding: "1rem",
      borderRadius: "0.5rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
    radar: {
      height: "18rem !important",
      marginTop: "1rem",
      padding: "1rem",
      borderRadius: "0.5rem",
      background: themeMode === ThemeMode.Light ? "#ffffff" : "",
    },
  };
});
