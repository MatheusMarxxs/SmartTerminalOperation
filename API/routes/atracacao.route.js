var express = require("express");
var router  = express.Router();

var Atracacao = require("../models/Atracacao");

router.get("/", function(req, res) {
    Atracacao.find(function (err, atracacao) {
        if (err) {
            console.log(err);
        } else {
            res.json(atracacao);
        }
    })
});

router.post("/", function(req, res) {
    let atracacao = new Atracacao(req.body);

    atracacao.save().then(atracacao => {
        res.status(200).json({'atracacao': 'atracacao adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;