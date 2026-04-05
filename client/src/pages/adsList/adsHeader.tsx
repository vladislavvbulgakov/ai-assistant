import { pluralizeAds } from "@/shared/lib/pluralize";
import { Title, Text, Stack } from "@mantine/core";
interface Props {
    total: number;
    isLoading: boolean;
}

const AdsHeader = ({ total, isLoading }: Props) => {
    return (
        <Stack gap={4}>
            <Title order={2}>Мои объявления</Title>
            <Text c="dimmed">
                {isLoading ? "Загрузка..." : `${total} ${pluralizeAds(total)}`}
            </Text>
        </Stack>
    );
};
export default AdsHeader;
