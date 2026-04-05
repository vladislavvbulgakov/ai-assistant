import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const AdsViewBackButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            variant="subtle"
            onClick={() => navigate("/ads")}
            style={{ alignSelf: "flex-start" }}
        >
            ← Назад к списку
        </Button>
    );
};

export default AdsViewBackButton;
