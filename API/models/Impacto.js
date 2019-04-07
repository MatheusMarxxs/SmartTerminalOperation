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
    CODIGO_EQUIPAMENTO: Number ,
    OPERADORES_IMPACTADOS: [
                            {
                                CEP: String,
                                ESCALA: String,
                                TURMA: Number,
                                CARGO: String
                            }
                            ],
    ESCALAS_IMPACTADAS: [{
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
    }]

});

// let OperadorImpactado = new mongoose.Schema({
//     CEP:String,
//     ESCALA: String,
//     TURMA: Number,
//     CARGO: String
// });

// let EscalaImpactada = new mongoose.Schema({   
//     CHEGADA_BARRA: Date,
//     PREVISAO_ATRACACAO: Date,
//     ESCA_DTHR_ATRACACAO: Date,
//     INICIO_OPERACAO: Date,
//     FIM_OPERCACAO: Date,
//     DESATRACACAO: Date,
//     NAVI_NOME: String,
//     HINA_QTDE_TOTAL_MOV: Number,
//     HINA_CMPH: String,
//     SERVICO: String,
//     LINER: String,
//     BERCO_ATRACACAO: String
// });


module.exports = mongoose.model("Impacto", Impacto);
