---
sidebar_position: 9
custom_edit_url: null
---

# Calculators

Our API calculates the amount of tCO2eq emitted by different types of transport.

## Types [GET]

```md title="BASE URL"
`https://api-b2b-hml.carbonext.com.br/v1/calculators/types`
```
This endpoint returns a list of supported transports for emissions calculation, including the unit that the calculation request will use (e.g. "grams", "passenger") and the freight response unit for bus and airplane transports, respectively ( e.g. "tCO2eq/ton", "tCO2eq/passenger").

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
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/calculators/types',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
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
https://api-b2b-hml.carbonext.com.br/v1/calculators/airports
```

This request returns a list of Airports.

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/calculators/airports',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
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
https://api-calculators.carbonext.com.br/v1/calculators/calculate
```

This request returns the amount of tCO2eq the delivery or transport will emit, based on a given distance and transport.

**Request Parameters**

Parameter   | Description
--------- | ------
type | The type identifier from the `GET Types` request
distance | The distance to be traveled, in meters

**Response attributes**

Attributes   | Description
--------- | ------
emission |	The total amount of tCO2eq emitted during the travel
emissionUnit |	The unit of the emission, based on the `Type` parameter used in the request (`responseUnit`)

### Example Request

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "type": 0,
  "distance": 100000
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/calculators/calculate',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
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
`https://api-b2b-hml.carbonext.com.br/v1/calculators/calculate`
```

This endpoint calculates the amount of tCO2eq emitted when traveling between two locations, for example, ZipCodes for road transport types (only Brazilian ZipCodes are supported for now) or airport codes for flight transport type.

**Request Parameters**

Parameter   | Description
--------- | ------
type |	The type identifier from the 'GET Types' request
originCode |	The code that the transport will depart from
destZipCode |	The code that the transport will arrive at
unitValue |	The unit amount to calculate the emissions for (i.e, 10 passengers, 10000 grams, etc.). The unit is specified by the field 'requestUnit' from the 'GET Types' request

**Response attributes**

Attributes   | Description
--------- | ------
emission| The total amount of tCO2eq emitted during the travel
emissionUnit| The value is tCO2eq. The result is calculated for the `unitValue` provided in the request


### Example Request

```javascript
var axios = require('axios');
var data = JSON.stringify({
  "type": 0,
  "originCode": "01526-000",
  "destCode": "66060425",
  "unitValue": 20000
});

var config = {
  method: 'post',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/calculators/calculate',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### Example Response

```json
{
  "emission": 0.0293110549184694,
  "emissionUnit": "tCO2eq"
}
```
