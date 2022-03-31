---
sidebar_position: 4
custom_edit_url: null
---

# Resources

Our APIs have advanced query filters, the following request returns a list of resources that allow such queries.

## List Resources [GET]

```url title="BASE URL"
https://api-b2b.carbonext.com.br/v1/resources
```

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/resources'
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
