const Sequelize = require("sequelize")

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    loja: {
        type: Sequelize.ENUM("cascavel", "Pacajus"),
        allowNull: false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: "fornecedores",
    timestamps: true,
    createdAt: "dataCriacao",
    updatedAt: "dataAtualizacao",
    version: "versao"


}


module.exports = instancia.define("fornecedor", colunas, opcoes)