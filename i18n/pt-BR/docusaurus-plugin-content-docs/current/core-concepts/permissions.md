---
sidebar_position: 4
custom_edit_url: null
---

# Permissões

Nossa API trabalha com permissões para acesso, esse endpoint retorna uma lista paginada dessas permissões.

## Listar as permissões [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/permissions?page=1&page-size=100
```

**Atributos de Resposta**

| Atributo | Descrição                                   |
| -------- | ------------------------------------------- |
| items    | Um array de permissões paginadas |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/permissions?page=1&page-size=100',
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
[
    {
        "id": "c56452df-18fe-474b-9cab-82080af3e902",
        "name": "users_write",
        "description": "Criar/Remover usuários",
        "composite": false,
        "clientRole": false,
        "containerId": "CO2FREE",
        "attributes": null
    },
    {
        "id": "497efb5a-25eb-434f-9a2a-2e3aa6b2e6e1",
        "name": "certificates_read",
        "description": "Visualizar certificados",
        "composite": false,
        "clientRole": false,
        "containerId": "CO2FREE",
        "attributes": null
    },
    {
        "id": "4f3ca574-0b89-4a92-83fa-794edcad6b76",
        "name": "customer_applications_write",
        "description": "Criar/Remover Chaves de API",
        "composite": false,
        "clientRole": false,
        "containerId": "CO2FREE",
        "attributes": null
    }
]
```