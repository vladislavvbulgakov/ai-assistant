import axios from "axios";
import type {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";
import configFile from "@/config.json";

const http: AxiosInstance = axios.create({
    baseURL: configFile.apiEndpoint,
});

http.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (res: AxiosResponse) => res,
    (error: AxiosError) => {
        const status = error.response?.status;

        const expectedErrors = status && status >= 400 && status < 500;

        if (!expectedErrors) {
            console.error(error);
            toast.error("Something went wrong. Try it later");
        }

        return Promise.reject(error);
    },
);

const httpService = {
    get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
        http.get<T>(url, config),

    post: <T = unknown>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig,
    ) => http.post<T>(url, data, config),

    put: <T = unknown>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig,
    ) => http.put<T>(url, data, config),

    patch: <T = unknown>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig,
    ) => http.patch<T>(url, data, config),

    delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
        http.delete<T>(url, config),
};

export default httpService;
