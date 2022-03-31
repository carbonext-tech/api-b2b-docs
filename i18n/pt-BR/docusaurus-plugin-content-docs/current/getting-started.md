---
sidebar_position: 2
custom_edit_url: null
---

# Vamos Começar

## Passo 1 - Adquirindo as Credenciais

Vamos começar com uma autenticação básica para podermos evoluir com as demais requisições da nossa API.

Para gerar suas credenciais e realizar consultas em nossa API, é necessário comprar pelo menos um crédito, sendo assim, vamos acessar nosso ambiente de homologação e utilizar um cartão de crédito de testes sem autenticação para comprar nosso primeiro VCU.

- Acesse [https://b2b-hml.carbonext.com.br/auth/signup](https://b2b-hml.carbonext.com.br/auth/signup).

- Preencha todos os campos.

- Clique em **Cadastrar e continuar**.

- Preencha o cartão com o número `4242 4242 4242 4242` com qualquer **CVC** e qualquer **data de validade** futura.

- Adicione o número de **VCUs** que você deseja comprar.

- Clique em **Comprar e continuar**

:::tip chaves geradas

Parabéns, você acabou de gerar seu `client_id` e `client_secret`, salve-os em um local seguro, pois eles serão exibidos apenas uma vez.

:::

## Passo 2 - Adquirindo o Token de Acesso

Agora precisamos de um `token` de autorização, para isso, vamos utilizar o [Postman](https://www.postman.com/downloads/), uma aplicação para realizar testes de API.

Após iniciar o Postman, crie uma nova requisição no método **POST** e adicione a seguinte URL de homologação da nossa API.

```md title="BASE URL"
https://auth-hml.carbonext.com.br/connect/token
```

Logo após, acesse abaixo da URL a opção **Body > x-www-form-urlencoded** e adicione as chaves e seus valores correspondentes seguindo o exemplo de requisição a seguir.

### Exemplo de Requisição

```javascript
curl -X POST 'https://auth-hml.carbonext.com.br/connect/token' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=offline_access'
```

Preencha o seu `client_id` e `client_secret` corretamente. Desse modo, nossa requisição deverá estar preenchida da seguinte forma.

![Exemplo Postman](/img/examples/postman-1.jpg)

Ao enviar a nossa requisição, teremos como retorno o `access_token` que nos permitirá interagir com diversos outros endpoints.

### Exemplo de Resposta

```json
{
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "token_type": "Bearer",
  "expires_in": 3596,
  "refresh_token": "cjju3PUmqzyw3vfp8aJ-afSFPwbObvOGweWKiQ5ezNA"
}
```

## Passo 3 - Consultando o Preço do VCU

Agora, estamos prontos.

Novamente no Postman, vamos criar uma nova requisição no método GET e adicionar a seguinte URL.

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1
```

Note que estamos passando a quantidade de VCUs pela query da nossa requisição, sendo ela o `vcu-amount` com o valor desejado para a consulta de preço.

Logo abaixo da URL, clique na opção **Authorization**, troque o valor do **Type** para **Bearer Token** e cole o seu `access_token` no campo à direita.

Sua requisição deverá estar configurada da seguinte forma.

![Exemplo Postman](/img/examples/postman-2.jpg)

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

Teremos como retorno os seguintes dados.

### Exemplo de Resposta

```json
{
  "vcuPrice": 137.5,
  "currency": "BRL"
}
```

## Step 4 - Criando um Pedido para Comprar VCUs

Após consultar o preço do VCU, chegou a hora de você criar seu primeiro pedido.

No Postman, vamos criar uma nova requisição com o método POST e adicionar a seguinte URL.

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/orders
```

Logo abaixo da URL, clique na opção **Authorization**, troque o valor do **Type** para **Bearer Token** e cole o seu `access_token` no campo à direita.

No **Body**, selecione a opção **raw** e mude o tipo **Text** para o tipo **JSON**. No corpo da requisição, vamos adicionar os seguintes dados.

```json
{
    "vcuAmount":150,
    "targetCurrency":"BRL"
}
```

Sua requisição deverá estar configurada da seguinte forma.

![Exemplo Postman](/img/examples/postman-3.jpg)

### Example Request

```javascript
curl -X POST 'https://api-b2b-hml.carbonext.com.br/v1/orders' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}' \
--data-raw '{
    "vcuAmount":150,
    "targetCurrency":"BRL"
}'
```

Teremos como retorno os seguintes dados.

### Example Response

```json
{
  "id": "f8e48b36-b0e4-41eb-bbe5-0cc1bdfc5be2",
  "vcuAmount": 150,
  "vcuUnitPrice": 77,
  "targetCurrency": "BRL",
  "status": "Issued",
  "createdAt": "28/10/2021 21:12:14"
}
```

## Step 5 - Consultando seu Saldo Atual

Agora, você pode consultar o seu saldo atual.

No Postman, vamos criar uma nova requisição com o método GET e adicionar a seguinte URL.

```md title="BASE URL"
https://api-b2b-hml.carbonext.com.br/v1/invoices/balance
```

Abaixo da URL, clique na opção **Authorization**, troque o valor do **Type** para **Bearer Token** e cole o seu `access_token` no campo à direita.

Sua requisição deverá estar configurada da seguinte forma.

![Exemplo Postman](/img/examples/postman-4.jpg)

### Example Request

```javascript
curl -X GET 'https://api-b2b-hml.carbonext.com.br/v1/customers/balance' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

Teremos como retorno os seguintes dados.

### Example Response

```json
{
  "startDate": "2021-12-06T13:57:02.360827",
  "endDate": "2022-02-11T21:54:29.3093176Z",
  "balancesByCurrency": [
    {
      "currency": "BRL",
      "vcuBalance": {
        "type": "VCU",
        "balance": 18657.993454505508869857137455,
        "credit": 20000,
        "debt": 1342.0065454944911301428625454,
        "futureDebt": 5
      }
    }
  ]
}
```

:::info
Veremos mais sobre nossas requisições de autorização e outros conceitos na próxima página.
:::
