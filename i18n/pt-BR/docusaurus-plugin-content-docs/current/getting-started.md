---
sidebar_position: 2
custom_edit_url: null
---

# Vamos Começar

## Passo 1 - Adquirindo as Credenciais

O acesso aos endpoints da API está ligado à autenticação e não responde sem o uso do **token**, portanto é preciso que primeiro você crie um usuário e gere o certificado para acesso da sua API.

Para efeito de testes com a aplicação, usaremos o ambiente de homologação para:
- criar seu usuário;
- cadastrar sua empresa;
- gerar sua compra com uma numeração de cartão de crédito sem autenticação nesse ambiente.

Então acesse [https://b2b-hml.carbonext.com.br/signup](https://b2b-hml.carbonext.com.br/signup).

- Preencha todos os campos;
- Clique em **Cadastrar e continuar**;
- Preencha o cartão com o número `4242 4242 4242 4242` com qualquer **CVC** e qualquer **data de validade** futura;
- Adicione o número de **VCUs** que você deseja comprar;
- Clique em **Comprar e continuar**.

:::tip chaves geradas

Parabéns, você acabou de gerar seu `client_id` e `client_secret` que serão usados na integração, salve-os em um local seguro, pois eles serão exibidos apenas uma vez e serão usados para autorizar o acesso pela sua API (`M2M`) logo em seguida.

::: 

## Passo 2 - Adquirindo o Token de Acesso

Usando seu software de testes de endpoint, crie uma requisição com o método **POST** e adicione a seguinte URL de homologação na API:

```md title="BASE URL"
https://auth-hml.carbonext.com.br/auth/realms/co2free/protocol/openid-connect/token
```

Em **Body > x-www-form-urlencoded** adicione as chaves e seus valores correspondentes seguindo o exemplo de requisição a seguir:

### Exemplo de Requisição

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

Ao enviar a requisição, teremos como retorno o `access_token` que permitirá interagir com nossos endpoints.

### Exemplo de Resposta

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

## Passo 3 - Consultando o Preço do VCU

Agora que temos a autorização necessária vamos consultar o preço da VCU, crie uma requisição com o método GET e adicione a seguinte URL:

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1
```

Note que passamos a quantidade de VCUs (`vcu-amount`) para a consulta de preço.

Em **Authorization**, troque o **Type** para **Bearer Token** e cole o seu `access_token` em **Value**.

### Exemplo de Requisição

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

### Exemplo de Resposta

```json
{
  "vcuPrice": 110.5,
  "currency": "BRL"
}
```

## Passo 4 - Criando um Pedido para Comprar VCUs

Chegou a hora de fazer o primeiro pedido, é agora que será efetivada a quantidade de VCUs necessárias para neutralizar seu consumo no período desejado, [calcule aqui](https://api-docs.carbonext.com.br/pt-BR/docs/calculators), crie uma nova requisição com o método POST e adicione a URL:

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/orders
```

Em **Authorization**, troque o **Type** para **Bearer Token** e cole o seu `access_token` em **Value** e no **Body**, selecione o tipo **JSON** com os seguintes dados:

```json
{
  "vcuAmount":3,
  "targetCurrency":"BRL",
  "certificateRecipientInfo": {}
}
```

### Exemplo de Requisição

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

### Exemplo de Resposta

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

## Passo 5 - Consultando seu Saldo Atual

Agora, você pode consultar o seu saldo atualizado, para isso crie uma nova requisição com o método GET e adicione a seguinte URL.

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/balance
```

Em **Authorization**, troque o valor do **Type** para **Bearer Token** e cole o seu `access_token` em **Value**.

### Exemplo de Requisição

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

### Exemplo de Resposta

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
Veremos mais sobre as requisições de autorização e outros conceitos na próxima página.
:::
