import { Paper, Group, Text, Stack, ThemeIcon } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

import type { Ad } from "@/entities/ad/model/types";
import { getMissingFields } from "@/entities/ad/lib/getMissingFields";

interface Props {
    ad: Ad;
}

const RevisionAlert = ({ ad }: Props) => {
    const missingFields = getMissingFields(ad);

    if (missingFields.length === 0) return null;

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
                        {missingFields.map((field) => (
                            <li key={field}>
                                <Text size="sm">{field}</Text>
                            </li>
                        ))}
                    </ul>
                </Stack>
            </Group>
        </Paper>
    );
};

export default RevisionAlert;
