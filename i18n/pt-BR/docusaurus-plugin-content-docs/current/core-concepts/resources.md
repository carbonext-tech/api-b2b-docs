---
sidebar_position: 4
custom_edit_url: null
---

# Recursos

Temos entidades que nos permitem usar nosso filtro de consulta avançada, vamos ver quais são essas entidades.

## Listar Recursos [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/resources
```

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/resources'
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
