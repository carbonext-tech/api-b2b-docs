---
sidebar_position: 5
---

# Balance

The request in this page refers to customer balance.

## GET Balance

`/v1/customers/balance`

This request returns the balance of the customer for each currency it has orders and/or invoices in. The balance is a sum between invoices that generate credit and invoices that generate debt, alongside with detailed information of open invoices (debit) and non billed orders for the customer.

```md title="Required permissions"
financial_write
financial_read
```

**Request parameters**

Parameter   | Description
--------- | ------
startPeriod<br/>`Format: YYYY-MM-DD` |	Sets the start date to perform balance calculation from. This parameter is optional, if omitted the API will calculate the balance from the very first order and/or invoice.
endPeriod<br/>`Format: YYYY-MM-DD` |	Sets the end date to perform balance calculation to. This parameter is optional, if omitted the API will calculate the balance until the current date.

**Response parameters**

Attribute   | Description
--------- | ------
startPeriod |	The date the request started looking for data. Will only appear in the response if it was part of the request.
endPeriod |	The date the request stopped looking for data. Will only appear in the response if it was part of the request.
balancesByCurrency |	An array of objects, each containing a VcuBalance object, and the currency used to create orders.
currency |	The currency for this particular vcuBalance
vcuBalance |	The VcuBalance object
type |	The type of the value. This value is 'VCU'
balance |	Customer's balance (credit - usedCredit)
credit |	Sum of invoices that generate credit for the customer
usedCredit |	Sum of orders that consume from customer's balance
debit |	Sum of open (yet to be paid) invoices
futureDebit |	Sum of open orders (unbilled)

### Example Request

```javascript
curl --location -g --request GET '{{url}}/v1/invoices/balance'
```
_This request is using **Bearer Token**_

### Example Response


```json
{
  "startDate": "2021-10-20T21:36:29.347042",
  "endDate": "2021-10-27T19:09:27.1593907Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 15,
        "credit": 85,
        "usedCredit": 0,
        "debt": 70,
        "futureDebt": 452
      }
    },
    {
      "currency": "USD",
      "vcuBalance": {
        "type": "VCU",
        "balance": -17,
        "credit": 6,
        "usedCredit": 0,
        "debt": 23,
        "futureDebt": 391
      }
    }
  ]
}
```
