const mongoose = require("mongoose");

let EventoImpactoOperacao = new mongoose.Schema({
    DATA_OCORRENCIA_EVENTO: Date,
    DATA_CRIACAO_EVENTO: Date,
    TIPO_ENTRADA: String, // MANUAL | AUTO
    CAUSA_EVENTO: String,  // QUEDA DE ENERGIA| ALTERAÇÃO DE ETA | MARÉ BAIXA| QUEBRA DE EQUIPAMENTO 
    DESCRICAO_EVENTO: String,
    NOME_EVENTO: String,
    NAVIO:String ,
    VIAGEM:String,
    TIPO_EQUIPAMENTO: String,
    CODIGO_EQUIPAMENTO: Number

    
});

module.exports = mongoose.model("EventoImpactoOperacao", EventoImpactoOperacao);
