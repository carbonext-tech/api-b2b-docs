---
sidebar_position: 2
custom_edit_url: null
---

# Orders

This page presents requests related to orders. Orders refer to requests for carbon credit (VCU) purchases.

## Order [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders
```

This request creates an order.

**Request Attributes**

Attribute   | Description
--------- | ------
vcuAmount |	The amount of VCUs assigned to the order
targetCurrency |	The desired currency for the order to be charged in
payWithBalance |	Flag (boolean) indicating if this order should automatically discount from customer balance (this indicates if the customer is allowed to create orders after completing payment)

**Response Attributes**

Attribute   | Description
--------- | ------
id |	The generated order ID
vcuAmount |	The total amount of VCU requested in the order
vcuUnitPrice |	The unit price of a VCU at the time the order completion
targetCurrency |	The currency in which the order will be charged in
status |	Discloses the order's current status
createdAt |	The date and time the order was created

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "vcuAmount":150,
    "targetCurrency":"BRL",
    "PayWithBalance":false
}
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

This request cancels an order. The order can only be canceled when it has been issued(after it has been created but before being paid for).

**Response Attributes**

Attribute   | Description
--------- | ------
Id |	The order's Id
vcuAmount |	The amount of VCUs that this order was handling
vcuUnitPrice |	The VCU price when the order was created
targetCurrency |	The currency this order was being handled in
status |	Name of the order's current status, value will be "Cancelled"
createdAt |	The date and time this order was created

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders/f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2/cancel' \
    -H 'Accept: application/json' \
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

Parameter   | Description
--------- | ------
ordersIds |	An array of Ids of the orders to be cancelled

Returns `true` if, and only if, all orders were successfully cancelled.

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders/cancel' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "ordersIds":
    [
        "14a60138-d078-4f1d-b72a-87f0820b7ccb"
    ]
}
```

### Example Response

```javascript
true
```

## Orders [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=100
```

This request returns a paginated list of orders.

**Response attributes**

Attribute   | Description
--------- | ------
items |	An array of paginated orders from the customer

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=100' \
    -H 'Accept: application/json' \
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
    },
    {
      "id": "9ec1fd16-8c37-479d-b526-fb5695da52c9",
      "vcuAmount": 200,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "26/10/2021 14:32:02"
    },
    {
      "id": "701a4033-10d0-4d73-9794-ff55d112b152",
      "vcuAmount": 35,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "20/10/2021 21:51:23"
    },
    {
      "id": "ed566197-6733-4016-a9d8-995bfee7d1ab",
      "vcuAmount": 389,
      "vcuUnitPrice": 13,
      "targetCurrency": "USD",
      "status": "Issued",
      "createdAt": "20/10/2021 20:20:49"
    },
    {
      "id": "4865ea28-175f-472f-a758-842e0123013b",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "20/10/2021 20:41:59"
    },
    {
      "id": "03fac3f2-75b9-4b07-9c41-0b5bc43491db",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 20:42:01"
    },
    {
      "id": "3f86638e-682b-4b6d-a652-0749797e2769",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 20:42:03"
    },
    {
      "id": "197b53bf-9511-4300-8610-6f11a0cfe8f5",
      "vcuAmount": 2,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "26/10/2021 14:04:20"
    },
    {
      "id": "6b7f9616-c192-490f-83e1-a5fab9301aaa",
      "vcuAmount": 200,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "26/10/2021 14:36:38"
    },
    {
      "id": "a3e19ea0-b51f-43cc-ae66-3ca19c8228aa",
      "vcuAmount": 20,
      "vcuUnitPrice": 13,
      "targetCurrency": "USD",
      "status": "Billed",
      "createdAt": "20/10/2021 22:13:20"
    },
    {
      "id": "e334d5f4-297c-43e3-9de5-faafbd3eddc5",
      "vcuAmount": 1,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Billed",
      "createdAt": "20/10/2021 22:12:57"
    },
    {
      "id": "3a35f21c-fc1c-43a2-9d29-1d2994603f6d",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Paid",
      "createdAt": "20/10/2021 22:15:26"
    },
    {
      "id": "b240dde1-50d4-4181-a65b-8268a65b935e",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Paid",
      "createdAt": "20/10/2021 22:14:58"
    },
    {
      "id": "d14b044e-a93f-4f57-8042-5ea4e1e3a321",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Paid",
      "createdAt": "20/10/2021 22:14:59"
    },
    {
      "id": "d707659b-d9e5-4cc6-804c-2e95074842b0",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "20/10/2021 20:42:05"
    },
    {
      "id": "8241a6ba-b640-411c-97b1-c250e517a125",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 23:13:06"
    },
    {
      "id": "a5f27f27-2df1-4c2f-8a97-05ad4f1a1747",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 23:13:08"
    },
    {
      "id": "03a487c2-c04c-4d63-9e3a-082289537eab",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:22:05"
    },
    {
      "id": "79dc91f6-9151-458d-b1f8-1286191249f2",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:25:58"
    },
    {
      "id": "bf55d474-6552-49c4-a291-9e08ca83a1ca",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:38:15"
    },
    {
      "id": "d863bbab-7875-4fed-bae8-e68d652c48a2",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:53:27"
    },
    {
      "id": "555a6574-6064-4f5c-91c5-e1e3fb405f08",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:56:35"
    },
    {
      "id": "4b22c73c-1581-4297-8b3a-ab6191e0dc4c",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "11/11/2021 19:57:18"
    },
    {
      "id": "954cde42-c604-401e-aae8-4daa8c337e6f",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "11/11/2021 20:01:21"
    },
    {
      "id": "5f2015f8-b210-43c7-9362-38c3c8096218",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:02:26"
    },
    {
      "id": "80f04b51-f165-4283-bc5a-c7e44d2a664a",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:05:25"
    },
    {
      "id": "08894710-9156-4b06-a9d3-b73445b7b6d1",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:05:44"
    },
    {
      "id": "82df37cc-8fc5-41fb-9ca7-34985e6b9b54",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:06:12"
    },
    {
      "id": "728b06d1-e777-4762-bf0f-debef64121aa",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:06:36"
    },
    {
      "id": "781ad7e6-3795-4880-9634-ae7096d122b9",
      "vcuAmount": 0.2,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "11/11/2021 20:06:49"
    },
    {
      "id": "9b3715d4-0fb6-4e4f-a828-f57a6c93e500",
      "vcuAmount": 0.2,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:08:50"
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 36,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 100
```
