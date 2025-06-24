Веб-приложение "Реестр закупок"
Описание
Приложение позволяет управлять реестром закупок: просматривать, добавлять, редактировать и удалять записи. Бэкенд на Node.js/Express, фронтенд на React, база данных SQLite.
Установка

Склонируйте репозиторий:git clone <URL>
cd procurement-app


Установите зависимости:npm install
cd client
npm install
cd ..



Запуск

Запустите приложение:npm start


Сервер: http://localhost:5000
Клиент: http://localhost:3000

API

GET /procurements — получить список закупок
POST /procurements — добавить закупку
PUT /procurements/:id — обновить закупку
DELETE /procurements/:id — удалить закупку

