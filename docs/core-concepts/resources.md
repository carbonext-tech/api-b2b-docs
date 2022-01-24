---
sidebar_position: 4
custom_edit_url: null
---

# Resources

We have entities that allow us to use our advanced query filter that we will see on the next page about **Allowed Filters**, but before that, let's see what these entities are.

## List Resources [GET]

`https://api-b2b.carbonext.com.br/v1/resources`

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/resources'
```

### Example Response

```json
{
    "entities": [
        "customers",
        "invoices",
        "orders",
        "users",
        "permissions"
    ]
}
```
