const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const config = require("config") 
const NaoEncontrado = require("./erros/NaoEncontrado")
const CampoInvalido = require("./erros/CampoInvalido")
const DadosNaoFornecidos = require("./erros/DadosNaoFornecidos")
const ValorNaoSuportado = require("./erros/NaoEncontrado")

app.use(BodyParser.json())

const roteador = require("./rotas/fornecedores")
app.use("/api/fornecedores", roteador)

app.use((erro, request, response, proximo) =>{    
    let status = 500

    if (erro instanceof NaoEncontrado){
        response.status(404)
        status = 404
    }
    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos){
        response.status(400)
        status = 400
    }
    if (erro instanceof ValorNaoSuportado){
        status = 406
    }

    response.status(status)
    response.send(
        JSON.stringify({ 
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get("api.porta"), () => console.log("A API ta funcionando"))