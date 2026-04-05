import httpService from "@/shared/api/http.service";
import type { AdsResponse, GetAdsParams } from "../model/types";

export const getAds = async (params?: GetAdsParams): Promise<AdsResponse> => {
    const { data } = await httpService.get<AdsResponse>("/items", {
        params: {
            ...params,
            categories: params?.categories?.join(","),
        },
    });

    return data;
};
