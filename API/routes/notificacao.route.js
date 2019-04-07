var http = require('http');

var instanceId = "21"; // TODO: Replace it with your gateway instance ID here
var clientId = "rvf.vazquez@hotmail.com";     // TODO: Replace it with your Forever Green client ID here
var clientSecret = "8e30a2f8785547508b21494d99af7928";  // TODO: Replace it with your Forever Green client secret here


// 
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
    let notificacao = new Notificacao(req.body.notificacao);
    console.log("a");
    console.log(notificacao);
    console.log("b");
    console.log(req.body);
    
    notificacao.save().then(notificacaoBanana => { 1

        
        var jsonPayload = JSON.stringify({
            //group_admin: "5513991678484", // TODO: Specify the WhatsApp number of the group creator, including the country code
            group_admin: "5513992019511", // TODO: Specify the WhatsApp number of the group creator, including the country code
            group_name: "Hackaton dos Portos",
            //group_name: "Hack btpcode",
            //number: "5513991678484",  // TODO: Specify the recipient's number here. NOT the gateway number
            message: notificacao.MENSAGEM_NOTIFICACAO
        });

        var options = {
            hostname: "api.whatsmate.net",
            port: 80,
            path: "/v3/whatsapp/group/text/message/" + instanceId,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-WM-CLIENT-ID": clientId,
                "X-WM-CLIENT-SECRET": clientSecret,
                "Content-Length": Buffer.byteLength(jsonPayload)
            }
        };


        var request = new http.ClientRequest(options);
        request.end(jsonPayload);

        request.on('response', function (response) {
            console.log('Heard back from the WhatsMate WA Gateway:\n');
            console.log('Status code: ' + response.statusCode);
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                console.log(chunk);
                res.status(200).json({ 'notificacao': 'notificacao adicionado com sucesso' })
            });
        });

        //res.status(200).json({'notificacao': 'notificacao adicionado com sucesso'})
    })
    .catch(err => {
        res.status(400).send("erro ao salvar");
    });
}); 

module.exports = router;