import { useParams } from "react-router-dom";
import { Stack, Title, Skeleton } from "@mantine/core";
import AppContainer from "@/shared/ui/appContainer";
import AdsEditForm from "../adsEditForm";
import { useAd } from "@/entities/ad/hooks/useAd";
import styles from "./adsEditPage.module.css";
const AdsEditPage = () => {
    const { id = "" } = useParams();
    const { data: ad, isLoading, isError } = useAd(id);
    if (isLoading)
        return (
            <>
                {" "}
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
                <Stack gap="lg" pt={32} pb={48}>
                    <Title order={2}>Редактирование объявления</Title>

                    <AdsEditForm ad={ad} />
                </Stack>
            </div>
        </AppContainer>
    );
};

export default AdsEditPage;
