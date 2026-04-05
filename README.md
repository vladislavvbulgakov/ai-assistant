# AI-Ассистент

Веб-приложение для просмотра и редактирования объявлений с поддержкой AI-функций (генерация описания и оценка цены).


## 🛠️ Стек технологий

* React + TypeScript
* Vite
* Mantine (UI)
* Axios
* React Router
* TanStack Query
* React Toastify

### AI

* Ollama (локальная LLM)
* Модель: `llama3`

---


## ⚙️ Установка и запуск

### 1. Клонирование проекта

```bash
git clone <repo-url>
cd <project>
```

---

### 2. Установка зависимостей

```bash
npm install
```

---

### 3. Запуск backend

```bash
npm run server
```

Сервер будет доступен на:

```
http://localhost:8080
```

---

### 4. Запуск frontend

```bash
npm run dev
```

Приложение:

```
http://localhost:5173
```

---

## Настройка AI (Ollama)

### 1. Установить Ollama

https://ollama.com/download

---

### 2. Скачать модель

```bash
ollama serve
```

---

### 3. Запустить Ollama

```bash
OLLAMA_ORIGINS=* ollama serve
```

---

### 4. API endpoint

```
POST http://localhost:11434/api/generate
```


