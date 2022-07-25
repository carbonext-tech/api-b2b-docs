---
sidebar_position: 8
custom_edit_url: null
---

# Lista de Permissões

Nossa API trabalha com permissões para acesso que definem as interações do usuário como editar, adicionar ou remover, esse endpoint retorna uma lista paginada dessas permissões.

## Listar Permissões [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/permissions?page=1&page-size=20
```

Esta requisição retorna uma lista paginada de todas as permissões disponíveis. Essas permissões podem ser anexadas a usuários e/ou customer_applications (chaves de API).

**Lista de Permissões**

| Permissão                 | Descrição                             |
| ------------------------- | ------------------------------------- |
| orders_read               | Somente leitura de Pedidos            |
| orders_write              | Adicionar, editar ou remover pedidos  |
| customerApplication_read  | Somente leitura de Clientes           |
| customerApplication_write | Adicionar, editar ou remover clientes |
| financial_write           | Adicionar faturas                     |
| financial_read            | Somente leitura do Financeiro         |
| users_write               | Adicionar, editar ou remover usuários |
| user_read                 | Somente leitura de Usuários           |
| subscriptions_write         | Adicionar, editar ou suspender assinaturas |
| subscriptions_read          | Soment leitura de assinaturas                |
| certificates_read         | Somente leitura de Certificados       |

**Atributos de Resposta**

| Atributo | Descrição               |
| -------- | ----------------------- |
| items    | Uma lista de permissões |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/permissions?page=1&page-size=20',
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

```md title="PARAMS"
page: 1
page-size: 20
```
