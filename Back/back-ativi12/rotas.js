const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const usuarios = [
    'Allazinho',
    'Bianquinha'
]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

const tarefas = [
    'Fazer códico do Mateus',
    'Passar no enem (díficil)'
]

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

const reservas = [
    'Sala 101',
    'Sala 102'
]

app.get('/reservas', (req, res) => {
    res.json(reservas);
});

app.get('/status', (req, res) => {
    res.json({ mensagem: 'Sistema funcionando corretamente!' })
});

const turmas = [
    '3T',
    '3A',
    '3B',
    '3C',
]

app.get('/turmas', (req, res) => {
    res.json(turmas);
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
