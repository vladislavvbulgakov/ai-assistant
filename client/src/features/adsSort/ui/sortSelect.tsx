import { Select } from "@mantine/core";
import styles from "./sortSelect.module.css";
const SortSelect = () => {
    return (
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
    );
};

export default SortSelect;
