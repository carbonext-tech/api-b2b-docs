---
sidebar_position: 6
custom_edit_url: null
---

# Invoices

Invoices can be created either by purchasing VCU credits or by billing open (non-paid) orders, in the later, the invoice can be paid by credit card or by bank slip (we do plan on accepting other payment types in the future).

<!-- ## Invoices [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices
```

This request will create an invoice, it can be done for a specific order or for a group in a certain period of time.

**Request Attributes**

| Attribute                    | Description                                             |
| ---------------------------- | ------------------------------------------------------- |
| ordersIds                    | An order's id                                           |
| ordersCreatedFrom (opcional) | Start date for selecting orders within a period of time |
| ordersCreatedTo (opcional)   | Order selection end date                                |
| vcuAmount                    | The vcu amount value                                    |
| targetCurrency               | The local currency                                      |

### Example Request

You can create an invoice in three different ways.

Without `ordersCreatedFrom` the request will use only `ordersIds` to create the invoice.

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersIds":[
        "f4f7e937-c5ae-4d85-be5f-13ad804c0670"
    ],
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}'
```

With `ordersCreatedFrom` the request will create an invoice from the date received to the current day.

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersCreatedFrom":"01/01/2022 22:09:40",
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}'
```

Lastly, if you have a specific time interval, you can declare in the `ordersCreatedTo` attribute. It also works without the `ordersCreatedFrom`, this way an invoice is generated for all orders created before the date described.

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersCreatedFrom":"01/01/2022 22:09:40",
    "ordersCreatedTo":"05/01/2022 12:00:00",
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}'
```

### Example Response

```json
{
  "id": "3951ae7b-2c3d-4bd8-a05c-7755328413b5",
  "status": "Pending",
  "totalVcuAmount": 60,
  "totalPrice": 4620,
  "currency": "BRL",
  "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
  "orders": [
    {
      "id": "f4f7e937-c5ae-4d85-be5f-13ad804c0670",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:35",
      "notifyCertificateTo": null
    },
    {
      "id": "383e9c41-0283-45fb-b3ba-efe83f4fd1d6",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:44",
      "notifyCertificateTo": null
    },
    {
      "id": "a460ec3c-53be-4ed3-84be-1d10405a43ad",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:39",
      "notifyCertificateTo": null
    },
    {
      "id": "be673ce7-dd7f-4b56-b8cd-410fce4b86c0",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:50",
      "notifyCertificateTo": null
    }
  ]
}
``` -->

## Invoices [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices
```

This request returns a paginated list of invoices.

**Response Attributes**

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| items     | An object containing all invoices related to the customer id |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/invoices?page=1&page-size=10&sort-by=totalVcuAmount_desc' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "id": "24882adc-d020-4e5a-ac26-36c12d24c507",
      "status": "Paid",
      "totalVcuAmount": 1.0,
      "totalPrice": 137.5,
      "currency": "BRL",
      "customerId": "c892597a-997c-4a6f-a4cf-6e370240edff",
      "createdAt": "2022-02-11T16:47:02.894999",
      "paidAt": "2022-02-11T16:47:05.226771",
      "dueDate": null
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 1,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Invoice [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices/:id
```

This request will return information about a specific invoice.

**Response Attributes**

| Attribute      | Description                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| id             | An invoice's id                                                                     |
| status         | The status of an invoice                                                            |
| totalVcuAmount | How many VCUs are being dealt in this invoice                                       |
| totalPrice     | The amount of currency being dealt in this invoice, in the currency specified below |
| currency       | The currency being dealt in this invoice                                            |
| customerId     | The Id of the customer that owns the invoice                                        |
| createdAt      | Date created                                                                        |
| paidAt         | Date it was paid                                                                    |
| dueDate        | Due date                                                                            |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/invoices/24882adc-d020-4e5a-ac26-36c12d24c507' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

```md title="PATH VARIABLES"
id: 24882adc-d020-4e5a-ac26-36c12d24c507
```

### Example Response

```json
{
  "id": "24882adc-d020-4e5a-ac26-36c12d24c507",
  "status": "Paid",
  "totalVcuAmount": 1.0,
  "totalPrice": 137.5,
  "currency": "BRL",
  "customerId": "c892597a-997c-4a6f-a4cf-6e370240edff",
  "createdAt": "2022-02-11T16:47:02.894999",
  "paidAt": "2022-02-11T16:47:05.226771",
  "dueDate": null
}
```