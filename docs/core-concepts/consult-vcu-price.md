---
sidebar_position: 2
---

# Consulting VCU Price

Pricing related requests.

## GET Vcu Price

`/v1/customers/applications?page=2&page-size=10`

Retrieves the VCU unitary price.

**Response Attributes**

Attribute   | Description
--------- | ------
vcuPrice |	The price applied for 1 VCU (equivalent to 1 ton CO2eq)
currency |	The currency of the price for which the price was calculated

### Example Request

```javascript
curl --location -g --request GET '{{url}}/v1/prices?vcu-amount=1000000'
```
_This request is using **Bearer Token**_

### Example Response


```json
{
  "vcuPrice": 77,
  "currency": "BRL"
}
```

```md title="PARAMS"
vcu-amount: 10
target-currency: BRL (Optional. Default value is BRL)
```
_We currently have `BRL` and `USD` currency options, in the future we will expand options._
