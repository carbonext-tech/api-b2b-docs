---
sidebar_position: 1
custom_edit_url: null
---

# VCU Price

Let's see how to query the price of the VCU (Verified Carbon Unity).

## VCU Price [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=10&target-currency=BRL
```

This endpoint will return the unit price of the VCU. It's very important to pass the `vcu-amount` through the query parameters and the `target-currency` can be considered optional. All prices are set in BRL by default.

Today our prices are solely indicated in BRL (Brazilian Reais) and USD (American Dollar). We plan to expand our offerings to more currency options in the future.

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
