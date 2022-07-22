---
sidebar_position: 3
custom_edit_url: null
---

# Balance

The request on this page refers to customer balance.

The balance is the difference between paid invoices, which generate credits, and all non-canceled orders created for the customer, alongside detailed information for future debt, which is the non-billed orders.

## Balance [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/balance
```

This request returns the balance of the customer for each currency it has orders and/or invoices in.

```md title="Required permissions"
financial_write
financial_read
```

**Request parameters**

| Parameter (opcional)               | Description                                                                                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startDate<br/>`Format: YYYY-MM-DD` | Sets the start date to perform balance calculation from. This parameter is optional, if omitted the API will calculate the balance from the very first order and/or invoice. |
| endDate<br/>`Format: YYYY-MM-DD`   | Sets the end date to perform balance calculation. This parameter is optional, if omitted the API will calculate the balance until the current date.                       |

**Response parameters**

| Attribute          | Description                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| startDate          | The date the request started looking for data. Will only appear in the response if it was part of the request. |
| endDate            | The date the request stopped looking for data. Will only appear in the response if it was part of the request. |
| balancesByCurrency | An array of objects, each containing a VcuBalance object, and the currency used to create orders.              |

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/customers/balance',
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

### Example Response

```json
{
  "startDate": "2022-07-21T19:07:19.634916",
  "endDate": "2022-07-22T17:03:29.6645009Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 1.0,
        "credit": 1.0,
        "debt": 0.0,
        "futureDebt": 0.02
      }
    }
  ]
}
```
