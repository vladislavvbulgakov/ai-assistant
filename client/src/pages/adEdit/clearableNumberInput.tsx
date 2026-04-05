import { NumberInput, ActionIcon } from "@mantine/core";
import type { NumberInputProps } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

interface Props extends NumberInputProps {
    value: number;
    onClear: () => void;
}

const ClearableNumberInput = ({ value, onClear, ...props }: Props) => {
    return (
        <NumberInput
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
            hideControls
        />
    );
};

export default ClearableNumberInput;
