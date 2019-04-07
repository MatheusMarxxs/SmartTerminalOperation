var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dev:development123@devraizcluster0-xehvf.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

var Schema = new mongoose.Schema({
    horario: Number,
    faixaAcesso: String,
    escala: Number,
    jornadaEscala: String
});

var OBJ = mongoose.model("Escala", Schema);

// "Horario": "15",
// "Faixa_Acesso": "07:00 - 15:20",
// "Escala": "224",
// "Jornada_Escala": "6X2"

var array =  [
  {
     "Horario": "15",
     "Faixa_Acesso": "07:00 - 15:20",
     "Escala": "224",
     "Jornada_Escala": "6X2"
  },
  {
     "Horario": "16",
     "Faixa_Acesso": "15:00 - 23:20",
     "Escala": "224",
     "Jornada_Escala": "6X2"
  },
  {
     "Horario": "17",
     "Faixa_Acesso": "23:00 - 07:20",
     "Escala": "224",
     "Jornada_Escala": "6X2"
  },
  {
     "Horario": "6",
     "Faixa_Acesso": "13:00 - 19:00",
     "Escala": "240",
     "Jornada_Escala": "5X1"
  },
  {
     "Horario": "12",
     "Faixa_Acesso": "07:00 - 13:00",
     "Escala": "240",
     "Jornada_Escala": "5X1"
  },
  {
     "Horario": "14",
     "Faixa_Acesso": "19:00 - 01:00",
     "Escala": "240",
     "Jornada_Escala": "5X1"
  },
  {
     "Horario": "18",
     "Faixa_Acesso": "01:00 - 07:00",
     "Escala": "240",
     "Jornada_Escala": "5X1"
  }
];

OBJ.insertMany(array.map(x => {
  var a = {};
  a.horario = x.Horario;
  a.faixaAcesso = x.Faixa_Acesso;
  a.escala = x.Escala;
  a.jornadaEscala = x.jornadaEscala;
  return a;
}), function(err, docs) {
    console.log(err);
    console.log(docs);
})