import AppContainer from "@/shared/ui/appContainer";
import AdsHeader from "../adsHeader";
import AdsToolbar from "../adsToolbar/adsTollbar";
import styles from "./adsListPage.module.css";
import { Stack } from "@mantine/core";

const AdsListPage = () => {
    return (
        <AppContainer>
            <div className={styles.wrapper}>
                <Stack gap="md">
                    <AdsHeader total={42} />
                    <AdsToolbar />
                </Stack>
            </div>
        </AppContainer>
    );
};

export default AdsListPage;
