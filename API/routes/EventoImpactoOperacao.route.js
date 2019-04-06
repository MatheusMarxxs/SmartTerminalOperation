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
        res.status(200).json({ 'eventoImpactoOperacao': 'eventoImpactoOperacao adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;