import { useQuery } from "@tanstack/react-query";
import { getAds } from "@/entities/ad/api/getAds";
import type { AdsResponse } from "../model/types";

export const useAds = () => {
    return useQuery<AdsResponse>({
        queryKey: ["ads"],
        queryFn: getAds,
    });
};
