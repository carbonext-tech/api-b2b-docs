---
sidebar_position: 2
custom_edit_url: null
---

# Integrating

## Step 1 - Acquiring the Credentials

The following procedure is equivalent to the act of typing your username and password on the website and generating a certificate that allows access to your data, in the same way the integration with your system will be linked to authentication and no endpoint will respond without using the **token* *.

For testing purposes with the application, we will use the approval environment to:
- create your user;
- register your company;
- generate your purchase with a credit card number without authentication in this environment.

Then access [https://b2b-hml.carbonext.com.br/signup](https://b2b-hml.carbonext.com.br/signup).

- Fill in all fields;
- Click on **Register and continue**;
- Fill in the card with the number `4242 4242 4242 4242` with any **CVC** and any future **expiration date**;
- Add the number of **VCUs** you want to buy;
- Click on **Buy and Continue**.

:::tip generated keys

Congratulations, you've just generated your `client_id` and `client_secret` that will be used in the integration, save them in a safe place as they will only be displayed once and will be used to authorize access by your API (`M2M`) shortly thereafter.

:::

## Step 2 - Acquiring the Access Token

Using your endpoint testing software, create a request with the **POST** method and add the following approval URL to the API:

```md title="BASE URL"
https://auth-hml.carbonext.com.br/auth/realms/co2free/protocol/openid-connect/token
```

In **Body > x-www-form-urlencoded** add the keys and their corresponding values following the request example below:

### Sample Request

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

## Step 3 - Querying the VCU Price

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

## Step 4 - Creating an Order to Buy VCUs

The time has come to place the first order, it is now that the amount of VCUs necessary to neutralize your consumption in the desired period will be effected, [calculate here](https://api-docs.carbonext.com.br/pt-BR/ docs/calculators), create a new request with the POST method and add the URL:

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
   [
     {
      "id": "c74de45c-7c6e-4f64-8a1f-271536445abc",
      "vcuAmount": 1.77935976736,
      "vcuUnitPrice": 110.00,
      "totalPrice": 195.7295744096000,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "2022-07-12T14:34:17.075459",
      "notifyCertificateTo": null,
      "type": "Subscription",
      "paymentDate": null,
      "metaData": null,
      "retireForRecipient": false,
      "certificateRecipientInfo": {
        "name": "Empresa First",
        "email": "ricardo@gmail.com",
        "taxId": "62.650.503/7304-86"
      },
      "invoices": [],
      "subscriptions": []
      }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 41,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Step 5 - Checking your Current Balance

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
