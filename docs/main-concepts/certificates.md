---
sidebar_position: 7
custom_edit_url: null
---

# Certificates

This requests allow receiving data related to the certificate through ID, External ID and Email.

## By External ID [GET]

Let's start by sending a request to get the certificate data through the External ID, this way we identify the certificate by its origin ID, passing the `origin-system-id` as a parameter.

`https://api-certificates.carbonext.com.br/v1/certificates?origin-system-id=b6fc68b0-a2d1-4330-ba97-9a30237aadc3`

**Response Attributes**

| Attribute      | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| id             | The unique id to identify the certificate                               |
| email          | E-mail linked to certificate                                            |
| customerName   | Customer name of certificate                                            |
| type           | Certificate's type                                                      |
| reference      | Signature date                                                          |
| footprint      | Footprint neutralized                                                   |
| serialNumber   | The certificate's number                                                |
| fileUploadKey  | The link where certificate can be downloaded                            |
| status         | Status of certificate                                                   |
| queuedDate     | Is the date the certificate was processed                               |
| created        | Certificate's emission date                                             |
| data           | Extra data                                                              |
| notifyCustomer | If the customer want to be notified about certificate                   |
| originSystemId | Id of the identity than generated the certificate, for example an order |

### Example Request

```javascript
curl 'https://api-certificates.carbonext.com.br/v1/certificates?origin-system-id=b6fc68b0-a2d1-4330-ba97-9a30237aadc3' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "id": "120a098e-2756-4c63-977e-8773b4967da4",
  "email": "emp1@email.com",
  "customerName": "Test",
  "type": 0,
  "reference": "2021-12-14T03:00:00",
  "footprint": 0.0317843103073364,
  "serialNumber": "TEST_CBX202346555/B4E3DE",
  "fileUploadKey": "6fffb5e8f7794d5786d3ed4f8876d46cc7322db611cb4c1b97b14615fe647e63",
  "status": 0,
  "queuedDate": "2021-12-15T14:13:26.140185",
  "created": "2021-12-15T14:13:26.142102",
  "data": null,
  "notifyCustomer": true,
  "originSystemId": "b6fc68b0-a2d1-4330-ba97-9a30237aadc3"
}
```

```md title="PARAMS"
origin-system-id: b6fc68b0-a2d1-4330-ba97-9a30237aadc3
```

## By Email [GET]

We can send a request to get the certificate data through the email, in this way, all certificates linked to the same email will be returned in an array.

`https://api-certificates.carbonext.com.br/v1/certificates?page-size=10&email=emp1@email.com&page=1`

**Parameters Attributes**

| Attribute | Description                    |
| --------- | ------------------------------ |
| page      | Total page                     |
| page-size | The quantity items on the page |
| email     | E-mail related of certificate  |

**Response Attributes**

| Attribute | Description                          |
| --------- | ------------------------------------ |
| items     | An array containing all certificates |

### Example Request

```javascript
curl 'https://api-certificates.carbonext.com.br/v1/certificates?page-size=10&email=emp1@email.com&page=1' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "items": [
    {
      "id": "120a098e-2756-4c63-977e-8773b4967da4",
      "email": "emp1@email.com",
      "customerName": "Test",
      "type": 0,
      "reference": "2021-12-14T03:00:00",
      "footprint": 0.0317843103073364,
      "serialNumber": "TEST_CBX202346555/B4E3DE",
      "fileUploadKey": "6fffb5e8f7794d5786d3ed4f8876d46cc7322db611cb4c1b97b14615fe647e63",
      "status": 0,
      "queuedDate": "2021-12-15T14:13:26.140185",
      "created": "2021-12-15T14:13:26.142102",
      "data": null,
      "notifyCustomer": true,
      "originSystemId": "b6fc68b0-a2d1-4330-ba97-9a30237aadc3"
    },
    {
      "id": "1e0491b5-bf2c-4e49-bf2e-1e12b259811a",
      "email": "emp1@email.com",
      "customerName": "Test",
      "type": 0,
      "reference": "2021-12-14T03:00:00",
      "footprint": 3.23965815335035,
      "serialNumber": "TEST_CBX202346554/B4E3DE",
      "fileUploadKey": "a95f37f4b6ce458bb48fe69b8e7cf766893a23917ccc4608b0d3de317ebc124f",
      "status": 0,
      "queuedDate": "2021-12-15T14:13:25.226157",
      "created": "2021-12-15T14:13:25.227185",
      "data": null,
      "notifyCustomer": true,
      "originSystemId": "bcd93772-7961-4f6c-a02e-1bd230b3dcb7"
    },
    {
      "id": "ad0ce01a-a9be-495c-a784-2bb03bb0198e",
      "email": "emp1@email.com",
      "customerName": "Test",
      "type": 0,
      "reference": "2021-09-01T03:00:00",
      "footprint": 3.25768768508333,
      "serialNumber": "TEST_CBX202346553/B4E3DE",
      "fileUploadKey": "80e97bd4809f433593f2fdb0ac67bdef086f9869f9a1436fa251df7a5e9c8671",
      "status": 1,
      "queuedDate": "2021-12-15T14:13:24.154704",
      "created": "2021-12-15T14:13:24.156245",
      "data": null,
      "notifyCustomer": true,
      "originSystemId": "212_sub_K8pA8d1vc5qpic_2021_9"
    }
  ],
  "pageIndex": 1,
  "totalPages": 1,
  "totalCount": 3,
  "hasPreviousPage": false,
  "hasNextPage": false
}
```

## By ID [GET]

Finally, let's get the data of a specific certificate through its unique ID.

`https://api-certificates.carbonext.com.br/v1/certificates/:id`

### Example Request

```javascript
curl 'https://api-certificates.carbonext.com.br/v1/certificates/120a098e-2756-4c63-977e-8773b4967da4' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Example Response

```json
{
  "id": "120a098e-2756-4c63-977e-8773b4967da4",
  "email": "emp1@email.com",
  "customerName": "Danilo ",
  "type": 0,
  "reference": "2021-12-14T03:00:00",
  "footprint": 0.0317843103073364,
  "serialNumber": "TEST_CBX202346555/B4E3DE",
  "fileUploadKey": "6fffb5e8f7794d5786d3ed4f8876d46cc7322db611cb4c1b97b14615fe647e63",
  "status": 0,
  "queuedDate": "2021-12-15T14:13:26.140185",
  "created": "2021-12-15T14:13:26.142102",
  "data": null,
  "notifyCustomer": true,
  "originSystemId": "b6fc68b0-a2d1-4330-ba97-9a30237aadc3"
}
```

```md title="PATH VARIABLES"
id: 120a098e-2756-4c63-977e-8773b4967da4
```
