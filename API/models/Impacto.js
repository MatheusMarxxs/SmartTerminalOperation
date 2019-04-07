const mongoose = require("mongoose");

let Impacto = new mongoose.Schema({
    DATA_INICIAL: Date,
    DATA_FINAL_PREVISTA: Date,
    DATA_FINAL: Date,
    TIPO: String,
    NOME_EVENTO: String,
    DATA_OCORRENCIA_EVENTO : Date,
    CAUSA_EVENTO: String,
    NAVIO:String ,
    VIAGEM:String,
    TIPO_EQUIPAMENTO: String,
    CODIGO_EQUIPAMENTO: Number
});

module.exports = mongoose.model("Impacto", Impacto);
