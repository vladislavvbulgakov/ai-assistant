import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchInput = () => {
    return (
        <TextInput
            style={{ flex: 1 }}
            placeholder="Найти объявление..."
            // mr="xs"
            variant="filled"
            rightSection={<IconSearch size={16} />}
        />
    );
};

export default SearchInput;
