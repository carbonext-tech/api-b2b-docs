---
sidebar_position: 4
custom_edit_url: null
---

# Preço do VCU

Vamos ver como consultar o preço do VCU (Verified Carbon Unity).

## Preço do VCU [GET]

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1&target-currency=BRL
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
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1',
  headers: { 
    'Authorization': 'Bearer kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Exemplo de Resposta

```json
{
  "vcuPrice": 137.50,
  "currency": "BRL"
}
```
