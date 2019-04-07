var express = require("express");
var router  = express.Router();

var Impacto = require("../models/Impacto");

router.get("/", function(req, res) {
    Impacto.find(function (err, impacto) {
        if (err) {
            console.log(err);
        } else {
            res.json(impacto);
        }
    })
});

router.post("/", function(req, res) {
    let impacto = new Impacto(req.body);

    impacto.save().then(impacto => {
        res.status(200).json({'impacto': 'impacto adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;