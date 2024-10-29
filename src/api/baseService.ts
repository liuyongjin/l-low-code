import { message as Message } from "antd";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { t } from "i18next";

import { ResultEnum, StorageEnum } from "@/types";
import { Result } from "@/types/api";
import { removeItem } from "@/utils";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer Token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    if (!res.data) throw new Error(t("sys.api.apiRequestFailed"));

    const { status, data, message } = res.data;
    const hasSuccess =
      data && Reflect.has(res.data, "status") && status === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return data;
    }

    throw new Error(message || t("sys.api.apiRequestFailed"));
  },
  (error: AxiosError<Result>) => {
    const { response, message } = error || {};

    const errMsg =
      response?.data?.message || message || t("sys.api.errorMessage");
    Message.error(errMsg);

    const status = response?.status;

    if (status === 401) {
      removeItem(StorageEnum.UserInfo);
      window.location.replace("/login");
    }
    if (status === 403) {
      window.location.replace("/403");
    }
    if (status === 404) {
      window.location.replace("/404");
    }
    if (status === 500) {
      window.location.replace("/500");
    }
    return Promise.reject(error);
  },
);

class BaseService {
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "GET" });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "POST" });
  }

  put(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "PUT" });
  }

  delete(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "DELETE" });
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(config)
        .then((res: AxiosResponse<Result>) => {
          resolve(res);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }
}
export const baseService = new BaseService();
