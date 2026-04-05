import { Button } from "@mantine/core";
import { IconBulb } from "@tabler/icons-react";

interface Props {
    hasDescription: boolean;
    onClick?: () => void;
    loading?: boolean;
}

const DescriptionButton = ({ hasDescription, onClick, loading }: Props) => {
    return (
        <Button
            variant="light"
            color="orange"
            size="sm"
            leftSection={<IconBulb size={16} />}
            onClick={onClick}
            loading={loading}
            w="fit-content"
        >
            {hasDescription ? "Улучшить описание" : "Придумать описание"}
        </Button>
    );
};

export default DescriptionButton;
