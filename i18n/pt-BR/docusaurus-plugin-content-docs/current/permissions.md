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

Esta requisição retorna uma lista paginada de todas as permissões disponíveis. Essas permissões podem ser anexadas a usuários e/ou customer_applications (chaves).

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
curl -X GET 'https://api-b2b.carbonext.com.br/v1/permissions?page=1&page-size=20' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
        "id": "c56452df-18fe-474b-9cab-82080af3e902",
        "name": "users_write",
        "description": null
    },
    {
        "id": "497efb5a-25eb-434f-9a2a-2e3aa6b2e6e1",
        "name": "certificates_read",
        "description": null
    },
    {
        "id": "44032f0d-9fdf-415e-8707-6f1ff9753187",
        "name": "subscriptions_write",
        "description": null
    },
    {
        "id": "4f3ca574-0b89-4a92-83fa-794edcad6b76",
        "name": "customer_applications_write",
        "description": null
    },
    {
        "id": "5db0f399-28ab-4980-b320-9c321eea3bb1",
        "name": "orders_read",
        "description": null
    },
    {
        "id": "872f1e07-ec58-4058-8919-1df23e8e59da",
        "name": "financial_read",
        "description": null
    },
    {
        "id": "d1b9f6cb-a392-41d2-8bb5-8b07cebf137c",
        "name": "orders_write",
        "description": null
    },
    {
        "id": "db1a2ab4-2d26-446c-a6fe-4b2869d16c5a",
        "name": "subscriptions_read",
        "description": null
    },
    {
        "id": "d08a41b6-f57c-4da6-806b-6610bb595f67",
        "name": "financial_write",
        "description": null
    },
    {
        "id": "465a8197-8cdb-4f90-8509-b941862ba8e1",
        "name": "users_read",
        "description": null
    },
    {
        "id": "c1dad7ce-a24f-4e9e-8cdd-1f1773ba4ba6",
        "name": "customer_applications_read",
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
