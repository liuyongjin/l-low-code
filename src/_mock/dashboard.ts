import { MockMethod } from "vite-plugin-mock";

const mockLineData = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];

const mockMultLineData = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
];

const mockRadarData = [
  {
    subject: "Active Users",
    A: 120,
  },
  {
    subject: "Total Installed",
    A: 98,
  },
  {
    subject: "PV",
    A: 85,
  },
  {
    subject: "UV",
    A: 65,
  },
  {
    subject: "Total Downloads",
    A: 86,
  },
];

export default [
  {
    url: "/api/dashboard/workbench",
    method: "post",
    response: () => {
      return {
        status: 0,
        message: "成功",
        data: [
          mockLineData,
          mockLineData,
          mockLineData,
          mockRadarData,
          mockMultLineData,
        ],
      };
    },
  },
] as MockMethod[];
