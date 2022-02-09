---
sidebar_position: 5
custom_edit_url: null
---

# Saldo

A solicitação nesta página refere-se ao saldo do cliente.

O saldo é uma soma de todas as faturas pagas (que geram créditos) e pedidos não pagos (que geram débitos), juntamente com informações detalhadas de faturas em aberto (débito) e pedidos não faturados para o cliente.

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

Parâmetro | Descrição
--------- | ------
startPeriod<br/>`Formato: AAAA-MM-DD` | Define a data de início para realizar o cálculo do saldo. Este parâmetro é opcional, se omitido a API calculará o saldo desde o primeiro pedido e/ou fatura.
endPeriod<br/>`Formato: AAAA-MM-DD` | Define a data final para realizar o cálculo do saldo. Este parâmetro é opcional, se omitido a API calculará o saldo até a data atual.

**Parâmetros de Resposta**

Atributo | Descrição
--------- | ------
startPeriod | A data em que a requisição começou a procurar dados. Só aparecerá na resposta se fizer parte da requisição.
endPeriod | A data em que a requisição parou de procurar dados. Só aparecerá na resposta se fizer parte da requisição.
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
  "startDate": "2021-10-20T21:36:29.347042",
  "endDate": "2021-10-27T19:09:27.1593907Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 15,
        "credit": 85,
        "usedCredit": 0,
        "debt": 70,
        "futureDebt": 452
      }
    },
    {
      "currency": "USD",
      "vcuBalance": {
        "type": "VCU",
        "balance": -17,
        "credit": 6,
        "usedCredit": 0,
        "debt": 23,
        "futureDebt": 391
      }
    }
  ]
}
```
