import { QuestaoModel } from "@/model/quiz/QuestaoModel";
import { RespostaModel } from "@/model/quiz/RespostaModel";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a doença de chagas", [
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro")
    ]),
   new QuestaoModel(105, "Qual fruta é conhecida no Norte/Nordesta como Jerimum?", [
       RespostaModel.errada("Caju"),
       RespostaModel.errada("Côco"),
       RespostaModel.errada("Chuchu"),
       RespostaModel.certa("Abóbora")
   ]),
   
   new QuestaoModel(202, "Qual é o coletivo de cães?", [
    RespostaModel.errada("Manada"),
    RespostaModel.errada("Alcateia"),
    RespostaModel.errada("Rebanho"),
    RespostaModel.certa("Matilha")
  ]),

  new QuestaoModel(426, "Qual é o triângulo que todos os lados diferentes?", [
    RespostaModel.errada("Equilátero"),
    RespostaModel.errada("Isóceles"),
    RespostaModel.errada("Trapézio"),
    RespostaModel.certa("Escaleno")
])

 ]

 export default questoes;

