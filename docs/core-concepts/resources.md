---
sidebar_position: 5
---

# Resources

We have entities that allow us to use our advanced query filter that we will see on the next page about **Allowed Filters**, but before that, let's see what these entities are.

## List Resources [GET]

`/v1/resources`

### Example Request

```javascript
curl --location -g --request GET '{{url}}/v1/resources'
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
