import { Group } from "@mantine/core";

import styles from "./adsToolbar.module.css";
import SearchInput from "@/features/adsSearch/ui/searchInput";
import SwitchButtons from "@/features/adsSwitcher/ui/switchButtons";
import SortSelect from "@/features/adsSort/ui/sortSelect";
const AdsToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <Group justify="space-between" align="center">
                <SearchInput />
                <SwitchButtons />
                <SortSelect />
            </Group>
        </div>
    );
};

export default AdsToolbar;
