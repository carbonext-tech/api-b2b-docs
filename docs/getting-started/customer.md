---
sidebar_position: 2
---

# Deal with Customer

The requests in this page deal with customer requests.

## POST Aplication

`/v1/customers/applications`

This request creates an application (key) that can be used on machine-2-machine integrations with the API.
```md title="Required permissions"
customerApplication_write
```

**Request attributes**

Parameter   | Description
--------- | ------
clientId | The generated client Id
clientName | The client's name
permissions | An array of object that contains the keys of the user's permissions
name (optional) | Name of a desired permissions for the user
id (optional) | Id of a desired permissions for the user

**Response attribute**

Parameter   | Description
--------- | ------
customerApplicationKey | The private (secret) key generated. This information is not stored and must be secured

### Example Request

```javascript
curl --location -g --request POST '{{url}}/v1/customers/applications'
```

```json
--data-raw '{
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
}'
```
_This request is using **Bearer Token**_

### Example Response

```javascript
curl --location -g --request POST '{{url}}/v1/customers/applications'
```

```json
{
  "customerApplicationKey": "df51476e-fe9c-498b-bf41-831bbe2f3a33"
}
```

## GET List Aplication

`/v1/customers/applications?page=2&page-size=10`

This request returns a paginated list of applications (keys).

```md title="Required permissions"
customerApplication_write
customerApplication_read
```

**Request attributes**

Attribute   | Description
--------- | ------
items | An array of paginated orders from the customer
client-id | Public key of the application
permissions | Array of permissions for the application (key)
name (optional) | The name of the permission
key | The key relating to the permission
pageIndex | The index of the returned page
totalPages | The total number of pages
totalCount | The total number of orders
hasPreviousPage | Flag (boolean) indicating whether the list has a previous page
hasNextPage | 	Flag (boolean) indicating whether the list has a next page

### Example Request

```javascript
curl --location -g --request GET '{{url}}/v1/customers/applications'
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
_This request is using **Bearer Token**_

## DEL Customer

`/v1/customers/customer-id`

This request deletes an application (key). The delete key will no longer be able to perform requests to the API.

```md title="Required permissions"
customerApplication_write
```

**Request parameters**

Parameter   | Description
--------- | ------
clientId | The generated client Id

### Example Request

```javascript
curl --location -g --request DELETE '{{host}}/v1/customers/customer-id'
```
_This request is using **Bearer Token**_
