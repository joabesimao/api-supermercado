const express = require("express");
const app = express();

const bodyParser = require("body-parser")
const config = require("config");
const { application } = require("express");
const req = require("express/lib/request");
const roteador = require("./rotas/fornecedores");

app.use(bodyParser.json())

app.use("/api/fornecedores", roteador)




app.listen(config.get("api.porta"), () => console.log(`A API ESTÁ FUNCIONANDO NA PORTA ${config.get("api.porta")}`))