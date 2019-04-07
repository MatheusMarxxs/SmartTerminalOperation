var express = require("express");
var router  = express.Router();

var EventoImpactoOperacao = require("../models/EventoImpactoOperacao");

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

AplicarImpactos(evento)
{

    let impacto = new Impacto();
    impacto.DATA_INICIAL = '2019-04-06';
    impacto.DATA_FINAL_PREVISTA = '2019-04-06';
    impacto.DATA_FINAL= '2019-04-06';
    impacto.save().then(eventoImpactoOperacao => {            
        })
        .catch(err => {
            res.status(400).send("erro ao salvar");
        });

}






module.exports = router;