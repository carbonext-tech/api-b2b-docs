---
sidebar_position: 7
custom_edit_url: null
---

# Users

The requests in this page handle CRUD operations on Users resources.

## Users [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/users
```

This request creates a new user.

**Request attributes**

| Attributes   | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| email        | User's email                                                        |
| userPassword | User's password                                                     |
| name         | User's name                                                         |
| permissions  | An array of string, that contains the Ids of the user's permissions |

**Response attributes**

| Attributes      | Description                                               |
| --------------- | --------------------------------------------------------- |
| id              | User's Id                                                 |
| email           | User's email                                              |
| name            | User's name                                               |
| isEmailVerified | If the user has verified the email, it will return `true` |
| permissions     | An array of object that contains the user's permissions   |

### Example Request

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

### Example Response

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

## Users [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/users?page=1&page-size=10
```

This request returns a paginated list of active users.

**Response attributes**

| Attribute | Description            |
| --------- | ---------------------- |
| items     | A list of User objects |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/users?page=1&pagesize=10' \
    -H 'Content-Type: application/json' \
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

## Users [PUT]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/users/:id
```

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

| Attribute       | Description                                               |
| --------------- | --------------------------------------------------------- |
| id              | User's generated id                                       |
| email           | User's email                                              |
| name            | User's name                                               |
| isEmailVerified | If the user has verified the email, it will return `true` |
| permissions     | An array of object that contains the user's permissions   |

### Example Request

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

### Example Response

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

## Users [DEL]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/users/:id
```

This request deletes a user through the id passed by parameter.

```md title="PATH VARIABLES"
id: 8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d
```

### Example Request

```javascript
curl -X DELETE 'https://api-b2b.carbonext.com.br/v1/users/8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d' \
    -H 'Content-Type: application/json'
    -H 'Authorization: Bearer {token}'
```

### Example Response

```javascript
true
```
