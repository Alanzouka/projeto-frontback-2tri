const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao projeto Luláticos! ');
});

app.get('/sobre', (req, res) => {
  res.send('Nosso app se trata de uma agenda virtual prática para responsáveis, avisando sempre todos os eventos escolares!.');
});

app.get('/equipe', (req, res) => {
  res.send('É composta por 4 integrantes: Allanzito, Bianquinha, Gigi, Maykin e Miguelito!');
});

app.get('/contato', (req, res) => {
  res.send('Para contato, acesse nossas redes ou envie uma mensagem pelo formulário.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
