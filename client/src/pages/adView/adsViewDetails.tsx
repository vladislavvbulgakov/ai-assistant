import { Group, Stack, Text, Title } from "@mantine/core";
import RevisionAlert from "./RevisionAlert";
import AdsGallery from "./adsGallery";
import main from "@/assets/main.png";
import cover from "@/assets/cover.png";
import type { Ad } from "@/entities/ad/model/types";
interface Props {
    params: Record<string, string>;
    ad: Ad;
}

const AdsViewDetails = ({ params, ad }: Props) => {
    return (
        <Group align="flex-start" gap="xl" wrap="nowrap" mt={18}>
            <AdsGallery images={[main, cover, cover]} />

            <Stack gap="md" style={{ flex: 1 }}>
                <RevisionAlert ad={ad} />

                <div>
                    <Title order={4}>Характеристики</Title>

                    <Stack gap={6} mt="sm">
                        {Object.entries(params).map(([key, value]) => (
                            <Group
                                key={key}
                                justify="space-between"
                                style={{ maxWidth: 300 }}
                            >
                                <Text c="dimmed">{key}</Text>
                                <Text>{value}</Text>
                            </Group>
                        ))}
                    </Stack>
                </div>
            </Stack>
        </Group>
    );
};

export default AdsViewDetails;
