---
sidebar_position: 1
custom_edit_url: null
---

# Preço do VCU

Vamos ver como consultar o preço do VCU (Verified Carbon Unity).

## Preço do VCU [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1&target-currency=BRL
```

Este endpoint retornará o preço unitário do VCU. Os parâmetros `vcu-amount` e `target-currency` são opcionais. Os valores padrão são `vcu-amount=1` e `target-currency=BRL`.

As moedas atualmente aceitas são BRL (Reais Brasileiros) e USD (Dólar Americano), pretendemos expandir essa lista no futuro.

**Atributos de Resposta**

| Atributo | Descrição                                                    |
| -------- | ------------------------------------------------------------ |
| vcuPrice | O preço aplicado para 1 VCU (equivalente a 1 tonelada CO2eq) |
| currency | O tipo de moeda para o qual foi calculado                    |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1&target-currency=BRL' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "vcuPrice": 137.50,
  "currency": "BRL"
}
```
