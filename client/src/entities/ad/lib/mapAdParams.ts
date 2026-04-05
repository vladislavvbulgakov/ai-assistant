import type {
    Ad,
    AutoItemParams,
    RealEstateItemParams,
    ElectronicsItemParams,
} from "../model/types";

export const mapAdParams = (ad: Ad): Record<string, string> => {
    switch (ad.category) {
        case "auto": {
            const p = ad.params as AutoItemParams;

            return {
                Бренд: p.brand ?? "-",
                Модель: p.model ?? "-",
                "Год выпуска": p.yearOfManufacture?.toString() ?? "-",
                "Коробка передач": p.transmission ?? "-",
                Пробег: p.mileage?.toString() ?? "-",
                "Мощность двигателя": p.enginePower?.toString() ?? "-",
            };
        }

        case "real_estate": {
            const p = ad.params as RealEstateItemParams;

            return {
                "Тип недвижимости": p.type ?? "-",
                Адрес: p.address ?? "-",
                Площадь: p.area?.toString() ?? "-",
                Этаж: p.floor?.toString() ?? "-",
            };
        }

        case "electronics": {
            const p = ad.params as ElectronicsItemParams;

            return {
                Тип: p.type ?? "-",
                Бренд: p.brand ?? "-",
                Модель: p.model ?? "-",
                Состояние: p.condition ?? "-",
                Цвет: p.color ?? "-",
            };
        }
    }
};
