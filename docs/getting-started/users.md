---
sidebar_position: 3
---

# Deal with Users

The requests in this page handle CRUD operations on Users resources.

## POST Users

`/v1/users`

This request creates a new user.

**Request body attributes**

Attributes   | Description
--------- | ------
email | User's email
userPassword | User's password
name | User's name
permissions | An array of object that contains the keys of the user's permissions
id | Id of the desired permissions for the user

**Response attributes**

Attributes   | Description
--------- | ------
id | User's Id
email | User's email
name | User's name
picture | Link to user's profile picture
preferredLanguage | User's language choice
isAdmin	 | A flag (boolean) that indicates if the user is Administrator
permissions | An array of object that contains the user's permissions
name | Name of the permission
key | Key of the permission

### Example Request

```javascript
curl --location -g --request POST '{{url}}/v1/users'
```

```json
--data-raw '{
    "email": "usuario3@email.com",
    "userPassword": "123456",
    "name": "Usuario 3",
    "permissions":
    [
        {
            "key": "users_write"
        },
        {
            "key": "users_read"
        },
        {
            "key": "customerApplication_write"
        },
        {
            "key": "customerApplication_read"
        }
    ]
}'
```
_This request is using **Bearer Token**_

### Example Response

```json
{
  "id": "71d29b88-7edc-4601-8434-98faede4732a",
  "email": "usuario3@email.com",
  "name": "Usuario 3",
  "picture": null,
  "preferredLanguage": null,
  "isAdmin": false,
  "permissions": [
    {
      "name": "Users - Write",
      "key": "users_write"
    },
    {
      "name": "Users - Read",
      "key": "users_read"
    },
    {
      "name": "CustomerApplication - Write",
      "key": "customerApplication_write"
    },
    {
      "name": "CustomerApplication - Read",
      "key": "customerApplication_read"
    }
  ]
}
```

## GET Users

`/v1/users?page=1&page-size=10`

This request returns a paginated list of active users.

**Response attributes**

Attribute |	Description
--------- | ------
items |	A list of User objects
id | User's id
email |	User's email
name |	User's name
picture |	Link to user's profile picture
preferredLanguage |	User's language choice
customerId |	Id of the user's customer
isAdmin |	A flag (boolean) that indicates if the user is Admininistrator
permissions |	An array of object that contains the keys of the user's permissions
name |	Name of the permission
key |	Key of the permission
pageIndex |	The number of the page of the response
totalPages |	The total number of pages contained in the response
totalCount |	The total number of users
hasPreviousPage |	Flag (boolean) indicating whether the list has a previous page
hasNextPage |	Flag (boolean) indicating whether the list has a next page
_This request is using **Bearer Token**_

## PUT Users

`/v1/users/:id`

This request updates a user.

**Request parameters**

Parameter |	Description
---------- | ------
id |	The user's id

**Request body attributes**

Attribute |	Description
--------- | ------------
name |	User's name
permissions |	An array of object that contains the keys of the user's permissions
key |	The key of the user's permissions

**Response attribute**

Attribute |	Description
-------- | ---------
id |	User's generated id
email |	User's email
name |	User's name
picture |	Link to user's profile picure
preferredLanguage |	User's language choice
isAdmin |	A flag (boolean) that indicates if the user is Admininistrator
permissions |	An array of object that contains the user's permissions
name | (optional)	Name of a desired permissions for the user
key |	Key of a desired permissions for the user
_This request is using **Bearer Token**_

## DEL Users

`/v1/users/:id`

This request deletes a user.

```md title="PATH VARIABLES"
id: 8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d
```

### Example Request

```javascript
curl --location -g --request DELETE '{{host}}/v1/users/8c9c9ecf-295c-49e5-a3f9-6f2cf27b169d' \
--data-raw ''
```
_This request is using **Bearer Token**_

### Example Response

```javascript
true
```
