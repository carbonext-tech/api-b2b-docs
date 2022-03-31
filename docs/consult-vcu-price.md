---
sidebar_position: 4
custom_edit_url: null
---

# VCU Price

Let's see how to query the price of the VCU (Verified Carbon Unity).

## VCU Price [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=10&target-currency=BRL
```

This endpoint will return the unit price of the VCU. The `vcu-amount` and `target-currency` parameters are optional. Default values are `vcu-amount=1` and `target-currency=BRL`.
	
The currently accepted currencies are BRL (Brazilian Reais) and USD (American Dollar), we do plan on increasing this list in the future.

**Response Attributes**

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| vcuPrice  | The price applied for 1 VCU (equivalent to 1 ton CO2eq)      |
| currency  | The currency of the price for which the price was calculated |

### Example Request

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "vcuPrice": 137.5,
  "currency": "BRL"
}
```
