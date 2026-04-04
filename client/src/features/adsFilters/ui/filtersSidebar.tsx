import {
    Paper,
    Stack,
    Text,
    Checkbox,
    Switch,
    Button,
    Group,
    Collapse,
    ActionIcon,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { CATEGORY_OPTIONS } from "@/entities/ad/lib/category";

const FiltersSidebar = () => {
    const [isOpened, setIsOpened] = useState(true);

    return (
        <Stack gap="xs">
            <Paper withBorder radius="md" p="md">
                <Stack gap="md">
                    <Text fw={600}>Фильтры</Text>

                    <Stack gap={6}>
                        <Group
                            justify="space-between"
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsOpened((o) => !o)}
                        >
                            <Text size="sm" fw={500}>
                                Категория
                            </Text>

                            <ActionIcon
                                variant="subtle"
                                size="sm"
                                color="black"
                            >
                                <IconChevronDown
                                    size={16}
                                    style={{
                                        transform: isOpened
                                            ? "rotate(180deg)"
                                            : "rotate(0deg)",
                                        transition: "0.2s",
                                    }}
                                />
                            </ActionIcon>
                        </Group>

                        <Collapse expanded={isOpened}>
                            <Stack gap={6} mt="xs">
                                {CATEGORY_OPTIONS.map((cat) => (
                                    <Checkbox
                                        key={cat.value}
                                        size="sm"
                                        label={cat.label}
                                    />
                                ))}
                            </Stack>
                        </Collapse>
                    </Stack>

                    <Group justify="space-between">
                        <Switch
                            size="sm"
                            labelPosition="left"
                            label="Только требующие доработок"
                            fw={600}
                        />
                    </Group>
                </Stack>
            </Paper>

            <Button variant="subtle" color="gray" fullWidth bg={"white"}>
                <Text size="sm" variant="text">
                    {" "}
                    Сбросить фильтры
                </Text>
            </Button>
        </Stack>
    );
};

export default FiltersSidebar;
