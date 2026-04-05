import { Card, Image, Text, Badge, Group, Stack } from "@mantine/core";
import cover from "@/assets/cover.png";
import type { AdPreview } from "../model/types";

const categoryMap: Record<AdPreview["category"], string> = {
    auto: "Авто",
    real_estate: "Недвижимость",
    electronics: "Электроника",
};

interface Props {
    ad: AdPreview;
}

export const AdListItem = ({ ad }: Props) => {
    return (
        <Card withBorder radius="md" p="sm">
            <Group align="flex-start" wrap="nowrap">
                <Image
                    src={cover}
                    w={120}
                    h={90}
                    fit="contain"
                    alt={ad.title}
                    radius="sm"
                />

                <Stack gap={4} style={{ flex: 1 }}>
                    <Badge variant="light" w="fit-content">
                        {categoryMap[ad.category]}
                    </Badge>

                    <Text fw={500}>{ad.title}</Text>

                    <Text c="dimmed">{ad.price.toLocaleString("ru-RU")} ₽</Text>
                </Stack>
            </Group>
        </Card>
    );
};
