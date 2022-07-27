---
sidebar_position: 5
custom_edit_url: null
---

# Pedidos

Na API B2B, um pedido é uma chamada de uma quantidade específica de VCU, cujo valor será debitado do saldo do cliente e um certificado Carbonext emitido em seu nome ou de outra pessoa, através do attributo ``certificateRecipientInfo``.

## Pedido [POST]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/orders
```

Esta requisição irá criar um pedido.

**Atributos de Requisição**

| Atributo       | Descrição                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vcuAmount      | A quantidade de VCUs atribuída ao pedido                                                                                                                            |
| targetCurrency | A moeda desejada para o pedido a ser cobrado                                                                                                                        |
| certificateRecipientInfo | Informações da pessoa para quem o certificado será emitido |
| metaData       | Informações adicionais do pedido |

| CertificateRecipientInfo      | Descrição                                         |
| -------------- | --------------------------------------------------- |
| name      | Nome da pessoa para quem o certificado será emitido |
| email | E-mail da pessoa para quem o certificado será emitido. O certificado será enviado para este e-mail |
| taxId | Número do documento (CPF/CNPJ) da pessoa para quem o certificado será emitido |

**Atributos de Resposta**

| Atributo       | Descrição                                                  |
| -------------- | ---------------------------------------------------------- |
| id             | O ID do pedido gerado                                      |
| vcuAmount      | A quantidade total de VCUs solicitada no pedido            |
| vcuUnitPrice   | O preço unitário de um VCU no momento da criação do pedido |
| targetCurrency | A moeda em que o pedido será cobrado                       |
| status         | Nome do status atual do pedido                             |
| createdAt      | A data e hora em que o pedido foi criado                   |
| metaData       | Campo ``string`` para inserir informações adicionais do pedido. Máximo de 500 caracteres. |
| notifyCertificateTo | Campo string com email para envio do certificado |
| type | A forma de pagamento |
| paymentDate | A data e hora em que o pedido foi pago |
| retireForRecipient | Informa que o pedido será aposentado para outra empresa |

| CertificateRecipientInfo      | Descrição                                         |
| -------------- | --------------------------------------------------- |
| name      | Nome da pessoa para quem o certificado será emitido |
| email | E-mail da pessoa para quem o certificado será emitido. O certificado será enviado para este e-mail |
| taxId | Número do documento (CPF/CNPJ) da pessoa para quem o certificado será emitido |

### Exemplo de Requisição

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "vcuAmount": 0.02,
  "targetCurrency": "BRL",
  "certificateRecipientInfo": {
    "name": "Example First",
    "email": "example@email.com",
    "taxId": "000.000.000-00"
  }
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI', 
    'Content-Type': 'application/json'
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

### Exemplo de Resposta

```json
{
  "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
  "vcuAmount": 0.02,
  "vcuUnitPrice": 110.0,
  "totalPrice": 2.200,
  "targetCurrency": "BRL",
  "status": "Issued",
  "createdAt": "2022-07-24T18:26:44.4176783Z",
  "notifyCertificateTo": null,
  "type": "Postpaid",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Example First",
    "email": "example@email.com",
    "taxId": "000.000.000-00"
  }
}
```

## Pedidos [GET]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/orders?page=1&page-size=6`
```

Esta solicitação retorna uma lista paginada de pedidos.

**Atributos de resposta**

| Atributo | Descrição                                |
| -------- | ---------------------------------------- |
| items    | Um array de pedidos paginados do cliente |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders?page=1&page-size=100&sort-by=createdAt_desc',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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
  "items": [
    {
      "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
      "vcuAmount": 0.02,
      "vcuUnitPrice": 110.0,
      "totalPrice": 2.200,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "2022-07-24T18:26:44.417678",
      "notifyCertificateTo": null,
      "type": "Postpaid",
      "paymentDate": null,
      "metaData": null,
      "retireForRecipient": false,
      "certificateRecipientInfo": {
        "name": "Example First",
        "email": "example@email.com",
        "taxId": "000.000.000-00"
      },
      "invoices": [],
      "subscriptions": []
    },
    {
      "id": "07c8543f-752f-43c7-af65-04a6cf3c8841",
      "vcuAmount": 0.02,
      "vcuUnitPrice": 110.00,
      "totalPrice": 2.2000,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "2022-07-21T19:11:05.698421",
      "notifyCertificateTo": null,
      "type": "Postpaid",
      "paymentDate": null,
      "metaData": null,
      "retireForRecipient": false,
      "certificateRecipientInfo": {
        "name": "Example First",
        "email": "example@email.com",
        "taxId": "000.000.000-00"
      },
      "invoices": [],
      "subscriptions": []
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 2,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 6
```

## Cancelar Pedido [POST]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/orders/:orderId/cancel`
```

Esta solicitação cancela um pedido pendente de pagamento (status Issued).

**Atributos de Resposta**

| Atributo       | Descrição                                                  |
| -------------- | ---------------------------------------------------------- |
| id             | O ID do pedido gerado                                      |
| vcuAmount      | A quantidade total de VCU solicitada no pedido             |
| vcuUnitPrice   | O preço unitário de um VCU no momento da criação do pedido |
| targetCurrency | A moeda em que o pedido será cobrado                       |
| status         | Nome do status atual do pedido, o valor será "Cancelled"   |
| createdAt      | A data e hora em que o pedido foi criado                   |
| metaData | Campo de string que você pode usar para escrever informações extras sobre seu pedido. Até 500 caracteres. |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/orders/4158d5d1-9364-46e6-8d0d-451f528261e7/cancel',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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
  "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
  "vcuAmount": 0.02,
  "vcuUnitPrice": 110.0,
  "totalPrice": 2.200,
  "targetCurrency": "BRL",
  "status": "Cancelled",
  "createdAt": "2022-07-24T18:26:44.417678",
  "notifyCertificateTo": null,
  "type": "Postpaid",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Example First",
    "email": "example@email.com",
    "taxId": "000.000.000-00"
  }
}
```

```md title="PATH VARIABLES"
orderId: 4158d5d1-9364-46e6-8d0d-451f528261e7
```

## Cancelar Pedidos [POST]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/orders/cancel`
```

Os pedidos também podem ser cancelados em lotes.

**Parâmetros de Requisição**

| Parâmetro | Descrição                                      |
| --------- | ---------------------------------------------- |
| ordersIds | Uma lista de IDs dos pedidos a serem cancelados |

### Exemplo de Requisição

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "ordersIds": [
    "c99a2da7-ab55-4156-ac4e-d6f3df7d3d28",
    "815873f3-54d3-4e11-bbbd-05f76aaec3df"
  ]
});

var config = {
  method: 'post',
  url: 'https://api-b2b-dev.carbonext.com.br/v1/orders/cancel',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI', 
    'Content-Type': 'application/json'
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

### Exemplo de Resposta

```javascript
{
  "id": "4158d5d1-9364-46e6-8d0d-451f528261e7",
  "vcuAmount": 0.02,
  "vcuUnitPrice": 110.0,
  "totalPrice": 2.200,
  "targetCurrency": "BRL",
  "status": "Cancelled",
  "createdAt": "2022-07-24T18:26:44.417678",
  "notifyCertificateTo": null,
  "type": "Postpaid",
  "paymentDate": null,
  "metaData": null,
  "retireForRecipient": false,
  "certificateRecipientInfo": {
    "name": "Example First",
    "email": "example@email.com",
    "taxId": "000.000.000-00"
  }
}
```
