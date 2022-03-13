const roteador = require("express").Router()

roteador.use("/", (req, res) => {
    res.send("ok")
})

module.exports = roteador