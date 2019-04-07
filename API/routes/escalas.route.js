var express = require("express");
var router  = express.Router();

var Escala = require("../models/Escala");

router.get("/", function(req, res) {
    Escala.find(function (err, Escalas) {
        if (err) {
            console.log(err);
        } else {
            res.json(Escalas);
        }
    })
});

module.exports = router;