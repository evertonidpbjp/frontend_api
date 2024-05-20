import styles from "./index.module.css";
import Questao from "../../components/quiz/Questao"
import {QuestaoModel} from "@/model/quiz/QuestaoModel";
import {RespostaModel}  from "@/model/quiz/RespostaModel";
import { useEffect, useState } from "react";
import Questionario from "@/components/quiz/Questionario";
import { useRouter } from "next/router";

export default function Home (){

    const questaoMock: QuestaoModel = new QuestaoModel(1, ' Qual é a melhor cor', [
    RespostaModel.errada('verde'),
    RespostaModel.errada('vermelha'),
    RespostaModel.errada('amarelo'),
    RespostaModel.certa('azul')
])

 const [questao, setQuestao] = useState(questaoMock);
 const [respostasCertas, setRespostasCertas] = useState<number>(0)
 const router = useRouter()

 // usando generics p/ especificar o tipo de dado a ser recebido no useState, a saber, um array de numbers
 const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
 // url base p/ acessar a api e buscar as questões
 const BASE_URL = 'http://localhost:3000/api';

 // ele busca somente os ids das questões 
  async function carregarIdsQuestoes (){
        const resp = await fetch(`${BASE_URL}/quiz/`);
        const idsDasQuestoes = await resp.json();
        console.log(idsDasQuestoes)
        setIdsDasQuestoes(idsDasQuestoes)
  }
  // a lista de ids carregados na inicialização devem ser postos dentro de um useEffect()
    useEffect(()=> {
        carregarIdsQuestoes();
    }, []);

  // carrega a questão a partir do id obtido na lista de ids
  async function carregarQuestao(idQuestao: number) {
       const resp = await fetch(`${BASE_URL}/quiz/questoes/${idQuestao}`)
       const json = await resp.json();
       console.log(QuestaoModel.criarUsandoObjeto(json))
  }
// ele só carrega questões se já tiver obtido a lista de ids das questões e se já tiver carregado uma das questões na função acima. Depois ele carre
// carrega  a primeira questão 
  useEffect(() => {
        idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
 }, [idsDasQuestoes])

  function respostaFornecida(indice: number){
     setQuestao(questao.responderCom(indice))
  }

  // qnd o tempo termina, ele chama a função responderCom c/ valor -1, o q sgnifica q será sempre errada e ele mostrará a resposta certa
  function tempoEsgotado(){
    if(questao.naoRespondida) {
        setQuestao(questao.responderCom(-1));
    }
   
  }
   // obtém o id da próxima questão para passar para a questao seguinte
  function idPraProximaPergunta(){
    if(questao) {
      const proximoId = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoId]
    } 
    

  }

  //carrega a próxima questao c/ base no id obtido na função acima
  function irPraProximoPasso(idDaProximaQuestao: number){
      const proximoId = idPraProximaPergunta()
      proximoId ? irPraProximaQuestao(proximoId) : finalizar()
    
    }

   //
    function irPraProximaQuestao(proximoId: number){
      carregarQuestao(proximoId)
    }


    function finalizar(){
      router.push({
        pathname: "/resultado",
        query: {
          total: idsDasQuestoes.length,
          certas: respostasCertas
        }
      })
    }



  // define a questao atual com uma nova instância da questao, só q agora c/ a resposta respondida
  function questaoRespondida(questaoRespondida: QuestaoModel){
      setQuestao(questaoRespondida)
      const acertou = questaoRespondida.acertou
      setRespostasCertas(respostasCertas + (acertou ? 1 : 0 ))
      console.log(respostasCertas)
      
  }

// <Questao  valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado} tempoParaResponder={5}  />

    return questao ? (
        <div className={styles.corpo} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}> 

           <Questionario questao={questao} ultima={idPraProximaPergunta() === undefined } questaoRespondida={questaoRespondida} irPraProximoPasso={irPraProximoPasso} />

        </div>
       
    ) :
     false
}