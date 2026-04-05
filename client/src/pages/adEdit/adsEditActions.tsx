import { Group, Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
    onSubmit: () => void;
    isPending: boolean;
}

const AdsEditActions = ({ onSubmit, isPending }: Props) => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <Group>
            <Button onClick={onSubmit} loading={isPending}>
                Сохранить
            </Button>

            <Button variant="default" onClick={() => navigate(`/ads/${id}`)}>
                Отменить
            </Button>
        </Group>
    );
};

export default AdsEditActions;
