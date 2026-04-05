import { useParams } from "react-router-dom";
import { Stack, Divider, Skeleton } from "@mantine/core";
import AppContainer from "@/shared/ui/appContainer";
import AdsViewDetails from "../adsViewDetails";
import AdsViewDescription from "../adsViewDescription";
import AdsViewBackButton from "../adsViewBackButton";
import AdsViewHeader from "../adsViewHeader";
import { useAd } from "@/entities/ad/hooks/useAd";
import { mapAdParams } from "@/entities/ad/lib/mapAdParams";
import styles from "./adsViewPage.module.css";
const AdsViewPage = () => {
    const { id = "" } = useParams();
    const { data: ad, isLoading, isError } = useAd(id);

    if (isLoading)
        return (
            <>
                <Skeleton height={50} circle mb="xl" />
                <Skeleton height={8} radius="xl" />
                <Skeleton height={8} mt={6} radius="xl" />
                <Skeleton height={8} mt={6} width="70%" radius="xl" />
            </>
        );

    if (isError || !ad) return <div>Ошибка загрузки</div>;
    return (
        <AppContainer>
            <div className={styles.wrapper}>
                <Stack gap="lg" pt={32}>
                    <AdsViewHeader
                        id={String(ad.id)}
                        title={ad.title}
                        price={ad.price}
                        createdAt={ad.createdAt}
                        updatedAt={ad.updatedAt}
                    />
                    <Divider />
                    <AdsViewDetails params={mapAdParams(ad)} ad={ad} />
                    <AdsViewDescription description={ad.description} />
                    <AdsViewBackButton />
                </Stack>
            </div>
        </AppContainer>
    );
};

export default AdsViewPage;
