---
sidebar_position: 2
custom_edit_url: null
---

# Orders

In the B2B API, an order is a call for a specific amount of VCU, that will be debited from the customers balance. This order, when paid, will generate a certificate issued by Carbonext on behalf of the customer.

## Order [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders
```

This request creates an order.

**Request Attributes**

| Attribute      | Description                                         |
| -------------- | --------------------------------------------------- |
| vcuAmount      | The amount of VCUs assigned to the order            |
| targetCurrency | The desired currency for the order to be charged in |

**Response Attributes**

| Attribute      | Description                                             |
| -------------- | ------------------------------------------------------- |
| id             | The generated order ID                                  |
| vcuAmount      | The total amount of VCUs requested in the order         |
| vcuUnitPrice   | The unit price of a VCU at the time of order completion |
| targetCurrency | The currency in which the order will be charged in      |
| status         | Discloses the order's current status                    |
| createdAt      | Discloses the order's current status                    |

### Example Request

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/orders' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "vcuAmount":150,
    "targetCurrency":"BRL"
}'
```

### Example Response

```json
{
  "id": "f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2",
  "vcuAmount": 150,
  "vcuUnitPrice": 77,
  "targetCurrency": "BRL",
  "status": "Issued",
  "createdAt": "28/10/2021 21:12:14"
}
```

## Cancel Order [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders/:orderId/cancel
```

This request cancels an order. The order can only be canceled when it has been issued(after it has been created, but before it has been paid for).

**Response Attributes**

| Attribute      | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| Id             | The order's Id                                                |
| vcuAmount      | The amount of VCUs that this order was handling               |
| vcuUnitPrice   | The VCU price when the order was created                      |
| targetCurrency | The currency this order was being handled in                  |
| status         | Name of the order's current status, value will be "Cancelled" |
| createdAt      | The date and time this order was created                      |

### Example Request

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/orders/f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2/cancel' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "id": "f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2",
  "vcuAmount": 150,
  "vcuUnitPrice": 77,
  "targetCurrency": "BRL",
  "status": "Cancelled",
  "createdAt": "28/10/2021 21:12:14"
}
```

```md title="PATH VARIABLES"
orderId: f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2
```

## Cancel Orders [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders/cancel
```

Orders can also be cancelled in batches.

**Request parameters**

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| ordersIds | An array of Ids of the orders to be cancelled |

Returns `true` if, and only if, all orders were successfully cancelled.

### Example Request

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/orders/cancel' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersIds":
    [
        "14a60138-d078-4f1d-b72a-87f0820b7ccb"
    ]
}'
```

### Example Response

```javascript
true;
```

## Orders [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=100
```

This request returns a paginated list of orders.

**Response attributes**

| Attribute | Description                                    |
| --------- | ---------------------------------------------- |
| items     | An array of paginated orders from the customer |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=6' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "id": "10c3d119-433d-49c8-a7d3-d471a6473669",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "20/10/2021 20:39:35"
    },
    {
      "id": "bd437c96-1bb2-44b6-90bc-c4ae8ae8f226",
      "vcuAmount": 30,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Refunded",
      "createdAt": "20/10/2021 21:51:06"
    },
    {
      "id": "e17c0ffb-c5d9-4a7f-b17a-19809ddad5c5",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "20/10/2021 22:47:56"
    },
    {
      "id": "40c99e49-4994-48e4-b41f-f0c03c6efa0f",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Issued",
      "createdAt": "20/10/2021 22:47:40"
    },
    {
      "id": "aac91e0b-0d7c-42aa-919f-2c62f0808f76",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "20/10/2021 22:47:57"
    },
    {
      "id": "4fab5861-b549-4a8c-9d01-dbbd2c09c87d",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Billed",
      "createdAt": "20/10/2021 22:47:39"
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 6,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 6
```
