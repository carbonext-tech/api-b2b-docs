---
sidebar_position: 5
custom_edit_url: null
---

# Resources

Our APIs have advanced query filters, the following request returns a list of resources that allow such queries.

## List Resources [GET]

```url title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/resources
```

### Example Request

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-b2b-hml.carbonext.com.br/v1/resources',
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
    "entities": [
        "applications",
        "invoices",
        "orders",
        "subscriptions",
        "retirements",
        "users"
    ]
}
```
