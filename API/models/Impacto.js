const mongoose = require("mongoose");

let Impacto = new mongoose.Schema({
    dtInicial: Date,
    dtFinalPrevista: Date,
    dtFinal: Date
});

module.exports = mongoose.model("Impacto", Evento);
