import { useQuery } from "@tanstack/react-query";
import { getAds } from "@/entities/ad/api/getAds";
import type { AdsResponse, GetAdsParams } from "../model/types";

export const useAds = (params?: GetAdsParams) => {
    return useQuery<AdsResponse>({
        queryKey: ["ads", params],
        queryFn: () => getAds(params),
    });
};
