import { Image, Box, Group } from "@mantine/core";
import main from "@/assets/main.png";
interface Props {
    images?: string[];
}

const AdsGallery = ({ images }: Props) => {
    const hasImages = images && images.length > 0;

    return (
        <Box w={480}>
            <Image
                src={hasImages ? images[0] : undefined}
                h={320}
                radius="md"
                fit="cover"
                fallbackSrc={main}
            />

            {hasImages && images.length > 1 && (
                <Group
                    mt="sm"
                    gap="sm"
                    wrap="nowrap"
                    style={{
                        overflowX: "auto",
                        width: "100%",
                    }}
                >
                    {images.slice(1).map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            w={155}
                            h={60}
                            radius="sm"
                            fit="cover"
                            style={{
                                flexShrink: 0,
                            }}
                        />
                    ))}
                </Group>
            )}
        </Box>
    );
};

export default AdsGallery;
