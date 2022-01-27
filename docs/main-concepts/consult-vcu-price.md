---
sidebar_position: 1
custom_edit_url: null
---

# VCU Price

Let's see how to query the price of the VCU (Verified Carbon Unity).

## Vcu Price [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=10&target-currency=BRL
```

This endpoint will return the unit price of the VCU. It is very important to pass the `vcu-amount` in the query parameters. The `target-currency` parameter's default option is BRL(Brazilian Reais).

We currently have `BRL` and `USD`(US Dollars) currency options. We plan to expand our offerings to more currencies in the future.

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
