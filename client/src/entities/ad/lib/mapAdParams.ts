import type {
    Ad,
    AutoItemParams,
    RealEstateItemParams,
    ElectronicsItemParams,
} from "../model/types";
import {
    REAL_ESTATE_TYPE_OPTIONS,
    TRANSMISSION_OPTIONS,
    ELECTRONICS_TYPE_OPTIONS,
    CONDITION_OPTIONS,
} from "../model/constants";
const getLabel = (
    value: string | undefined,
    options: { value: string; label: string }[],
) => {
    return options.find((o) => o.value === value)?.label ?? "-";
};
export const mapAdParams = (ad: Ad): Record<string, string> => {
    switch (ad.category) {
        case "auto": {
            const p = ad.params as AutoItemParams;

            return {
                Бренд: p.brand ?? "-",
                Модель: p.model ?? "-",
                "Год выпуска": p.yearOfManufacture?.toString() ?? "-",
                "Коробка передач": getLabel(
                    p.transmission,
                    TRANSMISSION_OPTIONS,
                ),
                Пробег: p.mileage?.toString() ?? "-",
                "Мощность двигателя": p.enginePower?.toString() ?? "-",
            };
        }

        case "real_estate": {
            const p = ad.params as RealEstateItemParams;

            return {
                "Тип недвижимости": getLabel(p.type, REAL_ESTATE_TYPE_OPTIONS),
                Адрес: p.address ?? "-",
                Площадь: p.area?.toString() ?? "-",
                Этаж: p.floor?.toString() ?? "-",
            };
        }

        case "electronics": {
            const p = ad.params as ElectronicsItemParams;

            return {
                Тип: getLabel(p.type, ELECTRONICS_TYPE_OPTIONS),
                Бренд: p.brand ?? "-",
                Модель: p.model ?? "-",
                Состояние: getLabel(p.condition, CONDITION_OPTIONS),
                Цвет: p.color ?? "-",
            };
        }
    }
};
