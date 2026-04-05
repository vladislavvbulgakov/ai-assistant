import { useQuery } from "@tanstack/react-query";
import { getAdById } from "@/entities/ad/api/getAdById";
import type { Ad } from "../model/types";

export const useAd = (id: string) => {
    return useQuery<Ad>({
        queryKey: ["ad", id],
        queryFn: () => getAdById(id),
        enabled: !!id,
    });
};
