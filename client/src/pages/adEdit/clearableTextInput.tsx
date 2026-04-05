import { TextInput, ActionIcon } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import type { TextInputProps } from "@mantine/core";

interface Props extends TextInputProps {
    value: string;
    onClear: () => void;
}

const ClearableTextInput = ({ value, onClear, ...props }: Props) => {
    return (
        <TextInput
            {...props}
            value={value}
            rightSectionWidth={32}
            rightSection={
                value ? (
                    <ActionIcon size="sm" variant="subtle" onClick={onClear}>
                        <IconX size={14} />
                    </ActionIcon>
                ) : null
            }
            rightSectionPointerEvents="all"
        />
    );
};

export default ClearableTextInput;
