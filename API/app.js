// NODE.JS PARA CUIDAR DOS WEBSERVICES E APIS!

var express        = require("express");
var mongoose       = require("mongoose");
var methodOverride = require("method-override");

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// // Rotas
var indexRoutes    = require("./routes/navio.route");
var indexRoutesEvento = require("./routes/EventoImpactoOperacao.route");
var indexRoutesNotificacao = require("./routes/notificacao.route");
// var APIUsuarios     = require("./routes/API/usuarios");

// Configuração das Rotas
app.use("/navio", indexRoutes);     // Rotas principais
app.use("/evento", indexRoutesEvento);     // Rotas principais
app.use("/notificacao", indexRoutesNotificacao);     // Rotas principais

// app.use("/API", APIUsuarios);      // Rotas API Usuarios

// Mongoose Configuration
mongoose.connect("mongodb+srv://dev:development123@devraizcluster0-xehvf.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

// Run
app.listen(4000, "localhost", function() {
  console.log("Aplicação rodando - devRaiz.squad");
  console.log(process.env.PORT+ "-" +process.env.IP);
});