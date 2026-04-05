import { Card, Image, Text, Badge, Group, Stack } from "@mantine/core";
import cover from "@/assets/cover.png";
import type { AdPreview } from "../model/types";
import { useNavigate } from "react-router-dom";

const categoryMap: Record<AdPreview["category"], string> = {
    auto: "Авто",
    real_estate: "Недвижимость",
    electronics: "Электроника",
};

interface Props {
    ad: AdPreview;
}

export const AdListItem = ({ ad }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ads/${ad.id}`);
    };
    return (
        <Card
            withBorder
            radius="md"
            p="sm"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
        >
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
                    <Group gap={6}>
                        <Badge variant="light" w="fit-content">
                            {categoryMap[ad.category]}
                        </Badge>

                        {ad.needsRevision && (
                            <Badge
                                variant="light"
                                styles={{
                                    root: {
                                        background: "#fff4e6",
                                        color: "#f59f00",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 6,
                                        paddingLeft: 8,
                                        paddingRight: 10,
                                        height: 22,
                                        lineHeight: "22px",
                                        whiteSpace: "nowrap",
                                    },
                                }}
                            >
                                Требует доработок
                            </Badge>
                        )}
                    </Group>
                    <Text fw={500}>{ad.title}</Text>

                    <Text c="dimmed">{ad.price.toLocaleString("ru-RU")} ₽</Text>
                </Stack>
            </Group>
        </Card>
    );
};
