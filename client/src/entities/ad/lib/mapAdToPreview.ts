import type { Ad, AdPreview } from "../model/types";

export const mapAdToPreview = (ad: Ad): AdPreview => {
    return {
        id: ad.id,
        category: ad.category,
        title: ad.title,
        price: ad.price,
        needsRevision:
            !ad.description ||
            !ad.params ||
            Object.keys(ad.params).length === 0,
    };
};
