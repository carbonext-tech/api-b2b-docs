---
sidebar_position: 3
custom_edit_url: null
---

# Invoices

After generating orders, we need to generate the invoices for said orders. On this page we will learn how to create requests for these invoices.

## Invoices [POST]

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
curl 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "ordersIds":[
        "f4f7e937-c5ae-4d85-be5f-13ad804c0670"
    ],
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}
```

With `ordersCreatedFrom` the request will create an invoice from the date received to the current day.

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "ordersCreatedFrom":"01/01/2022 22:09:40",
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}
```

Lastly, if you have a specific time interval, you can declare in the `ordersCreatedTo` attribute. It also works without the `ordersCreatedFrom`, this way an invoice is generated for all orders created before the date described.

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "ordersCreatedFrom":"01/01/2022 22:09:40",
    "ordersCreatedTo":"05/01/2022 12:00:00",
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}
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
```

## Invoices [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices
```

This request returns a paginated list of invoices.

**Response Attributes**

| Attribute       | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| items           | An object containing all invoices related to the customer id   |

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "id": "8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd",
      "status": "Pending",
      "totalVcuAmount": 200,
      "totalPrice": 15400,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "c9dd9aca-e258-4e9a-82a7-f2a70815c193",
          "vcuAmount": 200,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "22/10/2021 00:36:16"
        }
      ]
    },
    {
      "id": "a1da7c6b-b94e-4e68-aa69-bfa7f2bb9b15",
      "status": "Paid",
      "totalVcuAmount": 75,
      "totalPrice": 5775,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "712a7f26-cfe2-48db-afca-e79805238756",
          "vcuAmount": 55,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 23:44:33"
        }
      ]
    },
    {
      "id": "a4bc61bf-1b2b-4216-94ed-b434d5843542",
      "status": "Paid",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "7caee506-fc6c-4cb3-8826-9bdc0855eb4a",
          "vcuAmount": 55,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Paid",
          "createdAt": "21/10/2021 23:42:59"
        },
        {
          "id": "815873f3-54d3-4e11-bbbd-05f76aaec3df",
          "vcuAmount": 50,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 22:36:40"
        },
        {
          "id": "c99a2da7-ab55-4156-ac4e-d6f3df7d3d28",
          "vcuAmount": 30,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 22:36:23"
        }
      ]
    },
    {
      "id": "b81ebfbe-984c-40cc-a7fc-1e33fa926176",
      "status": "Paid",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "7caee506-fc6c-4cb3-8826-9bdc0855eb4a",
          "vcuAmount": 55,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Paid",
          "createdAt": "21/10/2021 23:42:59"
        },
        {
          "id": "815873f3-54d3-4e11-bbbd-05f76aaec3df",
          "vcuAmount": 50,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 22:36:40"
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 4,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Invoices by Status [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices?status=0
```

This request returns a paginated list of invoices filtered by status.

You can filter between  5 different statuses: pending, overdue, paid, cancelled and refunded.

**Response Attributes**

| Attribute           | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| items               | An object containing all invoices related to the customer id       |

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/invoices?status=0' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "id": "3951ae7b-2c3d-4bd8-a05c-7755328413b5",
      "status": "Pending",
      "totalVcuAmount": 60,
      "totalPrice": 4620,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": [
        {
          "id": "383e9c41-0283-45fb-b3ba-efe83f4fd1d6",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:09:44",
          "notifyCertificateTo": null
        },
        {
          "id": "a460ec3c-53be-4ed3-84be-1d10405a43ad",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:09:39",
          "notifyCertificateTo": null
        },
        {
          "id": "be673ce7-dd7f-4b56-b8cd-410fce4b86c0",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:09:50",
          "notifyCertificateTo": null
        },
        {
          "id": "f4f7e937-c5ae-4d85-be5f-13ad804c0670",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:09:35",
          "notifyCertificateTo": null
        }
      ]
    },
    {
      "id": "5a8ff819-f60b-450b-9efb-f62c1445d511",
      "status": "Pending",
      "totalVcuAmount": 45,
      "totalPrice": 3465,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": [
        {
          "id": "0bb75e76-5369-4372-809f-1696fbf99e72",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:07:16",
          "notifyCertificateTo": null
        },
        {
          "id": "579691a2-935f-4330-a3d4-f30552aee4e2",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:04:40",
          "notifyCertificateTo": null
        },
        {
          "id": "a8c3a36a-48e5-4714-bec3-1f640095b4f1",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:04:46",
          "notifyCertificateTo": null
        }
      ]
    },
    {
      "id": "5e27bd46-95ce-4fd1-86c6-04fbd18e45bb",
      "status": "Pending",
      "totalVcuAmount": 45,
      "totalPrice": 3465,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": [
        {
          "id": "00223e7b-3026-43be-a010-05d77b473345",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:17:26",
          "notifyCertificateTo": null
        },
        {
          "id": "186d3e5f-13fe-4606-89f0-b9c006952610",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:18:08",
          "notifyCertificateTo": null
        },
        {
          "id": "be629b4b-47e2-401b-bc4c-1a48d621587b",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:18:12",
          "notifyCertificateTo": null
        }
      ]
    },
    {
      "id": "8b864cbf-c181-4405-b119-91b2f63b1954",
      "status": "Pending",
      "totalVcuAmount": 30,
      "totalPrice": 2310,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": [
        {
          "id": "392e62f5-1a4c-43d4-a5e0-ccc51fd422c0",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:17:47",
          "notifyCertificateTo": null
        },
        {
          "id": "bd72c178-bbe9-4c18-83cb-522ac284a99a",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:17:30",
          "notifyCertificateTo": null
        }
      ]
    },
    {
      "id": "9007c2c9-2b10-4f29-bf34-2fb328ac8823",
      "status": "Pending",
      "totalVcuAmount": 0,
      "totalPrice": 0,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": []
    },
    {
      "id": "b92c0e55-45b0-4be2-9b85-c28d834137eb",
      "status": "Pending",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": []
    },
    {
      "id": "e13d4965-c003-42f2-938f-a2b0add0f1e1",
      "status": "Pending",
      "totalVcuAmount": 15,
      "totalPrice": 1155,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": [
        {
          "id": "a9f65168-dfa2-4af5-a623-d2d25ef03e6f",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:17:52",
          "notifyCertificateTo": null
        }
      ]
    },
    {
      "id": "fde9bbcd-7a09-4af1-a7b6-fc6ff3180656",
      "status": "Pending",
      "totalVcuAmount": 15,
      "totalPrice": 1155,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "orders": [
        {
          "id": "00223e7b-3026-43be-a010-05d77b473345",
          "vcuAmount": 15,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "01/05/2022 22:17:26",
          "notifyCertificateTo": null
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 8,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PATH VARIABLES"
status: 0 (Pending)
status: 1 (Overdue)
status: 2 (Paid)
status: 3 (Cancelled)
status: 4 (Refunded)
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
| orders         | List of orders attached to the invoice                                              |

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/invoices/8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd'
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "id": "8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd",
  "status": "Pending",
  "totalVcuAmount": 200,
  "totalPrice": 15400,
  "currency": "BRL",
  "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
  "orders": [
    {
      "id": "c9dd9aca-e258-4e9a-82a7-f2a70815c193",
      "vcuAmount": 200,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "22/10/2021 00:36:16"
    }
  ]
}
```

```md title="PATH VARIABLES"
id: 8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd
```
