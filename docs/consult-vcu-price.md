---
sidebar_position: 4
custom_edit_url: null
---

# VCU Price

Endpoint to consult the price of the VCU (Verified Carbon Unit).

## VCU Price [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1&target-currency=BRL
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
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1',
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
  "vcuPrice": 137.5,
  "currency": "BRL"
}
```
