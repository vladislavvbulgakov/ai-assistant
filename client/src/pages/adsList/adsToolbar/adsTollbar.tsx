import { Group } from "@mantine/core";

import styles from "./adsToolbar.module.css";
import SearchInput from "@/features/adsSearch/ui/searchInput";
import SwitchButtons from "@/features/adsSwitcher/ui/switchButtons";
import SortSelect from "@/features/adsSort/ui/sortSelect";
interface Props {
    search: string | undefined;
    setSearch: (value: string) => void;
    sort: string | null;
    setSort: (value: string | null) => void;
}
const AdsToolbar = ({ search, setSearch, sort, setSort }: Props) => {
    return (
        <div className={styles.toolbar}>
            <Group justify="space-between" align="center">
                <SearchInput value={search} onChange={setSearch} />
                <SwitchButtons />
                <SortSelect value={sort} onChange={setSort} />
            </Group>
        </div>
    );
};

export default AdsToolbar;
