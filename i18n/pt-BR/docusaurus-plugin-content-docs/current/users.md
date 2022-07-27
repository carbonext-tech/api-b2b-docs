---
sidebar_position: 7
custom_edit_url: null
---

# Usuários

As requisições nesta página tratam de operações CRUD em recursos de usuários.

## Usuários [POST]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/users`
```

Esta requisição cria um novo usuário.

**Atributos de Requisição**

| Atributos    | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| email        | E-mail do usuário                                                |
| name         | Nome do usuário                                                  |
| permissions  | Um array de string que contém as chaves de permissões do usuário |

**Atributos de Resposta**

| Atributos       | Descrição                                              |
| --------------- | ------------------------------------------------------ |
| id              | ID do usuário                                          |
| email           | E-mail do usuário                                      |
| name            | Nome do usuário                                        |
| isEmailVerified | Se o usuário verificou o e-mail, isto retornará `true` |
| permissions     | Um array de objeto que contém as permissões do usuário |

### Exemplo de Requisição

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "email": "userteste@email.com",
  "name": "Teste",
  "permissions": [
    {
      "id": "53dfaef6-125d-43ac-92de-a03e49c66d70"
    },
    {
      "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1"
    },
    {
      "id": "f15cbe98-c53f-4042-b952-be7a39783a4a"
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users',
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
  "id": "61211194-e09c-46fc-9cf4-e11fa2510987",
  "email": "userteste@email.com",
  "name": "Teste",
  "isEmailVerified": false,
  "permissions": [
    {
      "id": "f15cbe98-c53f-4042-b952-be7a39783a4a",
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read",
      "description": null
    },
    {
      "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1",
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write",
      "description": null
    },
    {
      "id": "53dfaef6-125d-43ac-92de-a03e49c66d70",
      "name": "Certificates - Read",
      "key": "certificates_read",
      "description": null
    }
  ]
}
```

## Usuários [GET]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/users?page=1&page-size=10`
```

Essa requisição retorna uma lista paginada de usuários ativos.

**Atributos de Resposta**

| Atributo | Descrição                       |
| -------- | ------------------------------- |
| items    | Uma lista de objetos de usuário |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users?page=1&page-size=10',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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
  "items": [
    {
      "id": "3f44d194-52cd-4a2b-ac37-1c9a7713add1",
      "email": "usuario2@email.com",
      "name": "Usuario 2",
      "isEmailVerified": false,
      "permissions": [
        {
          "id": "2158a42d-90a5-4f9e-9346-e81f28a822d1",
          "name": "CustomerApplication - Write",
          "key": "customerApplication_write",
          "description": null
        },
        {
          "id": "53dfaef6-125d-43ac-92de-a03e49c66d70",
          "name": "Certificates - Read",
          "key": "certificates_read",
          "description": null
        }
      ]
    },
    {
      "id": "353a4285-4581-442a-aaea-f87ddf7b831d",
      "email": "testeuser@email.com",
      "name": "Teste",
      "isEmailVerified": false,
      "permissions": [
        {
          "id": "f15cbe98-c53f-4042-b952-be7a39783a4a",
          "name": "CustomerApplication - Read",
          "key": "customerApplication_read",
          "description": null
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 2,
  "aggregations": null,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Usuários [PUT]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/users/:id`
```

Esta requisição atualiza os dados de um usuário.

**Parâmetros de Requisição**

| Parâmetro | Descrição     |
| --------- | ------------- |
| id        | ID do usuário |

**Atributos de Requisição**

| Atributo    | Descrição                                                        |
| ----------- | ---------------------------------------------------------------- |
| name        | Nome do usuário                                                  |
| permissions | Um array de objeto que contém as chaves de permissões do usuário |

**Atributos de Resposta**

| Atributo        | Descrição                                              |
| --------------- | ------------------------------------------------------ |
| id              | ID gerado para o usuário                               |
| email           | E-mail do usuário                                      |
| name            | Nome do usuário                                        |
| isEmailVerified | Se o usuário verificou o e-mail, isto retornará `true` |
| permissions     | Um array de objeto que contém as permissões do usuário |

### Exemplo de Requisição

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users/161429f6-a6e6-4583-8a5e-f55784b10c63?force-refresh=true&include-permissions=true',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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
  "id": "161429f6-a6e6-4583-8a5e-f55784b10c63",
  "email": "userteste@email.com",
  "name": "Teste",
  "isEmailVerified": false,
  "permissions": [
    {
      "id": "4f3ca574-0b89-4a92-83fa-794edcad6b76",
      "name": "customer_applications_write",
      "description": "Criar/Remover Chaves de API",
      "composite": false,
      "clientRole": false,
      "containerId": "CO2FREE",
      "attributes": null
    },
    {
      "id": "5db0f399-28ab-4980-b320-9c321eea3bb1",
      "name": "orders_read",
      "description": "Visualizar pedidos",
      "composite": false,
      "clientRole": false,
      "containerId": "CO2FREE",
      "attributes": null
    }
  ]
}
```

## Usuários [DEL]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/users/:id`
```

Esta requisição exclui um usuário através do `id` passado pelo parâmetro.

**Parâmetros de Requisição**

| Parâmetro | Descrição     |
| --------- | ------------- |
| id        | ID do usuário |

### Exemplo de Requisição

```javascript
var axios = require('axios');
var data = '';

var config = {
  method: 'delete',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/users/161429f6-a6e6-4583-8a5e-f55784b10c63',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI',
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

```javascript
true
```
