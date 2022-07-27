---
sidebar_position: 6
custom_edit_url: null
---

# Faturas

As faturas podem ser geradas comprando créditos VCU com cartão de crédito ou faturando pedidos em aberto ("emitidos"), neste caso, a fatura pode ser paga via boleto ou transferência bancária.

<!-- ## Faturas [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices
```

Esta requisição irá gerar uma fatura, pode ser feita para um pedido específico ou para um grupo em um determinado período de tempo.

**Solicitar atributos**

| Atributo | Descrição |
| ---------------------------- | -------------------------------------------------- ----- |
| ordersIds | ID de um pedido |
| ordersCreatedFrom (opcional) | Data de início para seleção de pedidos dentro de um período de tempo |
| ordersCreatedTo (opcional) | Data final da seleção do pedido |
| vcuAmount	 | O valor da quantidade vcu |
| targetCurrency | A moeda local |

### Exemplo de Requisição

Você pode criar uma fatura de três maneiras diferentes.

Sem `ordersCreatedFrom`, a solicitação usará apenas `ordersIds` para criar a fatura.

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersIds":[
        "f4f7e937-c5ae-4d85-be5f-13ad804c0670"
    ],
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}'
```

Com `ordersCreatedFrom` a solicitação criará uma fatura a partir da data de recebimento até o dia atual.

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersCreatedFrom":"01/01/2022 22:09:40",
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}'
```

Ou se você tiver um intervalo de tempo específico, você pode declarar no atributo `ordersCreatedTo`. Também funciona sem o `ordersCreatedFrom`, desta forma é criada uma fatura para todos os pedidos criados antes da data descrita.

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersCreatedFrom":"01/01/2022 22:09:40",
    "ordersCreatedTo":"05/01/2022 12:00:00",
    "vcuAmount": 100,
    "targetCurrency":"BRL"
}'
```

### Exemplo de Resposta

```json
{
  "id": "3951ae7b-2c3d-4bd8-a05c-7755328413b5",
  "status": "Pending",
  "totalVcuAmount": 60,
  "totalPrice": 4620,
  "currency": "BRL",
  "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
  "orders": [
    {
      "id": "f4f7e937-c5ae-4d85-be5f-13ad804c0670",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:35",
      "notifyCertificateTo": null
    },
    {
      "id": "383e9c41-0283-45fb-b3ba-efe83f4fd1d6",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:44",
      "notifyCertificateTo": null
    },
    {
      "id": "a460ec3c-53be-4ed3-84be-1d10405a43ad",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:39",
      "notifyCertificateTo": null
    },
    {
      "id": "be673ce7-dd7f-4b56-b8cd-410fce4b86c0",
      "vcuAmount": 15,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "05/01/2022 22:09:50",
      "notifyCertificateTo": null
    }
  ]
}
``` -->

## Faturas [GET]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/invoices`
```

Essa solicitação retorna uma lista paginada de faturas.

**Atributos de resposta**

| Atributo | Descrição                                                         |
| -------- | ----------------------------------------------------------------- |
| items    | Um objeto contendo todas as faturas relacionadas ao ID do cliente |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/invoices?page=1&page-size=10&sort-by=totalVcuAmount_desc&filter-by=totalPrice_ge:7000~status_in:Paid-pending~bla',
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
  "items": [
    {
      "id": "24882adc-d020-4e5a-ac26-36c12d24c507",
      "status": "Paid",
      "totalVcuAmount": 1.0,
      "totalPrice": 137.5,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-02-11T16:47:02.894999",
      "paidAt": "2022-02-11T16:47:05.226771",
      "dueDate": null
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 1,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Fatura [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/invoices/:id
```

Esta solicitação retornará informações sobre uma fatura específica.

**Atributos de Resposta**

| Atributo       | Descrição                                                                  |
| -------------- | -------------------------------------------------------------------------- |
| id             | ID de uma fatura                                                           |
| status         | O status de uma fatura                                                     |
| totalVcuAmount | Quantas VCUs estão sendo negociadas nesta fatura                           |
| totalPrice     | A quantidade de moeda negociada nesta fatura, na moeda especificada abaixo |
| currency       | A moeda negociada nesta fatura                                             |
| customerId     | O ID do cliente que possui a fatura                                        |
| createdAt      | Data em que foi criado                                                     |
| paidAt         | Data em que foi pago                                                       |
| dueDate        | Data de vencimento                                                         |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/invoices/:id',
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

```md title="PATH VARIABLES"
id: 24882adc-d020-4e5a-ac26-36c12d24c507
```

### Exemplo de Resposta

```json
{
  "id": "24882adc-d020-4e5a-ac26-36c12d24c507",
  "status": "Paid",
  "totalVcuAmount": 1.0,
  "totalPrice": 137.5,
  "currency": "BRL",
  "customerId": "c892597a-997c-4a6f-a4cf-6e370240edff",
  "createdAt": "2022-02-11T16:47:02.894999",
  "paidAt": "2022-02-11T16:47:05.226771",
  "dueDate": null
}
```
