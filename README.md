# idp_frontend

Frontend для проекта "Альфа-Банк".

> Сервис, в рамках которого для сотрудников можно составить ИПР (индивидуальные планы развития), просматривать его и валидировать выполнение целей. В рамках сервиса существует 3 роли: руководитель, сотрудник и ментор.

## Команда проекта 16 человек
- Product manager – Богачук Леонид (@LeonidBogachuk)
- Project manager – Тарабуткина Юлиана (@Juliana_jull)
- Системный аналитик (Lead) – Сканави Павел (@Reds_on_tour)
- Системный аналитик – Андиева Диана (@keller_diana)
- Бизнес-аналитик (Lead) - Фадеева Алина (@Alina_a_Fadeeva)
- Бизнес-аналитик – Уразметова Лилия (@Lili_9092)
- Дизайнер (Lead) – Лапкина Яна (@yana_lapkina)
- Дизайнер – Лукинова Марина (@Lukinova_Marina)
- Дизайнер – Ерёменко Татьяна (@paintings_inspire)
- Backend (Lead) – Халёса Максим (@makskhaliosa)
- Backend – Чижов Алексей (@Chizhovsky)
- Backend – Варачев Андрей (@Dartanyun)
- Backend – Аюпов Рашид (@valentaine_ra)
## Авторы
- Frontend (Lead) – [Роман Красинский](https://github.com/RomanKrasinskiy) (@r_krasinski)
- Frontend – [Мурадов Артур](https://github.com/ArthurMur) (@arturasterol)
- Frontend – [Владислав Сердюков](https://github.com/VladislavSerduykov) (@VladisSerd)

## Технологии:

- Vite 5.0.8
- React 18.2.0
- JavaScript
- Redux 5.0.0
- React Router 6.21.3
- ESLint 8.55.0
- Docker
- Css modules

## Медиа запросы:

- 1920\*1080
- 1280\*832
- 1280\*720

## Реализовано:

- Руководитель может видеть список сотрудников со статусами ИПР.
- Сотрудник может видеть список задач созданных для него в рамках ИПР и оставлять
  комментарий.
- Ментор может видеть свой список задач.
- Руководитель может создать ИПР сотрудника.
- Руководитель может создать набор задач для ИПР.

## Локальный запуск в preview-режиме

- Переход в папку с frontend для запуска preview проекта локально

- Создать оптимизированную сборку проекта:

```
npm build
```

- Запустить проект:

```
npm run preview
```

## Локальный запуск в dev-режиме

- Переход в папку с frontend для запуска проекта локально (доступ по http://localhost:5173/)

- Установвить зависимости из файла package.json:

```
npm install
```

- Запустить проект:

```
npm run dev
```

- проект будет доступен по адресу:
  
```
http://localhost:5173/idps
```
