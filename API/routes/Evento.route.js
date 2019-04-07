var express = require("express");
var router  = express.Router();

var Evento = require("../models/Evento");

router.get("/", function(req, res) {
    Evento.find(function (err, evento) {
        if (err) {
            console.log(err);
        } else {
            res.json(evento);
        }
    })
});

router.post("/", function(req, res) {
    let evento = new Evento(req.body);

    evento.save().then(evento => {
        res.status(200).json({'evento': 'evento adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;