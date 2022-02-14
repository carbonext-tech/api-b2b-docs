---
sidebar_position: 2
custom_edit_url: null
---

# Getting Started

## Step 1 - Acquiring the Credentials

Let's start with a basic authentication so we can evolve with the other requests of our API.

To generate your keys and make queries in our API, it is necessary to buy at least one credit, so let's access our test environment and use a test credit card without authentication to buy our first VCU.

* Go to [https://b2b-hml.carbonext.com.br/auth/signup](https://b2b-hml.carbonext.com.br/auth/signup).

* Fill in all fields.

* Click on **Cadastrar e continuar**.

* Fill the credit card with the number `4242 4242 4242 4242` with any **CVC** and any future **expiration date**.

* Add the number of **VCUs** you want to buy.

* Click on **Comprar e continuar**.

:::tip keys generated

Congratulations you just generated your `client_id` and `client_secret`, save them in a safe place, because they will only be displayed once.

:::

## Step 2 - Acquiring the Access Token

Now we need an authorization `token`, for this, let's use the [Postman](https://www.postman.com/downloads/), an application to realize API tests.

After initialize Postman, create a new request with POST method and add the  following URL of our API in test environment.

```md title="BASE URL"
https://auth-hml.carbonext.com.br/connect/token
```

After this, bellow the URL click on **Body > x-www-form-urlencoded** and add the keys and they correspondent values following the next example request.

### Example Request

```javascript
curl -X POST 'https://auth-hml.carbonext.com.br/connect/token' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=offline_access'
```

Fill yours newly generated `client_id` and `client_secret`. This way, our request must be filled in as follows.

![Exemplo Postman](/img/examples/postman-1.jpg)

This endpoint will return the `access_token` as well as the `refresh_token`, that can be used to get another access token though the `OAuth2.0` refresh token flow, and the expires_in, witch represents the lifetime of the token in seconds.

### Example Response

```json
{
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "token_type": "Bearer",
  "expires_in": 3596,
  "refresh_token": "cjju3PUmqzyw3vfp8aJ-afSFPwbObvOGweWKiQ5ezNA"
}
```

## Step 3 - Retrieving the VCU Price

Now, you are ready.

Again in Postman, let's create a new request with GET method and add the following URL.

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1
```

The VCU amount is passed via the query string parameter `vcu-amount`.

Just below the URL, click on the **Authorization** option, change the value of **Type** to **Bearer Token** and paste your `access_token` in the field on the right.

Your request must be configured as follows.

![Exemplo Postman](/img/examples/postman-2.jpg)

### Example Request

```javascript
curl -X GET 'https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

We will have as response the following data.

### Example Response

```json
{
    "vcuPrice": 137.5,
    "currency": "BRL"
}
```

:::info
Let's see more about our authorization requests and other concepts in the next page.
:::
