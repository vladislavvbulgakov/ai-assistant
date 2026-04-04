# Этап 1 — Инициализация проекта

## Выполнено:

- Создан репозиторий
- Инициализирован проект (Vite + React + TypeScript)
- Подключены базовые стили (CSS reset + Roboto)
- Настроена архитектура проекта (FSD)

## Структура проекта:

src/
app/
pages/
adsList/
adView/
adEdit/
features/
entities/
shared/

## Принятые решения:

- Архитектура: Feature-Sliced Design (упрощённая)
- Стили: CSS Modules + global reset
- Нейминг папок: camelCase

- Реализован роутинг через react-router-dom

## Реализованные маршруты:

- "/" → страница списка объявлений
- "/ads/:id" → страница просмотра объявления
- "/ads/:id/edit" → страница редактирования

## Созданы страницы:

- pages/adsList
- pages/adView
- pages/adEdit

# Этап 3.1 — API слой и типизация

## Выполнено:

### Архитектура (FSD)

- entities/ad разбит на слои:
    - api/ — функции запросов (getAds, getAdById, updateAd)
    - hooks/ — React Query хуки (useAds, useAd)
    - model/ — типы (types.ts)

- shared/api/httpService.ts — общий HTTP клиент (axios)

---

### Типизация

Созданы типы:

- AdPreview — для списка объявлений
- AdsResponse — ответ списка
- Ad — полный объект объявления
- ItemUpdateInput — тип для обновления объявления

Типы соответствуют реальному backend (а не только ТЗ)

---

### API слой

Реализованы:

- getAds
- getAdById
- updateAd

---

### React Query

Реализованы хуки:

- useAds
- useAd

Используется:

- queryKey
- enabled для условных запросов

---

### Важные решения

- httpService сделан универсальным (generic)
- типизация вынесена в entities/model
- разделены DTO:
    - GET → Ad / AdPreview
    - PUT → ItemUpdateInput
