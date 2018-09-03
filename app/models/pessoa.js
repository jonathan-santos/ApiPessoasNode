const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PessoaSchema = new Schema({
    nome: String,
    idade: Number
});

module.exports = mongoose.model('Pessoa', PessoaSchema);