const mongoose = require ('mongoose');

const clienteSchema = mongoose.Schema ({
    nome: {type: String, required: true},
    senha: {type: String, required: true},
    email: {type: String, required: true}
    });

module.exports = mongoose.model('Cliente', clienteSchema);