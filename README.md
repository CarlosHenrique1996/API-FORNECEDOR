# REST API de cadastro de dados de fornecedores
Através da API é possível armazenar informações sobre fornecedores. É possível cadastrar fornecedores, listar todos os fornecedores cadastrados, obter detalhes de um fornecedor especifico, atualizar um fornecedor e caso necessário, remover da base de dados.

## Sobre o projeto

### Objetivo
Projeto com o intuito de praticar o desenvolvimento de API Rest com JavaScript e aprimorar os meus conhecimentos. 

## Funcionalidades
### Enfpoints disponíveis:

* Cadastrar um fornecedor novo. Precisa informar os dados que deseja cadastrar no body. Não precisa informar nenhum parâmetro na URL.
```
POST  /api/fornecedores/
```
Exemplo do que precisar inserir no body:
```
{
    "empresa": "Carlos Rodrigues",
    "email": "carlos@gmail.com",
    "categoria": "brinquedos"
}
```
---

* Consulta na base todos os fornecedores cadastrados. Não precisa informar nenhum parâmetro na URL.
```
GET  /api/fornecedores/

```
Exemplo do que retorna quando a operação é realizada com sucesso:
```
[
    {
        "id": 18,
        "empresa": "Carlos Rodrigues",
        "email": "carlos@gmail.com",
        "categoria": "brinquedos",
        "createdAt": "2022-03-23T22:11:51.000Z",
        "updatedAt": "2022-03-23T22:11:51.000Z",
        "versao": 0
    }
]
```

---
* Consulta na base um fornecedor especifico. Na URL precisa informar o parâmetro `idFornecedor` que deseja consultar.
```
GET  /api/fornecedores/idFornecedor
```
Exemplo do que retorna quando a operação é realizada com sucesso:
```
{
    "id": 18,
    "empresa": "Carlos Rodrigues",
    "email": "carlos@gmail.com",
    "categoria": "brinquedos",
    "versao": 0
}
```

---
* Atualizar um determinado fornecedor já cadastrado. Na URL precisa informar o parâmetro `idFornecedor` que deseja atualizar.
```
PUT  /api/fornecedores/idFornecedor
```
Exemplo do que precisar inserir no body:
```
{
    "empresa": "Carlos Rodrigues",
    "email": "carlos@gmail.com",
    "categoria": "brinquedos"
}
```
Observação: Caso não há necessidade de atualizar todos os campos, informar apenas os campos que deseja atualizar. No exemplo a seguir, a intenção é apenas atualizar o campo `email`:
```
{
    "email": "carlos@gmail.com",
}
```

---
* Deletar um determinado fornecedor já cadastrado. Na URL precisa informar o parâmetro `idFornecedor` que deseja deletar da base de dados.
```
DELETE  /api/fornecedores/idFornecedor
```

---
## Tecnologias utilizadas
* Desenvolvido em JavaScript.
* Banco MySQL
* Bibliotecas utilizadas no projeto foram Express e bodyParser