---
sidebar_position: 5
custom_edit_url: null
---

# Saldo

A solicitação nesta página refere-se ao saldo do cliente.

O saldo é a diferença entre as faturas pagas, que geram créditos, e todos os pedidos não cancelados criados para o cliente, além de informações detalhadas para dívidas futuras, que são os pedidos não faturados.

## Saldo [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/customers/balance
```

Esta solicitação retorna o saldo do cliente para cada moeda em que possui pedidos e/ou faturas.

```md title="Required permissions"
financial_write
financial_read
```

**Parâmetros de Requisição**

Parâmetro (opcional) | Descrição
--------- | ------
startDate<br/>`Formato: AAAA-MM-DD` | Define a data de início para realizar o cálculo do saldo. Este parâmetro é opcional, se omitido a API calculará o saldo desde o primeiro pedido e/ou fatura.
endDate<br/>`Formato: AAAA-MM-DD` | Define a data final para realizar o cálculo do saldo. Este parâmetro é opcional, se omitido a API calculará o saldo até a data atual.

**Parâmetros de Resposta**

Atributo | Descrição
--------- | ------
startDate | A data em que a requisição começou a procurar dados. Só aparecerá na resposta se fizer parte da requisição.
endDate | A data em que a requisição parou de procurar dados. Só aparecerá na resposta se fizer parte da requisição.
balancesByCurrency | Um array de objetos, cada um contendo um objeto VcuBalance e a moeda usada para criar pedidos.

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/customers/balance' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "startDate": "2021-12-06T13:57:02.360827",
  "endDate": "2022-02-11T21:54:29.3093176Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 18657.993454505508869857137455,
        "credit": 20000,
        "debt": 1342.0065454944911301428625454,
        "futureDebt": 5
      }
    }
  ]
}
```
