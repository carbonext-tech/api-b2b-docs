---
sidebar_position: 4
custom_edit_url: null
---

# Recursos

Temos entidades que nos permitem usar nosso filtro de consulta avançada, que veremos na próxima página sobre **Filtros Permitidos**, mas antes disso, vamos ver quais são essas entidades.

## Listar Recursos [GET]

`https://api-b2b.carbonext.com.br/v1/resources`

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/resources'
```

### Exemplo de Resposta

```json
{
    "entities": [
        "customers",
        "invoices",
        "orders",
        "users",
        "permissions"
    ]
}
```
