---
sidebar_position: 2
custom_edit_url: null
---

# Getting Started

## Creating account

Let's start with a basic authentication so we can evolve with the other requests to our API. Access our [B2B site](https://b2b-hml.carbonext.com.br/auth/signup) in homologation environment to create a test account.

It's necessary to buy at least one carbon credit to generate your `client_id` and `client_secret` and create queries through our API, you can register a test credit card without authentication
to buy our VCU, fill in the form on the checkout page with the test credit card number `4242 4242 4242 4242` with any **CVC** and any future **expiration date**, add the number of **VCUs** you want to buy, click on **Comprar e continuar** and wait for the purchase confirmation.

:::tip keys generated

Congratulations you just generated your `client_id` and `client_secret`, save them in a safe place, because they will only be displayed once.

:::

## Authorization

Before making our first request, we need an authorization `token` that we receive through the following endpoint sending our `client_id` and `client_secret` in the body of the request in `urlencode` format.

### Example Request

```javascript
curl 'https://api-auth.carbonext.com.br/connect/userinfo' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=offline_access'
```

### Example Response

```json
{
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "token_type": "Bearer",
  "expires_in": 3596,
  "refresh_token": "cjju3PUmqzyw3vfp8aJ-afSFPwbObvOGweWKiQ5ezNA"
}
```

## Consulting VCU price

Now, we are ready.

Let's query the VCU price with the following example, passing `vcu-amount` as a parameter and our `access_token` in the **Header** of request.

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

Let's learn more about our authorization requests and other core concepts on the next pages.
