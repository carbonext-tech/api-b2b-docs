---
sidebar_position: 5
custom_edit_url: null
---

# Orders

In the B2B API, an order is a call for a specific amount of VCU, the amount of which will be debited from the customer's balance and a Carbonext certificate issued in their name or someone else's, through the ``certificateRecipientInfo`` attribute.

## Order [POST]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/orders
```

This request creates an order.

**Request Attributes**

| Attribute      | Description                                         |
| -------------- | --------------------------------------------------- |
| vcuAmount      | The amount of VCUs assigned to the order            |
| targetCurrency | The desired currency for the order to be charged in |
| certificateRecipientInfo | Information of the recipient to whom the certificate will be issued for |
| metaData | String field you can use to write extra information about your order. Up to 500 characters. |


| CertificateRecipientInfo      | Description                                         |
| -------------- | --------------------------------------------------- |
| name      | Name of the party to whom the certificate will be issued for |
| email | E-mail address of the party to whom the certificate will be issued for. The certificate will be sent to this email |
| taxId | Document ID of the party to whom the certificate will be issued for |

**Response Attributes**

| Attribute      | Description                                             |
| -------------- | ------------------------------------------------------- |
| id             | The generated order ID                                  |
| vcuAmount      | The total amount of VCUs requested in the order         |
| vcuUnitPrice   | The unit price of a VCU at the time of order completion |
| targetCurrency | The currency in which the order will be charged in      |
| status         | Discloses the order's current status                    |
| createdAt      | Discloses the order's current status                    |
| metaData       | String field you can use to write extra information about your order. Up to 500 characters. |

### Example Request

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "vcuAmount": 0.02,
  "targetCurrency": "BRL",
  "certificateRecipientInfo": {
    "name": "Danilo 50",
    "email": "danilo.souza+teste50@carbonext.com.br",
    "taxId": "000.000.000-00"
  }
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI', 
    'Content-Type': 'application/json'
  },
  data : data
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
  "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
  "vcuAmount": 0.02,
  "vcuUnitPrice": 110.0,
  "totalPrice": 2.200,
  "targetCurrency": "BRL",
  "status": "Issued",
  "createdAt": "2022-07-24T18:26:44.4176783Z",
  "notifyCertificateTo": null,
  "type": "Postpaid",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Danilo 50",
    "email": "danilo.souza+teste50@carbonext.com.br",
    "taxId": "000.000.000-00"
  }
}
```

## Cancel Order [POST]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/orders/:orderId/cancel`
```

This request cancels an order. The order can only be canceled when it has been issued(after it has been created, but before it has been paid for).

**Response Attributes**

| Attribute      | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| Id             | The order's Id                                                |
| vcuAmount      | The amount of VCUs that this order was handling               |
| vcuUnitPrice   | The VCU price when the order was created                      |
| targetCurrency | The currency this order was being handled in                  |
| status         | Name of the order's current status, the value will be "Cancelled" |
| createdAt      | The date and time this order was created                      |
| metaData | String field you can use to write extra information about your order. Up to 500 characters. |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders/4158d5d1-9364-46e6-8d0d-451f528261e7/cancel',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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

### Example Response

```json
{
  "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
  "vcuAmount": 0.02,
  "vcuUnitPrice": 110.0,
  "totalPrice": 2.200,
  "targetCurrency": "BRL",
  "status": "Cancelled",
  "createdAt": "2022-07-24T18:26:44.417678",
  "notifyCertificateTo": null,
  "type": "Postpaid",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Danilo 50",
    "email": "danilo.souza+teste50@carbonext.com.br",
    "taxId": "000.000.000-00"
  }
}
```

```md title="PATH VARIABLES"
orderId: 4158d5d1-9364-46e6-8d0d-451f528261e7
```

## Cancel Orders [POST]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/orders/cancel`
```

Orders can also be cancelled in batches.

**Request parameters**

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| ordersIds | An array of Ids of the orders to be cancelled |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders/4158d5d1-9364-46e6-8d0d-451f528261e7/cancel',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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

### Example Response

```javascript
{
  "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
  "vcuAmount": 0.02,
  "vcuUnitPrice": 110.0,
  "totalPrice": 2.200,
  "targetCurrency": "BRL",
  "status": "Cancelled",
  "createdAt": "2022-07-24T18:26:44.417678",
  "notifyCertificateTo": null,
  "type": "Postpaid",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Danilo 50",
    "email": "danilo.souza+teste50@carbonext.com.br",
    "taxId": "000.000.000-00"
  }
}
```

## Orders [GET]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/orders?page=1&page-size=6`
```

This request returns a paginated list of orders.

**Response attributes**

| Attribute | Description                                    |
| --------- | ---------------------------------------------- |
| items     | An array of paginated orders from the customer |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders?page=1&page-size=100&sort-by=createdAt_desc',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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

### Example Response

```json
{
  "items": [
    {
      "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
      "vcuAmount": 0.02,
      "vcuUnitPrice": 110.0,
      "totalPrice": 2.200,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "2022-07-24T18:26:44.417678",
      "notifyCertificateTo": null,
      "type": "Postpaid",
      "paymentDate": null,
      "metaData": null,
      "retireForRecipient": false,
      "certificateRecipientInfo": {
        "name": "Danilo 50",
        "email": "danilo.souza+teste50@carbonext.com.br",
        "taxId": "000.000.000-00"
      },
      "invoices": [],
      "subscriptions": []
    },
    {
      "id": "07c8543f-752f-43c7-af65-04a6cf3c8841",
      "vcuAmount": 0.02,
      "vcuUnitPrice": 110.00,
      "totalPrice": 2.2000,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "2022-07-21T19:11:05.698421",
      "notifyCertificateTo": null,
      "type": "Postpaid",
      "paymentDate": null,
      "metaData": null,
      "retireForRecipient": false,
      "certificateRecipientInfo": {
        "name": "Danilo 50",
        "email": "danilo.souza+teste50@carbonext.com.br",
        "taxId": "000.000.000-00"
      },
      "invoices": [],
      "subscriptions": []
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 2,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 6
```
