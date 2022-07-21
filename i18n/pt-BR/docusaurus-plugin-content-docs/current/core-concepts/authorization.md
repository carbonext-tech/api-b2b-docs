---
sidebar_position: 1
custom_edit_url: null
---

# Autorização

Agora que você já tem acesso ao sistema e testou as funcionalidades básicas, vamos avançar para o uso de autorização M2M (**machine to machine**) em que a autenticação gerada pelo usuário e senha permite acesso por outras aplicações através de chaves de acesso.

## Autorizar Cliente [POST]

```md title="BASE URL"
https://auth-dev.carbonext.com.br/auth/realms/co2free/protocol/openid-connect/token
```

Esta solicitação valida as credenciais fornecidas e retorna o token gerado.

**Atributos do Parâmetro**

| Parâmetro    | Valor                                |
| ------------ | ---------------------------------------- |
| client_id     | A chave de credencial pública do cliente |
| client_secret | A chave de credencial privada do cliente |
| grant_type | client_credentials |

**Atributos da resposta**

| Parâmetro     | Descrição                                                         |
| ------------- | ----------------------------------------------------------------- |
| accessToken   | Um token usado para autorizar o acesso do usuário.                |
| token_type    | O tipo do token                                                   |
| expires_in    | A quantidade de tempo até que o token expire, números em segundos |
| refresh_token | O token de atualização fornecido na requisição de autorização     |


### Exemplo de Requisição

```javascript
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'client_id': 'cbx_b2b_3fe7cbb3-212b-4591-acb3-009ca9e57ff7',
  'client_secret': '7beb0588-edb3-44f4-bbfc-9779cd5c9dbf',
  'grant_type': 'client_credentials',
  'scope': 'roles' 
});
var config = {
  method: 'post',
  url: 'https://auth-dev.carbonext.com.br/auth/realms/co2free/protocol/openid-connect/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
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
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "expires_in": 36000,
  "refresh_expires_in": 0,
  "token_type": "Bearer",
  "not-before-policy": 0,
  "scope": "profile email roles"
}
```

<!--
```md title="BODY urlencoded"
client_id: {{client_id}}
client_secret: {{client_secret}}
grant_type: client_credentials
scope: offline_access
```
## Atualizar Token [POST]

```md title="BASE URL"
https://auth.carbonext.com.br/connect/token
```

Este endpoint permite o usuário solicitar um novo token quando a validade do seu token atual expirar.

**Atributos do Parâmetro**

| Parâmetro     | Descrição                                                   |
| ------------- | ----------------------------------------------------------- |
| refresh_token | O token de atualização fornecido na resposta de autorização |

### Exemplo de Requisição

```javascript
curl -X POST 'https://auth.carbonext.com.br/connect/token' \
--data-urlencode 'grant_type=refresh_token' \
--data-urlencode 'refresh_token={{refresh_token}}' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}'
```

### Exemplo de Resposta

```json
{
  "access_token": "_OAiP7ySFVRf6_KE-8u9AcXjZQJQXhfRUkq_E0Zr1Mk",
  "token_type": "Bearer",
  "expires_in": 3595,
  "scope": "offline_access",
  "refresh_token": "5iI6Zo9QmJ3-bcmRTtH6ICdzjG-K2usMRKld0KrJRxw"
}
```

```md title="BODY urlencoded"
grant_type: refresh_token
refresh_token: {{refresh_token}}
client_id: {{client_id}}
client_secret: {{client_secret}}
``` -->

<!-- ## Informações de Usuário [GET]

```md title="BASE URL"
https://auth.carbonext.com.br/connect/userinfo
```

Uma solicitação que recupera informações do usuário (ou chave da aplicação).

**Atributos de resposta**

| Atributos             | Descrição                                                                 |
| --------------------- | ------------------------------------------------------------------------- |
| clientId              | A identificação do cliente (chave pública)                                |
| userId                | A identificação do usuário                                                |
| name                  | O nome do usuário                                                         |
| email                 | O e-mail do usuário                                                       |
| isEmailValid          | Um booleano para identificar se o e-mail do usuário foi verificado        |
| customerId            | O ID do cliente ao qual o usuário ou aplicação está relacionado           |
| customerApplicationId | O ID da aplicação do cliente (chave)                                      |
| customerTaxId         | Número do documento fiscal do cliente                                     |
| customerLegalName     | O nome legal do cliente                                                   |
| permissions           | Uma matriz contendo as chaves de permissões para o usuário (ou aplicação) |

### Exemplo de Requisição

```javascript
curl -X GET 'https://auth.carbonext.com.br/connect/userinfo' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "clientId": "5d7aac18-f566-49ec-b6cb-48e533d0d262",
  "userId": null,
  "name": null,
  "email": "exemplo.req@email.com",
  "isEmailValid": false,
  "customerId": "c892597a-997c-4a6f-a4cf-6e370240edff",
  "customerApplicationId": "ef04cbdc-5197-4812-a910-0d5253b4b2f5",
  "customerTaxId": "10.203.485/0001-74",
  "customerLegalName": "Carbon Teste",
  "permissions": [
    "certificates_read",
    "customerApplication_read",
    "customerApplication_write",
    "financial_read",
    "financial_write",
    "orders_read",
    "orders_write",
    "users_read",
    "users_write"
  ]
}
``` -->
