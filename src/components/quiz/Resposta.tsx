import { RespostaModel } from "@/model/quiz/RespostaModel";
import styles from "@/components/quiz/Resposta.module.css";

interface RespostaProps {
    objeto: RespostaModel;
    indice: number;
    letra: string;
    corFundoDaLetra: string;
    respostaFornecida: (indice: number) => void
}



export default function Resposta (props: RespostaProps) {
    const resposta = props.objeto;

  return (
      <div className={styles.reposta} style={{
        width: '100%', margin: '10px'
      }} onClick={() => props.respostaFornecida(props.indice)}>
         <div className={styles.conteudoReposta}>
            {!resposta.getRevelada() ? (
            <div className={styles.frente}>
                <div className={styles.letra} style={{
                    backgroundColor: props.corFundoDaLetra
                }}>
                    {props.letra}
                </div>

                <div className={styles.valor}>
                  {resposta.getValor()}        
                </div>
            </div>
            )
            : (
            <div className={styles.verso}>
               {resposta.getCerta() ? (
                <div className={styles.certa}>
                    <div> A resposta certa é: </div>
                    <div className={styles.valor}> {resposta.getValor()} </div>
                </div>
                ) : (
                <div className={styles.errada}>
                    <div> A resposta selecionada está incorreta </div>
                    <div className={styles.valor}> {resposta.getValor()} </div>
                </div>    
                )}
            </div> ) }

         </div>
      </div>
   
  )          

}