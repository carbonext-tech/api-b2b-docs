---
sidebar_position: 1
custom_edit_url: null
---

# Preço do VCU

Vamos ver como consultar o preço do VCU (Verified Carbon Unity).

## Preço do VCU [GET]

```md title="BASE URL"
https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=10&target-currency=BRL
```

Este endpoint retornará o preço unitário do VCU. É muito importante passar o `vcu-amount` através dos parâmetros de consulta e o `target-currency` pode ser considerado opcional. Todos os preços são definidos em BRL por padrão.

Hoje nossos preços são indicados apenas em BRL (Reais) e USD (Dólar Americano). Planejamos expandir nossas ofertas para mais opções de moeda no futuro.

**Atributos de Resposta**

Atributo | Descrição
--------- | ------
vcuPrice | O preço aplicado para 1 VCU (equivalente a 1 tonelada CO2eq)
currency | O tipo de moeda para o qual foi calculado

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1000000' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "vcuPrice": 77,
  "currency": "BRL"
}
```
