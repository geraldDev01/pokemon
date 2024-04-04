import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type RequestDataParams = {
  method?: string;
  url?: string;
};

export const requestData = ({
  method,
  url,
}: RequestDataParams): Promise<AxiosResponse> => {
  const apiUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "";

  const requestDataConfig: AxiosRequestConfig = {
    method: method || "GET",
    baseURL: apiUrl,
    url: url || "",
  };
  
  return axios(requestDataConfig);
};
