const port = 3003;

const express = require('express');
const app = express();

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) //converte para json
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})