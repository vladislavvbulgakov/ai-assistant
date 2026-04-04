import httpService from "@/shared/api/http.service";
import type { AdsResponse } from "@/entities/ad/model/types";

export const getAds = async (): Promise<AdsResponse> => {
    const { data } = await httpService.get<AdsResponse>("/items");
    return data;
};
