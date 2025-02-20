import { QuestaoModel } from "@/model/quiz/QuestaoModel"
import styles from './Questionario.module.css';
import Questao from "./Questao";
import Botao from "./Botao";

interface QuestionarioProps{
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irPraProximoPasso: () => void 

}

export default function Questionario(props: QuestionarioProps){
    // ocorre aqui uma comunicação indireta, em q este componente filho irá enviar via função questaoRespondida c/ o componente pai
    function respostaFornecida(indice: number) {
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }   
    
    return (
        <div className={styles.questionario}>

            {props.questao ?
           
             <Questao 
                valor={props.questao} 
                tempoParaResponder={6} 
                respostaFornecida={respostaFornecida} 
                tempoEsgotado={props.irPraProximoPasso}/>
              
              : false
             } 
            <Botao  onClick={props.irPraProximoPasso} texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
        </div>
    )

}