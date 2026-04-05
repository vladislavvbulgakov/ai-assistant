import { CATEGORIES } from "@/entities/ad/model/constants";
import type {
    Category,
    FormErrors,
    ItemUpdateInput,
    TouchedFields,
} from "@/entities/ad/model/types";

import { Stack, Select, Textarea, Divider, Text } from "@mantine/core";

import AdParamsFields from "@/features/adsEdit/ui/adParamsFields";
import ClearableTextInput from "@/features/adsEdit/ui/clearableTextInput";
import ClearableNumberInput from "@/features/adsEdit/ui/clearableNumberInput";

interface Props {
    form: ItemUpdateInput;
    setForm: React.Dispatch<React.SetStateAction<ItemUpdateInput>>;

    errors: FormErrors;

    touched: TouchedFields;
    setTouched: React.Dispatch<React.SetStateAction<TouchedFields>>;

    validateField: (field: keyof FormErrors, value: unknown) => void;
}

const AdsEditFields = ({
    form,
    setForm,
    errors,
    touched,
    setTouched,
    validateField,
}: Props) => {
    const handleParamChange = (key: string, value: unknown) => {
        setForm((prev) => ({
            ...prev,
            params: {
                ...prev.params,
                [key]: value,
            },
        }));
    };

    return (
        <Stack gap="md">
            <Stack maw={450}>
                <Select
                    label="Категория"
                    data={CATEGORIES}
                    value={form.category}
                    error={touched.category ? errors.category : undefined}
                    onBlur={() =>
                        setTouched((prev) => ({ ...prev, category: true }))
                    }
                    onChange={(value) => {
                        setForm({
                            category: value as Category,
                            title: "",
                            price: 0,
                            description: "",
                            params: {},
                        });

                        validateField("category", value);
                    }}
                    required
                />
            </Stack>

            <Divider />

            <Stack maw={450}>
                <ClearableTextInput
                    label="Название"
                    value={form.title}
                    error={touched.title ? errors.title : undefined}
                    onBlur={() =>
                        setTouched((prev) => ({ ...prev, title: true }))
                    }
                    onChange={(e) => {
                        const value = e.target.value;

                        setForm((prev) => ({
                            ...prev,
                            title: value,
                        }));

                        validateField("title", value);
                    }}
                    onClear={() => {
                        setForm((prev) => ({ ...prev, title: "" }));
                        validateField("title", "");
                    }}
                    required
                />
            </Stack>

            <Divider />

            <Stack maw={450}>
                <ClearableNumberInput
                    label="Цена"
                    value={form.price}
                    error={touched.price ? errors.price : undefined}
                    onBlur={() =>
                        setTouched((prev) => ({ ...prev, price: true }))
                    }
                    onChange={(v) => {
                        const value = Number(v) || 0;

                        setForm((prev) => ({
                            ...prev,
                            price: value,
                        }));

                        validateField("price", value);
                    }}
                    onClear={() => {
                        setForm((prev) => ({ ...prev, price: 0 }));
                        validateField("price", 0);
                    }}
                    required
                />
            </Stack>

            <Divider />

            <Stack maw={450}>
                <Text fw={600}>Характеристики</Text>

                <Stack gap="sm">
                    <AdParamsFields
                        category={form.category}
                        params={form.params}
                        onChange={handleParamChange}
                    />
                </Stack>
            </Stack>

            <Divider />

            <Textarea
                label="Описание"
                value={form.description}
                onChange={(e) => {
                    const value = e.currentTarget.value;

                    setForm((prev) => ({
                        ...prev,
                        description: value,
                    }));
                }}
                minRows={4}
                maxLength={1000}
                description={`${form.description?.length || 0} / 1000`}
            />
        </Stack>
    );
};

export default AdsEditFields;
