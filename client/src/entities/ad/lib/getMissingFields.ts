import type {
    Ad,
    AutoItemParams,
    RealEstateItemParams,
    ElectronicsItemParams,
} from "../model/types";

export const getMissingFields = (ad: Ad): string[] => {
    const fields: string[] = [];

    if (!ad.description) fields.push("Описание");
    if (!ad.price) fields.push("Цена");

    switch (ad.category) {
        case "auto": {
            const p = ad.params as AutoItemParams;

            if (!p.brand) fields.push("Бренд");
            if (!p.model) fields.push("Модель");
            if (!p.yearOfManufacture) fields.push("Год выпуска");
            if (!p.transmission) fields.push("Коробка передач");
            if (!p.mileage) fields.push("Пробег");
            if (!p.enginePower) fields.push("Мощность двигателя");

            break;
        }

        case "real_estate": {
            const p = ad.params as RealEstateItemParams;

            if (!p.type) fields.push("Тип недвижимости");
            if (!p.address) fields.push("Адрес");
            if (!p.area) fields.push("Площадь");
            if (!p.floor) fields.push("Этаж");

            break;
        }

        case "electronics": {
            const p = ad.params as ElectronicsItemParams;

            if (!p.type) fields.push("Тип");
            if (!p.brand) fields.push("Бренд");
            if (!p.model) fields.push("Модель");
            if (!p.condition) fields.push("Состояние");
            if (!p.color) fields.push("Цвет");

            break;
        }
    }

    return fields;
};
