---
sidebar_position: 2
custom_edit_url: null
---

# Aplicações

As requisições nesta página apresentam endpoints para aplicações.

## Aplicação [POST]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/applications
```

Este endpoint cria uma nova chave de aplicação, usada para criar integrações Machine to Machine (M2M).

```md title="Required permissions"
customerApplication_write
```

**Atributos de Requisição**

Parâmetro | Descrição
--------- | ------
clientId | O ID do cliente gerado
clientName | O nome do cliente
permissions | Um array de objeto que contém as chaves de permissões do usuário

**Atributos de Resposta**

Parameter   | Description
--------- | ------
customerApplicationKey | A chave secreta do cliente gerada. Essa chave não pode ser recuperada novamente em nossa API, portanto, deve ser armazenado com segurança.

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "clientId":"teste-app1",
    "applicationDisplayName": "Teste Chave",
    "permissions":
    [
        {
            "id": "financial_write"
        },
        {
            "id": "financial_read"
        }
    ]
}
```

### Exemplo de Resposta

```json
{
  "customerApplicationKey": "df51476e-fe9c-498b-bf41-831bbe2f3a33"
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

Atributo | Descrição
--------- | ------
items | Um array de pedidos paginados do cliente

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/customers/applications' \
    -H 'Accept: application/json' \
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
