---
sidebar_position: 2
custom_edit_url: null
---

# Aplicações

As aplicações são as credenciais definidas (`client_id` e `client_secret`) a serem usadas no fluxo `client_credentials` `OAuth2.0` para autorizar solicitações em nossas APIs.

## Aplicação [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

Este endpoint cria uma nova chave de aplicação, usada para criar integrações Machine to Machine (M2M).

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
curl -X POST 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "clientId": "badlbede",
    "displayName": "Chave de teste",
    "permissions": [
        {
            "id": "45bbe1bc-4d5a-4991-baac-42fa95d35824"
        },
        {
            "id": "65c514f4-424f-4c82-9827-482d564091c0"
        }
    ]
}'
```
### Exemplo de Resposta

```json
{
  "id": "1a11ca1c-195e-477c-b9e6-59adbe7de3f5",
  "clientId": "cbx_b2b_myapp",
  "clientSecret": "8c4ad3e2-bb0b-42f1-a214-c75a1ea8fbd6"
}
```

## Listar Chaves de API [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications?page=2&page-size=10
```

Esse endpoint retorna uma lista paginada de chaves de API.

```md title="Required permissions"
customer_applications_write
customer_applications_read
```

**Atributos de Resposta**

| Atributo | Descrição                                   |
| -------- | ------------------------------------------- |
| items    | Um array de aplicações paginadas do cliente |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "id": "a85f6c65-7f65-4c61-a188-8fab18fe844f",
      "clientId": "app-test",
      "displayName": "Test application"
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 1,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## Consultar uma Chave de API [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications/:id
```

Esse endpoint retorna um objeto de chave de API.

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
curl -X GET 'https://api-b2b.carbonext.com.br/v1/customers/applications/a85f6c65-7f65-4c61-a188-8fab18fe844f' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
    "id": "a85f6c65-7f65-4c61-a188-8fab18fe844f",
    "clientId": "cbx_b2b_app_test",
    "displayName": "Test App",
    "permissions": [
        {
            "id": "5db0f399-28ab-4980-b320-9c321eea3bb1",
            "name": "orders_read",
            "description": null
        },
        {
            "id": "d1b9f6cb-a392-41d2-8bb5-8b07cebf137c",
            "name": "orders_write",
            "description": null
        }
    ]
}
```

```md title="PATH VARIABLES"
id: a85f6c65-7f65-4c61-a188-8fab18fe844f
```