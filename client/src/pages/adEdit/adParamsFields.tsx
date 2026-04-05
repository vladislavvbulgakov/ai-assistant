import { Select } from "@mantine/core";

import type {
    Category,
    AutoItemParams,
    RealEstateItemParams,
    ElectronicsItemParams,
} from "@/entities/ad/model/types";

import {
    TRANSMISSION_OPTIONS,
    REAL_ESTATE_TYPE_OPTIONS,
    ELECTRONICS_TYPE_OPTIONS,
    CONDITION_OPTIONS,
} from "@/entities/ad/model/constants";

import ClearableTextInput from "./clearableTextInput";
import ClearableNumberInput from "./clearableNumberInput";
import isEmpty from "@/shared/lib/isEmpty";

type Params =
    | Partial<AutoItemParams>
    | Partial<RealEstateItemParams>
    | Partial<ElectronicsItemParams>;

interface Props {
    category: Category;
    params: Params;
    onChange: (key: string, value: unknown) => void;
}

const AdParamsFields = ({ category, params, onChange }: Props) => {
    switch (category) {
        case "auto": {
            const p = params as Partial<AutoItemParams>;

            return (
                <>
                    <ClearableTextInput
                        label="Бренд"
                        value={p.brand || ""}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.brand)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            onChange("brand", value);
                        }}
                        onClear={() => onChange("brand", "")}
                    />

                    <ClearableTextInput
                        label="Модель"
                        value={p.model || ""}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.model)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(e) => {
                            const value = e.currentTarget.value;
                            onChange("model", value);
                        }}
                        onClear={() => onChange("model", "")}
                    />

                    <ClearableNumberInput
                        label="Год выпуска"
                        value={p.yearOfManufacture || 0}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.yearOfManufacture)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) =>
                            onChange(
                                "yearOfManufacture",
                                v !== "" ? Number(v) : undefined,
                            )
                        }
                        onClear={() => onChange("yearOfManufacture", undefined)}
                    />

                    <Select
                        label="Коробка передач"
                        value={p.transmission}
                        data={TRANSMISSION_OPTIONS}
                        styles={{
                            input: {
                                borderColor: !p.transmission
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) =>
                            onChange("transmission", v ?? undefined)
                        }
                    />

                    <ClearableNumberInput
                        label="Пробег"
                        value={p.mileage || 0}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.mileage)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) =>
                            onChange(
                                "mileage",
                                v !== "" ? Number(v) : undefined,
                            )
                        }
                        onClear={() => onChange("mileage", undefined)}
                    />

                    <ClearableNumberInput
                        label="Мощность двигателя (л.с.)"
                        value={p.enginePower || 0}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.enginePower)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) =>
                            onChange(
                                "enginePower",
                                v !== "" ? Number(v) : undefined,
                            )
                        }
                        onClear={() => onChange("enginePower", undefined)}
                    />
                </>
            );
        }

        case "real_estate": {
            const p = params as Partial<RealEstateItemParams>;

            return (
                <>
                    <Select
                        label="Тип недвижимости"
                        value={p.type}
                        data={REAL_ESTATE_TYPE_OPTIONS}
                        onChange={(v) => onChange("type", v ?? undefined)}
                        styles={{
                            input: {
                                borderColor: !p.type ? "#f59f00" : undefined,
                            },
                        }}
                    />

                    <ClearableTextInput
                        label="Адрес"
                        value={p.address || ""}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.address)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(e) => {
                            const value = e.currentTarget.value;
                            onChange("address", value);
                        }}
                        onClear={() => onChange("address", "")}
                    />

                    <ClearableNumberInput
                        label="Площадь (м²)"
                        value={p.area || 0}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.area)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) =>
                            onChange("area", v !== "" ? Number(v) : undefined)
                        }
                        onClear={() => onChange("area", undefined)}
                    />

                    <ClearableNumberInput
                        label="Этаж"
                        value={p.floor || 0}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.floor)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) =>
                            onChange("floor", v !== "" ? Number(v) : undefined)
                        }
                        onClear={() => onChange("floor", undefined)}
                    />
                </>
            );
        }

        case "electronics": {
            const p = params as Partial<ElectronicsItemParams>;

            return (
                <>
                    <Select
                        label="Тип"
                        value={p.type}
                        data={ELECTRONICS_TYPE_OPTIONS}
                        onChange={(v) => onChange("type", v ?? undefined)}
                        styles={{
                            input: {
                                borderColor: !p.type ? "#f59f00" : undefined,
                            },
                        }}
                    />

                    <ClearableTextInput
                        label="Бренд"
                        styles={{
                            input: {
                                borderColor: isEmpty(p.brand)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        value={p.brand || ""}
                        onChange={(e) => {
                            const value = e.currentTarget.value;
                            onChange("brand", value);
                        }}
                        onClear={() => onChange("brand", "")}
                    />

                    <ClearableTextInput
                        label="Модель"
                        styles={{
                            input: {
                                borderColor: isEmpty(p.model)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        value={p.model || ""}
                        onChange={(e) => {
                            const value = e.currentTarget.value;
                            onChange("model", value);
                        }}
                        onClear={() => onChange("model", "")}
                    />

                    <ClearableTextInput
                        label="Цвет"
                        value={p.color || ""}
                        styles={{
                            input: {
                                borderColor: isEmpty(p.color)
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(e) => {
                            const value = e.currentTarget.value;
                            onChange("color", value);
                        }}
                        onClear={() => onChange("color", "")}
                    />

                    <Select
                        label="Состояние"
                        value={p.condition}
                        data={CONDITION_OPTIONS}
                        styles={{
                            input: {
                                borderColor: !p.condition
                                    ? "#f59f00"
                                    : undefined,
                            },
                        }}
                        onChange={(v) => onChange("condition", v ?? undefined)}
                    />
                </>
            );
        }

        default:
            return null;
    }
};

export default AdParamsFields;
