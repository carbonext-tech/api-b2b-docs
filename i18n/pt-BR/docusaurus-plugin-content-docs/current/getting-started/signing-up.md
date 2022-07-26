---
sidebar_position: 1
custom_edit_url: null
---

# Cadastrando

## Adquirindo as Credenciais

O acesso aos endpoints da API está ligado à autenticação e não responde sem o uso do **token**, portanto, é preciso que primeiro você crie um usuário e gere o certificado para acesso por sua API.

Para efeito de testes com a aplicação, usaremos o modo de pagamento pré-pago no ambiente de homologação para:
- criar seu usuário;
- cadastrar sua empresa;
- gerar sua compra com uma numeração de cartão de crédito sem autenticação nesse ambiente.

### Crie o usuário

Acesse [https://b2b-hml.carbonext.com.br/signup](https://b2b-hml.carbonext.com.br/signup).


Clique em `Criar conta`:

![Example Site](/img/examples/signing_up_ptBR_01.png)


Preeencha os dados e clique em `CADASTRAR`:

![Example Site](/img/examples/signing_up_ptBR_02.png)


### Cadastre a empresa

Role a barra para preencher os dados da empresa, leia e aceite os:
- Termos e condições;
- Política de privacidade;
- Termos de uso de imagem.

E clique em `Cadastrar e continuar`:

![Example Site](/img/examples/signing_up_ptBR_03.png)
![Example Site](/img/examples/signing_up_ptBR_04.png)


### Faça sua primeira compra

**A unidade de compra de créditos de carbono é a VCU**, 1 VCU representa 1t (tonelada) de gás carbono que não foi lançada na atmosfera (tCO2eq), agora faça sua primeira compra:

- cartão de crédito de testes: `4242 4242 4242 4242`;
- CVC: `123`;
- data de validade: qualquer data futura.

E clique em `Comprar e continuar`:

![Example Site](/img/examples/signing_up_ptBR_05.png)

### Credenciais de acesso

Para garantir a segurança dos dados, sua API integrará com a nossa usando o fluxo `client_credentials` `OAuth2`, nesse momento você deverá anotar as credenciais de acesso (`client_id` e `client_secret`), pois o `client_secret` não será reexibido e depois clique em `Continuar`:

![Example Site](/img/examples/signing_up_ptBR_06.png)

Parabéns, seus créditos de teste estão disponíveis em nossa API, clique em `Dashboard` para continuar.

![Example Site](/img/examples/signing_up_ptBR_07.png)

### Dashboard

Esse é nosso dashboard, seu saldo de VCUs é visualizado em `Balanço`.

![Example Site](/img/examples/signing_up_ptBR_08.png)

### Comprar créditos

Você pode inserir novos créditos, clicando em `Comprar créditos`

![Example Site](/img/examples/signing_up_ptBR_09.png)

### Pedidos

Você fará um pedido sempre que precisar neutralizar uma quantidade de carbono em um período determinado, e pagará por esse pedido usando seu crédito em VCU's, para isso é só clicar em `Pedidos` e em `Novo`.

![Example Site](/img/examples/signing_up_ptBR_10.png)

Preencha a quantidade CO2 consumida no período, [calcule seu consumo](https://b2b-hml.carbonext.com.br/calculators/subscription), escolha a moeda e dê uma descrição e então clique em `SALVAR`.

![Example Site](/img/examples/signing_up_ptBR_11.png)

Além de criar o usuário você viu o funcionamento básico no site, na próxima sessão vamos integrar esse conhecimento à sua API, ainda no ambiente de testes.

<!-- 
- Preencha todos os campos;
- Clique em **Cadastrar e continuar**;
- Preencha o cartão com o número `4242 4242 4242 4242` com qualquer **CVC** e qualquer **data de validade** futura;
- Adicione o número de **VCUs** que você deseja comprar;
- Clique em **Comprar e continuar**.

:::tip chaves geradas

Parabéns, você acabou de gerar seu `client_id` e `client_secret` que serão usados na integração, salve-os em um local seguro, pois eles serão exibidos apenas uma vez e serão usados para autorizar o acesso pela sua API (`M2M`) logo em seguida.

::: 

 -->