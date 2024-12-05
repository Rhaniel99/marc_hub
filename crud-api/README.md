
# CRUD API ( Estudante )

Este projeto é uma API CRUD (Create, Read, Update, Delete) desenvolvida para gerenciar dados, a API utiliza o PostgreSQL como banco de dados relacional.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT` `DB_USER` `DB_HOST`
`DB_DATABASE` `DB_PASSWORD` `DB_PORT` 



## Documentação da API

1. ####  Criar Estudante.

- ###### Cria um novo registro de estudante no banco de dados.

```http
POST /api/students
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | Obrigatório. Nome do estudante. |
| `email` | `string` | Obrigatório. E-mail do estudante. |
| `age` | `number` | Obrigatório. Idade do estudante. |
| `dob` | `string` | Obrigatório. Data de nascimento (YYYY-MM-DD). |


#### Resposta

- Sucesso (201 Created):
  - Retorna os dados do estudante criado.

```json
{
  "message": "Estudante criado com sucesso!",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25,
    "dob": "1999-01-01"
  }
}
```

- Erro (400 Bad Request):
  - Retorna um erro caso ocorra falha na criação.

```json
{
  "message": "Erro ao criar estudante",
  "error": "Detalhes do erro"
}
```

2. ####  Recuperar Todos os Estudantes.

- ###### Retorna uma lista de todos os estudantes cadastrados.

```http
GET /api/students
```

#### Resposta

- Sucesso (201 Created):
  - Retorna uma lista de estudantes.

```json
{
  "message": "Estudantes recuperados com sucesso!",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 25,
      "dob": "1999-01-01"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "age": 22,
      "dob": "2002-02-02"
    }
  ]
}

```
- Erro (500 Internal Server Error):
  - Retorna um erro caso ocorra falha na recuperação.

```json
{
  "message": "Erro ao recuperar estudantes!",
  "error": "Detalhes do erro"
}
```

3. #### Recuperar Estudante por ID

- ###### Retorna os dados de um estudante específico pelo ID.


```http
GET /api/students/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Obrigatório. ID do estudante. |


#### Resposta

- Sucesso (201 Created):
  - Retorna os dados do estudante encontrado.

```json
{
  "message": "Estudante recuperado com sucesso!",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25,
    "dob": "1999-01-01"
  }
}
```

- Erro (404 Not Found):
  - Retorna um erro caso o ID não seja encontrado.

```json
{
  "message": "Estudante não encontrado"
}
```

- Erro (500 Internal Server Error):
  - Retorna um erro caso ocorra falha na recuperação.

```json
{
  "message": "Erro ao recuperar estudante",
  "error": "Detalhes do erro"
}
```

4. #### Atualizar Estudante

- ###### Atualiza as informações de um estudante pelo ID.


```http
PUT /api/students/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Obrigatório. ID do estudante. |
| `name` | `string` | Obrigatório. Nome do estudante. |
| `email` | `string` | Obrigatório. E-mail do estudante. |
| `age` | `number` | Obrigatório. Idade do estudante. |
| `dob` | `string` | Obrigatório. Data de nascimento (YYYY-MM-DD). |

#### Resposta

- Sucesso (201 Created):
  - Retorna os dados atualizados do estudante.

```json
{
  "message": "Estudante atualizado com sucesso",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 26,
    "dob": "1998-01-01"
  }
}
```

- Erro (404 Not Found):
  - Retorna um erro caso o ID não seja encontrado.

```json
{
  "message": "Estudante não encontrado"
}
```

- Erro (500 Internal Server Error):
  - Retorna um erro caso ocorra falha na atualização.

```json
{
  "message": "Erro ao atualizar o estudante",
  "error": "Detalhes do erro"
}
```

5. #### Deletar Estudante

- ###### Remove um estudante pelo ID.

```http
DELETE /api/students/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | Obrigatório. ID do estudante. |


#### Resposta

- Sucesso (201 Created):
  - Retorna uma mensagem de confirmação.

```json
{
  "message": "Estudante deletado com sucesso!"
}
```

- Erro (404 Not Found):
  - Retorna um erro caso o ID não seja encontrado.

```json
{
  "message": "Estudante não encontrado"
}
```

- Erro (500 Internal Server Error):
  - Retorna um erro caso ocorra falha na exclusão.

```json
{
  "message": "Erro ao deletar estudante",
  "error": "Detalhes do erro"
}

```