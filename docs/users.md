---
sidebar_position: 7
custom_edit_url: null
---

# Users

The requests on this page handle CRUD operations on Users' resources.

## Users [POST]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/users`
```

This request creates a new user.

**Request attributes**

| Attributes   | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| email        | User's email                                                        |
| userPassword | User's password                                                     |
| name         | User's name                                                         |
| permissions  | An array of strings, that contains the Ids of the user's permissions |

**Response attributes**

| Attributes      | Description                                               |
| --------------- | --------------------------------------------------------- |
| id              | User's Id                                                 |
| email           | User's email                                              |
| name            | User's name                                               |
| isEmailVerified | If the user has verified the email, it will return `true` |
| permissions     | An array of an object that contains the user's permissions   |

### Example Request

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "email": "userteste@email.com",
  "userPassword": "12345678",
  "name": "Teste",
  "permissions": [
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
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
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
      "name": "Customer Applications - Read",
      "key": "customer_applications_read",
      "description": null
    },
    {
      "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1",
      "name": "Customer Applications - Write",
      "key": "customer_applications_write",
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
`https://api-b2b-hml.carbonext.com.br/v1/users?page=1&page-size=10`
```

This request returns a paginated list of active users.

**Response attributes**

| Attribute | Description            |
| --------- | ---------------------- |
| items     | A list of User objects |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users?page=1&page-size=10',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
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
          "name": "Customer Applications - Write",
          "key": "customer_applications_write",
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
          "name": "Customer Applications - Read",
          "key": "customer_applications_read",
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
`https://api-b2b-hml.carbonext.com.br/v1/users/:id`
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
| permissions     | An array of an object that contains the user's permissions   |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users/161429f6-a6e6-4583-8a5e-f55784b10c63?force-refresh=true&include-permissions=true',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Example Response

```json
{
  "id": "161429f6-a6e6-4583-8a5e-f55784b10c63",
  "email": "userteste@email.com",
  "name": "Teste",
  "isEmailVerified": false,
  "permissions": [
    {
      "id": "4f3ca574-0b89-4a92-83fa-794edcad6b76",
      "name": "customer_applications_write",
      "description": "Criar/Remover Chaves de API",
      "composite": false,
      "clientRole": false,
      "containerId": "CO2FREE",
      "attributes": null
    },
    {
      "id": "5db0f399-28ab-4980-b320-9c321eea3bb1",
      "name": "orders_read",
      "description": "Visualizar pedidos",
      "composite": false,
      "clientRole": false,
      "containerId": "CO2FREE",
      "attributes": null
    }
  ]
}
```

## Users [DEL]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/users/:id`
```

This request deletes a user through the id passed by the parameter.

**Request parameters**

| Parameter | Description   |
| --------- | ------------- |
| id        | The user's id |

### Example Request

```javascript
var axios = require('axios');
var data = '';

var config = {
  method: 'delete',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users/161429f6-a6e6-4583-8a5e-f55784b10c63',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Example Response

```javascript
true
```
