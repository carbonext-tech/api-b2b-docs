---
sidebar_position: 6
custom_edit_url: null
---

# Calculators

This page contains requests to calculate the amount of tCO2eq emitted by different types of transport, as well as the price to offset those emissions.

## Types [GET]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/types
```

A request that lists the supported transport types for emissions calculation.

The request will also return the unit that the calculation request will use (e.g, "grams" for deliveries, "passenger" for transportation, etc.), and the unit of the response(e.g, "tCO2eq/tonne" for deliveries or "tCO2eq/passenger" for transportation, etc.).

**Response Attributes**

Attribute   | Description
--------- | ------
types |	A list of supported types
value |	Identifier of the type to be used when making requests to calculate emissions.
name |	The name of the transport type
responseUnit |	Unit of the emission calculation response, when using the distance calculator
requestUnit |	Unit in which the field `unitValue` should be sent when making requests using Origin/Dest codes

### Example Request

```javascript
curl 'https://api-calculator.carbonext.com.br/v1/calculators/types'
```

### Example Response

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

## Airports [GET]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/airports
```

This request returns an array of Airports.

### Example Request

```javascript
curl 'https://api-calculator.carbonext.com.br/v1/calculators/airports' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

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

## Calculate Emission by Distance [POST]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/calculate
```

This request returns the amount of tCO2eq the delivery or transport will emit, based on a given distance.

**Request Parameters**

Parameter   | Description
--------- | ------
type | The type identifier from the `Get Types` request
distance | The distance to be traveled, in meters

**Response attributes**

Attributes   | Description
--------- | ------
emission |	The total amount of tCO2eq emitted during the travel
emissionUnit |	The unit of the emission, based on the `Type` parameter used in the request (`responseUnit`)

### Example Request

```javascript
curl 'https://api-calculator.carbonext.com.br/v1/calculators/'
--data-raw {
    "type": 0,
    "distance": 100000
}
```

### Example Response

```json
{
  "emission": 0.03885,
  "emissionUnit": "tCO2eq/tonne"
}
```

## Calculate Transport Emission by Code [POST]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/calculate
```

This endpoint calculates the amount of tCO2eq emitted when traveling between two locations, for example, ZipCodes for road transport types (only Brazilian ZipCodes are supported for now) or airport codes for flight transport type.

**Request Parameters**

Parameter   | Description
--------- | ------
type |	The type identifier from the 'Get Types' request
originCode |	The code that the transport will depart from
destZipCode |	The code that the transport will arrive at
unitValue |	The unit amount to calculate the emissions for (i.e, 10 passengers, 10000 grams, etc.). The unit is specified by the field 'requestUnit' from 'Get Types' request

**Response attributes**

Attributes   | Description
--------- | ------
emission| The total amount of tCO2eq emitted during the travel
emissionUnit| The value is tCO2eq. The result is calculated for the `unitValue` provided in the request


### Example Request

```javascript
curl 'https://api-calculator.carbonext.com.br/v1/calculators/calculate'
--data-raw {
    "type": 0,
    "originCode": "01526-000",
    "destCode": "66060425",
    "unitValue": 20000
}
```

### Example Response

```json
{
  "emission": 0.0293110549184694,
  "emissionUnit": "tCO2eq"
}
```

## Calculate Offset Price by Distance [POST]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/price
```

This request will calculate the final price to offset the calculated emission.

**Request Parameters**

Parameter   | Description
--------- | ------
type | The type identifier from the `Get Types` request
distance	| The distance to be traveled, in meters
currency	| The currency to calculate the final price in

**Response attributes**

Attributes   | Description
--------- | ------
price	| The price to offset the emission
currency	| The requested currency
emission	| The total amount of tCO2eq emitted during the travel
emissionUnit	| The unit of the emission, based on the `Type` parameter used in the request (`responseUnit`)

### Example Request

```javascript
curl 'https://api-calculator.carbonext.com.br/v1/calculators/price' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "type": 2,
    "distance": 1000000,
    "currency":"BRL"
}
```

### Example Response

```json
{
  "price": 2.93007,
  "currency": "BRL",
  "emission": 0.04098,
  "emissionUnit": "tCO2eq/passenger"
}
```

## Calculate Offset Price by Code [POST]

```md title="BASE URL"
https://api-calculator.carbonext.com.br/v1/calculators/price
```

This request will calculate the final price, in the requested currency, to offset the calculated emission between two locations.

**Request Parameters**

Parameter   | Description
--------- | ------
type |	The type identifier from the `Get Types` request
currency |	The currency to calculate the final price in
originCode |	The code that the transport will depart from
destZipCode |	The code that the transport will arrive at
unitValue |	The unit amount to calculate the emissions for (i.e, 10 passengers, 10000 grams, etc.). The unit is specified by the field `requestUnit` from `Get Types` request

**Response attributes**

Attributes   | Description
--------- | ------
price |	The price to offset the emission
currency |	The requested currency
emission |	The total amount of tCO2eq emitted during the travel
emissionUnit |	The value is tCO2eq. The result is calculated for the `unitValue` provided in the request

### Example Request

```javascript
curl 'https://api-calculator.carbonext.com.br/v1/calculators/price' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw {
    "type": 0,
    "currency": "BRL",
    "originCode": "60183692",
    "destCode": "04131000",
    "unitValue": 300000
}
```

### Example Response

```json
{
  "price": 30.279576219517267,
  "currency": "BRL",
  "emission": 0.423490576496745,
  "emissionUnit": "tCO2eq"
}
```
