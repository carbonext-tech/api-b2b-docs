---
sidebar_position: 5
custom_edit_url: null
---

# Filtros Permitidos

Nossa API possui um sistema de filtro e ordenação que permite buscar uma entidade por tipo específico.

## Listar Filtros Permitidos [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/allowed-filters/:entity
```

| Parâmetro | Descrição                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| entity  | Sua entidade pode ser qualquer retorno de [recursos](/docs/core-concepts/resources) que vimos na página anterior sobre Recursos |

Este endpoint retorna os campos aceitos para filtragem e ordenação, é importante mencionar que essa ordenação possui o filtro `created_desc` por padrão.

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/allowed-filters/invoices'
```

### Exemplo de Resposta

```json
{
  "filters": [
    "status_eq",
    "status_ne",
    "status_in",
    "price_ge",
    "price_le",
    "price_gt",
    "price_lt",
    "total_qty_eq",
    "total_qty_ge",
    "total_qty_le",
    "total_qty_gt",
    "total_qty_lt"
  ],
  "sort": [
    "created",
    "updated",
    "paid",
    "due_date",
    "price",
    "total_qty",
    "status"
  ]
}
```
