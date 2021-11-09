const mongoose = require ('mongoose');

const horarioSchema = mongoose.Schema({
    idPergunta: Number,
    resposta: Boolean
})
module.exports = mongoose.model('Horario', horarioSchema);