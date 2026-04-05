import { Card, Image, Text, Badge, Stack, Box } from "@mantine/core";
import cover from "@/assets/cover.png";
import type { AdPreview } from "../model/types";
import { useNavigate } from "react-router-dom";
type Props = {
    ad: AdPreview;
};

const categoryMap: Record<AdPreview["category"], string> = {
    auto: "Авто",
    real_estate: "Недвижимость",
    electronics: "Электроника",
};

export const AdCard = ({ ad }: Props) => {
    const { title, price, category } = ad;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ads/${ad.id}`);
    };
    return (
        <Card
            radius="md"
            withBorder
            padding={0}
            style={{
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
            }}
            miw={180}
            onClick={handleClick}
        >
            <Card.Section>
                <Box pos="relative">
                    <Image src={cover} h={150} w="100%" fit="cover" />

                    <Badge
                        variant="default"
                        pos="absolute"
                        bottom={-8}
                        left={8}
                        radius={6}
                    >
                        <Text size="0.8rem" tt={"capitalize"} p={4}>
                            {categoryMap[category]}
                        </Text>
                    </Badge>
                </Box>
            </Card.Section>

            <Stack gap={8} p="sm" style={{ flex: 1 }}>
                <Text size="sm" fw={400} lineClamp={2} mt={5}>
                    {title}
                </Text>

                <Text size="sm" c="dimmed" fw={600}>
                    {price.toLocaleString("ru-RU")} ₽
                </Text>
                {ad.needsRevision && (
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: "#fff4e6",
                            borderRadius: 6,
                            padding: "2px 8px",
                            width: "fit-content",
                            marginTop: "auto",
                        }}
                    >
                        <Box
                            w={6}
                            h={6}
                            style={{
                                borderRadius: "50%",
                                background: "#f59f00",
                            }}
                        />

                        <Text size="xs" c="#f59f00">
                            Требует доработок
                        </Text>
                    </Box>
                )}
            </Stack>
        </Card>
    );
};
