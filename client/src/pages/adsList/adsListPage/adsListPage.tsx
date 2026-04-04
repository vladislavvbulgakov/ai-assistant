import AppContainer from "@/shared/ui/appContainer";
import AdsHeader from "../adsHeader";
import AdsToolbar from "../adsToolbar/adsTollbar";
import styles from "./adsListPage.module.css";
import { Stack } from "@mantine/core";
import AdsFeed from "../adsFeed/adsFeed";
import ads from "@/mockData/mockData";
import { mapAdToPreview } from "@/entities/ad/lib/mapAdToPreview";

const data = ads.map(mapAdToPreview);
const AdsListPage = () => {
    return (
        <AppContainer>
            <div className={styles.wrapper}>
                <Stack gap="md">
                    <AdsHeader total={42} />
                    <AdsToolbar />
                    <AdsFeed ads={data} />
                </Stack>
            </div>
        </AppContainer>
    );
};

export default AdsListPage;
