---
sidebar_position: 5
custom_edit_url: null
---

# Balance

The request in this page refers to customer balance.

This is a sum of all invoices (which generate carbon credits) and orders (which generate debt), alongside with detailed information of open invoices (debit) and non billed orders to the customer.

## Balance [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/balance
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
| endDate<br/>`Format: YYYY-MM-DD`   | Sets the end date to perform balance calculation to. This parameter is optional, if omitted the API will calculate the balance until the current date.                       |

**Response parameters**

| Attribute          | Description                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| startDate          | The date the request started looking for data. Will only appear in the response if it was part of the request. |
| endDate            | The date the request stopped looking for data. Will only appear in the response if it was part of the request. |
| balancesByCurrency | An array of objects, each containing a VcuBalance object, and the currency used to create orders.              |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/customers/balance' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "startDate": "2021-12-06T13:57:02.360827",
  "endDate": "2022-02-11T21:54:29.3093176Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 18657.993454505508869857137455,
        "credit": 20000,
        "debt": 1342.0065454944911301428625454,
        "futureDebt": 5
      }
    }
  ]
}
```
