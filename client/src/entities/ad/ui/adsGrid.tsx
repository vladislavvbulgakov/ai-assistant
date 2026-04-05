import type { AdPreview } from "@/entities/ad/model/types";
import { AdCard } from "@/entities/ad/ui/adCard";
import { SimpleGrid } from "@mantine/core";

interface Props {
    ads: AdPreview[] | undefined;
}
const AdsGrid = ({ ads }: Props) => {
    return (
        <SimpleGrid spacing="md" cols={{ base: 1, sm: 2, md: 3, lg: 5 }}>
            {ads?.map((ad) => (
                <AdCard ad={ad} key={ad.id} />
            ))}
        </SimpleGrid>
    );
};

export default AdsGrid;
