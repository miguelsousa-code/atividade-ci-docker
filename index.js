const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Aplicação executando com sucesso!");
});

app.get("/status", (req, res) => {
    res.json({
        status: "online"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});