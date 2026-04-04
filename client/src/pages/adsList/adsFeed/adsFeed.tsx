import { Group, Box, Stack, Skeleton } from "@mantine/core";
import AdsGrid from "../adsGrid";
import FiltersSidebar from "@/features/adsFilters/ui/filtersSidebar";
import { Pagination } from "@mantine/core";
import type { AdPreview } from "@/entities/ad/model/types";
import styles from "./adsFeed.module.css";
interface Props {
    ads: AdPreview[] | undefined;
    isLoading: boolean;
    isError: boolean;
}

const AdsFeed = ({ ads, isLoading, isError }: Props) => {
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
                    {isLoading && (
                        <>
                            <Skeleton height={50} circle mb="xl" />
                            <Skeleton height={8} radius="xl" />
                            <Skeleton height={8} mt={6} radius="xl" />
                            <Skeleton
                                height={8}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </>
                    )}

                    {isError && <div>Ошибка загрузки</div>}

                    {!isLoading && !isError && <AdsGrid ads={ads} />}

                    <Box style={{ display: "flex", justifyContent: "left" }}>
                        {!isLoading && !isError && (
                            <Pagination total={5} value={1} />
                        )}
                    </Box>
                </Stack>
            </Box>
        </Group>
    );
};

export default AdsFeed;
