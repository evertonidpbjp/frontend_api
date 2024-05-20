import styles from './Temporizador.module.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TemporizadorProps{
    key: number
    duracao: number,
    tempoEsgotado: () => void

}

export default function Temporizador (props: TemporizadorProps) {
  
    return (
        <div className={styles.Temporizador}>
            <CountdownCircleTimer
              duration={props.duracao}  // tempo q o temporizador fica rodando
              size={120}                // tamanho do componente
              isPlaying                 // aceita dois valores true/false, o padrão é true, significa q carrega a página já executando o temporizador
              onComplete={props.tempoEsgotado} // ao finalizar a contagem, ele invoca o método tempoEsgotado
              colors={['#004777', '#F7B801', '#A30000', '#A30000']} // define as cores q serão utilizadas
              colorsTime={[7, 5, 2, 0]} // define o tempo q ocorrerá a mundança de cada cor
              >
              {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>

        </div>
    )


}