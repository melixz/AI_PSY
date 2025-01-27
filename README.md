# AI-Psy: Психологический помощник поддержки

<p align="center">
        <img src="https://github.com/melixz/AI_PSY/blob/main/GPT_Hack_Prototype.gif" alt="gif" />
</p>

## Описание проекта

**AI-Psy** — это интеллектуальный помощник для эмоциональной поддержки и психического благополучия, разработанный на базе искусственного интеллекта. Сервис предлагает пользователям поддерживающие беседы, стратегии преодоления трудностей и ресурсы по психическому здоровью в доступной и нетерапевтической форме. 

Проект ориентирован на помощь в ежедневном поддержании эмоционального состояния, включая:
- Начало новых сеансов бесед.
- Продолжение предыдущих сессий.
- Прохождение психологических тестов.
- Ведение дневника эмоций.
- Настройки и управление учетной записью.

## Технологии

- **Python 3.12+**
- **UV**: быстрый пакетный менеджер для Python.
- **FastAPI**: REST API и обработка запросов.
- **LangChain**: создание цепочек обработки данных для генерации контекста бесед.
- **OpenAI API**: интеграция с языковыми моделями для диалогов.
- **ChromaDB**: хранение и поиск информации.
- **Pydantic**: схемы данных и валидация.
- **Docker**: контейнеризация проекта.
- **Tailwind CSS**: стилизация фронтенда.
- **React + TypeScript**: разработка пользовательского интерфейса.

---

## Основные функции

### 1. **Чат-бот**
- Начало новой сессии с вопросом о состоянии пользователя.
- Специализированные сессии по направлениям психологии:
  - Когнитивно-поведенческая терапия (CBT).
  - Гештальт-терапия.
  - Психоанализ.
- Использование базы данных и промптов для точного формирования ответа.
- Продолжение предыдущих сессий.

### 2. **Психологические тесты**
- Выбор тестов, например:
  - Уровень стресса.
  - Эмоциональное состояние.
- Автоматическое сохранение результатов в "Дневник эмоций".

### 3. **Дневник эмоций**
- Ведение записей об эмоциональном состоянии.
- Сохранение и просмотр результатов тестов.

### 4. **Поиск**
- Поиск по ключевым словам в предыдущих беседах.

### 5. **Управление учетной записью**
- Регистрация и авторизация (с подтверждением по email).
- Изменение данных пользователя и учетной записи.
- Удаление аккаунта с полной очисткой данных.

---

## Текущие методы API

### Чат-бот

- **`POST /chat/ask`**: Задает вопрос виртуальному психологу.
  - **Параметры запроса**:
    - `question` (строка): Вопрос пользователя.
  - **Ответ**:
    - `answer` (строка): Ответ чат-бота.
- **`POST /chat/ask_cbt`**: Задает вопрос в рамках когнитивно-поведенческой терапии.
- **`POST /chat/ask_gestalt`**: Вопрос в рамках гештальт-терапии.
- **`POST /chat/ask_psychoanalysis`**: Вопрос в рамках психоанализа.
- **`POST /chat/ask_multi_direction`**: Смешанный подход по нескольким направлениям.

### Работа с дневником эмоций

- **`POST /diary/create_entry`**: Создает новую запись.
  - **Параметры**:
    - `content` (строка): Текст записи.
- **`GET /diary/entries`**: Получает список всех записей.
- **`GET /diary/entry/{id}`**: Получает одну запись по идентификатору.

### Тестирование

- **`GET /tests`**: Получение списка доступных тестов.
- **`POST /tests/submit`**: Отправка ответов на тест.
  - **Параметры**:
    - `test_id` (строка): Идентификатор теста.
    - `answers` (объект): Ответы пользователя.

### Пользователи

- **`POST /auth/register`**: Регистрация нового пользователя.
  - **Параметры**:
    - `email` (строка): Email пользователя.
    - `password` (строка): Пароль.
    - Другие персональные данные.
- **`POST /auth/login`**: Авторизация пользователя.
- **`POST /auth/reset`**: Восстановление учетной записи.

---

## Быстрый старт

### Установка UV

Установите UV, быстрый менеджер пакетов Python:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Работа с проектом

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/melixz/ai-psy.git
   ```
2. Создайте и активируйте виртуальное окружение:
   ```bash
   uv venv
   source .venv/bin/activate
   ```
3. Установите зависимости:
   ```bash
   uv sync
   ```
4. Запустите сервер разработки:
   ```bash
   uvicorn backend.app.api.main:app --reload
   ```
5. Откройте API в браузере:
   - Swagger-документация: `http://localhost:8000/docs`.

---

## Docker

1. Соберите и запустите проект:
   ```bash
   docker-compose up --build
   ```
2. Остановите контейнеры:
   ```bash
   docker-compose down
   ```

---

## Преимущества AI-Psy

- Интеграция с языковыми моделями OpenAI для качественной генерации ответов.
- Поддержка специализированных направлений психологии.
- Полная асинхронность для высокой производительности.
- Масштабируемость с помощью Docker.
- Удобный и быстрый менеджмент зависимостей с использованием UV. 

**AI-Psy** — это удобный и мощный инструмент, который поможет пользователям справляться с ежедневными эмоциональными вызовами.
