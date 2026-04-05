import { Stack } from "@mantine/core";
import type { AdPreview } from "../model/types";
import { AdListItem } from "./adListItem";

interface Props {
    ads: AdPreview[] | undefined;
}

const AdsList = ({ ads }: Props) => {
    return (
        <Stack gap="sm">
            {ads?.map((ad) => (
                <AdListItem key={ad.id} ad={ad} />
            ))}
        </Stack>
    );
};

export default AdsList;
