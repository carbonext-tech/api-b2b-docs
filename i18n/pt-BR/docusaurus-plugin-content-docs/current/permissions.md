---
sidebar_position: 8
custom_edit_url: null
---

# Lista de Permissões

Faça uma requisição para receber a lista de permissões, essas permissões permitem definir com o que um usuário pode interagir, editar, adicionar ou remover na API.

## Listar Permissões [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20
```

Esta requisição retorna uma lista paginada de todas as permissões disponíveis. Essas permissões podem ser anexadas a usuários e/ou customerApplications (chaves).

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
| certificates_read         | Somente leitura de Certificados       |

**Atributos de Resposta**

| Atributo | Descrição               |
| -------- | ----------------------- |
| items    | Uma lista de permissões |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "id": "afd59c5b-bc68-47a2-b79f-4f917579306f",
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read",
      "description": null
    },
    {
      "id": "138fd7d4-bb93-4e9f-8a1d-0f5cbad197ef",
      "name": "Financial - Read",
      "key": "financial_read",
      "description": null
    },
    {
      "id": "36008ea5-b1f2-4137-93ad-189ef72b1574",
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write",
      "description": null
    },
    {
      "id": "65c514f4-424f-4c82-9827-482d564091c0",
      "name": "Users - Read",
      "key": "users_read",
      "description": null
    },
    {
      "id": "8d7652d1-17e5-4fba-926c-0ce94c8c1206",
      "name": "Users - Write",
      "key": "users_write",
      "description": null
    },
    {
      "id": "918cd839-a543-41ee-9e78-5fb481611a6e",
      "name": "Orders - Read",
      "key": "orders_read",
      "description": null
    },
    {
      "id": "b2aab14a-cdd8-490e-b430-d03aeb3a4f1f",
      "name": "Financial - Write",
      "key": "financial_write",
      "description": null
    },
    {
      "id": "a7e90313-331e-4d97-9fbb-a22341827a31",
      "name": "Orders - Write",
      "key": "orders_write",
      "description": null
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 8,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

```md title="PARAMS"
page: 1
page-size: 20
```
