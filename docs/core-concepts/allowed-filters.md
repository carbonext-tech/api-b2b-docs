---
sidebar_position: 5
custom_edit_url: null
---

# Query Filters

Our APIs have a filtering system that alow querying for a resource by many different attributes and operations.

## List Allowed Filters [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/allowed-filters/:resource
```

**Request Parameter**

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| resource  | It could be any feedback we saw on the [Resources] page (/docs/core-concepts/resources) |

**Response Parameters**

| Parameter | Description                             |
| --------- | --------------------------------------- |
| filters   | An array of available filters           |
| sort      | An array of available sorts             |
| aggregate | Performs math operations for the filter |

This endpoint returns the fields accepted for filtering and sorting. It is important to mention that sort has the `createdAt_desc` filter by default.

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/allowed-filters/orders',
  headers: { }
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
  "filters": [
    "status_eq",
    "status_ne",
    "status_in",
    "vcuUnitPrice_ge",
    "vcuUnitPrice_le",
    "vcuUnitPrice_gt",
    "vcuUnitPrice_lt",
    "vcuAmount_eq",
    "vcuAmount_ge",
    "vcuAmount_le",
    "vcuAmount_gt",
    "vcuAmount_lt",
    "invoiceId_eq",
    "createdAt_eq",
    "createdAt_ge",
    "createdAt_le",
    "createdAt_gt",
    "createdAt_lt",
    "totalPrice_eq",
    "totalPrice_ge",
    "totalPrice_le",
    "totalPrice_gt",
    "totalPrice_lt"
  ],
  "sort": ["createdAt", "vcuAmount", "status", "vcuUnitPrice"],
  "aggregate": {
    "columns": ["vcuAmount", "vcuUnitPrice", "totalPrice"],
    "operations": ["sum", "avg", "min", "max", "count"]
  }
}
```

Let's see how many filters operations we have and what they mean.

**Available Filters Operations**

| Filter | Value | Description                                                                                                                                                       |
| :----: | :---: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   eq   |   =   | Returns fields with values equal then what was passed in the filter.                                                                                              |
|   ne   |  !=   | Returns fields with different values than what was passed in the filter.                                                                                          |
|   ge   |  >=   | Returns fields with values greater than or equal to what was passed in the filter.                                                                                |
|   le   |  <=   | Returns fields with values less than or equal to what was passed in the filter. For `createdAt`, at 23:59:59pm before the date chosen in the `YYYY-MM-DD` format. |
|   gt   |   >   | Returns fields with values greater than what was passed in the filter.                                                                                            |
|   lt   |   <   | Returns fields with values less than what was passed in the filter. For `createdAt`, at 00:00 am before the date chosen in the `YYYY-MM-DD` format.               |

| Filter | Description                                                                                                              |
| :----: | :----------------------------------------------------------------------------------------------------------------------- |
|   in   | `status` in (1,2,3) returns records with `status` equal to 1 or 2 or 3 (status here is the field with filter type `_in`) |
|  like  | Returns records that contain the value sought in the filter (case insensitive).                                          |

## List Invoices by Filter [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices?sort-by=totalVcuAmount_asc&filter-by=totalVcuAmount_ge:30~status_in:Paid-pending
```

Let's see a practical example of the query filters applied to invoices, in this example, we will return a list of invoices filtered by `totalVcuAmount` and `status`. To use more than one filter on the same query, they must be separated by a tilde (~).

The filter syntax is `?filter-by=filter1:value2~filter2:value2`, as for the filters with the `in` operator, the values must be separated by a hyphen -.

The following example will illustrate querying invoices with `totalVcuAmount` greater or equal to 30, that have a `status` either `Paid` or `Pending` (enum status names are case insensitive)

**Response Parameters**

| Parameter | Description                   |
| --------- | ----------------------------- |
| items     | An array of filtered invoices |

### Request Example

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/invoices/invoices?sort-by=totalVcuAmount_asc&filter-by=totalVcuAmount_ge:30~status_in:Paid-pending',
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
