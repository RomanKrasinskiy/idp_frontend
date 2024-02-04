# idp_hacaton-frontend

Frontend для проекта хакатона "Яндекс.Практикум" и "Альфа-Банк".

> Сервис, в рамках которого для сотрудников можно составить ИПР (индивидуальные планы развития), просматривать его и валидировать выполнение целей. В рамках сервиса существует 3 роли: руководитель, сотрудник и ментор.

## Авторы

- [Роман Красинский](https://github.com/RomanKrasinskiy)
- [Мурадов Артур](https://github.com/ArthurMur)
- [Владислав Сердюков ](https://github.com/VladislavSerduykov)

## Команда проекта 16 человек

## Технологии:

- Vite 5.0.8
- React 18.2.0
- JavaScript
- Redux 5.0.0
- React Router 6.21.3
- ESLint 8.55.0
- Docker

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
