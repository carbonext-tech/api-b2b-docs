---
sidebar_position: 4
custom_edit_url: null
---

# Recursos

Nossas APIs possuem filtros de consulta avançados, a requisição a seguir retorna uma lista de recursos que permitem tais consultas.

## Listar Recursos [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/resources
```

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/resources',
  headers: { }
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
    "entities": [
        "applications",
        "invoices",
        "orders",
        "subscriptions",
        "retirements",
        "users"
    ]
}
```
