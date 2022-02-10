---
sidebar_position: 2
custom_edit_url: null
---

# Vamos começar

## Passo 1 - Adquirindo as Credenciais

Vamos começar com uma autenticação básica para podermos evoluir com as demais requisições da nossa API.

Para gerar suas credenciais e realizar consultas em nossa API, é necessário comprar pelo menos um crédito, sendo assim, vamos acessar nosso ambiente de homologação e utilizar um cartão de crédito de testes sem autenticação para comprar nosso primeiro VCU.

* Acesse [https://b2b-hml.carbonext.com.br/auth/signup](https://b2b-hml.carbonext.com.br/auth/signup).

* Preencha todos os campos.

* Clique em **Cadastrar e continuar**.

* Preencha o cartão com o número `4242 4242 4242 4242` com qualquer **CVC** e qualquer **data de validade** futura.

* Adicione o número de **VCUs** que você deseja comprar.

* Clique em **Comprar e continuar**

:::tip chaves geradas

Parabéns você acabou de gerar seu `client_id` e `client_secret`, salve-os em um local seguro, pois eles serão exibidos apenas uma vez.

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
https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1000000
```

Note que estamos passando a quantidade de VCUs pela query da nossa requisição, sendo ela o `vcu-amount` com o valor desejado para a consulta de preço.

Logo abaixo da URL, clique na opção **Authorization**, troque o valor do **Type** para **Bearer Token** e cole o seu `access_token` no campo à direita.

Sua requisição deverá estar configurada da seguinte forma.

![Exemplo Postman](/img/examples/postman-2.jpg)

### Exemplo de Requisição

```javascript
curl -X GET 'https://api-b2b-hml.carbonext.com.br/v1/prices?vcu-amount=1000000' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer {token}'
```

Teremos como retorno os seguintes dados.

### Exemplo de Resposta

```json
{
  "vcuPrice": 77,
  "currency": "BRL"
}
```

Veremos mais sobre nossas requisições de autorização e outros conceitos na próxima página.
