import type { GetAdsParams } from "@/entities/ad/model/types";

export const parseSort = (
    value: string | null,
): Pick<GetAdsParams, "sortColumn" | "sortDirection"> => {
    if (!value) return {};

    const [column, direction] = value.split("_");

    return {
        sortColumn: column as GetAdsParams["sortColumn"],
        sortDirection: direction as GetAdsParams["sortDirection"],
    };
};
