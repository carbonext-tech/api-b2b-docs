---
sidebar_position: 2
custom_edit_url: null
---

# Vamos começar

## Criar uma conta

Vamos começar com uma autenticação básica para podermos evoluir com as demais requisições da nossa API. Acesse o nosso [site B2B](https://b2b-hml.carbonext.com.br/auth/signup) em ambiente de homologação para criar uma conta de teste.

Para gerar suas chaves e fazer consultas em nossa API, é necessário comprar pelo menos um crédito, você pode cadastrar um cartão de crédito de teste sem autenticação
para comprar nosso VCU, preencha o formulário na página de checkout com o número do cartão `4242 4242 4242 4242` com qualquer **CVC** e qualquer **data de validade** futura, adicione o número de **VCUs** que você deseja comprar, clique em **Comprar e continuar** e aguarde a confirmação da compra.

:::tip chaves geradas

Parabéns você acabou de gerar seu `client_id` e `client_secret`, salve-os em um local seguro, pois eles serão exibidos apenas uma vez.

:::

## Autorização

Antes de realizar nossa primeira requisição, precisamos de um `token` de autorização que recebemos através do seguinte endpoint, passando nosso `client_id` e `client_secret` no corpo da solicitação no formato `urlencode`.

### Exemplo de Requisição

```javascript
curl 'https://api-auth.carbonext.com.br/connect/userinfo' \
--data-urlencode 'client_id={{client_id}}' \
--data-urlencode 'client_secret={{client_secret}}' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=offline_access'
```

### Exemplo de Resposta

```json
{
  "access_token": "kRjvJJpQpwWHoWKi-K_5SO0w0dkAqiO2QudmyoJxlTI",
  "token_type": "Bearer",
  "expires_in": 3596,
  "refresh_token": "cjju3PUmqzyw3vfp8aJ-afSFPwbObvOGweWKiQ5ezNA"
}
```

## Consultando o preço do VCU

Agora, estamos prontos.

Vamos consultar o preço do VCU com o exemplo a seguir, passando `vcu-amount` como parâmetro e nosso `access_token` no **Header** da solicitação.

### Exemplo de Requisição

```javascript
curl 'https://api-b2b.carbonext.com.br/v1/prices?vcu-amount=1000000' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer {token}'
```

### Exemplo de Resposta

```json
{
  "vcuPrice": 77,
  "currency": "BRL"
}
```

Veremos mais sobre nossas requisições de autorização e outros conceitos na próxima página.
