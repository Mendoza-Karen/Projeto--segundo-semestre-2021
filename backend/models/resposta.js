const mongoose = require ('mongoose');

const respostaSchema = mongoose.Schema({
    idPergunta: Number,
    resposta: Boolean
})
module.exports = mongoose.model('Resposta', respostaSchema);