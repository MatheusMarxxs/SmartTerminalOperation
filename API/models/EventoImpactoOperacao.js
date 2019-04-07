const mongoose = require("mongoose");

let EventoImpactoOperacao = new mongoose.Schema({
    DATA_OCORRENCIA_EVENTO: Date,
    DATA_CRIACAO_EVENTO: Date,
    TIPO_ENTRADA: String, // MANUAL | AUTO
    CAUSA_EVENTO: String,  // NATUREZA | FALHA EQUIPAMENTO
    NOME_EVENTO: String,
    DESCRICAO_EVENTO: String
    
});

module.exports = mongoose.model("EventoImpactoOperacao", EventoImpactoOperacao);
