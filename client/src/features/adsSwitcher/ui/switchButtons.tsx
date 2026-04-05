import { IconLayoutGrid, IconList } from "@tabler/icons-react";
import styles from "./switchButtons.module.css";
import { ActionIcon } from "@mantine/core";
import type { Layout } from "@/entities/ad/model/types";
interface Props {
    layout: Layout;
    setLayout: (layout: Layout) => void;
}
const SwitchButtons = ({ layout, setLayout }: Props) => {
    return (
        <div className={styles.switcher}>
            <ActionIcon
                variant={layout === "grid" ? "filled" : "subtle"}
                onClick={() => setLayout("grid")}
            >
                <IconLayoutGrid size={16} />
            </ActionIcon>

            <ActionIcon
                variant={layout === "list" ? "filled" : "subtle"}
                onClick={() => setLayout("list")}
            >
                <IconList size={16} />
            </ActionIcon>
        </div>
    );
};

export default SwitchButtons;
