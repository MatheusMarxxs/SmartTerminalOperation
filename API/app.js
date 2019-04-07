// NODE.JS PARA CUIDAR DOS WEBSERVICES E APIS!
var express        = require("express");
var mongoose       = require("mongoose");
var methodOverride = require("method-override");
var bodyParser     = require("body-parser");
var cors           = require("cors");

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// // Rotas
var indexRoutes    = require("./routes/navio.route");
var indexRoutesEvento = require("./routes/EventoImpactoOperacao.route");
var indexRoutesNotificacao = require("./routes/notificacao.route");
var indexRoutesAtracacao = require("./routes/atracacao.route");
var routesEscala = require("./routes/escalas.route");
// var APIUsuarios     = require("./routes/API/usuarios");

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Configuração das Rotas
app.use("/navio", indexRoutes);     // Rotas principais
app.use("/evento", indexRoutesEvento);     // Rotas principais
app.use("/notificacao", indexRoutesNotificacao);     // Rotas principais
app.use("/atracacao", indexRoutesAtracacao);     // Rotas principais
app.use("/escala", routesEscala);

// app.use("/API", APIUsuarios);      // Rotas API Usuarios

// Mongoose Configuration
mongoose.connect("mongodb+srv://dev:development123@devraizcluster0-xehvf.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

// Run
app.listen(4000, "localhost", function() {
  console.log("Aplicação rodando - devRaiz.squad");
  console.log(process.env.PORT+ "-" +process.env.IP);
});