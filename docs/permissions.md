---
sidebar_position: 8
custom_edit_url: null
---

# Permission List

Request to get the list of permissions that define what the user interacts with, edits, adds, or removes from the API.

## Permission List [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20
```

This request returns a paginated list with all permissions available. These permissions can be attached to users and/or customer_applications (keys).

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
curl -X GET 'https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
        "id": "c56452df-18fe-474b-9cab-82080af3e902",
        "name": "users_write",
        "description": null
    },
    {
        "id": "497efb5a-25eb-434f-9a2a-2e3aa6b2e6e1",
        "name": "certificates_read",
        "description": null
    },
    {
        "id": "44032f0d-9fdf-415e-8707-6f1ff9753187",
        "name": "subscriptions_write",
        "description": null
    },
    {
        "id": "4f3ca574-0b89-4a92-83fa-794edcad6b76",
        "name": "customer_applications_write",
        "description": null
    },
    {
        "id": "5db0f399-28ab-4980-b320-9c321eea3bb1",
        "name": "orders_read",
        "description": null
    },
    {
        "id": "872f1e07-ec58-4058-8919-1df23e8e59da",
        "name": "financial_read",
        "description": null
    },
    {
        "id": "d1b9f6cb-a392-41d2-8bb5-8b07cebf137c",
        "name": "orders_write",
        "description": null
    },
    {
        "id": "db1a2ab4-2d26-446c-a6fe-4b2869d16c5a",
        "name": "subscriptions_read",
        "description": null
    },
    {
        "id": "d08a41b6-f57c-4da6-806b-6610bb595f67",
        "name": "financial_write",
        "description": null
    },
    {
        "id": "465a8197-8cdb-4f90-8509-b941862ba8e1",
        "name": "users_read",
        "description": null
    },
    {
        "id": "c1dad7ce-a24f-4e9e-8cdd-1f1773ba4ba6",
        "name": "customer_applications_read",
        "description": null
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 8,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 20
```
