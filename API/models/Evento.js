const mongoose = require("mongoose");

let Evento = new mongoose.Schema({
    nomeEvento: String,
    causaEvento: String,
    dtOcorrencia: Date,
    tipoEntrada: String,
    impacto: String
});

module.exports = mongoose.model("Evento", Evento);
