---
sidebar_position: 3
---

# Deal with Invoices

Invoice related requests.

## GET Invoices

`/v1/invoices`

This request returns a paginated list of invoices.

**Response Attributes**

Attribute   | Description
--------- | ------
items |	An object containing all invoices related to the customer id
id |	Invoice id
status |	The current status of an invoice.
totalVcuAmount |	Total amount of VCUs charged in the invoice
totalPrice |	The amount charged in the invoice,
currency |	The currency the invoice is charged in
customerId |	The Id of the customer that owns the invoice
orders |	List of orders attached to the invoice
id |	The order Id
vcuAmount |	The total amount of VCUs requested in this order
vcuUnitPrice |	The VCU unitary price at the time of the order's creation
targetCurrency |	The target currency the order is created in
status |	Name of the order's current status
createdAt |	The date and time the order was created
pageIndex |	The index of the returned page
totalPages |	The total number of pages
totalCount |	The total number of orders
hasPreviousPage |	Flag (boolean) indicating whether the list has a previous page
hasNextPage |	Flag (boolean) indicating whether the list has a next page

### Example Request

```javascript
curl --location -g --request GET '{{url}}/v1/invoices'
```
_This request is using **Bearer Token**_

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

## GET Invoice

`/v1/invoices/:id`

This request will return information about a specific invoice.

**Response Attributes**

Attribute   | Description
--------- | ------
id |	An invoice's id
status |	The status of an invoice
totalVcuAmount |	How many VCUs are being dealt in this invoice
totalPrice |	The amount of currency being dealt in this invoice, in the currency specified below
currency |	The currency being dealt in this invoice
customerId |	The Id of the customer that owns the invoice
orders |	List of orders attached to the invoice
id |	The order Id
vcuAmount |	The total amount of VCUs requested in this order
vcuUnitPrice |	The VCU unitary price at the time of the order's creation
targetCurrency |	The target currency the order is created in
status |	Name of the order's current status
createdAt |	The date and time the order was created

### Example Request

```javascript
curl --location -g --request GET '{{url}}/v1/invoices/8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd'
```
_This request is using **Bearer Token**_

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
