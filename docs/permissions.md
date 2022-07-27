---
sidebar_position: 8
custom_edit_url: null
---

# Permission List

Our API works with access permissions that define user interactions like edit, add or remove, this endpoint returns a paginated list of these permissions.

## Permission List [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/permissions?page=1&page-size=20
```

This request returns a paginated list with all available permissions. These permissions can be attached to users and/or customer_applications (API keys).

**Permission List**

| Permission                  | Description                   |
| -------------------------   | ----------------------------- |
| orders_read                 | List Orders             |
| orders_write                | Add, edit or remove orders    |
| customer_applications_read  | List Customers            |
| customer_applications_write | Add, edit or remove customers |
| financial_write             | Add invoices                  |
| financial_read              | List Invoices           |
| users_write                 | Add, edit or remove users     |
| users_read                  | List Users               |
| subscriptions_write         | Add, edit or suspend subscriptions |
| subscriptions_read          | List subscriptions               |
| certificates_read           | List Certificates        |

**Response Attributes**

| Attributes | Description           |
| ---------- | --------------------- |
| Items      | A list of permissions |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/permissions?page=1&page-size=20',
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

[
    {
        "id": "c56452df-18fe-474b-9cab-82080af3e902",
        "name": "users_write",
        "description": "Criar/Remover usuários",
        "composite": false,
        "clientRole": false,
        "containerId": "CO2FREE",
        "attributes": null
    },
    {
        "id": "497efb5a-25eb-434f-9a2a-2e3aa6b2e6e1",
        "name": "certificates_read",
        "description": "Visualizar certificados",
        "composite": false,
        "clientRole": false,
        "containerId": "CO2FREE",
        "attributes": null
    },
    {
        "id": "4f3ca574-0b89-4a92-83fa-794edcad6b76",
        "name": "customer_applications_write",
        "description": "Criar/Remover Chaves de API",
        "composite": false,
        "clientRole": false,
        "containerId": "CO2FREE",
        "attributes": null
    }
]
```

```md title="PARAMS"
page: 1
page-size: 20
```
