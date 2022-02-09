---
sidebar_position: 5
custom_edit_url: null
---

# Query Filters

Our API has a filter and sort system that allows searching for a resource by specific type.

## List Allowed Filters [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/allowed-filters/:resource
```

**Request Parameter**

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| resource  | Your resource can be any [resource](/docs/core-concepts/resources) return that we saw on the previous page about Resources |

**Response Parameters**

| Parameter | Description                   |
| --------- | ----------------------------- |
| filters   | An array of available filters |
| sort      | An array of available sorts   |

This endpoint returns the fields accepted for filtering and sorting. It is important to mention that sort has the `created_desc` filter by default.

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/allowed-filters/invoices'
```

### Example Response

```json
{
  "filters": [
    "status_eq",
    "status_ne",
    "status_in",
    "totalPrice_eq",
    "totalPrice_ge",
    "totalPrice_le",
    "totalPrice_gt",
    "totalPrice_lt",
    "totalVcuAmount_eq",
    "totalVcuAmount_ge",
    "totalVcuAmount_le",
    "totalVcuAmount_gt",
    "totalVcuAmount_lt",
    "createdAt_eq",
    "createdAt_ge",
    "createdAt_le",
    "createdAt_gt",
    "createdAt_lt"
  ],
  "sort": [
    "createdAt",
    "paid",
    "dueDate",
    "totalPrice",
    "totalVcuAmount",
    "status"
  ]
}
```

Let's see how many filters we have and what they mean.

```md title="Available Filters"
eq: = Returns fields with values equals then what was passed in the filter.
ne: != Returns fields with different values then what was passed in the filter.
ge: >= Returns fields with values greater then or equals what was passed in the filter.
le: <= Returns fields with values less then or equals what was passed in the filter. For `createdAt`, at 23:59:59pm before the date chosen in the `YYYY-MM-DD` format.
gt: > Returns fields with values greater then what was passed in the filter.
lt: < Returns fields with values less then what was passed in the filter. For `createdAt`, at 00:00am before the date chosen in the `YYYY-MM-DD` format.
in: `status` in (1,2,3) returns records with `status` equal to 1 or 2 or 3 (status here is the field with filter type `_in`)
like: returns records that contain the value sought in the filter (case insensitive).
```

## List Invoices by Filter [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices?sort-by=totalVcuAmount_asc&filter-by=totalVcuAmount_ge:30~status_in:Paid-pending
```

Let's see a practical example of a filter listing invoices, in this example we will return a list in order based on `totalVcuAmount`, to filter with more than one condition that we can use the `~` field separator for each filter in the same query, in this way, we can filter for `totalVcuAmount` greater than 30 and which had a status equal to `Paid-pending`.

**Response Parameters**

| Parameter | Description                   |
| --------- | ----------------------------- |
| items     | An array of filtered invoices |

### Request Example

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/invoices?sort-by=totalVcuAmount_asc&filter-by=totalVcuAmount_ge:30~status_in:Paid-pending' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Response Example

```json
{
  "items": [
    {
      "id": "8b864cbf-c181-4405-b119-91b2f63b1954",
      "status": "Pending",
      "totalVcuAmount": 30,
      "totalPrice": 2310,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:20:57.378254",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "5a8ff819-f60b-450b-9efb-f62c1445d511",
      "status": "Pending",
      "totalVcuAmount": 45,
      "totalPrice": 3465,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:09:21.372156",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "5e27bd46-95ce-4fd1-86c6-04fbd18e45bb",
      "status": "Pending",
      "totalVcuAmount": 45,
      "totalPrice": 3465,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:20:08.853038",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "3951ae7b-2c3d-4bd8-a05c-7755328413b5",
      "status": "Pending",
      "totalVcuAmount": 60,
      "totalPrice": 4620,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:15:43.037432",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "b92c0e55-45b0-4be2-9b85-c28d834137eb",
      "status": "Pending",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2021-12-10T20:47:11.424205",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "117f2fd6-953d-42d0-895d-31abc809af88",
      "status": "Paid",
      "totalVcuAmount": 10000,
      "totalPrice": 770000,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2021-12-09T19:49:43.112941",
      "paidAt": "2021-12-10T20:12:09.154332",
      "dueDate": null
    },
    {
      "id": "71050ef4-ae2a-4966-beaf-603d75b3f8c2",
      "status": "Paid",
      "totalVcuAmount": 10000,
      "totalPrice": 770000,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2021-12-06T13:54:13.56172",
      "paidAt": "2021-12-06T14:06:19.755607",
      "dueDate": null
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 7,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="Parameter Attributes"
sort-by: totalQuantity_asc
filter-by: totalQuantity_ge:30~status_in:Paid-pending
```
