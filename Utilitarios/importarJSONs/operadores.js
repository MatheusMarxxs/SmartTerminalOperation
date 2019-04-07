var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dev:development123@devraizcluster0-xehvf.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

var SchemaOperador = new mongoose.Schema({
    CEP: Number,
    escala: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Escala"
    },
    turma: Number,
    cargo: String
});
var Operador = mongoose.model("Operador", SchemaOperador);

var SchemaEscala = new mongoose.Schema({
   horario: Number,
   faixaAcesso: String,
   escala: Number,
   jornadaEscala: String
});

var Escala = mongoose.model("Escala", SchemaEscala);

var array =  [
      {
         "CEP": "11010280",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11013163",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11013440",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "SUPERVISOR DE GATE"
      },
      {
         "CEP": "11013480",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11013552",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11013580",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "AUXILIAR DE CONTROLE DE EQUIPAMENTOS"
      },
      {
         "CEP": "11013640",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11013670",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS II"
      },
      {
         "CEP": "11015010",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11015020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11015070",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11015090",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015101",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11015101",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11015110",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11015110",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11015120",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11015120",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11015120",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11015120",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015145",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11015170",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11015180",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11015200",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11015220",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11015230",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015240",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11015260",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11015270",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015270",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11015290",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11015301",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015310",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015310",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015320",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015320",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11015340",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11015360",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11015450",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11015540",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11015545",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11020000",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11020000",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11020000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11020002",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11020002",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11020002",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "PLANEJADOR DE PATIO"
      },
      {
         "CEP": "11020003",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11020003",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11020003",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11020004",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11020004",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11020110",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11020140",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11020180",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11020210",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11020270",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11020330",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11020390",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11020410",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ASSISTENTE DE MONITORAMENTO REEFER"
      },
      {
         "CEP": "11025002",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11025010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11025010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11025011",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11025011",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11025020",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11025031",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11025032",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11025065",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11025150",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11025152",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11025153",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11025153",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11025155",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11025180",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11025180",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11025201",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11025203",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ESCALADOR"
      },
      {
         "CEP": "11025203",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11025230",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11025240",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11025240",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11025240",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11025240",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11025240",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11025240",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11025260",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11025260",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11030000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11030101",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11030160",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11030181",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11030320",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11030340",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11030381",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11030480",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11030540",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11030540",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11035000",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11035003",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11035010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11035010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11035100",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11035101",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11035101",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11035101",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11035105",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11035130",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ASSISTENTE DE PLANEJAMENTO DE NAVIO"
      },
      {
         "CEP": "11035130",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11035140",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11035180",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11035210",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11035300",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11035300",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ASSISTENTE DE MONITORAMENTO REEFER"
      },
      {
         "CEP": "11035300",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11035300",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11035300",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11040002",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11040010",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11040020",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040040",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11040040",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11040070",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11040070",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11040090",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040101",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11040110",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040111",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11040141",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11040190",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11040201",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11040220",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040221",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11040221",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040271",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11040271",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040271",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11040271",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11040271",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11045000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11045160",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11045160",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11045201",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ASSISTENTE DE PLANEJAMENTO DE NAVIO"
      },
      {
         "CEP": "11045210",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11045210",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "AUXILIAR DE CONTROLE DE EQUIPAMENTOS"
      },
      {
         "CEP": "11045301",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11050031",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11050060",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11050060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11050071",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11050120",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11050120",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11050201",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11050231",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11050231",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11050241",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11050250",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11050251",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11050300",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11050320",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ASSISTENTE DE PLANEJAMENTO DE NAVIO"
      },
      {
         "CEP": "11055001",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11055010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11055320",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ANALISTA DE PLANEJAMENTO OPERACIONAL PL"
      },
      {
         "CEP": "11060000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11060470",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11065000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11065001",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11065003",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11065200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11065200",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL SR"
      },
      {
         "CEP": "11065210",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11065220",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11065240",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11065280",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11065290",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11065300",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11065620",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11065660",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11065740",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11070001",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11070001",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11070011",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11070020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11070020",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11070020",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11070021",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "SUPERVISOR DE GATE"
      },
      {
         "CEP": "11070051",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11070060",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11070061",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11070061",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11070061",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11070061",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11070131",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11070140",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11070150",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11070170",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11070210",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11070230",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11070320",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "PLANEJADOR DE PATIO"
      },
      {
         "CEP": "11070320",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11070331",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11070350",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11070370",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11070400",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11070401",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11075002",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11075002",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11075265",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11075350",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11075401",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11075401",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11075420",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "PLANEJADOR DE PATIO"
      },
      {
         "CEP": "11075420",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11075430",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "AUXILIAR DE CONTROLE DE EQUIPAMENTOS"
      },
      {
         "CEP": "11075440",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11075440",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11075501",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11075560",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11075600",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11075700",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11075700",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11080100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11080370",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "AUXILIAR DE CONTROLE DE EQUIPAMENTOS"
      },
      {
         "CEP": "11080520",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11080520",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11080550",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11080560",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11080670",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11080670",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11081060",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11081060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11081110",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11081290",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11081300",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11082150",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11082320",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11082400",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11082500",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085000",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085001",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11085010",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085070",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11085070",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085070",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11085070",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11085080",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11085080",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085080",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11085080",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11085080",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085090",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085090",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11085100",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085201",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085240",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11085360",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11085405",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11085405",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11085570",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11085590",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085625",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11085625",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085625",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11085680",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11085691",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11085691",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11085691",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ESCALADOR"
      },
      {
         "CEP": "11085700",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085740",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11085740",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11085740",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11085755",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11085755",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11085755",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11086001",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11086100",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11086130",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11086170",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11086300",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11086400",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11086400",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11086400",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11086500",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11087000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11087001",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11087040",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11087040",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11087150",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11087300",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11087300",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11087320",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11087370",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11087420",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11087430",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11087500",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11087510",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11087530",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11088016",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11088050",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11088050",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11088170",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11088205",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11088270",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11088300",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11088310",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11088320",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11088320",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11088330",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11088330",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11088330",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11088330",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11088330",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11088330",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11088420",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11088450",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11088450",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11088450",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11088450",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11088450",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11088500",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11088500",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11088500",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11089050",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11089080",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11089100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11089130",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11089160",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11089180",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11089210",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11089220",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11090100",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11090150",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11090200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11090275",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11090300",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11090300",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11090300",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11095110",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11095130",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11095130",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11095210",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11095330",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11310020",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11310050",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11310070",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11310080",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11310090",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11310100",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11310180",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11310401",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11320001",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11320010",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11320010",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11320020",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11320050",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11320140",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11320150",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11320180",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11320210",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11325130",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11325130",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11325140",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11330000",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11330000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11330080",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11330080",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11330100",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11330100",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11330220",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11330295",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11330300",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11330521",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ESCALADOR"
      },
      {
         "CEP": "11330610",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11330680",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11330680",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11330813",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11335000",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11335010",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11335020",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11335050",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11335170",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11335190",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11335370",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11340020",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11340050",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11340080",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11340130",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11340230",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11340260",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11340270",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11340280",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11340280",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11340300",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11340320",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11340330",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11340340",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11340340",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11340350",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11340370",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11340370",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11340395",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11340400",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11345045",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11345045",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11345055",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11345065",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11345240",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11345270",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11345405",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11345412",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11345412",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11346020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11346050",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11346120",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11346200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11346280",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11346350",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11346380",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11347000",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11347020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS II"
      },
      {
         "CEP": "11347030",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11347030",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11347040",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11347050",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11347060",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11347100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11347150",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11347435",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11347440",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ASSISTENTE DE MONITORAMENTO REEFER"
      },
      {
         "CEP": "11347470",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11347480",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11347760",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11348050",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11348050",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11348120",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11348130",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11348150",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11348220",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11348270",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11348350",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11348470",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11349030",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11349050",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11349060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11349090",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11349100",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11349210",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11349280",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11349300",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS II"
      },
      {
         "CEP": "11349340",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11350000",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11350000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11350010",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11350190",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11350190",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11350200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11350200",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11350250",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11350260",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11350270",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11350290",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11350360",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11350360",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11350360",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11350410",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11350530",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11350660",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11355000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355010",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355020",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355030",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355030",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11355030",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355030",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11355180",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11355180",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11355240",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11355250",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11355250",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355260",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11355280",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355280",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11355290",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355350",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ASSISTENTE DE MONITORAMENTO REEFER"
      },
      {
         "CEP": "11355350",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355390",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11355420",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11355420",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11355450",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11360000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360010",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11360030",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11360100",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360170",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11360180",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11360190",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360200",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360200",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ASSISTENTE DE MONITORAMENTO REEFER"
      },
      {
         "CEP": "11360210",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360210",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11360250",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11360310",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360350",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360370",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360380",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11360380",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360400",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11360400",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11360400",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11360400",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11360420",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11360460",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11360600",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11365000",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11365030",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11365030",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11365070",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11365100",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11365100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11365120",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11365130",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11365140",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11365140",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11365220",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11365230",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11365280",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "SUPERVISOR DE GATE"
      },
      {
         "CEP": "11365350",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11365665",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11370010",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370010",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11370170",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11370220",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11370230",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370400",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11370400",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370540",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11370550",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11370590",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370610",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11370640",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11380020",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11380030",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11380030",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11380060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11380140",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11380190",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11380200",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11380310",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11380320",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11380370",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11380380",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11380500",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11380520",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11390210",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11390300",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11390320",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11390330",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11390430",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11410140",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11410162",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11410330",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11420220",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11420430",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11420445",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11420460",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11421030",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11425100",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11425120",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11425135",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11425170",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11425170",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11425180",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11425180",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11425220",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11425220",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11425240",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11430030",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11430060",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11430060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11430200",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11430220",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11430220",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11430260",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11430370",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11431070",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11431101",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11431180",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11431210",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11431410",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11432080",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11432080",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11432100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11432100",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11432170",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11432210",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11432250",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11432290",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11432290",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11432290",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11432320",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11432360",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11432370",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11432420",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11432500",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11432500",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11435000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11435000",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11435000",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11435010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11435080",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11435080",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11435100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11435110",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11436000",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ESCALADOR"
      },
      {
         "CEP": "11436080",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11440000",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ESCALADOR"
      },
      {
         "CEP": "11440100",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11440110",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11440150",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11440310",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11440320",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11440360",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11440380",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11440380",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11440430",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11441000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11441190",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11443020",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11444460",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11444580",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11444680",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11446060",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11446150",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11446230",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11446260",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11449160",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11450060",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11450060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11450070",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11450090",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11450100",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11450170",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS II"
      },
      {
         "CEP": "11450260",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11450310",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11450320",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11450320",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL SR"
      },
      {
         "CEP": "11450320",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11450340",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS II"
      },
      {
         "CEP": "11450435",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11450450",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11450490",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11450500",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11450530",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11451010",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11451010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451020",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11451020",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11451041",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451060",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451061",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11451080",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11451080",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11451120",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451140",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451140",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11451160",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "ASSISTENTE DE PLANEJAMENTO DE NAVIO"
      },
      {
         "CEP": "11451170",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11451230",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11451240",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11451320",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11451340",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11451350",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11451360",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11451400",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11451410",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11453010",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11453030",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11453030",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11453205",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11453205",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11453205",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "CONFERENTE PL"
      },
      {
         "CEP": "11453210",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11453230",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11453240",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11454010",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454050",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454090",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454110",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11454260",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454270",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11454280",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11454290",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454290",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11454370",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11454375",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11454490",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11454510",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11454530",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11454550",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11454630",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11454680",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460000",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460002",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460004",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460010",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460101",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11460102",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460103",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460160",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460180",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11460290",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460300",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460300",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11460310",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460310",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11460310",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11460320",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460400",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11460400",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11460500",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11460511",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11460540",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11460560",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11461010",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11461020",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11461090",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11461290",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11461560",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11461580",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11461610",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11461610",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11461630",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11461640",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ESCALADOR"
      },
      {
         "CEP": "11461640",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11461650",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11461650",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11462000",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11462000",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11462000",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11462190",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11462200",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11462340",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11462400",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11462410",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11462410",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11462450",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11462480",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11462585",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11462630",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11463010",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11463070",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11463070",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE I"
      },
      {
         "CEP": "11463140",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11463180",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11463430",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11470000",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470000",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470000",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11470000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11470030",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470030",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470061",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470120",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11470150",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11470170",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11470180",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11470190",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11470200",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470200",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11470215",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11470280",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11471000",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11471010",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11471020",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11471020",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11471040",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11471050",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11471050",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11471060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11471070",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11471070",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11471090",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11471090",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11471115",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11472030",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11472100",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11472100",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11472100",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11472100",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11472100",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11472110",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11472130",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11495000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11495000",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11495000",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11495009",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11495012",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "AUXILIAR DE OPERACOES PORTUARIAS"
      },
      {
         "CEP": "11495013",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11495019",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11495026",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11495137",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11495150",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11495185",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11495191",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11497510",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11497510",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11497520",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11497530",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11500330",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11500680",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11515210",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11520000",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "ASSISTENTE DE PLANEJAMENTO DE NAVIO"
      },
      {
         "CEP": "11520020",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11520040",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "PLANEJADOR DE PATIO"
      },
      {
         "CEP": "11520050",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11520050",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11525010",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11530080",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11531060",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11533050",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11533140",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11533160",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "PLANEJADOR DE NAVIO"
      },
      {
         "CEP": "11533510",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11533540",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11534730",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE"
      },
      {
         "CEP": "11534880",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11540200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11540220",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11543100",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11700040",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11700400",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11700405",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11700450",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11700550",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11700640",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11701000",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11701635",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11702020",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11702650",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11702650",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11703300",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11704130",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11704210",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11704450",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11704460",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11704690",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11705080",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11705320",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11705640",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11705640",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11706010",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11706150",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11710250",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11711240",
         "Escala": "224",
         "Turma": "1",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11712010",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11712110",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11712150",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11712300",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "CONFERENTE JR"
      },
      {
         "CEP": "11712420",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11712490",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11712620",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11713190",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11713300",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11713530",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11714140",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11714520",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE COSTADO - CAPATAZIA"
      },
      {
         "CEP": "11717065",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11718155",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11719040",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "11719120",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11720050",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11720100",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11721060",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11721080",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11721200",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11722100",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11722130",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11722140",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11722180",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11722190",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS III"
      },
      {
         "CEP": "11722360",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "ANALISTA DE EXECUCAO OPERACIONAL JR"
      },
      {
         "CEP": "11722380",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "OPERADOR DE GATE II"
      },
      {
         "CEP": "11723030",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11723030",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11724190",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11724260",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11724340",
         "Escala": "240",
         "Turma": "1",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11725010",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11725030",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11725030",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11725030",
         "Escala": "224",
         "Turma": "2",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11725030",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11725030",
         "Escala": "240",
         "Turma": "5",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11725040",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11725060",
         "Escala": "240",
         "Turma": "2",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11725060",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "CONFERENTE SR"
      },
      {
         "CEP": "11725120",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS I"
      },
      {
         "CEP": "11725390",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE BORDO - ESTIVADOR"
      },
      {
         "CEP": "11725420",
         "Escala": "240",
         "Turma": "3",
         "Cargo": "OPERADOR DE EQUIPAMENTOS IV"
      },
      {
         "CEP": "11730000",
         "Escala": "224",
         "Turma": "3",
         "Cargo": "MONITORADOR REEFER"
      },
      {
         "CEP": "11730000",
         "Escala": "240",
         "Turma": "4",
         "Cargo": "OPERADOR DE EQUIPAMENTOS V"
      },
      {
         "CEP": "23815150",
         "Escala": "224",
         "Turma": "4",
         "Cargo": "PLANEJADOR DE NAVIO"
      }
   ];


// "CEP": "11010280",
// "Escala": {
   // "Horario": "15",
   // "Faixa_Acesso": "07:00 - 15:20",
   // "Escala": "224",
   // "Jornada_Escala": "6X2"
//}
// "Turma": "3",
// "Cargo": "OPERADOR DE BORDO - ESTIVADOR"

array.forEach(y => {
   Escala.findOne({ escala: y.Escala}, function(err, escala) {
      var x = {}
      x.CEP = y.CEP;
      x.escala = escala._id;
      x.turma = y.Turma;
      x.cargo = y.Cargo;

      var novo = new Operador(x);

      novo.save().then(op => {
         console.log(op);
      })
      .catch(err => {
         console.log(err);
      });
   })
});