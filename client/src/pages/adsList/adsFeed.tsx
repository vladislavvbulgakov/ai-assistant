import { Group, Box } from "@mantine/core";
import AdsGrid from "./adsGrid";
import type { AdPreview } from "@/entities/ad/model/types";

interface Props {
    ads: AdPreview[];
}

const AdsFeed = ({ ads }: Props) => {
    return (
        <Group align="flex-start" gap="lg" wrap="nowrap">
            <Box
                w={260}
                h={300}
                bg="white"
                style={{
                    borderRadius: 8,
                    border: "1px solid #e9ecef",
                }}
            />

            <Box style={{ flex: 1 }}>
                <AdsGrid ads={ads} />
            </Box>
        </Group>
    );
};

export default AdsFeed;
