const mongoose = require("mongoose");


let Atracacao = new mongoose.Schema({
    nomeNavio: String,
    armador: String,
    viagem: String,
    sentidoViagem: String,
    agencia: String,
    berco: String,
    dtPrevistaBarra: Date,
    dtBarra: Date,
    dtPrevisaoAtracacao: Date,
    dtPrevistaDesatracacao: Date,
    dtDesatracacao: Date,
    dtDeadline: Date,
    dtBerthWindow:Date,
    dtAberturaGate:Date,
    servico : String,
    comprimento: Number,
    codigoCodesp: String,
    direcaoAtracacao: String,
    viagemDescarga: String,
    viagemEmbarque: String,
    statusNavio: Number,
    statusNavioDescricao: String

});

module.exports = mongoose.model("Atracacao", Atracacao);
