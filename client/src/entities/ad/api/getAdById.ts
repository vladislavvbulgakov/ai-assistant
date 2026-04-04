import httpService from "@/shared/api/http.service";
import type { Ad } from "@/entities/ad/model/types";

export const getAdById = async (id: number): Promise<Ad> => {
    const { data } = await httpService.get<Ad>(`/items/${id}`);
    return data;
};
