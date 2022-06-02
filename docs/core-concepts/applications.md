---
sidebar_position: 2
custom_edit_url: null
---

# API Keys

Applications are the set of credentials (`client_id` and `client_secret`) to be used on the `OAuth2.0` `client_credentials` flow to autorize requests on our APIs. All applications created on the B2B API will have the prefix `cbx_b2b`.

## Application [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

This endpoint creates a new application key, used to build machine-to-machine (M2M) integrations.

```md title="Required permissions"
customer_applications_write
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
curl -X POST 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
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
  "id": "1a11ca1c-195e-477c-b9e6-59adbe7de3f5",
  "clientId": "cbx_b2b_myapp",
  "clientSecret": "8c4ad3e2-bb0b-42f1-a214-c75a1ea8fbd6"
}
```

## List Applications [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

This endpoint returns a paginated list of applications (keys).

```md title="Required permissions"
customer_applications_write
customer_applications_read
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
      "id": "a85f6c65-7f65-4c61-a188-8fab18fe844f",
      "clientId": "app-test",
      "displayName": "Test application"
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 1,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Fetch an Application [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications/:id
```

This endpoint returns an application object with its permissions.

```md title="Required permissions"
customer_applications_write
customer_applications_read
```

**Response attributes**

| Attributes | Description                                          |
| ---------- | ---------------------------------------------------- |
| Application      | An application object |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/customers/applications/a85f6c65-7f65-4c61-a188-8fab18fe844f' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
    "id": "a85f6c65-7f65-4c61-a188-8fab18fe844f",
    "clientId": "cbx_b2b_app_test",
    "displayName": "Test App",
    "permissions": [
        {
            "id": "5db0f399-28ab-4980-b320-9c321eea3bb1",
            "name": "orders_read",
            "description": null,
            "composite": false,
            "clientRole": false,
            "containerId": "CO2FREE",
            "attributes": null
        },
        {
            "id": "d1b9f6cb-a392-41d2-8bb5-8b07cebf137c",
            "name": "orders_write",
            "description": null,
            "composite": false,
            "clientRole": false,
            "containerId": "CO2FREE",
            "attributes": null
        }
    ]
}
```

```md title="PATH VARIABLES"
id: a85f6c65-7f65-4c61-a188-8fab18fe844f
```
