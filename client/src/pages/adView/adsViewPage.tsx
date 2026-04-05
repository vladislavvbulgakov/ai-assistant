import { useParams } from "react-router-dom";
import { Stack, Divider } from "@mantine/core";
import AppContainer from "@/shared/ui/appContainer";
import AdsViewDetails from "./adsViewDetails";
import AdsViewDescription from "./adsViewDescription";
import AdsViewBackButton from "./adsViewBackButton";
import AdsViewHeader from "./adsViewHeader";
const AdsViewPage = () => {
    const { id } = useParams();

    const ad = {
        title: "MacBook Pro 16”",
        price: 64000,
        createdAt: "2026-03-10T22:39:00.000Z",
        updatedAt: "2026-03-10T23:12:00.000Z",
        description: "Продаю свой MacBook Pro 16 (2021) на чипе M1 Pro...",
        params: {
            Тип: "Ноутбук",
            Бренд: "Apple",
            Модель: "M1 Pro",
        },
    };

    return (
        <AppContainer>
            <Stack gap="lg" mt={32}>
                <AdsViewHeader {...ad} id={id} />

                <Divider />

                <AdsViewDetails params={ad.params} />

                <AdsViewDescription description={ad.description} />

                <AdsViewBackButton />
            </Stack>
        </AppContainer>
    );
};

export default AdsViewPage;
