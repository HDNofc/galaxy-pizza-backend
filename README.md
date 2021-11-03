# Galaxy Pizza Backend

Фронтенд часть приложения [galaxy-pizza-frontend](https://github.com/HDNofc/galaxy-pizza-frontend)

## Технологии

- Typescript
- NodeJS
- MongoDB
- Express

## Запуск приложения

### С использованием [Docker](https://www.docker.com/)

- `docker` и `docker-compose` должны быть установлены
- `npm i` - установка зависимостей
- `npm run docker:dev` - запуск dev-сервера

### Эндпоинты

- `/pizzas` - получение массива доступных пицц
- `/pizzas/taste/:taste` - получение отфильтрованного массива по определенному вкусу
- `/api-docs` - swagger-документация API

Управление базой данных возможно через `mongo-express` на `8081` порту
