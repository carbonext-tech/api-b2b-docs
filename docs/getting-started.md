---
sidebar_position: 2
custom_edit_url: null
---

# Getting Started

## Creating account

Let's start with a basic authentication so we can evolve with the other requests of our API. Accessing our B2B website and following these steps:

Click on **Enter** > **Click here to register** and fill in your company and administrator details.

To generate your keys and make queries in our API, it is necessary to buy at least one credit, fill in the form on the checkout page with the card number and number of VCUs, click on **Continue** and wait for the purchase confirmation.

:::tip keys generated

Congratulations you just generated your `client_id` and `client_secret`, save them in a safe place, because they will only be displayed once.

:::

## Authorization

Before making our first request, we need an authentication `token` that we receive through the following endpoint passing our `client_id` and `client_secret` in the body of the request in `urlencode` format.

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

Let's see more about our authorization requests and other concepts in the next page.