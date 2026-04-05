export type AiState = "idle" | "loading" | "success" | "error";

import { Paper, Text, Button, Group, Stack } from "@mantine/core";

interface Props {
    state: AiState;
    result?: string;

    onApply?: () => void;
    onClose?: () => void;
    onRetry?: () => void;
}

const AiTooltip = ({ state, result, onApply, onClose, onRetry }: Props) => {
    if (state === "idle") return null;

    if (state === "loading") {
        return (
            <Paper p="sm" radius="md">
                <Text size="sm" c="orange">
                    Выполняется запрос...
                </Text>
            </Paper>
        );
    }

    if (state === "error") {
        return (
            <Paper p="sm" radius="md" style={{ background: "#ffe3e3" }}>
                <Stack gap={6}>
                    <Text fw={500} c="red">
                        Произошла ошибка при запросе к AI
                    </Text>

                    <Text size="sm">
                        Попробуйте повторить запрос или закройте
                    </Text>

                    <Group>
                        <Button size="xs" variant="light" onClick={onClose}>
                            Закрыть
                        </Button>

                        <Button size="xs" color="orange" onClick={onRetry}>
                            Повторить
                        </Button>
                    </Group>
                </Stack>
            </Paper>
        );
    }

    return (
        <Paper
            p="sm"
            radius="md"
            style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                background: "white",
            }}
        >
            <Stack gap={6}>
                <Text size="sm" fw={500}>
                    Ответ AI:
                </Text>

                <Text size="sm" style={{ whiteSpace: "pre-wrap" }}>
                    {result}
                </Text>

                <Group>
                    <Button size="xs" onClick={onApply}>
                        Применить
                    </Button>

                    <Button size="xs" variant="default" onClick={onClose}>
                        Закрыть
                    </Button>
                </Group>
            </Stack>
        </Paper>
    );
};

export default AiTooltip;
