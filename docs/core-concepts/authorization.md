---
sidebar_position: 1
---

# Authorization

This is the API that will handle client-side requests for our B2B applications. First of all, let's see how to create an authorization token in our B2B.

## Authorize client [POST]

`https://api-auth.carbonext.com.br/connect/token`

This request validates the provided credentials and returns the generated tokens

**Parameter Attributes**

Parameter   | Description
--------- | ------
clientId | The client's public credential key
clientSecret | The client's private credential key

**Response Attributes**

Parameter   | Description
--------- | ------
accessToken | A token used to authorize the user's access.
token_type | The type of token
expires_in | The amount of time until the token expires, in seconds
refresh_token | The refresh token provided in the authorization request

### Example Request

```javascript
curl 'https://api-auth.carbonext.com.br/connect/userinfo' \
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

## Refresh token [POST]

`https://api-auth.carbonext.com.br/connect/token`

This endpoint retrieves information about the logged in user or application key.

**Parameter Attributes**

Parameter   | Description
--------- | ------
refresh_token | The refresh token provided in the authorization response

### Example Request

```javascript
curl 'https://api-auth.carbonext.com.br/connect/userinfo' \
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

`https://api-auth.carbonext.com.br/connect/userinfo`

A request that retrieves information from the user (or application key).

**Response Attributes**

Attributes   | Description
--------- | ------
ClientId |	The client identification (public key)
UserId |	The user identification
Name |	The user's name
Email |	The user's email
IsEmailValid |	A boolean to identify if the user's email has been verified
CustomerId |	The ID of the customer the user or application is related to
CustomerApplicationId |	The ID of the customer's application (key)
CustomerTaxId |	The customer's tax document number
CustomerLegalName |	The customer's legal name
Permissions |	An array containing the permissions keys for the user (or application)

### Example Request

```javascript
curl 'https://api-auth.carbonext.com.br/connect/userinfo' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "clientId": "pre-pago",
  "userId": null,
  "name": null,
  "email": null,
  "isAdmin": false,
  "isEmailValid": null,
  "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
  "customerApplicationId": "11b02c18-0a2a-4908-90ff-33ff88ce0672",
  "customerTaxId": "29.232.086/0001-60",
  "customerLegalName": "Teste pré pago",
  "permissions": [
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
