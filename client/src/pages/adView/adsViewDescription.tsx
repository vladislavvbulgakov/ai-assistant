import { Title, Text } from "@mantine/core";

interface Props {
    description?: string;
}

const AdsViewDescription = ({ description }: Props) => {
    return (
        <div>
            <Title order={4}>Описание</Title>

            <Text mt="sm">{description || "Отсутствует"}</Text>
        </div>
    );
};

export default AdsViewDescription;
