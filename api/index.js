const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const config = require("config")

app.use(BodyParser.json())

app.listen(config.get("api.porta"), () => console.log("A API ta funcionando"))

const roteador = require("./rotas/fornecedores")
app.use("/api/fornecedores", roteador)