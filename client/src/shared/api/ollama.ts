import type { ItemUpdateInput } from "@/entities/ad/model/types";

export const generateWithOllama = async (prompt: string) => {
    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "llama3",
            prompt,
            stream: false,
        }),
    });

    if (!res.ok) {
        throw new Error("Ollama request failed");
    }

    const data = await res.json();

    return data.response as string;
};
export const buildPricePrompt = (form: ItemUpdateInput) => {
    return `
Ты эксперт по оценке товаров.

Оцени рыночную цену в рублях для объявления:

Название: ${form.title}
Категория: ${form.category}
Описание: ${form.description}

Дай краткий ответ с диапазоном цен .
`;
};
export const buildDescriptionPrompt = (form: ItemUpdateInput) => {
    return `
Ты помогаешь писать объявления для русского маркетплейса.

Улучши описание:

${form.description || "Описание отсутствует"}

Сделай текст привлекательным и понятным.
`;
};
