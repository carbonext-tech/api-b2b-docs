---
sidebar_position: 3
custom_edit_url: null
---

# Users

The requests in this page handle CRUD operations on Users resources.

## Users [POST]

`https://api-b2b.carbonext.com.br/v1/users`

This request creates a new user.

**Request attributes**

| Attributes   | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| email        | User's email                                                        |
| userPassword | User's password                                                     |
| name         | User's name                                                         |
| permissions  | An array of object that contains the keys of the user's permissions |

**Response attributes**

| Attributes        | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| id                | User's Id                                                    |
| email             | User's email                                                 |
| name              | User's name                                                  |
| picture           | Link to user's profile picture                               |
| preferredLanguage | User's language choice                                       |
| isAdmin           | A flag (boolean) that indicates if the user is Administrator |
| permissions       | An array of object that contains the user's permissions      |

### Example Request

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

### Example Response

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

## Users [GET]

`https://api-b2b.carbonext.com.br/v1/users?page=1&page-size=10`

This request returns a paginated list of active users.

**Response attributes**

| Attribute | Description            |
| --------- | ---------------------- |
| items     | A list of User objects |

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/users?page=1&pagesize=10' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

### Example Response

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

## Users [PUT]

`https://api-b2b.carbonext.com.br/v1/users/:id`

This request updates a user.

**Request parameters**

| Parameter | Description   |
| --------- | ------------- |
| id        | The user's id |

**Request body attributes**

| Attribute   | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| name        | User's name                                                         |
| permissions | An array of object that contains the keys of the user's permissions |

**Response attribute**

| Attribute         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| id                | User's generated id                                          |
| email             | User's email                                                 |
| name              | User's name                                                  |
| picture           | Link to user's profile picture                               |
| preferredLanguage | User's language choice                                       |
| isAdmin           | A flag (boolean) that indicates if the user is Administrator |
| permissions       | An array of object that contains the user's permissions      |

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/users/3f44d194-52cd-4a2b-ac37-1c9a7713add1' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

```json
--data-raw {
    "name": "Usuario 2999000000",
    "permissions":[
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

### Example Response

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

## Users [DEL]

`https://api-b2b.carbonext.com.br/v1/users/:id`

This request deletes a user.

```md title="PATH VARIABLES"
id: 8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d
```

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/users/8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

### Example Response

```javascript
true;
```
