var express = require("express");
var router  = express.Router();
var request = require("request");
var EventoImpactoOperacao = require("../models/EventoImpactoOperacao");
var ImpactoOperacao = require("../models/Impacto");
var Notificacao = require("../models/Notificacao");

router.get("/", function(req, res) {
    EventoImpactoOperacao.find(function (err, eventos) {
        if (err) {
            console.log(err);
        } else {
            res.json(eventos);
        }
    })
});

router.get("/impacto", function (req, res) {
    ImpactoOperacao.find(function (err, impactoeventos) {
        if (err) {
            console.log(err);
        } else {
            res.json(impactoeventos);
        }
    })
});

router.post("/", function(req, res) {
    let eventoImpactoOperacao = new EventoImpactoOperacao(req.body);

    eventoImpactoOperacao.save().then(eventoImpactoOperacao => {
        //AplicarImpactos(eventoImpactoOperacao);
        NotificarEvento(eventoImpactoOperacao);
        res.status(200).json({ 'eventoImpactoOperacao': 'eventoImpactoOperacao adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

function NotificarEvento(evento)
{
    var mensagem = "" ;
    
    // TODO: TROCAR IFS POR FUNCOES 
    if (evento.CAUSA_EVENTO == "QUEDA DE ENERGIA") {
        mensagem = "Devido a " + evento.CAUSA_EVENTO
            + " " 
            + (Date.now <= evento.DATA_OCORRENCIA_EVENTO ? " que devera ocorrer as " : "que ocorreu as ")
            + evento.DATA_OCORRENCIA_EVENTO
            + " seu turno pode ser alterado! Fique atento!";
    }
    if (evento.CAUSA_EVENTO == "Alteracao Data Atracacao") {
        mensagem = "Devido a " + evento.CAUSA_EVENTO
            + " " + evento.NAVIO + " " + evento.VIAGEM + " " 
            + (Date.now <= evento.DATA_OCORRENCIA_EVENTO ? " que devera ocorrer as " : "que ocorreu as ")
            + evento.DATA_OCORRENCIA_EVENTO
            + " seu turno pode ser alterado! Fique atento!";
    }
    if (evento.CAUSA_EVENTO == "Equipamento")
    {
        mensagem = "Devido a falha em " + evento.CAUSA_EVENTO 
                    + " " + evento.TIPO_EQUIPAMENTO + " "
                    + (Date.now <= evento.DATA_OCORRENCIA_EVENTO ? " que devera ocorrer as " : "que ocorreu as ")
                    + evento.DATA_OCORRENCIA_EVENTO 
                    + " seu turno pode ser alterado! Fique atento!";
    }
    if (mensagem == "") {
        mensagem = "Devido a " + evento.CAUSA_EVENTO
            + " " 
            + (Date.now <= evento.DATA_OCORRENCIA_EVENTO ? " que devera ocorrer as " : "que ocorreu as ")
            + evento.DATA_OCORRENCIA_EVENTO
            + " seu turno pode ser alterado! Fique atento!";
    }

    var notificacao = new Notificacao();
    notificacao.MENSAGEM_NOTIFICACAO = mensagem;

    request.post('http://localhost:4000/notificacao', {
    json: {
        notificacao
    
    }}, (error, res, body) => {
    if (error) {
        console.error(error)
        return
    }
    });

   
   
}

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

    // TODO : CRIAR FUNÇÔES PARA IDENTICAR IMPACTO REAL EM OPERADORES , PREVISAO IMPACTO , ESCALAS
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
    if (impacto.CAUSA_EVENTO == "Alteracao Data Atracacao")
    {
        EscalaImpactada.NAVI_NOME = impacto.NAVI_NOME;
        EscalaImpactada.SERVICO = impacto.SERVICO;
        impacto.ESCALAS_IMPACTADAS.push(EscalaImpactada);
    }

    
    impacto.OPERADORES_IMPACTADOS.push(OperadorImpactado); 

    

    impacto.save().then(eventoImpactoOperacao => {            
        })
        .catch(err => {
            res.status(400).send("erro ao salvar" + err );
        });

}






module.exports = router;