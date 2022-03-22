const roteador = require ("express").Router()
const TabelaFornecedor = require("./TabelaFornecedor")


roteador.use("/", async (require, response) => {
    const resultados = await TabelaFornecedor.listar()
    response.send(
        JSON.stringify(resultados)
    )

})

module.exports = roteador