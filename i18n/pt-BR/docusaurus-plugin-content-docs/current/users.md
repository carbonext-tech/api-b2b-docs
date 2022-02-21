---
sidebar_position: 7
custom_edit_url: null
---

# Usuários

As requisições nesta página tratam de operações CRUD em recursos de usuários.

## Usuários [POST]

`https://api-b2b.carbonext.com.br/v1/users`

Esta requisição cria um novo usuário.

**Atributos de Requisição**

| Atributos    | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| email        | E-mail do usuário                                                |
| userPassword | Senha do usuário                                                 |
| name         | Nome do usuário                                                  |
| permissions  | Um array de string que contém as chaves de permissões do usuário |

**Atributos de Resposta**

| Atributos       | Descrição                                              |
| --------------- | ------------------------------------------------------ |
| id              | ID do usuário                                          |
| email           | E-mail do usuário                                      |
| name            | Nome do usuário                                        |
| isEmailVerified | Se o usuário verificou o e-mail, isto retornará `true` |
| permissions     | Um array de objeto que contém as permissões do usuário |

### Exemplo de Requisição

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/users' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "email": "userteste@email.com",
    "userPassword": "123456",
    "name": "Teste",
    "permissions":
    [
        {
            "id": "53dfaef6-125d-43ac-92de-a03e49c66d70"
        },
        {
            "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1"
        },
        {
            "id": "f15cbe98-c53f-4042-b952-be7a39783a4a"
        }
    ]
}'
```

### Exemplo de Resposta

```json
{
  "id": "61211194-e09c-46fc-9cf4-e11fa2510987",
  "email": "userteste@email.com",
  "name": "Teste",
  "isEmailVerified": false,
  "permissions": [
    {
      "id": "f15cbe98-c53f-4042-b952-be7a39783a4a",
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read",
      "description": null
    },
    {
      "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1",
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write",
      "description": null
    },
    {
      "id": "53dfaef6-125d-43ac-92de-a03e49c66d70",
      "name": "Certificates - Read",
      "key": "certificates_read",
      "description": null
    }
  ]
}
```

## Usuários [GET]

`https://api-b2b.carbonext.com.br/v1/users?page=1&page-size=10`

Essa requisição retorna uma lista paginada de usuários ativos.

**Atributos de Resposta**

| Atributo | Descrição                       |
| -------- | ------------------------------- |
| items    | Uma lista de objetos de usuário |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/users?page=1&pagesize=10' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "id": "3f44d194-52cd-4a2b-ac37-1c9a7713add1",
      "email": "usuario2@email.com",
      "name": "Usuario 2",
      "isEmailVerified": false,
      "permissions": [
        {
          "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1",
          "name": "CustomerApplication - Write",
          "key": "customerApplication_write",
          "description": null
        },
        {
          "id": "53dfaef6-125d-43ac-92de-a03e49c66d70",
          "name": "Certificates - Read",
          "key": "certificates_read",
          "description": null
        }
      ]
    },
    {
      "id": "353a4285-4581-442a-aaea-f87ddf7b831d",
      "email": "testeuser@email.com",
      "name": "Teste",
      "isEmailVerified": false,
      "permissions": [
        {
          "id": "f15cbe98-c53f-4042-b952-be7a39783a4a",
          "name": "CustomerApplication - Read",
          "key": "customerApplication_read",
          "description": null
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 2,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Usuários [PUT]

`https://api-b2b.carbonext.com.br/v1/users/:id`

Esta requisição atualiza os dados de um usuário.

**Parâmetros de Requisição**

| Parâmetro | Descrição     |
| --------- | ------------- |
| id        | ID do usuário |

**Atributos de Requisição**

| Atributo    | Descrição                                                        |
| ----------- | ---------------------------------------------------------------- |
| name        | Nome do usuário                                                  |
| permissions | Um array de objeto que contém as chaves de permissões do usuário |

**Atributos de Resposta**

| Atributo        | Descrição                                              |
| --------------- | ------------------------------------------------------ |
| id              | ID gerado para o usuário                               |
| email           | E-mail do usuário                                      |
| name            | Nome do usuário                                        |
| isEmailVerified | Se o usuário verificou o e-mail, isto retornará `true` |
| permissions     | Um array de objeto que contém as permissões do usuário |

### Exemplo de Requisição

```javascript
curl -X PUT 'https://api-b2b.carbonext.com.br/v1/users/61211194-e09c-46fc-9cf4-e11fa2510987' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
  "name": "User29",
  "permissions":[
    {
      "id":"2158a42d-90a5-4f9e-9346-e81f28a822d1"
    }
  ]
}'
```

### Exemplo de Resposta

```json
{
  "id": "61211194-e09c-46fc-9cf4-e11fa2510987",
  "email": "userteste@email.com",
  "name": "User29",
  "isEmailVerified": false,
  "permissions": [
    {
      "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1",
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write",
      "description": null
    }
  ]
}
```

## Usuários [DEL]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/users/:id
```

Esta requisição exclui um usuário através do `id` passado pelo parâmetro.

```md title="PATH VARIABLES"
id: 8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d
```

### Exemplo de Requisição

```javascript
curl -X DELETE 'https://api-b2b.carbonext.com.br/v1/users/8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```javascript
true
```
