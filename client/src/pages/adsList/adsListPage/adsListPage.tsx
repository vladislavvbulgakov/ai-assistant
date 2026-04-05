import AppContainer from "@/shared/ui/appContainer";
import AdsHeader from "../adsHeader";
import AdsToolbar from "../adsToolbar/adsTollbar";
import styles from "./adsListPage.module.css";
import { Stack } from "@mantine/core";
import AdsFeed from "../adsFeed/adsFeed";
import { useAds } from "@/entities/ad/hooks/useAds";
import { useState } from "react";
import { useDebounce } from "@/shared/lib/useDebounce";
import { parseSort } from "@/shared/lib/parseSort";
import type { Category, Filters, Layout } from "@/entities/ad/model/types";

const AdsListPage = () => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 400);
    const [sort, setSort] = useState<string | null>("createdAt_desc");
    const sortParams = parseSort(sort);

    const [layout, setLayout] = useState<Layout>("grid");
    const [filters, setFilters] = useState({
        categories: [] as Category[],
        needsRevision: false,
    });

    const [page, setPage] = useState(1);
    const handleSearchChange = (value: string) => {
        setPage(1);
        setSearch(value);
    };
    const handleSortChange = (value: string | null) => {
        setPage(1);
        setSort(value);
    };
    const handleFiltersChange = (newFilters: Filters) => {
        setPage(1);
        setFilters(newFilters);
    };
    const LIMIT = 10;
    const skip = (page - 1) * LIMIT;

    const { data, isLoading, isError } = useAds({
        q: debouncedSearch || "",
        limit: LIMIT,
        skip,
        ...sortParams,
        categories: filters.categories,
        needsRevision: filters.needsRevision || undefined,
    });

    return (
        <AppContainer>
            <div className={styles.wrapper}>
                <Stack gap="md">
                    <AdsHeader total={data?.total ?? 0} isLoading={isLoading} />
                    <AdsToolbar
                        search={search}
                        setSearch={handleSearchChange}
                        sort={sort}
                        setSort={handleSortChange}
                        layout={layout}
                        setLayout={setLayout}
                    />
                    <AdsFeed
                        ads={data?.items}
                        isLoading={isLoading}
                        isError={isError}
                        filters={filters}
                        onChangeFilters={handleFiltersChange}
                        page={page}
                        onChangePage={setPage}
                        total={data?.total ?? 0}
                        limit={LIMIT}
                        layout={layout}
                    />
                </Stack>
            </div>
        </AppContainer>
    );
};

export default AdsListPage;
