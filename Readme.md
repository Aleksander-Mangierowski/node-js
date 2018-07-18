Запуск демо-проекта

1. Проверить, что инстанс MongoDB запущен
1. Установить зависимости
```npm install```
2. Запустить сервер
```npm start```


###user

```localhost:1428/api/user``` GET - get users

```localhost:1428/api/user``` POST - store user - pass data with body - json

```localhost:1428/api/user/:id``` GET - get user by id

```localhost:1428/api/user/:id``` PUT - update user by id - pass data with body - json

```localhost:1428/api/user``` DELETE - delete user by id


###message

```localhost:1428/api/message``` GET - get messages

```localhost:1428/api/message``` POST - store message - pass data with body - json

```localhost:1428/api/message/:id``` GET - get message by id

```localhost:1428/api/message/:id``` PUT - update message by id - pass data with body - json

```localhost:1428/api/message/:id``` DELETE - delete message by id

```localhost:1428/api/message/:user_id/senders-and-receivers``` - GET - get all senders and receives Ids for specified user