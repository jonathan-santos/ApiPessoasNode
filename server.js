const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Olá, essa é uma api' });
});

app.use('/api', router);

app.listen(port);
console.log(`Servidor rodando na porta ${port}`);