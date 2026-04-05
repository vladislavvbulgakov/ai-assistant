import { Select } from "@mantine/core";
import styles from "./sortSelect.module.css";
import { sortOptions } from "../model/sortOption";
interface Props {
    value: string | null;
    onChange: (value: string | null) => void;
}

const SortSelect = ({ value, onChange }: Props) => {
    return (
        <Select
            classNames={{
                input: styles.select,
            }}
            w={240}
            placeholder="По новизне (сначала новые)"
            value={value}
            data={sortOptions}
            onChange={onChange}
        />
    );
};

export default SortSelect;
