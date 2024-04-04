import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestDataType } from "./type";

export const requestData = ({
  method,
  url,
  params
}: RequestDataType): Promise<AxiosResponse> => {
  const apiUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "";

  const requestDataConfig: AxiosRequestConfig = {
    method: method || "GET",
    baseURL: apiUrl,
    url: url || "",
    params: {
      ...params
    }
  };

  return axios(requestDataConfig);
};
