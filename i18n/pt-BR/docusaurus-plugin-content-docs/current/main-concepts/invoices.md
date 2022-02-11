---
sidebar_position: 3
custom_edit_url: null
---

# Faturas

As faturas podem ser geradas tanto comprando créditos VCU quanto faturando pedidos em aberto (não pagos), neste caso, a fatura pode ser paga com cartão de crédito ou boleto bancário (pretendemos aceitar outros tipos de pagamento no futuro).

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
https://api-b2b.carbonext.com.br/v1/invoices
```

Essa solicitação retorna uma lista paginada de faturas.

**Atributos de resposta**

| Atributo | Descrição |
| --------------- | -------------------------------------------------- ------------ |
| items | Um objeto contendo todas as faturas relacionadas ao ID do cliente |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/invoices' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "id": "8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd",
      "status": "Pending",
      "totalVcuAmount": 200,
      "totalPrice": 15400,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "c9dd9aca-e258-4e9a-82a7-f2a70815c193",
          "vcuAmount": 200,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Billed",
          "createdAt": "22/10/2021 00:36:16"
        }
      ]
    },
    {
      "id": "a1da7c6b-b94e-4e68-aa69-bfa7f2bb9b15",
      "status": "Paid",
      "totalVcuAmount": 75,
      "totalPrice": 5775,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "712a7f26-cfe2-48db-afca-e79805238756",
          "vcuAmount": 55,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 23:44:33"
        }
      ]
    },
    {
      "id": "a4bc61bf-1b2b-4216-94ed-b434d5843542",
      "status": "Paid",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "7caee506-fc6c-4cb3-8826-9bdc0855eb4a",
          "vcuAmount": 55,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Paid",
          "createdAt": "21/10/2021 23:42:59"
        },
        {
          "id": "815873f3-54d3-4e11-bbbd-05f76aaec3df",
          "vcuAmount": 50,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 22:36:40"
        },
        {
          "id": "c99a2da7-ab55-4156-ac4e-d6f3df7d3d28",
          "vcuAmount": 30,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 22:36:23"
        }
      ]
    },
    {
      "id": "b81ebfbe-984c-40cc-a7fc-1e33fa926176",
      "status": "Paid",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
      "orders": [
        {
          "id": "7caee506-fc6c-4cb3-8826-9bdc0855eb4a",
          "vcuAmount": 55,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Paid",
          "createdAt": "21/10/2021 23:42:59"
        },
        {
          "id": "815873f3-54d3-4e11-bbbd-05f76aaec3df",
          "vcuAmount": 50,
          "vcuUnitPrice": 77,
          "targetCurrency": "BRL",
          "status": "Refunded",
          "createdAt": "21/10/2021 22:36:40"
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 4,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Fatura [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices/:id
```

Esta solicitação retornará informações sobre uma fatura específica.

**Atributos de Resposta**

| Atributo | Descrição |
| -------------- | -------------------------------------------------- --------------------------------- |
| id | ID de uma fatura |
| status | O status de uma fatura |
| totalVcuAmount | Quantas VCUs estão sendo negociadas nesta fatura |
| totalPrice | A quantidade de moeda negociada nesta fatura, na moeda especificada abaixo |
| currency | A moeda negociada nesta fatura |
| customerId | O ID do cliente que possui a fatura |
| orders | Lista de encomendas anexada à fatura |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/invoices/8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "id": "8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd",
  "status": "Pending",
  "totalVcuAmount": 200,
  "totalPrice": 15400,
  "currency": "BRL",
  "customerId": "6aea7d01-5062-4aa3-ae22-ecd8069d6329",
  "orders": [
    {
      "id": "c9dd9aca-e258-4e9a-82a7-f2a70815c193",
      "vcuAmount": 200,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "22/10/2021 00:36:16"
    }
  ]
}
```

```md title="PATH VARIABLES"
id: 8dc48e75-4b71-4fa2-ada8-8516fb1a2cfd
```
