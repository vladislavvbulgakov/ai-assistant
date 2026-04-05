import httpService from "@/shared/api/http.service";
import type { ItemUpdateInput } from "@/entities/ad/model/types";

export const updateAd = async (id: string, payload: ItemUpdateInput) => {
    const { data } = await httpService.put(`/items/${id}`, payload);
    return data;
};
