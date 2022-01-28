---
sidebar_position: 4
custom_edit_url: null
---

# Permission List

Request to get the list of permissions which define what the user interacts with, edits, adds or removes from the API.

## Permission List [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20
```

This request returns a paginated list with all permissions available. These permissions can be attached to users and/or customerApplications (keys).

**Permission List**

| Permission                | Description                   |
| ------------------------- | ----------------------------- |
| orders_read               | Orders read only              |
| orders_write              | Add, edit or remove orders    |
| customerApplication_read  | Customer read only            |
| customerApplication_write | Add, edit or remove customers |
| financial_write           | Add or cancel invoices        |
| financial_read            | Financial read only           |
| users_write               | Add, edit or remove users     |
| users_read                | Users read only               |
| certificates_read         | Certificates read only        |

**Response Attributes**

| Attributes | Description           |
| --------- | --------------------- |
| Items     | A list of permissions |

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "id": "afd59c5b-bc68-47a2-b79f-4f917579306f",
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read",
      "description": null
    },
    {
      "id": "138fd7d4-bb93-4e9f-8a1d-0f5cbad197ef",
      "name": "Financial - Read",
      "key": "financial_read",
      "description": null
    },
    {
      "id": "36008ea5-b1f2-4137-93ad-189ef72b1574",
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write",
      "description": null
    },
    {
      "id": "65c514f4-424f-4c82-9827-482d564091c0",
      "name": "Users - Read",
      "key": "users_read",
      "description": null
    },
    {
      "id": "8d7652d1-17e5-4fba-926c-0ce94c8c1206",
      "name": "Users - Write",
      "key": "users_write",
      "description": null
    },
    {
      "id": "918cd839-a543-41ee-9e78-5fb481611a6e",
      "name": "Orders - Read",
      "key": "orders_read",
      "description": null
    },
    {
      "id": "b2aab14a-cdd8-490e-b430-d03aeb3a4f1f",
      "name": "Financial - Write",
      "key": "financial_write",
      "description": null
    },
    {
      "id": "a7e90313-331e-4d97-9fbb-a22341827a31",
      "name": "Orders - Write",
      "key": "orders_write",
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
