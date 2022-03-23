const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const config = require("config") 
const NaoEncontrado = require("./erros/NaoEncontrado")
const CampoInvalido = require("./erros/CampoInvalido")
const DadosNaoFornecidos = require("./erros/DadosNaoFornecidos")
const ValorNaoSuportado = require("./erros/ValorNaoSuportado")
const formatosAceitos = require("./Serializador").formatosAceitos

app.use(BodyParser.json())

app.use((request, response, proximo) =>{
    let formatoRequisitado = request.header("Accept")

    if (formatoRequisitado === "*/*"){
        formatoRequisitado = "application/json"
    }

    if (formatosAceitos.indexOf(formatoRequisitado) === -1){
        response.status(406)
        response.end()
        return 
    }

    response.setHeader("Content-Tyoe", formatoRequisitado)
    proximo()
})

const roteador = require("./rotas/fornecedores")
const { response } = require('express')
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