---
sidebar_position: 4
custom_edit_url: null
---

# Recursos

Nossas APIs possuem filtros de consulta avançados, a requisição a seguir retorna uma lista de recursos que permitem tais consultas.

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
