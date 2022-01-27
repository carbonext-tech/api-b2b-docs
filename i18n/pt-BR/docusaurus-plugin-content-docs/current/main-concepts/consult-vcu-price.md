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

Este endpoint retornará o preço unitário do VCU, é muito importante passar o `vcu-amount` nos parâmetros da consulta, o `target-currency` é opcional e seu valor padrão é BRL.

Atualmente temos opções de moeda `BRL` e `USD`, no futuro expandiremos as opções.

**Atributos de Resposta**

Atributo | Descrição
--------- | ------
vcuPrice | O preço aplicado para 1 VCU (equivalente a 1 tonelada CO2eq)
currency | O tipo de moeda para o qual foi calculado

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1000000' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "vcuPrice": 77,
  "currency": "BRL"
}
```
