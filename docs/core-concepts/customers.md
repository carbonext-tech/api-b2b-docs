---
sidebar_position: 3
---

# Customers

The requests on this page present endpoints for customers

## Customer [GET]

`/v1/customers/:id`

This endpoint return the data of customer, for this, it is necessary to pass the id through the query.

**Request parameter**

Parameter   | Description
--------- | ------
id | The customer Id

**Response attribute**

Parameter   | Description
--------- | ------
id | Unique id to identify the customer
taxId | The tax id od address
legalName | Customer's legal name
displayName | An application description'
address | An object that contains the customer's address data
zipCode | The zip code of the customer's address'
complement | Customer location information
financialContactEmail | Customer email contact
users | Users registered by the customer
customerApplications | Array of client applications objects

### Example Response

```javascript
curl '{{url}}/v1/customers/c50d9a13-2d08-4ccb-8cf8-b16f4f879d33' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

```json
{
    "id": "c50d9a13-2d08-4ccb-8cf8-b16f4f879d33",
    "taxId": "40.638.873/0001-49",
    "legalName": "Bruno Rodrigues",
    "displayName": null,
    "address": {
        "street": "Fake",
        "number": "123",
        "city": "Fake",
        "state": "SP",
        "country": "Fake"
    },
    "zipCode": "00000-000",
    "complement": "Fake",
    "financialContactEmail": "bruno.rodrigues@carbonext.com.br",
    "users": null,
    "customerApplications": [
        {
            "id": "82635077-d920-4fcc-b153-34805c1bf83e",
            "clientId": "teste",
            "displayName": "Point Sistemas Test key",
            "permissions": [
                {
                    "id": "45bbe1bc-4d5a-4991-baac-42fa95d35824",
                    "name": "Certificates - Read",
                    "key": "certificates_read",
                    "description": null
                }
            ]
        },
        {
            "id": "9bf221bb-ddf9-43ec-9d8e-1e1ed11d7030",
            "clientId": "bruninho",
            "displayName": "Point Sistemas Test key",
            "permissions": [
                {
                    "id": "45bbe1bc-4d5a-4991-baac-42fa95d35824",
                    "name": "Certificates - Read",
                    "key": "certificates_read",
                    "description": null
                }
            ]
        }
    ]
}
```

```md title="PATH VARIABLES"
id: c50d9a13-2d08-4ccb-8cf8-b16f4f879d33
```

## List Customers [GET]

`/v1/customers`

This endpoint returns a list of customers.

**Request parameter**

Parameter   | Description
--------- | ------
page | The page number
page-size | Number of items on the page

### Example Request

```javascript
curl '{{url}}/v1/customers?page=1&page-size=100' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

<!-- ### Example Response

```json
{
    "id": "PENDENTE",
}
``` -->

```md title="PATH VARIABLES"
page: 1
page-size: 10
```

## List Filtered Customers [GET]

`/v1/customers`

This endpoint returns customer data filtered by name and sorted by.

**Request parameter**

Parameter   | Description
--------- | ------
page | The page number
page-size | Number of items on the page
filter-by | Filter list based on name
sort-by | Defines whether it will be in ascending (_asc) or descending (_desc) order

### Example Request

```javascript
curl '{{url}}/v1/customers/?page=1&page-size=10&filter-by=tax_id_like:0001|legal_name_like:Victor&sort-by=legal_name_asc' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```

<!-- ### Example Response

```json
{
    "id": "PENDENTE",
}
``` -->

```md title="PATH VARIABLES"
page: 1
page-size: 10
filter-by: tax_id_like:0001|legal_name_like:Victor
sort-by: legal_name_asc
```

## Customer [DEL]

`/v1/customers/customer-id`

This request deletes an application (key). The delete key will no longer be able to perform requests to the API.

```md title="Required permissions"
customerApplication_write
```

**Request parameters**

Parameter   | Description
--------- | ------
clientId | The generated client Id

### Example Request

```javascript
curl '{{url}}/v1/customers/customer-id' \
    -H 'Accept: application/json'
    -H 'Authorization: Bearer {token}'
```
