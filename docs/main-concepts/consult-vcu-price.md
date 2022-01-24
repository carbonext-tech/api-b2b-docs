---
sidebar_position: 1
---

# VCU Price

Let's see how to query the price of the VCU (Verified Carbon Unity).

## Vcu Price [GET]

`https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=10&target-currency=BRL`

This endpoint will return the unit price of the VCU, it is very important to pass the `vcu-amount` in the query parameters, the `target-currency` is optional and it's default value is BRL.

We currently have `BRL` and `USD` currency options, in the future we will expand options.

**Response Attributes**

Attribute   | Description
--------- | ------
vcuPrice |	The price applied for 1 VCU (equivalent to 1 ton CO2eq)
currency |	The currency of the price for which the price was calculated

### Example Request

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1000000' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "vcuPrice": 77,
  "currency": "BRL"
}
```
