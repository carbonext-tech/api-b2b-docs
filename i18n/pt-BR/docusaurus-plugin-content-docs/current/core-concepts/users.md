---
sidebar_position: 3
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
| permissions  | Um array de objeto que contém as chaves de permissões do usuário |

**Atributos de Resposta**

| Atributos         | Descrição                                                         |
| ----------------- | ----------------------------------------------------------------- |
| id                | ID do usuário                                                     |
| email             | E-mail do usuário                                                 |
| name              | Nome do usuário                                                   |
| picture           | Link para a foto do perfil do usuário                             |
| preferredLanguage | Escolha de idioma do usuário                                      |
| isAdmin           | Um sinalizador (booleano) que indica se o usuário é Administrador |
| permissions       | Um array de objeto que contém as permissões do usuário            |

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/users' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "email": "usuario3@email.com",
    "userPassword": "123456",
    "name": "Usuario 3",
    "permissions":
    [
        {
            "key": "users_write"
        },
        {
            "key": "users_read"
        },
        {
            "key": "customerApplication_write"
        },
        {
            "key": "customerApplication_read"
        }
}
```

### Exemplo de Resposta

```json
{
  "id": "71d29b88-7edc-4601-8434-98faede4732a",
  "email": "usuario3@email.com",
  "name": "Usuario 3",
  "picture": null,
  "preferredLanguage": null,
  "isAdmin": false,
  "permissions": [
    {
      "name": "Users - Write",
      "key": "users_write"
    },
    {
      "name": "Users - Read",
      "key": "users_read"
    },
    {
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write"
    },
    {
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read"
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
curl 'https://api-b2b.carbonext.com.br/v1/users?page=1&pagesize=10' \
    -H 'Accept: application/json'
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
      "picture": null,
      "preferredLanguage": null,
      "isAdmin": false,
      "permissions": [
        {
          "name": "Users - Write",
          "key": "users_write"
        },
        {
          "name": "Users - Read",
          "key": "users_read"
        }
      ]
    },
    {
      "id": "71d29b88-7edc-4601-8434-98faede4732a",
      "email": "usuario3@email.com",
      "name": "Usuario 3",
      "picture": null,
      "preferredLanguage": null,
      "isAdmin": false,
      "permissions": [
        {
          "name": "Users - Write",
          "key": "users_write"
        },
        {
          "name": "CustomerApplication - Write",
          "key": "customerApplication_write"
        },
        {
          "name": "Users - Read",
          "key": "users_read"
        },
        {
          "name": "CustomerApplication - Read",
          "key": "customerApplication_read"
        }
      ]
    },
    {
      "id": "7b8b783a-69af-4ede-b1f1-bb4fa05cc855",
      "email": "usuario1@email.com",
      "name": "Usuario 1",
      "picture": null,
      "preferredLanguage": null,
      "isAdmin": false,
      "permissions": [
        {
          "name": "Orders - Read",
          "key": "orders_read"
        },
        {
          "name": "Orders - Write",
          "key": "orders_write"
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 3,
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

| Atributo          | Descrição                                                         |
| ----------------- | ----------------------------------------------------------------- |
| id                | ID gerado para o usuário                                          |
| email             | E-mail do usuário                                                 |
| name              | Nome do usuário                                                   |
| picture           | Link para a foto do perfil do usuário                             |
| preferredLanguage | Escolha de idioma do usuário                                      |
| isAdmin           | Um sinalizador (booleano) que indica se o usuário é Administrador |
| permissions       | Um array de objeto que contém as permissões do usuário            |

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/users/3f44d194-52cd-4a2b-ac37-1c9a7713add1' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "name": "Usuario 2999000000",
    "permissions": [
        {
            "name": "Users - Write",
            "key": "users_write"
        },
        {
            "name": "CustomerApplication - Write",
            "key": "customerApplication_write"
        },
        {
            "name": "Users - Read",
            "key": "users_read"
        },
        {
            "name": "CustomerApplication - Read",
            "key": "customerApplication_read"
        }
    ]
}
```

### Exemplo de Resposta

```json
{
  "id": "3f44d194-52cd-4a2b-ac37-1c9a7713add1",
  "email": "usuario2@email.com",
  "name": "Usuario 2999000000",
  "picture": null,
  "preferredLanguage": null,
  "isAdmin": false,
  "permissions": [
    {
      "name": "Users - Write",
      "key": "users_write"
    },
    {
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write"
    },
    {
      "name": "Users - Read",
      "key": "users_read"
    },
    {
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read"
    }
  ]
}
```

## Usuários [DEL]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/users/:id
```

Esta requisição deleta um usuário através do `id` passado pelo parâmetro.

```md title="PATH VARIABLES"
id: 8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d
```

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/users/8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```javascript
true
```
