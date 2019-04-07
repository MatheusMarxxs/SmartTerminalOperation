var express = require("express");
var router  = express.Router();

var EventoImpactoOperacao = require("../models/EventoImpactoOperacao");
var ImpactoOperacao = require("../models/Impacto");

router.get("/", function(req, res) {
    EventoImpactoOperacao.find(function (err, eventos) {
        if (err) {
            console.log(err);
        } else {
            res.json(eventos);
        }
    })
});

router.post("/", function(req, res) {
    let eventoImpactoOperacao = new EventoImpactoOperacao(req.body);

    eventoImpactoOperacao.save().then(eventoImpactoOperacao => {
        AplicarImpactos(eventoImpactoOperacao);
        
        res.status(200).json({ 'eventoImpactoOperacao': 'eventoImpactoOperacao adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

function AplicarImpactos(evento)
{
    console.log(evento);
    let impacto = new ImpactoOperacao();

    impacto.TIPO        = evento.TIPO;
    impacto.NOME_EVENTO = evento.NOME_EVENTO;
    impacto.DATA_OCORRENCIA_EVENTO = evento.DATA_OCORRENCIA_EVENTO;
    impacto.CAUSA_EVENTO     = evento.CAUSA_EVENTO
    impacto.NAVIO = evento.NAVIO;
    impacto.VIAGEM = evento.VIAGEM;
    impacto.TIPO_EQUIPAMENTO = evento.TIPO_EQUIPAMENTO;
    impacto.CODIGO_EQUIPAMENTO =  evento.CODIGO_EQUIPAMENTO;

    impacto.DATA_INICIAL = '2019-04-06';
    impacto.DATA_FINAL_PREVISTA = '2019-04-06';
    impacto.DATA_FINAL = '2019-04-06';
    
    var OperadorImpactado =  {
            CEP: "123",
            ESCALA: "26",
            TURMA: "15",
            CARGO: "Operador1"
        }
    

    

    var EscalaImpactada = {
            CHEGADA_BARRA: "2019-04-03T10:00:00",
            PREVISAO_ATRACACAO: "2019-04-03T10:00:00",
            ESCA_DTHR_ATRACACAO: "2019-04-03T10:00:00",
            INICIO_OPERACAO: "2019-04-03T10:00:00",
            FIM_OPERCACAO: "2019-04-03T10:00:00",
            DESATRACACAO: "2019-04-03T10:00:00",
            NAVI_NOME: "MSC XPTO",
            HINA_QTDE_TOTAL_MOV: "12",
            HINA_CMPH: "23",
            SERVICO: "123",
            LINER: "234",
            BERCO_ATRACACAO: "333"
        }
    
    impacto.OPERADORES_IMPACTADOS.push(OperadorImpactado); 
    impacto.ESCALAS_IMPACTADAS.push(EscalaImpactada);

    impacto.save().then(eventoImpactoOperacao => {            
        })
        .catch(err => {
            res.status(400).send("erro ao salvar" + err );
        });

}






module.exports = router;