import { CATEGORIES } from "@/entities/ad/model/constants";
import type {
    Category,
    FormErrors,
    ItemUpdateInput,
    TouchedFields,
} from "@/entities/ad/model/types";

import {
    Stack,
    Select,
    Textarea,
    Divider,
    Text,
    Group,
    Box,
} from "@mantine/core";

import AdParamsFields from "@/pages/adEdit/adParamsFields";
import ClearableTextInput from "@/pages/adEdit/clearableTextInput";
import ClearableNumberInput from "@/pages/adEdit/clearableNumberInput";
import SuggestPriceButton from "@/features/adsEdit/ui/suggestPriceButton";
import DescriptionButton from "@/features/adsEdit/ui/descriptionButton";
import type { AiState } from "@/features/adsEdit/ui/aiTooltip";
import AiTooltip from "@/features/adsEdit/ui/aiTooltip";

interface Props {
    form: ItemUpdateInput;
    setForm: React.Dispatch<React.SetStateAction<ItemUpdateInput>>;

    errors: FormErrors;

    touched: TouchedFields;
    setTouched: React.Dispatch<React.SetStateAction<TouchedFields>>;

    validateField: (field: keyof FormErrors, value: unknown) => void;

    handleSuggestPrice: () => void;
    handleDescription: () => void;

    priceAiState: AiState;
    priceResult: string;
    setPriceAiState: React.Dispatch<React.SetStateAction<AiState>>;

    descAiState: AiState;
    descResult: string;
    setDescAiState: React.Dispatch<React.SetStateAction<AiState>>;
}

const AdsEditFields = ({
    form,
    setForm,
    errors,
    touched,
    setTouched,
    validateField,
    handleDescription,
    handleSuggestPrice,

    priceAiState,
    priceResult,
    setPriceAiState,

    descAiState,
    descResult,
    setDescAiState,
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
                <Group align="flex-end" gap="sm">
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

                    <Box pos="relative">
                        <SuggestPriceButton
                            onClick={handleSuggestPrice}
                            loading={priceAiState === "loading"}
                        />

                        <Box
                            pos="absolute"
                            top={36}
                            left={0}
                            w={300}
                            style={{ zIndex: 1000 }}
                        >
                            <AiTooltip
                                state={priceAiState}
                                result={priceResult}
                                onClose={() => setPriceAiState("idle")}
                                onRetry={handleSuggestPrice}
                                onApply={() => {
                                    const numbers =
                                        priceResult
                                            .match(/\d+/g)
                                            ?.map(Number) || [];

                                    let price;

                                    if (numbers.length >= 2) {
                                        price = Math.round(
                                            (numbers[0] + numbers[1]) / 2,
                                        );
                                    } else {
                                        price = numbers[0];
                                    }

                                    if (!isNaN(price)) {
                                        setForm((prev) => ({
                                            ...prev,
                                            price,
                                        }));
                                    }

                                    setPriceAiState("idle");
                                }}
                            />
                        </Box>
                    </Box>
                </Group>
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
            <Stack maw={450}>
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
                <Box pos="relative">
                    <DescriptionButton
                        hasDescription={!!form.description}
                        onClick={handleDescription}
                        loading={descAiState === "loading"}
                    />

                    <Box
                        pos="absolute"
                        top={36}
                        left={0}
                        w={320}
                        style={{ zIndex: 1000 }}
                    >
                        <AiTooltip
                            state={descAiState}
                            result={descResult}
                            onClose={() => setDescAiState("idle")}
                            onRetry={handleDescription}
                            onApply={() => {
                                setForm((prev) => ({
                                    ...prev,
                                    description: descResult,
                                }));
                                setDescAiState("idle");
                            }}
                        />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default AdsEditFields;
