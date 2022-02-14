---
sidebar_position: 1
custom_edit_url: null
---

# Authorization

This is the API that will handle client-side requests for our B2B applications. Firstly, let's see how we can create an authorization token.

## Authorize Client [POST]

```url title="BASE URL"
https://auth.carbonext.com.br/connect/token
```

This request validates the provided credentials and returns the generated tokens

**Parameter Attributes**

| Parameter    | Description                         |
| ------------ | ----------------------------------- |
| clientId     | The client's public credential key  |
| clientSecret | The client's private credential key |

**Response Attributes**

| Parameter     | Description                                             |
| ------------- | ------------------------------------------------------- |
| accessToken   | A token used to authorize the user's access.            |
| token_type    | The type of token                                       |
| expires_in    | The amount of time until the token expires, in seconds  |
| refresh_token | The refresh token provided in the authorization request |

### Example Request

```javascript
curl -X POST 'https://auth.carbonext.com.br/connect/token' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=offline_access'
```

### Example Response

```json
{
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "token_type": "Bearer",
  "expires_in": 3596,
  "refresh_token": "cjju3PUmqzyw3vfp8aJ-afSFPwbObvOGweWKiQ5ezNA"
}
```

```md title="BODY urlencoded"
client_id: {{client_id}}
client_secret: {{client_secret}}
grant_type: client_credentials
scope: offline_access
```

## Refresh Token [POST]

```url title="BASE URL"
https://auth.carbonext.com.br/connect/token
```

This endpoint allows the user to request a new token when their current token expires.

**Parameter Attributes**

| Parameter     | Description                                              |
| ------------- | -------------------------------------------------------- |
| refresh_token | The refresh token provided in the authorization response |

### Example Request

```javascript
curl -X POST 'https://auth.carbonext.com.br/connect/token' \
--data-urlencode 'grant_type=refresh_token' \
--data-urlencode 'refresh_token={{refresh_token}}' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}'
```

### Example Response

```json
{
  "access_token": "_OAiP7ySFVRf6_KE-8u9AcXjZQJQXhfRUkq_E0Zr1Mk",
  "token_type": "Bearer",
  "expires_in": 3595,
  "scope": "offline_access",
  "refresh_token": "5iI6Zo9QmJ3-bcmRTtH6ICdzjG-K2usMRKld0KrJRxw"
}
```

```md title="BODY urlencoded"
grant_type: refresh_token
refresh_token: {{refresh_token}}
client_id: {{client_id}}
client_secret: {{client_secret}}
```

## User Info [GET]

```url title="BASE URL"
https://auth.carbonext.com.br/connect/userinfo
```

A request that retrieves information from the user (or application key).

**Response Attributes**

| Attributes            | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| clientId              | The client identification (public key)                                 |
| userId                | The user identification                                                |
| name                  | The user's name                                                        |
| email                 | The user's email                                                       |
| isEmailValid          | A boolean to identify if the user's email has been verified            |
| customerId            | The ID of the customer the user or application is related to           |
| customerApplicationId | The ID of the customer's application (key)                             |
| customerTaxId         | The customer's tax document number                                     |
| customerLegalName     | The customer's legal name                                              |
| permissions           | An array containing the permissions keys for the user (or application) |

### Example Request

```javascript
curl -X GET 'https://auth.carbonext.com.br/connect/userinfo' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "clientId": "5d7aac18-f566-49ec-b6cb-48e533d0d262",
  "userId": null,
  "name": null,
  "email": "exemplo.req@email.com",
  "isEmailValid": false,
  "customerId": "c892597a-997c-4a6f-a4cf-6e370240edff",
  "customerApplicationId": "ef04cbdc-5197-4812-a910-0d5253b4b2f5",
  "customerTaxId": "10.203.485/0001-74",
  "customerLegalName": "Carbon Teste",
  "permissions": [
    "certificates_read",
    "customerApplication_read",
    "customerApplication_write",
    "financial_read",
    "financial_write",
    "orders_read",
    "orders_write",
    "users_read",
    "users_write"
  ]
}
```
