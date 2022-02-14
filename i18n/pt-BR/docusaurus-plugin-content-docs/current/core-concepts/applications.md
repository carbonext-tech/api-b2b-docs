---
sidebar_position: 2
custom_edit_url: null
---

# Aplicações

As aplicações são as credenciais definidas (`client_id` e `client_secret`) a serem usadas no fluxo `client_credentials` `OAuth2.0` para autorizar solicitações em nossas APIs.

## Aplicação [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications?customer-id=1f2f3c6f-0177-4905-88d4-f4e0b667fdca
```

Este endpoint cria uma nova chave de aplicação, usada para criar integrações Machine to Machine (M2M).

```md title="Required permissions"
customerApplication_write
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
curl -X POST 'https://api-b2b.carbonext.com.br/v1/customers/applications?customer-id=1f2f3c6f-0177-4905-88d4-f4e0b667fdca' \
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

```md title="Params"
customer-id: 1f2f3c6f-0177-4905-88d4-f4e0b667fdca
```

### Exemplo de Resposta

```json
{
  "id": "d5e1e2ce-7c7e-4ce6-9d07-d395625e3860",
  "clientId": "badlbede",
  "clientSecret": "9831be6d-6904-4728-b792-7e94ba00ac18"
}
```

## Listar Aplicações [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications?page=2&page-size=10
```

Esse endpoint retorna uma lista paginada de aplicativos (chaves).

```md title="Required permissions"
customerApplication_write
customerApplication_read
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
      "clientId": "app-test",
      "permissions": [
        {
          "name": "Users - Write",
          "key": "users_write"
        },
        {
          "name": "CustomerApplication - Write",
          "key": "customerApplication_write"
        },
        {
          "name": "Financial - Write",
          "key": "financial_write"
        },
        {
          "name": "Users - Read",
          "key": "users_read"
        },
        {
          "name": "Financial - Read",
          "key": "financial_read"
        },
        {
          "name": "Orders - Read",
          "key": "orders_read"
        },
        {
          "name": "CustomerApplication - Read",
          "key": "customerApplication_read"
        },
        {
          "name": "Orders - Write",
          "key": "orders_write"
        }
      ]
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 1,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```
