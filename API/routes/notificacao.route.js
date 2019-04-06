var express = require("express");
var router  = express.Router();

var Notificacao = require("../models/Notificacao");

router.get("/", function(req, res) {
    Notificacao.find(function (err, navios) {
        if (err) {
            console.log(err);
        } else {
            res.json(navios);
        }
    })
});

router.post("/", function(req, res) {
    let notificacao = new Notificacao(req.body);

    notificacao.save().then(nofificacao => {
        res.status(200).json({'notificacao': 'notificacao adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;