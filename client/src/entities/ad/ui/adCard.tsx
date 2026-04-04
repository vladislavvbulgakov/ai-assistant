import { Card, Image, Text, Badge, Stack, Box } from "@mantine/core";
import cover from "@/assets/cover.png";
import type { AdPreview } from "../model/types";

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
            h="100%"
            miw={180}
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
                        <Text size="xs" tt={"capitalize"} p={4}>
                            {categoryMap[category]}
                        </Text>
                    </Badge>
                </Box>
            </Card.Section>

            <Stack gap={8} p="sm" style={{ flex: 1 }}>
                <Text size="sm" fw={400} lineClamp={2} mt={5}>
                    {title}
                </Text>

                <Text size="sm" c="dimmed" fw={600} mt="auto">
                    {price.toLocaleString("ru-RU")} ₽
                </Text>
            </Stack>
        </Card>
    );
};
