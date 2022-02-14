---
sidebar_position: 5
custom_edit_url: null
---

# Filtros Permitidos

Nossas APIs possuem um sistema de filtragem que permitem a consulta de um recurso por diversos atributos e operações.

## Listar Filtros Permitidos [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/allowed-filters/:resource
```

**Parâmetro de Requisição**

| Parâmetro | Descrição                                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| resource  | Este `resource` pode ser qualquer retorno de [recursos](/docs/core-concepts/resources) que vimos na página anterior sobre Recursos |

**Parâmetros de Resposta**

| Parâmetro | Descrição                                   |
| --------- | ------------------------------------------- |
| filters   | Um array dos filtros disponíveis            |
| sort      | Um array com as ordenações disponíveis      |
| aggregate | Realiza operações matemáticas para o filtro |

Este endpoint retorna os campos aceito para filtragem e ordenação, é importante mencionar que essa ordenação possui o filtro `createdAt_desc` por padrão.

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/allowed-filters/orders'
```

### Exemplo de Resposta

```json
{
  "filters": [
    "status_eq",
    "status_ne",
    "status_in",
    "vcuUnitPrice_ge",
    "vcuUnitPrice_le",
    "vcuUnitPrice_gt",
    "vcuUnitPrice_lt",
    "vcuAmount_eq",
    "vcuAmount_ge",
    "vcuAmount_le",
    "vcuAmount_gt",
    "vcuAmount_lt",
    "invoiceId_eq",
    "createdAt_eq",
    "createdAt_ge",
    "createdAt_le",
    "createdAt_gt",
    "createdAt_lt",
    "totalPrice_eq",
    "totalPrice_ge",
    "totalPrice_le",
    "totalPrice_gt",
    "totalPrice_lt"
  ],
  "sort": ["createdAt", "vcuAmount", "status", "vcuUnitPrice"],
  "aggregate": {
    "columns": ["vcuAmount", "vcuUnitPrice", "totalPrice"],
    "operations": ["sum", "avg", "min", "max", "count"]
  }
}
```

Vamos ver quantos filtros podemos utilizar e o que eles significam.

**Operações de Filtro Disponíveis**

| Filtro | Valor | Descrição                                                                                                                                                               |
| :----: | :---: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   eq   |   =   | Retorna os campos com os valores iguais ao que foi passado no filtro.                                                                                                   |
|   ne   |  !=   | Retorna os campos com os valores diferentes ao que foi passado no filtro.                                                                                               |
|   ge   |  >=   | Retorna os campos com os valores maiores ou iguais ao que foi passado no filtro.                                                                                        |
|   le   |  <=   | Retorna os campos com os valores menores ou iguais ao que foi passado no filtro. Para o `createdAt`, às 23:59:59 horas antes da data escolhida no formato `AAAA-MM-DD`. |
|   gt   |   >   | Retorna os campos com os valores maiores ao que foi passado no filtro.                                                                                                  |
|   lt   |   <   | Retorna os campos com os valores menores ao que foi passado no filtro. Para o `createdAt`, às 00:00 horas antes da data escolhida no formato `AAAA-MM-DD`.              |

| Filtro | Descrição                                                                                                               |
| :----: | :---------------------------------------------------------------------------------------------------------------------- |
|   in   | `status` in (1,2,3) retorna os registros com `status` igual a 1 ou 2 ou 3 (status aqui é o campo com filtro tipo `_in`) |
|  like  | retorna registros que contenham o valor buscado no filtro (case insensitive)                                            |

## Listar Faturas por Filtro [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/invoices?sort-by=totalVcuAmount_asc&filter-by=totalVcuAmount_ge:30~status_in:Paid-pending
```

Vejamos um exemplo prático dos filtros de consulta aplicados a faturas, neste exemplo retornaremos uma lista de faturas filtradas por `totalVcuAmount` e `status`. Para usar mais de um filtro na mesma consulta, eles devem ser separados por til (~).

A sintaxe do filtro é `?filter-by=filter1:value2~filter2:value2`, já para os filtros com o operador `in`, os valores devem ser separados por hífen - .

O exemplo a seguir ilustrará a consulta de faturas com `totalVcuAmount` maior ou igual a 30, que possuam um `status` como `Paid` ou `Pending` (nomes de status enum não diferenciam maiúsculas de minúsculas)

**Parâmetros de Resposta**

| Parâmetro | Descrição                     |
| --------- | ----------------------------- |
| items     | Um array de faturas filtradas |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/invoices?sort-by=totalVcuAmount_asc&filter-by=totalVcuAmount_ge:30~status_in:Paid-pending' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

```md title="Atributos do Parâmetro"
sort-by: totalQuantity_asc
filter-by: totalQuantity_ge:30~status_in:Paid-pending
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "id": "8b864cbf-c181-4405-b119-91b2f63b1954",
      "status": "Pending",
      "totalVcuAmount": 30,
      "totalPrice": 2310,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:20:57.378254",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "5a8ff819-f60b-450b-9efb-f62c1445d511",
      "status": "Pending",
      "totalVcuAmount": 45,
      "totalPrice": 3465,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:09:21.372156",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "5e27bd46-95ce-4fd1-86c6-04fbd18e45bb",
      "status": "Pending",
      "totalVcuAmount": 45,
      "totalPrice": 3465,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:20:08.853038",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "3951ae7b-2c3d-4bd8-a05c-7755328413b5",
      "status": "Pending",
      "totalVcuAmount": 60,
      "totalPrice": 4620,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2022-01-05T22:15:43.037432",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "b92c0e55-45b0-4be2-9b85-c28d834137eb",
      "status": "Pending",
      "totalVcuAmount": 100,
      "totalPrice": 7700,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2021-12-10T20:47:11.424205",
      "paidAt": null,
      "dueDate": null
    },
    {
      "id": "117f2fd6-953d-42d0-895d-31abc809af88",
      "status": "Paid",
      "totalVcuAmount": 10000,
      "totalPrice": 770000,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2021-12-09T19:49:43.112941",
      "paidAt": "2021-12-10T20:12:09.154332",
      "dueDate": null
    },
    {
      "id": "71050ef4-ae2a-4966-beaf-603d75b3f8c2",
      "status": "Paid",
      "totalVcuAmount": 10000,
      "totalPrice": 770000,
      "currency": "BRL",
      "customerId": "a2170dcf-a87f-4fdb-b4e6-54e4f0889324",
      "createdAt": "2021-12-06T13:54:13.56172",
      "paidAt": "2021-12-06T14:06:19.755607",
      "dueDate": null
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 7,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```
