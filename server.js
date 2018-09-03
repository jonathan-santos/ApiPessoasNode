const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pessoa = require('./app/models/pessoa');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds018248.mlab.com:18248/testes');

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Olá, essa é uma api' });
});

app.use('/api', router);

app.listen(port);
console.log(`Servidor rodando na porta ${port}`);