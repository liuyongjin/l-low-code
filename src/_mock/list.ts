import { MockMethod } from "vite-plugin-mock";

const mockData = [
  {
    key: 102,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
    name: "TradeCode 1",
    owner: "曲丽丽",
    callNo: 351,
    status: "1",
    updatedAt: "2024-10-21T03:22:57.282Z",
    createdAt: "2024-10-21T03:22:57.282Z",
    progress: 8,
  },
  {
    key: 101,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
    name: "TradeCode 2",
    owner: "曲丽丽",
    callNo: 279,
    status: "1",
    updatedAt: "2024-10-21T03:15:40.191Z",
    createdAt: "2024-10-21T03:15:40.191Z",
    progress: 29,
  },
  {
    key: 100,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
    name: "TradeCode 3",
    owner: "曲丽丽",
    callNo: 327,
    status: "0",
    updatedAt: "2024-10-21T01:49:47.440Z",
    createdAt: "2024-10-21T01:49:47.440Z",
    progress: 20,
  },
  {
    key: 99,
    disabled: false,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
    name: "TradeCode 99",
    owner: "曲丽丽",
    desc: "这是一段描述",
    callNo: 537,
    status: "2",
    updatedAt: "2024-10-21T00:56:26.542Z",
    createdAt: "2024-10-21T00:56:26.542Z",
    progress: 8,
  },
  {
    key: 98,
    disabled: false,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
    name: "TradeCode 98",
    owner: "曲丽丽",
    desc: "这是一段描述",
    callNo: 193,
    status: "1",
    updatedAt: "2024-10-21T00:56:26.542Z",
    createdAt: "2024-10-21T00:56:26.542Z",
    progress: 98,
  },
  {
    key: 97,
    disabled: false,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
    name: "TradeCode 97",
    owner: "曲丽丽",
    desc: "这是一段描述",
    callNo: 98,
    status: "2",
    updatedAt: "2024-10-21T00:56:26.542Z",
    createdAt: "2024-10-21T00:56:26.542Z",
    progress: 100,
  },
  {
    key: 96,
    disabled: true,
    href: "https://ant.design",
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
    name: "TradeCode 96",
    owner: "曲丽丽",
    desc: "这是一段描述",
    callNo: 643,
    status: "3",
    updatedAt: "2024-10-21T00:56:26.542Z",
    createdAt: "2024-10-21T00:56:26.542Z",
    progress: 77,
  },
];

export default [
  {
    url: "/api/list/table-list",
    method: "post",
    response: () => {
      return {
        status: 0,
        message: "成功",
        data: mockData,
      };
    },
  },
] as MockMethod[];
