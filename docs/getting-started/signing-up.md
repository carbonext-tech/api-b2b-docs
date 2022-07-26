---
sidebar_position: 2
custom_edit_url: null
---

# Signing up

## Acquiring Credentials

The access to API endpoints is tied to authentication access and does not respond without using the **token**, so you first need to call a user and generate the certificate for your API.

For testing purposes with the application, use the prepaid payment method in the approval environment to:
- create your user;
- register your company;
- generate your purchase with a credit card number without authentication in this environment.

### Create your user

Access [https://b2b-hml.carbonext.com.br/signup](https://b2b-hml.carbonext.com.br/signup).


Click on `Criar conta`:

![Example Site](/img/examples/signing_up_01.png)


Fill in the data and click on `CADASTRAR`:

![Example Site](/img/examples/signing_up_02.png)

### Register the company

Scroll the bar to fill in the company data, read and accept the:
- Terms and conditions;
- Privacy Policy;
- Image usage terms.

And click on `Cadastrar e continuar`:

![Example Site](/img/examples/signing_up_03.png)
![Example Site](/img/examples/signing_up_04.png)

### Make your first purchase

**The unit of purchase of carbon credits is the VCU**, 1 VCU represents 1t (ton) of carbon gas that was not released into the atmosphere (tCO2eq), now make your first purchase:

- test credit card: `4242 4242 4242 4242`;
- CVC: `123`;
- expiration date: any future date.

And click `Comprar e continuar`:

![Example Site](/img/examples/signing_up_05.png)

### Access credentials

To ensure data security, your API will integrate with ours using the `client_credentials` `OAuth2` flow, at this point you must write down the access credentials (`client_id` and `client_secret`), as the `client_secret` will not be redisplayed and then click `Continuar`:

![Example Site](/img/examples/signing_up_06.png)

Congratulations, your test credits are available in our API, click `Dashboard` to continue.

![Example Site](/img/examples/signing_up_07.png)

### Dashboard

This is our dashboard, your VCU balance is displayed in `Balanço`.

![Example Site](/img/examples/signing_up_08.png)

### Credits

You can enter new credits by clicking on `Comprar créditos`

![Example Site](/img/examples/signing_up_09.png)

### Orders

You will place an order whenever you need to neutralize an amount of carbon in a given period, and you will pay for that order using your credit in VCU's, for that just click on `Pedidos` and `Novo`.

![Example Site](/img/examples/signing_up_10.png)

Fill in the amount of CO2 consumed in the period, [calculate your consumption](https://b2b-hml.carbonext.com.br/calculators/subscription), choose the currency and give a description and then click `SALVAR`.

![Example Site](/img/examples/signing_up_11.png)
