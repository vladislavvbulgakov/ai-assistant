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
import type { Category } from "@/entities/ad/model/types";
import { useState } from "react";
import { CATEGORIES } from "@/entities/ad/model/constants";
interface Filters {
    categories: Category[];
    needsRevision: boolean;
}

interface Props {
    filters: Filters;
    onChange: (filters: Filters) => void;
}
const FiltersSidebar = ({ filters, onChange }: Props) => {
    const [isOpened, setIsOpened] = useState(true);
    const handleCategoryChange = (category: Category) => {
        const isSelected = filters.categories.includes(category);

        const newCategories = isSelected
            ? filters.categories.filter((c) => c !== category)
            : [...filters.categories, category];

        onChange({
            ...filters,
            categories: newCategories,
        });
    };

    const handleReset = () => {
        onChange({
            categories: [],
            needsRevision: false,
        });
    };
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
                                {CATEGORIES.map((cat) => (
                                    <Checkbox
                                        key={cat.value}
                                        size="sm"
                                        label={cat.label}
                                        checked={filters.categories.includes(
                                            cat.value,
                                        )}
                                        onChange={() =>
                                            handleCategoryChange(cat.value)
                                        }
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
                            checked={filters.needsRevision}
                            onChange={(e) =>
                                onChange({
                                    ...filters,
                                    needsRevision: e.currentTarget.checked,
                                })
                            }
                        />
                    </Group>
                </Stack>
            </Paper>

            <Button
                variant="subtle"
                color="gray"
                fullWidth
                bg={"white"}
                onClick={handleReset}
            >
                <Text size="sm" variant="text">
                    {" "}
                    Сбросить фильтры
                </Text>
            </Button>
        </Stack>
    );
};

export default FiltersSidebar;
