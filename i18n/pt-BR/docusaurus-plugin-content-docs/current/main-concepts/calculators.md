---
sidebar_position: 6
custom_edit_url: null
---

# Calculadoras

Esta página contém requisições relacionadas ao cálculo da quantidade de tCO2eq emitida por diferentes tipos de transporte, bem como o preço para compensar essas emissões.

## Tipos [GET]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/types
```

Uma requisição que lista os tipos de transporte suportados para cálculo de emissões.

A solicitação também retornará a unidade que a solicitação de cálculo utilizará (por exemplo, "gramas", "passageiro"), e a unidade da resposta (por exemplo, "tCO2eq/tonelada", "tCO2eq/passageiro") para frete de produtos , e para transporte de ônibus e avião, respectivamente.

**Atributos de Resposta**

| Atributo     | Descrição                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| types        | Uma lista de tipos suportados                                                                              |
| value        | Identificador do tipo a ser utilizado na solicitação de cálculo de emissões.                               |
| name         | O nome do tipo de transporte                                                                               |
| responseUnit | Unidade da resposta do cálculo de emissão, ao usar a calculadora de distância                              |
| requestUnit  | Unidade em que o campo `unitValue` deve ser enviado ao fazer solicitações usando códigos de Origem/Destino |

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-calculator.carbonext.com.br/v1/calculators/types'
```

### Exemplo de Resposta

```json
{
  "types": [
    {
      "value": 0,
      "name": "CargoTruck",
      "responseUnit": "tCO2eq/tonne",
      "requestUnit": "grams"
    },
    {
      "value": 1,
      "name": "PassengerAirplane",
      "responseUnit": "tCO2eq/passenger",
      "requestUnit": "passenger"
    },
    {
      "value": 2,
      "name": "PassengerBus",
      "responseUnit": "tCO2eq/passenger",
      "requestUnit": "passenger"
    }
  ]
}
```

## Aeroportos [GET]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/airports
```

Esta requisição retorna um array de Aeroportos.

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-calculator.carbonext.com.br/v1/calculators/airports'
```

### Exemplo de Resposta

```json
{
  "items": [
    {
      "code": "CPT",
      "country": "África do Sul",
      "city": "Cidade do Cabo"
    },
    {
      "code": "JNB",
      "country": "África do Sul",
      "city": "Joanesburgo"
    },
    {
      "code": "TXL",
      "country": "Alemanha",
      "city": "Berlim"
    },
    {
      "code": "BER",
      "country": "Alemanha",
      "city": "Berlin"
    },
    {
      "code": "FRA",
      "country": "Alemanha",
      "city": "Frankurt"
    },
    {
      "code": "HAM",
      "country": "Alemanha",
      "city": "Hamburgo"
    },
    {
      "code": "LEJ",
      "country": "Alemanha",
      "city": "Leipzig"
    },
    {
      "code": "MUC",
      "country": "Alemanha",
      "city": "Munique"
    },
    {
      "code": "STR",
      "country": "Alemanha",
      "city": "Stuttgart "
    },
    {
      "code": "CGN",
      "country": "Alemanha",
      "city": "Colônia"
    }
  ],
  "pageIndex": 1,
  "totalPages": 46,
  "totalCount": 458,
  "hasPreviousPage": false,
  "hasNextPage": true
}
```

## Calcular Emissão por Distância [POST]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/calculate
```

Esta requisição retorna a quantidade de tCO2eq que a entrega ou transporte emitirá, com base em uma determinada distância.

**Parâmetros de Requisição**

| Parâmetro | Descrição                                         |
| --------- | ------------------------------------------------- |
| type      | O identificador de tipo da requisição `GET Types` |
| distance  | A distância a ser percorrida, em metros           |

**Atributos de Resposta**

| Atributos    | Descrição                                                                               |
| ------------ | --------------------------------------------------------------------------------------- |
| emission     | A quantidade total de tCO2eq emitida durante a viagem                                   |
| emissionUnit | A unidade de emissão, com base no parâmetro `Type` utilizado no pedido (`responseUnit`) |

### Exemplo de Requisição

```javascript
curl -X POST 'https://api-calculator.carbonext.com.br/v1/calculators/calculate' \
    -H 'Content-Type: application/json' \
--data-raw '{
    "type": 0,
    "distance": 100000
}'
```

### Exemplo de Resposta

```json
{
  "emission": 0.03885,
  "emissionUnit": "tCO2eq/tonne"
}
```

## Calcular Emissão de Transporte por Código [POST]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/calculate
```

Este endpoint calcula a quantidade de tCO2eq emitida ao viajar entre dois locais, por exemplo, CEPs para tipos de transporte rodoviário (somente CEPs brasileiros são suportados no momento) ou códigos de aeroporto para tipo de transporte aéreo.

**Parâmetros de Requisição**

| Parâmetro   | Descrição                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | O identificador de tipo da solicitação `GET Types`                                                                                                                      |
| originCode  | O código de onde partirá o transporte                                                                                                                                   |
| destZipCode | O código ao qual o transporte chegará                                                                                                                                   |
| unitValue   | O valor unitário para calcular as emissões (ou seja, 10 passageiros, 10.000 gramas, etc.). A unidade é especificada pelo campo `requestUnit` da solicitação `GET Types` |

**Atributos de Resposta**

| Atributos    | Descrição                                                                            |
| ------------ | ------------------------------------------------------------------------------------ |
| emission     | A quantidade total de tCO2eq emitida durante a viagem                                |
| emissionUnit | O valor é tCO2eq. O resultado é calculado para o `unitValue` fornecido na requisição |

### Exemplo de Requisição

```javascript
curl -X POST 'https://api-calculator.carbonext.com.br/v1/calculators/calculate' \
    -H 'Content-Type: application/json' \
--data-raw '{
    "type": 0,
    "originCode": "01526-000",
    "destCode": "66060425",
    "unitValue": 20000
}'
```

### Exemplo de Resposta

```json
{
  "emission": 0.0293110549184694,
  "emissionUnit": "tCO2eq"
}
```
