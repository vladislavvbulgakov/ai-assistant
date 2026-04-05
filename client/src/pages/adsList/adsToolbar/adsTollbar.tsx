import { Group } from "@mantine/core";

import styles from "./adsToolbar.module.css";
import SearchInput from "@/features/adsSearch/ui/searchInput";
import SwitchButtons from "@/features/adsSwitcher/ui/switchButtons";
import SortSelect from "@/features/adsSort/ui/sortSelect";
import type { Layout } from "@/entities/ad/model/types";
interface Props {
    search: string | undefined;
    setSearch: (value: string) => void;
    sort: string | null;
    setSort: (value: string | null) => void;
    layout: Layout;
    setLayout: (layout: Layout) => void;
}
const AdsToolbar = ({
    search,
    setSearch,
    sort,
    setSort,
    layout,
    setLayout,
}: Props) => {
    return (
        <div className={styles.toolbar}>
            <Group justify="space-between" align="center">
                <SearchInput value={search} onChange={setSearch} />
                <SwitchButtons layout={layout} setLayout={setLayout} />
                <SortSelect value={sort} onChange={setSort} />
            </Group>
        </div>
    );
};

export default AdsToolbar;
