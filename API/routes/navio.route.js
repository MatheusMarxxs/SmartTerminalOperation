var express = require("express");
var router  = express.Router();

var Navio = require("../models/Navio");

router.get("/", function(req, res) {
    Navio.find(function (err, navios) {
        if (err) {
            console.log(err);
        } else {
            res.json(navios);
        }
    })
});

router.post("/", function(req, res) {
    let navio = new Navio(req.body);

    navio.save().then(navio => {
        res.status(200).json({'navio': 'navio adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;