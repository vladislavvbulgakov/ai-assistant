import AppContainer from "@/shared/ui/appContainer";
import AdsHeader from "../adsHeader";
import AdsToolbar from "../adsToolbar/adsTollbar";
import styles from "./adsListPage.module.css";
import { Stack } from "@mantine/core";
import AdsFeed from "../adsFeed/adsFeed";
import { useAds } from "@/entities/ad/hooks/useAds";

const AdsListPage = () => {
    const { data, isLoading, isError } = useAds();
    return (
        <AppContainer>
            <div className={styles.wrapper}>
                <Stack gap="md">
                    <AdsHeader total={data?.total ?? 0} />
                    <AdsToolbar />
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
