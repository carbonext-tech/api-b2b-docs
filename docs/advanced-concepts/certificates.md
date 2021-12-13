---
sidebar_position: 2
---

# Certificates

Request to get the certificate id

## GET By External ID

`/v1/certificates?origin-system-id=61c113a1-87bf-488f-83fd-ae659c02016f&email&page&page-size`

### Example Request

```javascript
curl --location -g --request GET '{{certificates_host}}/v1/certificates?origin-system-id=61c113a1-87bf-488f-83fd-ae659c02016f&email&page&page-size'
```
_This request is using **Bearer Token**_

```md title="PARAMS"
origin-system-id: 61c113a1-87bf-488f-83fd-ae659c02016f
email
page
page-size
```

## GET Id

`/v1/certificates/:id`

### Example Request

```javascript
curl --location -g --request GET '{{certificates_host}}/v1/certificates/7f2cd1c0-d62c-43e0-81f2-59f568ffbc3b'
```
_This request is using **Bearer Token**_

```md title="PATH VARIABLES"
id: 7f2cd1c0-d62c-43e0-81f2-59f568ffbc3b
```
