import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface Props {
    value: string | undefined;
    onChange: (value: string) => void;
}
const SearchInput = ({ value, onChange }: Props) => {
    return (
        <TextInput
            style={{ flex: 1 }}
            placeholder="Найти объявление..."
            // mr="xs"
            variant="filled"
            rightSection={<IconSearch size={16} />}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    );
};

export default SearchInput;
