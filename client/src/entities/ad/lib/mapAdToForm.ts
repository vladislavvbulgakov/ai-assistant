import type { Ad, ItemUpdateInput } from "../model/types";

export const mapAdToForm = (ad: Ad): ItemUpdateInput => {
    return {
        title: ad.title,
        price: ad.price,
        category: ad.category,
        description: ad.description || "",
        params: ad.params || {},
    };
};
