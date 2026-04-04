import { TextInput, Select, Group, ActionIcon } from "@mantine/core";
import { IconSearch, IconLayoutGrid, IconList } from "@tabler/icons-react";
import styles from "./adsToolbar.module.css";
const AdsToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <Group justify="space-between" align="center">
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Найти объявление..."
                    // mr="xs"
                    variant="filled"
                    rightSection={<IconSearch size={16} />}
                />
                <div className={styles.switcher}>
                    <ActionIcon variant="subtle">
                        <IconLayoutGrid size={16} />
                    </ActionIcon>

                    <ActionIcon variant="subtle">
                        <IconList size={16} />
                    </ActionIcon>
                </div>
                <Select
                    classNames={{
                        input: styles.select,
                    }}
                    w={240}
                    placeholder="По новизне (сначала новые)"
                    data={[
                        {
                            value: "createdAt_desc",
                            label: "По новизне (сначала новые)",
                        },
                        {
                            value: "createdAt_asc",
                            label: "По новизне (старые)",
                        },
                        { value: "price_asc", label: "Сначала дешевле" },
                        { value: "price_desc", label: "Сначала дороже" },
                    ]}
                />
            </Group>
        </div>
    );
};

export default AdsToolbar;
