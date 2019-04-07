const mongoose = require("mongoose");

let Impacto = new mongoose.Schema({
    dtInicial: Date,
    dtFinalPrevista: Date,
    dtFinal: Date,
    tipo: String
});

module.exports = mongoose.model("Impacto", Impacto);
