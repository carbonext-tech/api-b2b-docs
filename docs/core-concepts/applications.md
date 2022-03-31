---
sidebar_position: 2
custom_edit_url: null
---

# Applications

Applications are the set credentials (`client_id` and `client_secret`) to be used on the `OAuth2.0` `client_credentials` flow to autorize requests on our APIs.

## Application [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications?customer-id=1f2f3c6f-0177-4905-88d4-f4e0b667fdca
```

This endpoint creates a new application key, used to build machine-to-machine (M2M) integrations.

```md title="Required permissions"
customerApplication_write
```

**Request attributes**

| Parameter   | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| clientId    | The generated client Id                                        |
| displayName | The client's name                                              |
| permissions | An array of an object that contains the application's permissions |

**Response attribute**

| Parameter    | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| id           | The application ID in the database                                         |
| clientId     | User ID code                                                               |
| clientSecret | Code used together with the `client_id` to grant authorization to the user |

### Example Request

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/customers/applications?customer-id=1f2f3c6f-0177-4905-88d4-f4e0b667fdca' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "clientId": "badlbede",
    "displayName": "Chave de teste",
    "permissions": [
        {
            "id": "45bbe1bc-4d5a-4991-baac-42fa95d35824"
        },
        {
            "id": "65c514f4-424f-4c82-9827-482d564091c0"
        }
    ]
}'
```

### Example Response

```json
{
  "id": "d5e1e2ce-7c7e-4ce6-9d07-d395625e3860",
  "clientId": "badlbede",
  "clientSecret": "9831be6d-6904-4728-b792-7e94ba00ac18"
}
```

```md title="Params"
customer-id: 1f2f3c6f-0177-4905-88d4-f4e0b667fdca
```

## List Applications [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

This endpoint returns a paginated list of applications (keys).

```md title="Required permissions"
customerApplication_write
customerApplication_read
```

**Response attributes**

| Attributes | Description                                          |
| ---------- | ---------------------------------------------------- |
| items      | An array of paginated applications from the customer |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "clientId": "app-test",
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
          "name": "Financial - Write",
          "key": "financial_write"
        },
        {
          "name": "Users - Read",
          "key": "users_read"
        },
        {
          "name": "Financial - Read",
          "key": "financial_read"
        },
        {
          "name": "Orders - Read",
          "key": "orders_read"
        },
        {
          "name": "CustomerApplication - Read",
          "key": "customerApplication_read"
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
  "totalCount": 1,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```
