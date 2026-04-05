import { Group, Stack, Text, Title } from "@mantine/core";
import RevisionAlert from "./RevisionAlert";
import AdsGallery from "./adsGallery";
import main from "@/assets/main.png";
import cover from "@/assets/cover.png";
interface Props {
    params: Record<string, string>;
}

const AdsViewDetails = ({ params }: Props) => {
    return (
        <Group align="flex-start" gap="xl" wrap="nowrap" mt={18}>
            <AdsGallery images={[main, cover, cover]} />

            <Stack gap="md" style={{ flex: 1 }}>
                <RevisionAlert />

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
