import { Title, Text, Stack } from "@mantine/core";
interface Props {
    total: number;
}

const AdsHeader = ({ total }: Props) => {
    return (
        <Stack gap={4}>
            <Title order={2}>Мои объявления</Title>
            <Text c="dimmed">{total} объявлений</Text>
        </Stack>
    );
};
export default AdsHeader;
