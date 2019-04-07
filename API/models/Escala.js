const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
    horario: Number,
    faixaAcesso: String,
    escala: Number,
    jornadaEscala: String
});

module.exports = mongoose.model("Escala", Schema);
