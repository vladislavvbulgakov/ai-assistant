import { useEffect, useState } from "react";
import { Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import type {
    Ad,
    FormErrors,
    ItemUpdateInput,
    TouchedFields,
} from "@/entities/ad/model/types";
import AdsEditActions from "./adsEditActions";
import AdsEditFields from "./adsEditFields";
import { mapAdToForm } from "@/entities/ad/lib/mapAdToForm";
import { useUpdateAd } from "@/entities/ad/hooks/useUpdateAd";
import { toast } from "react-toastify";
import {
    buildDescriptionPrompt,
    buildPricePrompt,
    generateWithOllama,
} from "@/shared/api/ollama";
import type { AiState } from "@/features/adsEdit/ui/aiTooltip";

interface Props {
    ad: Ad;
}

const getStorageKey = (id: string) => `ad-edit-${id}`;

const AdsEditForm = ({ ad }: Props) => {
    const navigate = useNavigate();
    const { mutateAsync, isPending } = useUpdateAd();
    const [priceAiState, setPriceAiState] = useState<AiState>("idle");
    const [priceResult, setPriceResult] = useState("");

    const [descAiState, setDescAiState] = useState<AiState>("idle");
    const [descResult, setDescResult] = useState("");
    const [form, setForm] = useState<ItemUpdateInput>(() => {
        try {
            const saved = localStorage.getItem(getStorageKey(String(ad.id)));
            return saved ? JSON.parse(saved) : mapAdToForm(ad);
        } catch {
            return mapAdToForm(ad);
        }
    });

    const [touched, setTouched] = useState<TouchedFields>({});
    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        localStorage.setItem(
            getStorageKey(String(ad.id)),
            JSON.stringify(form),
        );
    }, [form, ad.id]);

    const validateField = (field: keyof FormErrors, value: unknown) => {
        let error: string | undefined;

        if (field === "title") {
            const v = value as string;

            if (!v.trim()) {
                error = "Название должно быть заполнено";
            }
        }

        if (field === "price") {
            const v = value as number;

            if (!v || v <= 0) {
                error = "Укажите корректную цену";
            }
        }

        if (field === "category") {
            if (!value) {
                error = "Выберите категорию";
            }
        }

        setErrors((prev) => ({
            ...prev,
            [field]: error,
        }));
    };

    const validateAll = () => {
        const newErrors: FormErrors = {};

        if (!form.title.trim()) {
            newErrors.title = "Название должно быть заполнено";
        }

        if (!form.price || form.price <= 0) {
            newErrors.price = "Укажите корректную цену";
        }

        if (!form.category) {
            newErrors.category = "Выберите категорию";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateAll()) return;

        const promise = mutateAsync({
            id: String(ad.id),
            data: form,
        });

        toast.promise(promise, {
            pending: "Сохраняем...",
            success: "Изменения сохранены",
            error: "Ошибка сохранения",
        });

        try {
            await promise;

            localStorage.removeItem(getStorageKey(String(ad.id)));
            navigate(`/ads/${ad.id}`);
        } catch (error) {
            console.error(error);
        }
    };
    const handleSuggestPrice = async () => {
        setPriceAiState("loading");

        try {
            const prompt = buildPricePrompt(form);
            const result = await generateWithOllama(prompt);

            setPriceResult(result);
            setPriceAiState("success");
        } catch (e) {
            console.error(e);
            setPriceAiState("error");
        }
    };
    const handleDescription = async () => {
        setDescAiState("loading");

        try {
            const prompt = buildDescriptionPrompt(form);
            const result = await generateWithOllama(prompt);

            setDescResult(result);
            setDescAiState("success");
        } catch (e) {
            console.error(e);
            setDescAiState("error");
        }
    };
    return (
        <Stack gap="lg">
            <AdsEditFields
                form={form}
                setForm={setForm}
                errors={errors}
                touched={touched}
                setTouched={setTouched}
                validateField={validateField}
                handleSuggestPrice={handleSuggestPrice}
                handleDescription={handleDescription}
                priceAiState={priceAiState}
                priceResult={priceResult}
                setPriceAiState={setPriceAiState}
                descAiState={descAiState}
                descResult={descResult}
                setDescAiState={setDescAiState}
            />

            <AdsEditActions onSubmit={handleSubmit} isPending={isPending} />
        </Stack>
    );
};

export default AdsEditForm;
