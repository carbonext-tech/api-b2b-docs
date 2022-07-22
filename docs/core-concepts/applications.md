---
sidebar_position: 2
custom_edit_url: null
---

# API Keys

API keys are like credentials that identify and authorize access to our API, we use a `client_credential` `OAauth2.0` workflow with `client_id` and `client_secret`, saved under our terms, to authorize requests on endpoints.

## Application [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

This endpoint creates a new application key, used to create Machine to Machine (M2M) integrations, we advise using one for each API you need to integrate with ours.

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
var axios = require('axios');
var data = JSON.stringify({
  "clientId": "myapp_name",
  "displayName": "My test app",
  "permissions": [
    {
        "id": "45bbe1bc-4d5a-4991-baac-42fa95d35824"
    },
    {
        "id": "65c514f4-424f-4c82-9827-482d564091c0"
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/customers/applications?customer-id=d762a683-cb74-43a4-979a-6579dc53cec1',
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
    "id": "21be1e66-307e-47a7-914e-c1a8a68f269c",
    "clientId": "cbx_b2b_myapp_name",
    "clientSecret": "1d49c575-81f8-4d8c-bc18-93711cf7eb24"
}
```

## List Applications [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/applications?page=2&page-size=10
```

This endpoint returns a paginated list of API keys.

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
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
   
});
var config = {
  method: 'get',
  url: 'https://api-b2b-dev.carbonext.com.br/v1/customers/applications',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI'
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
    "items": [
        {
            "id": "21be1e66-307e-47a7-914e-c1a8a68f269c",
            "clientId": "cbx_b2b_myapp_name",
            "displayName": "My test app44"
        },
    ],
    "pageIndex": 1,
    "totalPages": 1,
    "totalCount": 1,
    "aggregations": null,
    "hasPreviousPage": false,
    "hasNextPage": false
}
```

## Fetch an API [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications/:id
```

This endpoint returns an API key object with your permissions.

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
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-dev.carbonext.com.br/v1/customers/applications/02c75cc5-b575-4b5f-87d8-bf09e6009c23',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI'
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
    "id": "02c75cc5-b575-4b5f-87d8-bf09e6009c23",
    "clientId": "cbx_b2b_myapp_name",
    "displayName": "My test app",
    "permissions": [
        {
            "id": "781d50ae-ab86-4988-8d39-48dca58da6a6",
            "name": "default-roles-co2free",
            "description": null,
            "composite": true,
            "clientRole": false,
            "containerId": "CO2FREE",
            "attributes": null
        }
    ]
}
```

```md title="PATH VARIABLES"
id: 02c75cc5-b575-4b5f-87d8-bf09e6009c23
```
