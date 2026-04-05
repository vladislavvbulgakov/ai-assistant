export type Category = "auto" | "real_estate" | "electronics";

export type AdPreview = {
    category: Category;
    title: string;
    price: number;
    needsRevision: boolean;
};

export type AdsResponse = {
    items: AdPreview[];
    total: number;
};
export type GetAdsParams = {
    q?: string;
    limit?: number;
    skip?: number;
    categories?: ("auto" | "real_estate" | "electronics")[];
    needsRevision?: boolean;
    sortColumn?: "title" | "createdAt";
    sortDirection?: "asc" | "desc";
};
export type Ad = {
    id: number;
    title: string;
    description?: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    category: Category;
    params: AutoItemParams | RealEstateItemParams | ElectronicsItemParams;
    needsRevision?: boolean;
};
export type ItemUpdateInput = {
    category: Category;
    title: string;
    description?: string;
    price: number;
    params:
        | Partial<AutoItemParams>
        | Partial<RealEstateItemParams>
        | Partial<ElectronicsItemParams>;
};
export type AutoItemParams = {
    brand?: string;
    model?: string;
    yearOfManufacture?: number;
    transmission?: "automatic" | "manual";
    mileage?: number;
    enginePower?: number;
};

export type RealEstateItemParams = {
    type?: "flat" | "house" | "room";
    address?: string;
    area?: number;
    floor?: number;
};

export type ElectronicsItemParams = {
    type?: "phone" | "laptop" | "misc";
    brand?: string;
    model?: string;
    condition?: "new" | "used";
    color?: string;
};
