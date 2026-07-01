const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao projeto de boas-vindas!');
});

app.get('/sobre', (req, res) => {
  res.send('Este projeto demonstra rotas simples em uma aplicação Node.js com Express.');
});

app.get('/equipe', (req, res) => {
  res.send('Nossa equipe está comprometida em criar soluções web claras e funcionais.');
});

app.get('/contato', (req, res) => {
  res.send('Para contato, acesse nossas redes ou envie uma mensagem pelo formulário.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
