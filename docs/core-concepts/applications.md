---
sidebar_position: 2
custom_edit_url: null
---

# Applications

The requests on this page present endpoints for applications

## Application [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

This endpoint creates a new application key, used to build machine-to-machine (M2M) integrations.

```md title="Required permissions"
customerApplication_write
```

**Request attributes**

Parameter   | Description
--------- | ------
clientId | The generated client Id
clientName | The client's name
permissions | An array of object that contains the keys of the user's permissions

**Response attribute**

Parameter   | Description
--------- | ------
customerApplicationKey | The generated client secret. This secret can not be retrieved again from our API, so it must be securely stored.

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "clientId":"teste-app1",
    "applicationDisplayName": "Teste Chave",
    "permissions":
    [
        {
            "id": "financial_write"
        },
        {
            "id": "financial_read"
        }
    ]
}
```

### Example Response

```json
{
  "customerApplicationKey": "df51476e-fe9c-498b-bf41-831bbe2f3a33"
}
```

## List Applications [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications?page=2&page-size=10
```

This endpoint returns a paginated list of applications (keys).

```md title="Required permissions"
customerApplication_write
customerApplication_read
```

**Response attributes**

Attributes   | Description
--------- | ------
Items | An array of paginated orders from the customer

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Accept: application/json' \
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
