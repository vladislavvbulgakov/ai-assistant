import { Group, Title, Text, Button } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    id: string | undefined;
}

const AdsViewHeader = ({ title, price, createdAt, updatedAt, id }: Props) => {
    const navigate = useNavigate();

    return (
        <Group justify="space-between" align="flex-start" mb={18}>
            <div>
                <Title order={2}>{title}</Title>

                <Button
                    mt="sm"
                    onClick={() => navigate(`/ads/${id}/edit`)}
                    rightSection={<IconPencil size={14} />}
                >
                    <Text fw={400} size="14">
                        Редактировать
                    </Text>
                </Button>
            </div>

            <div style={{ textAlign: "right" }}>
                <Title order={2} mb={10}>
                    {price.toLocaleString("ru-RU")} ₽
                </Title>

                <Text size="sm" c="dimmed">
                    Опубликовано: {new Date(createdAt).toLocaleString()}
                </Text>

                <Text size="sm" c="dimmed">
                    Отредактировано: {new Date(updatedAt).toLocaleString()}
                </Text>
            </div>
        </Group>
    );
};

export default AdsViewHeader;
