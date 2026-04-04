import { IconLayoutGrid, IconList } from "@tabler/icons-react";
import styles from "./switchButtons.module.css";
import { ActionIcon } from "@mantine/core";
const SwitchButtons = () => {
    return (
        <div className={styles.switcher}>
            <ActionIcon variant="subtle">
                <IconLayoutGrid size={16} />
            </ActionIcon>

            <ActionIcon variant="subtle">
                <IconList size={16} />
            </ActionIcon>
        </div>
    );
};

export default SwitchButtons;
