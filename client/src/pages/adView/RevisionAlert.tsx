import { Paper, Group, Text, Stack, ThemeIcon } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

const RevisionAlert = () => {
    return (
        <Paper
            p="md"
            radius="md"
            style={{
                background: "#f5f0e6",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
        >
            <Group align="flex-start" gap="sm">
                <ThemeIcon color="orange" variant="light" radius="xl" size="md">
                    <IconAlertCircle size={16} />
                </ThemeIcon>

                <Stack gap={4}>
                    <Text fw={600}>Требуются доработки</Text>

                    <Text size="sm">У объявления не заполнены поля:</Text>

                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                        <li>Цвет</li>
                        <li>Состояние</li>
                    </ul>
                </Stack>
            </Group>
        </Paper>
    );
};

export default RevisionAlert;
