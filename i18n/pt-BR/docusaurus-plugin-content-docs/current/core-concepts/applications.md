---
sidebar_position: 2
custom_edit_url: null
---

# Chaves de API

Chaves de API são as credenciais que identificam e autorizam um projeto a acessar nossa API, usamos o fluxo `client_credentials` `OAauth2.0`, com `client_id` e `client_secret`, salvos anteriomente, para autorizar as solicitações em nossos endpoints.

## Aplicação [POST]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/applications
```

Este endpoint cria uma nova chave de aplicação, usada para criar integrações Machine to Machine (M2M), aconselhamos usar uma para cada API que você precisar integrar com a nossa.

```md title="Required permissions"
customer_applications_write
```

**Atributos de Requisição**

| Parâmetro   | Descrição                                                 |
| ----------- | --------------------------------------------------------- |
| clientId    | O ID do cliente gerado                                    |
| displayName | O nome do cliente                                         |
| permissions | Uma array de objeto que contém as permissões da aplicação |

**Atributos de Resposta**

| Parâmetro    | Descrição                                                 |
| ------------ | --------------------------------------------------------- |
| id           | O ID da aplicação na base de dados                                    |
| clientId     | Código de identificação do usuário                                        |
| clientSecret | Código utilizado junto com o `client_id` para conceder autorização ao usuário |

### Exemplo de Requisição

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "clientId": "myapp_name",
  "displayName": "My test app",
  "permissions": [
    {
        "id": "45bbe1bc-4d5a-4991-baac-42fa95d35824"
    },
    {
        "id": "65c514f4-424f-4c82-9827-482d564091c0"
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/customers/applications?customer-id=d762a683-cb74-43a4-979a-6579dc53cec1',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI', 
    'Content-Type': 'application/json'
  },
  data : data
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
    "id": "21be1e66-307e-47a7-914e-c1a8a68f269c",
    "clientId": "cbx_b2b_myapp_name",
    "clientSecret": "1d49c575-81f8-4d8c-bc18-93711cf7eb24"
}
```

## Listar Chaves de API [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/applications?page=2&page-size=10
```

Esse endpoint retorna uma lista paginada de chaves de API.

```md title="Required permissions"
customer_applications_write
customer_applications_read
```

**Atributos de Resposta**

| Atributo | Descrição                                   |
| -------- | ------------------------------------------- |
| items    | Um array de chaves de API paginadas do cliente |

### Exemplo de Requisição

```javascript
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
   
});
var config = {
  method: 'get',
  url: 'https://api-b2b-dev.carbonext.com.br/v1/customers/applications',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI'
  },
  data : data
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
    "items": [
        {
            "id": "21be1e66-307e-47a7-914e-c1a8a68f269c",
            "clientId": "cbx_b2b_myapp_name",
            "displayName": "My test app44"
        },
    ],
    "pageIndex": 1,
    "totalPages": 1,
    "totalCount": 1,
    "aggregations": null,
    "hasPreviousPage": false,
    "hasNextPage": false
}
```

## Consultar uma Chave de API [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/customers/applications/:id
```

Esse endpoint retorna um objeto de chave de API com suas permissões.

```md title="Required permissions"
customer_applications_write
customer_applications_read
```

**Atributos de Resposta**

| Attributes | Description                                          |
| ---------- | ---------------------------------------------------- |
| Application      | Um objeto de chave de API |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-dev.carbonext.com.br/v1/customers/applications/02c75cc5-b575-4b5f-87d8-bf09e6009c23',
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
{
    "id": "02c75cc5-b575-4b5f-87d8-bf09e6009c23",
    "clientId": "cbx_b2b_myapp_name",
    "displayName": "My test app",
    "permissions": [
        {
            "id": "781d50ae-ab86-4988-8d39-48dca58da6a6",
            "name": "default-roles-co2free",
            "description": null,
            "composite": true,
            "clientRole": false,
            "containerId": "CO2FREE",
            "attributes": null
        }
    ]
}
```

```md title="PATH VARIABLES"
id: 02c75cc5-b575-4b5f-87d8-bf09e6009c23
```