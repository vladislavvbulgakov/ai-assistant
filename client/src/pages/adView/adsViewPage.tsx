import { useParams } from "react-router-dom";
import { Stack, Divider, Skeleton } from "@mantine/core";
import AppContainer from "@/shared/ui/appContainer";
import AdsViewDetails from "./adsViewDetails";
import AdsViewDescription from "./adsViewDescription";
import AdsViewBackButton from "./adsViewBackButton";
import AdsViewHeader from "./adsViewHeader";
import { useAd } from "@/entities/ad/hooks/useAd";
import { mapAdParams } from "@/entities/ad/lib/mapAdParams";
const AdsViewPage = () => {
    const { id = "" } = useParams();
    const { data: ad, isLoading, isError } = useAd(id);
    // const ad = {
    //     title: "MacBook Pro 16”",
    //     price: 64000,
    //     createdAt: "2026-03-10T22:39:00.000Z",
    //     updatedAt: "2026-03-10T23:12:00.000Z",
    //     description: "Продаю свой MacBook Pro 16 (2021) на чипе M1 Pro...",
    //     params: {
    //         Тип: "Ноутбук",
    //         Бренд: "Apple",
    //         Модель: "M1 Pro",
    //     },
    // };
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
            <Stack gap="lg" mt={32}>
                <AdsViewHeader
                    id={String(ad.id)}
                    title={ad.title}
                    price={ad.price}
                    createdAt={ad.createdAt}
                    updatedAt={ad.updatedAt}
                />
                <Divider />
                <AdsViewDetails params={mapAdParams(ad)} />
                <AdsViewDescription description={ad.description} />
                <AdsViewBackButton />
            </Stack>
        </AppContainer>
    );
};

export default AdsViewPage;
