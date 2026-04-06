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

### 2. Установка зависимостей backend 

```bash
cd server
npm install
```

---

### 3. Запуск backend

```bash
npm start
```

---

### 4. Запуск frontend

```bash
cd ..
cd client
npm install
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
ollama pull llama3
```

---

### 3. Запустить Ollama

```bash
ollama serve
```

---

### 4. API endpoint

```
POST http://localhost:11434/api/generate
```


