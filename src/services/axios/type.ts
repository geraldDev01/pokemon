export type RequestDataType = {
    method?: string;
    url?: string;
    params?: ParamsType;
};

type ParamsType = {
    limit?: number;
    offset?: number;
}

