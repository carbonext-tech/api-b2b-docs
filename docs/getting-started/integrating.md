---
sidebar_position: 2
custom_edit_url: null
---

# Integrating

## Step 1 - Acquiring the Access Token

Using your endpoint testing software, create a request with the **POST** method and add the following approval URL to the API:

```md title="BASE URL"
https://auth-hml.carbonext.com.br/auth/realms/co2free/protocol/openid-connect/token
```

In **Body > x-www-form-urlencoded** add the keys and their corresponding values following the request example below:

### Exemple Request

```javascript
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'client_id': 'cbx_b2b_3fe7cbb3-212b-4591-acb3-009ca9e57ff7',
  'client_secret': '7beb0588-edb3-44f4-bbfc-9779cd5c9dbf',
  'grant_type': 'client_credentials' 
});
var config = {
  method: 'post',
  url: 'https://auth-hml.carbonext.com.br/auth/realms/co2free/protocol/openid-connect/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
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

When sending the request, we will return the `access_token` that will allow us to interact with our endpoints.

### Sample Answer

```json
{
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "expires_in": 36000,
  "refresh_expires_in": 0,
  "token_type": "Bearer",
  "not-before-policy": 0,
  "scope": "profile email roles"
}
```

## Step 2 - Querying the VCU Price

Now that we have the necessary authorization, let's check the price of the VCU, create a request with the GET method and add the following URL:

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1
```

Note that we pass the amount of VCUs (`vcu-amount`) to the price query.

In **Authorization**, change the **Type** to **Bearer Token** and paste your `access_token` in **Value**.

### Sample Request

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

### Sample Answer

```json
{
  "vcuPrice": 110.5,
  "currency": "BRL"
}
```

## Step 3 - Creating an VCU Order

The time has come to place the first order, it is now that the amount of VCUs necessary to neutralize your emissions in the desired period will be indicated, create a new request with the POST method and add the URL:

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/orders
```

In **Authorization**, change the **Type** to **Bearer Token** and paste your `access_token` in **Value** and in **Body**, select the type **JSON** with the following data:

```json
{
  "vcuAmount":3,
  "targetCurrency":"BRL",
  "certificateRecipientInfo": {}
}
```

### Sample Request

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "vcuAmount": 3,
  "targetCurrency": "BRL"
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI', 
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Sample Answer

```json
{
  "id": "c74de45c-7c6e-4f64-8a1f-271536445abc",
  "vcuAmount": 3,
  "vcuUnitPrice": 110.00,
  "totalPrice": 330,
  "targetCurrency": "BRL",
  "status": "Paid",
  "createdAt": "2022-07-12T14:34:17.075459",
  "notifyCertificateTo": null,
  "type": "Subscription",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Empresa First",
    "email": "example@email.com",
    "taxId": "62.650.503/7304-86"
  }
}
```

## Step 4 - Checking your Current Balance

Now, you can check your updated balance, for that create a new request with the GET method and add the following URL.


```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/balance
```

In **Authorization**, change the value of **Type** to **Bearer Token** and paste your `access_token` in **Value**.

### Sample Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/customers/balance',
  headers: { 
    'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI'
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

### Sample Answer

```json
{
  "startDate": "2022-07-12T14:12:13.714817",
  "endDate": "2022-07-21T17:00:25.0851306Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 15.997878,
        "credit": 16.0,
        "debt": 37.53443683424,
        "futureDebt": 9.0
      }
    }
  ]
}
```

:::info
We'll see more about authorization requests and other concepts on the next page.
:::
