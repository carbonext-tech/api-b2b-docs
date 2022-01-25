---
sidebar_position: 5
custom_edit_url: null
---

# Allowed Filters

Our API has a filter and sort system that allows searching for an entity by specific type.

## List Allowed Filters [GET]

`https://api-b2b.carbonext.com.br/v1/allowed-filters/:entity`

Parameter   | Description
--------- | ------
entity | Your entity can be any [resource](/docs/core-concepts/resources) return that we saw on the previous page about Resources

This endpoint returns the fields accepted for filtering and sorting, it is important to mention, that sort has the `created_desc` filter by default.

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/allowed-filters/invoices'
```

### Example Response

```json
{
    "filters": [
        "status_eq",
        "status_ne",
        "status_in",
        "price_ge",
        "price_le",
        "price_gt",
        "price_lt",
        "total_qty_eq",
        "total_qty_ge",
        "total_qty_le",
        "total_qty_gt",
        "total_qty_lt"
    ],
    "sort": [
        "created",
        "updated",
        "paid",
        "due_date",
        "price",
        "total_qty",
        "status"
    ]
}
```
