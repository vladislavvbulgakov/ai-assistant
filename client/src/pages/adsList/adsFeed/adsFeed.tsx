import { Group, Box, Stack } from "@mantine/core";
import AdsGrid from "../adsGrid";
import FiltersSidebar from "@/features/adsFilters/ui/filtersSidebar";
import { Pagination } from "@mantine/core";
import type { AdPreview } from "@/entities/ad/model/types";
import styles from "./adsFeed.module.css";
interface Props {
    ads: AdPreview[];
}

const AdsFeed = ({ ads }: Props) => {
    return (
        <Group
            align="flex-start"
            gap="md"
            wrap="nowrap"
            className={styles.wrapper}
        >
            <Box w={260} style={{ flexShrink: 0 }}>
                <FiltersSidebar />
            </Box>

            <Box style={{ flex: 1 }}>
                <Stack gap="md">
                    <AdsGrid ads={ads} />

                    <Box style={{ display: "flex", justifyContent: "left" }}>
                        <Pagination total={5} value={1} onChange={() => {}} />
                    </Box>
                </Stack>
            </Box>
        </Group>
    );
};

export default AdsFeed;
