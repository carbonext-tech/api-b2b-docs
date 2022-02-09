---
sidebar_position: 2
custom_edit_url: null
---

# Pedidos

Esta página apresenta requisições relacionadas a pedidos, um pedido é a solicitação de compra de créditos de carbono (VCU).

## Pedido [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders
```

Esta requisição irá criar um pedido.

**Atributos de Requisição**

Atributo | Descrição
--------- | ------
vcuAmount | A quantidade de VCUs atribuída ao pedido
targetCurrency | A moeda desejada para o pedido a ser cobrado
payWithBalance | Sinalizador (booleano) indicando se este pedido deve ser descontado automaticamente do saldo do cliente (se o cliente tiver permissão para criar pedidos pós-pagos)

**Atributos de Resposta**

Atributo | Descrição
--------- | ------
id | O ID do pedido gerado
vcuAmount | A quantidade total de VCUs solicitada no pedido
vcuUnitPrice | O preço unitário de um VCU no momento da criação do pedido
targetCurrency | A moeda em que o pedido será cobrado
status | Nome do status atual do pedido
createdAt | A data e hora em que o pedido foi criado

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "vcuAmount":150,
    "targetCurrency":"BRL",
    "PayWithBalance":false
}
```

### Exemplo de Resposta

```json
{
  "id": "f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2",
  "vcuAmount": 150,
  "vcuUnitPrice": 77,
  "targetCurrency": "BRL",
  "status": "Issued",
  "createdAt": "28/10/2021 21:12:14"
}
```

## Cancelar Pedido [POST]

`https://api-b2b.carbonext.com.br/v1/orders/:orderId/cancel`

Esta solicitação cancela um pedido, um pedido só pode ser cancelado enquanto estiver com status de emissão, ou seja, depois de criado e antes de ser pago.

**Atributos de Resposta**

Atributo | Descrição
--------- | ------
id | O ID do pedido gerado
vcuAmount | A quantidade total de VCU solicitada no pedido
vcuUnitPrice | O preço unitário de um VCU no momento da criação do pedido
targetCurrency | A moeda em que o pedido será cobrado
status | Nome do status atual do pedido, o valor será "Cancelled"
createdAt | A data e hora em que o pedido foi criado

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders/f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2/cancel' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "id": "f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2",
  "vcuAmount": 150,
  "vcuUnitPrice": 77,
  "targetCurrency": "BRL",
  "status": "Cancelled",
  "createdAt": "28/10/2021 21:12:14"
}
```

```md title="PATH VARIABLES"
orderId: f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2
```

## Cancelar Pedidos [POST]

`https://api-b2b.carbonext.com.br/v1/orders/cancel`

Os pedidos também podem ser cancelados em lotes.

**Parâmetros de Requisição**

Parâmetro | Descrição
--------- | ------
ordersIds | Um array de IDs dos pedidos a serem cancelados

Retorna `true` se, e somente se, todos os pedidos forem cancelados com sucesso.

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders/cancel' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "ordersIds":
    [
        "14a60138-d078-4f1d-b72a-87f0820b7ccb"
    ]
}
```

### Exemplo de Resposta

```javascript
true
```

## Pedidos [GET]

`https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=100`

Esta solicitação retorna uma lista paginada de pedidos.

**Atributos de resposta**

Atributo | Descrição
--------- | ------
items	 | Um array de pedidos paginados do cliente

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=100' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "id": "10c3d119-433d-49c8-a7d3-d471a6473669",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "20/10/2021 20:39:35"
    },
    {
      "id": "bd437c96-1bb2-44b6-90bc-c4ae8ae8f226",
      "vcuAmount": 30,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Refunded",
      "createdAt": "20/10/2021 21:51:06"
    },
    {
      "id": "e17c0ffb-c5d9-4a7f-b17a-19809ddad5c5",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "20/10/2021 22:47:56"
    },
    {
      "id": "40c99e49-4994-48e4-b41f-f0c03c6efa0f",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Issued",
      "createdAt": "20/10/2021 22:47:40"
    },
    {
      "id": "aac91e0b-0d7c-42aa-919f-2c62f0808f76",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "20/10/2021 22:47:57"
    },
    {
      "id": "4fab5861-b549-4a8c-9d01-dbbd2c09c87d",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Billed",
      "createdAt": "20/10/2021 22:47:39"
    },
    {
      "id": "9ec1fd16-8c37-479d-b526-fb5695da52c9",
      "vcuAmount": 200,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "26/10/2021 14:32:02"
    },
    {
      "id": "701a4033-10d0-4d73-9794-ff55d112b152",
      "vcuAmount": 35,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "20/10/2021 21:51:23"
    },
    {
      "id": "ed566197-6733-4016-a9d8-995bfee7d1ab",
      "vcuAmount": 389,
      "vcuUnitPrice": 13,
      "targetCurrency": "USD",
      "status": "Issued",
      "createdAt": "20/10/2021 20:20:49"
    },
    {
      "id": "4865ea28-175f-472f-a758-842e0123013b",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "20/10/2021 20:41:59"
    },
    {
      "id": "03fac3f2-75b9-4b07-9c41-0b5bc43491db",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 20:42:01"
    },
    {
      "id": "3f86638e-682b-4b6d-a652-0749797e2769",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 20:42:03"
    },
    {
      "id": "197b53bf-9511-4300-8610-6f11a0cfe8f5",
      "vcuAmount": 2,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "26/10/2021 14:04:20"
    },
    {
      "id": "6b7f9616-c192-490f-83e1-a5fab9301aaa",
      "vcuAmount": 200,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Issued",
      "createdAt": "26/10/2021 14:36:38"
    },
    {
      "id": "a3e19ea0-b51f-43cc-ae66-3ca19c8228aa",
      "vcuAmount": 20,
      "vcuUnitPrice": 13,
      "targetCurrency": "USD",
      "status": "Billed",
      "createdAt": "20/10/2021 22:13:20"
    },
    {
      "id": "e334d5f4-297c-43e3-9de5-faafbd3eddc5",
      "vcuAmount": 1,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Billed",
      "createdAt": "20/10/2021 22:12:57"
    },
    {
      "id": "3a35f21c-fc1c-43a2-9d29-1d2994603f6d",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Paid",
      "createdAt": "20/10/2021 22:15:26"
    },
    {
      "id": "b240dde1-50d4-4181-a65b-8268a65b935e",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Paid",
      "createdAt": "20/10/2021 22:14:58"
    },
    {
      "id": "d14b044e-a93f-4f57-8042-5ea4e1e3a321",
      "vcuAmount": 2,
      "vcuUnitPrice": 14,
      "targetCurrency": "USD",
      "status": "Paid",
      "createdAt": "20/10/2021 22:14:59"
    },
    {
      "id": "d707659b-d9e5-4cc6-804c-2e95074842b0",
      "vcuAmount": 20,
      "vcuUnitPrice": 71.5,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "20/10/2021 20:42:05"
    },
    {
      "id": "8241a6ba-b640-411c-97b1-c250e517a125",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 23:13:06"
    },
    {
      "id": "a5f27f27-2df1-4c2f-8a97-05ad4f1a1747",
      "vcuAmount": 10,
      "vcuUnitPrice": 77,
      "targetCurrency": "BRL",
      "status": "Billed",
      "createdAt": "20/10/2021 23:13:08"
    },
    {
      "id": "03a487c2-c04c-4d63-9e3a-082289537eab",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:22:05"
    },
    {
      "id": "79dc91f6-9151-458d-b1f8-1286191249f2",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:25:58"
    },
    {
      "id": "bf55d474-6552-49c4-a291-9e08ca83a1ca",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:38:15"
    },
    {
      "id": "d863bbab-7875-4fed-bae8-e68d652c48a2",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:53:27"
    },
    {
      "id": "555a6574-6064-4f5c-91c5-e1e3fb405f08",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 19:56:35"
    },
    {
      "id": "4b22c73c-1581-4297-8b3a-ab6191e0dc4c",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "11/11/2021 19:57:18"
    },
    {
      "id": "954cde42-c604-401e-aae8-4daa8c337e6f",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "11/11/2021 20:01:21"
    },
    {
      "id": "5f2015f8-b210-43c7-9362-38c3c8096218",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:02:26"
    },
    {
      "id": "80f04b51-f165-4283-bc5a-c7e44d2a664a",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:05:25"
    },
    {
      "id": "08894710-9156-4b06-a9d3-b73445b7b6d1",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:05:44"
    },
    {
      "id": "82df37cc-8fc5-41fb-9ca7-34985e6b9b54",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:06:12"
    },
    {
      "id": "728b06d1-e777-4762-bf0f-debef64121aa",
      "vcuAmount": 0,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:06:36"
    },
    {
      "id": "781ad7e6-3795-4880-9634-ae7096d122b9",
      "vcuAmount": 0.2,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Cancelled",
      "createdAt": "11/11/2021 20:06:49"
    },
    {
      "id": "9b3715d4-0fb6-4e4f-a828-f57a6c93e500",
      "vcuAmount": 0.2,
      "vcuUnitPrice": 0,
      "targetCurrency": "BRL",
      "status": "Paid",
      "createdAt": "11/11/2021 20:08:50"
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 36,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 100
```
