const mongoose = require("mongoose");

let Navio = new mongoose.Schema({
    BERTH_WINDOW: Date,
    CHEGADA_BARRA: Date,
    PREVISAO_ATRACACAO: Date,
    ESCA_DTHR_ATRACACAO: Date,
    INICIO_OPERACAO: Date,
    FIM_OPERCACAO: Date,
    DESATRACACAO: Date,
    NAVI_NOME: String,
    HINA_QTDE_TOTAL_MOV: Number,
    HINA_CMPH: String,
    SERVICO: String,
    LINER: String,
    BERCO_ATRACACAO: String
});

module.exports = mongoose.model("Navio", Navio);
