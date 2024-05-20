import { QuestaoModel } from "@/model/quiz/QuestaoModel"
import { RespostaModel } from "@/model/quiz/RespostaModel";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import styles from "./Questao.module.css";
import Temporizador from "./Temporizador";
import Button from "./Botao";

const letras = [
  {valor: "A", cor: '#F2C866'},
  {valor: "B", cor: '#F266BA'},
  {valor: "C", cor: '#85D472'},
  {valor: "D", cor: '#BCE596'}
]

interface QuestaoProps {
    valor: QuestaoModel;
    respostaFornecida: (indice: number) => void;
    tempoEsgotado: () => void;
    tempoParaResponder?: number
}



export default function Questao(props: QuestaoProps){
  // obtém uma instancia da questao
  const questao = props.valor;
   
  function renderizarRespostas(){
     return  questao.respostas.map((resposta, i) => {
        return   <Resposta 
                key={`${questao.id}-${i}`}
                objeto={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoDaLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
                
           />
      })
  }

    return (
     <div className={styles.questao}>

        <Enunciado texto={questao.enunciado}/>
        <Temporizador key={questao.id} duracao={props.tempoParaResponder ?? 10}  tempoEsgotado={props.tempoEsgotado}/>
        {renderizarRespostas()}
      

     </div>
     
    
    )
}