import AppContainer from "@/shared/ui/appContainer";
import AdsHeader from "./adsHeader";
import AdsToolbar from "./adsToolbar/adsTollbar";
import { Stack } from "@mantine/core";
import AdsFeed from "./adsFeed/adsFeed";
import { useAds } from "@/entities/ad/hooks/useAds";
import { useDebounce } from "@/shared/lib/useDebounce";
import { parseSort } from "@/shared/lib/parseSort";
import type { Layout } from "@/entities/ad/model/types";
import { useState } from "react";
import { useAdsFilters } from "@/shared/lib/useAdsFilters";

const AdsListPage = () => {
    const {
        search,
        setSearch,
        page,
        setPage,
        sort,
        setSort,
        filters,
        setFilters,
    } = useAdsFilters();

    const debouncedSearch = useDebounce(search, 400);
    const sortParams = parseSort(sort);

    const [layout, setLayout] = useState<Layout>("grid");

    const LIMIT = 10;
    const skip = (page - 1) * LIMIT;

    const { data, isLoading, isError } = useAds({
        q: debouncedSearch || "",
        limit: LIMIT,
        skip,
        ...sortParams,
        categories: filters.categories,
        needsRevision: filters.needsRevision,
    });

    return (
        <AppContainer>
            <Stack gap="md" pt={12}>
                <AdsHeader total={data?.total ?? 0} isLoading={isLoading} />

                <AdsToolbar
                    search={search}
                    setSearch={setSearch}
                    sort={sort}
                    setSort={setSort}
                    layout={layout}
                    setLayout={setLayout}
                />

                <AdsFeed
                    ads={data?.items}
                    isLoading={isLoading}
                    isError={isError}
                    filters={filters}
                    onChangeFilters={setFilters}
                    page={page}
                    onChangePage={setPage}
                    total={data?.total ?? 0}
                    limit={LIMIT}
                    layout={layout}
                />
            </Stack>
        </AppContainer>
    );
};

export default AdsListPage;
