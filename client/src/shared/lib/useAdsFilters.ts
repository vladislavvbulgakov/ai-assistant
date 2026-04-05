import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Category, Filters } from "@/entities/ad/model/types";

export const useAdsFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialSearch = searchParams.get("q") || "";
    const initialPage = Number(searchParams.get("page") || 1);
    const initialSort = searchParams.get("sort") || "";
    const initialCategories = searchParams.get("categories")
        ? (searchParams.get("categories")!.split(",") as Category[])
        : [];

    const initialNeedsRevision = searchParams.get("needsRevision") === "true";

    const [search, setSearch] = useState(initialSearch);
    const [page, setPage] = useState(initialPage);
    const [sort, setSort] = useState<string | null>(initialSort);
    const [filters, setFilters] = useState<Filters>({
        categories: initialCategories,
        needsRevision: initialNeedsRevision,
    });

    const handleSetSearch = (value: string) => {
        setPage(1);
        setSearch(value);
    };

    const handleSetSort = (value: string | null) => {
        setPage(1);
        setSort(value);
    };

    const handleSetFilters = (newFilters: Filters) => {
        setPage(1);
        setFilters(newFilters);
    };

    useEffect(() => {
        const params: Record<string, string> = {};

        if (search) params.q = search;
        if (page > 1) params.page = String(page);
        if (sort) params.sort = sort;

        if (filters.categories.length) {
            params.categories = filters.categories.join(",");
        }

        if (filters.needsRevision) {
            params.needsRevision = "true";
        }

        setSearchParams(params);
    }, [search, page, sort, filters, setSearchParams]);

    return {
        search,
        setSearch: handleSetSearch,
        page,
        setPage,
        sort,
        setSort: handleSetSort,
        filters,
        setFilters: handleSetFilters,
    };
};
