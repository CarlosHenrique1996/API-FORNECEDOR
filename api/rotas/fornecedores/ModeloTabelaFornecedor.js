const Sequelize = require ('sequelize')
const instancia = require("../../banco-de-dados")


const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allownull: false,
    },
    email: {
        type: Sequelize.STRING,
        allownull: false,
    },
    categoria: {
        type: Sequelize.ENUM("ração", "brinquedos" ),
        allownull: false,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: "fornecedores",
    timestamps: true,
    createAt: "dataCriacao",
    updateAt: "dataAtualizacao",
    version: "versao"
}
module.exports = instancia.define("fornecedor", colunas, opcoes)