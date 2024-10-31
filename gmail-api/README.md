
# Gmail Api

Gmail API é um projeto que permite o envio de e-mails utilizando a biblioteca Nodemailer com autenticação OAuth2. O projeto usa o Mailgen para gerar o corpo dos e-mails em HTML, criando um design de e-mails responsivo e personalizado.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT` `EMAIL` `PASSWORD`
`OAUTH_CLIENTID` `OAUTH_CLIENT_SECRET` `OAUTH_REFRESH_TOKEN` 


## Documentação da API

1. #### Envia um e-mail de confirmação de teste usando o serviço SMTP ethereal.email.

- ###### Útil para testar a funcionalidade de envio de e-mails sem uma conta real.


```http
  GET /api/send-confirm
```

#### Resposta

- Sucesso (201 Created):
  - Retorna um objeto com a mensagem de sucesso, o ID da mensagem, e uma URL para visualizar o e-mail.

```json
  "msg": "Você acabou de receber um email!",
  "info": "ID da mensagem",
  "preview": "URL de visualização do e-mail"
```
- Erro (500 Internal Server Error):
  - Retorna um objeto de erro se ocorrer uma falha durante o envio.

```json
  "error": "Detalhes do erro"
```

2. #### Enviar E-mail Personalizado

- ###### Envia um e-mail real para o endereço fornecido, com uma mensagem e tabela de itens.


```http
POST /api/send-email
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userEmail` | `string` | Obrigatório. O e-mail do destinatário. |


#### Resposta

- Sucesso (201 Created):
  - Retorna uma mensagem de confirmação de envio.

```json
  "msg": "Você enviou um email."
```
- Erro (400 Bad Request):
  - Retorna um erro se o parâmetro userEmail estiver ausente.

```json
  "error": "O parâmetro userEmail é obrigatório."
  ```
- Erro (500 Internal Server Error):
  - Retorna um erro em caso de falha no envio do e-mail.

```json
  "error": "Detalhes do erro"
```
## Referência

 - [Duvida como configurar o OAuth2 ?](https://www.freecodecamp.org/portuguese/news/como-usar-o-nodemailer-para-enviar-emails-do-seu-servidor-do-node-js/)


