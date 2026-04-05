import { Button } from "@mantine/core";
import { IconBulb } from "@tabler/icons-react";

interface Props {
    onClick?: () => void;
    loading?: boolean;
}

const SuggestPriceButton = ({ onClick, loading }: Props) => {
    return (
        <Button
            variant="light"
            color="orange"
            size="sm"
            leftSection={<IconBulb size={16} />}
            onClick={onClick}
            loading={loading}
            style={{ marginBottom: 2 }}
        >
            Узнать цену
        </Button>
    );
};
export default SuggestPriceButton;
