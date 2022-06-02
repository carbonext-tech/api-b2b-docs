---
sidebar_position: 5
custom_edit_url: null
---

# Pedidos

Na API B2B, um pedido é uma chamada de um valor específico de VCU, que será debitado do saldo do cliente. Um certificado Carbonext será emitido pela em nome do cliente quando este pedido for pago. Entretanto, este certificado poderá ser emitido em nome de outra pessoa, através do atributo ``certificateRecipientInfo``.

## Pedido [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/orders
```

Esta requisição irá criar um pedido.

**Atributos de Requisição**

| Atributo       | Descrição                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vcuAmount      | A quantidade de VCUs atribuída ao pedido                                                                                                                            |
| targetCurrency | A moeda desejada para o pedido a ser cobrado                                                                                                                        |
| certificateRecipientInfo | Informações da pessoa para quem o certificado será emitido |


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

### Exemplo de Requisição

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/orders' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "vcuAmount":150,
    "targetCurrency":"BRL"
}'
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

| Atributo       | Descrição                                                  |
| -------------- | ---------------------------------------------------------- |
| id             | O ID do pedido gerado                                      |
| vcuAmount      | A quantidade total de VCU solicitada no pedido             |
| vcuUnitPrice   | O preço unitário de um VCU no momento da criação do pedido |
| targetCurrency | A moeda em que o pedido será cobrado                       |
| status         | Nome do status atual do pedido, o valor será "Cancelled"   |
| createdAt      | A data e hora em que o pedido foi criado                   |

### Exemplo de Requisição

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/orders/f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2/cancel' \
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

| Parâmetro | Descrição                                      |
| --------- | ---------------------------------------------- |
| ordersIds | Um array de IDs dos pedidos a serem cancelados |

Retorna `true` se, e somente se, todos os pedidos forem cancelados com sucesso.

### Exemplo de Requisição

```javascript
curl -X POST 'https://api-b2b.carbonext.com.br/v1/orders/cancel' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "ordersIds":
    [
        "14a60138-d078-4f1d-b72a-87f0820b7ccb"
    ]
}'
```

### Exemplo de Resposta

```javascript
true;
```

## Pedidos [GET]

`https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=6`

Esta solicitação retorna uma lista paginada de pedidos.

**Atributos de resposta**

| Atributo | Descrição                                |
| -------- | ---------------------------------------- |
| items    | Um array de pedidos paginados do cliente |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/orders?page=1&page-size=6' \
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
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 6,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 6
```
