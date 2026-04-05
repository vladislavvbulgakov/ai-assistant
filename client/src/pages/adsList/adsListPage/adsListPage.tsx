import AppContainer from "@/shared/ui/appContainer";
import AdsHeader from "../adsHeader";
import AdsToolbar from "../adsToolbar/adsTollbar";
import styles from "./adsListPage.module.css";
import { Stack } from "@mantine/core";
import AdsFeed from "../adsFeed/adsFeed";
import { useAds } from "@/entities/ad/hooks/useAds";
import { useState } from "react";
import { useDebounce } from "@/shared/lib/useDebounce";

const AdsListPage = () => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 400);
    const { data, isLoading, isError } = useAds({
        q: debouncedSearch || "",
        limit: 10,
        skip: 0,
    });
    return (
        <AppContainer>
            <div className={styles.wrapper}>
                <Stack gap="md">
                    <AdsHeader total={data?.total ?? 0} isLoading={isLoading} />
                    <AdsToolbar search={search} setSearch={setSearch} />
                    <AdsFeed
                        ads={data?.items}
                        isLoading={isLoading}
                        isError={isError}
                    />
                </Stack>
            </div>
        </AppContainer>
    );
};

export default AdsListPage;
