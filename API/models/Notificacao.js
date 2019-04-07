const mongoose = require("mongoose");

let Notificacao = new mongoose.Schema({
    DATA_NOTIFICACAO: Date,
    MENSAGEM_NOTIFICACAO: String,
    ESCOPO_NOTIFICACAO: String,  // (GLOBAL| LOCAL)
    METODO_ENTREGA_NOTIFICACAO: String // (GLOBAL | EMAIL | WHATSAPP | DEVICE)
});

module.exports = mongoose.model("Notificacao", Notificacao);
