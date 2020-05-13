import express from "express";

const app = express();

import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send("<h1>Parabens usuario incluido</h1>");
});
app.post("/usuarios/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send("<h1>Parabens usuario alterado</h1>");
});

app.listen(3333);
