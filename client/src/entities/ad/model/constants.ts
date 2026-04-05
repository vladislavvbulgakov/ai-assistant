import type { Category } from "./types";

export const CATEGORIES: { value: Category; label: string }[] = [
    { value: "auto", label: "Авто" },
    { value: "electronics", label: "Электроника" },
    { value: "real_estate", label: "Недвижимость" },
];
export const TRANSMISSION_OPTIONS = [
    { value: "automatic", label: "Автомат" },
    { value: "manual", label: "Механика" },
];

export const REAL_ESTATE_TYPE_OPTIONS = [
    { value: "flat", label: "Квартира" },
    { value: "house", label: "Дом" },
    { value: "room", label: "Комната" },
];

export const ELECTRONICS_TYPE_OPTIONS = [
    { value: "phone", label: "Телефон" },
    { value: "laptop", label: "Ноутбук" },
    { value: "misc", label: "Другое" },
];

export const CONDITION_OPTIONS = [
    { value: "new", label: "Новый" },
    { value: "used", label: "Б/У" },
];
