import styles from './Portas.module.css';
import PortaModel from './PortaModel';
import Presente from './presente';

interface PortaProps {
 value: PortaModel;
 onChange: (novaPorta : PortaModel) => void;

}

export default function Porta(props: PortaProps) {
  // extrai o objeto PortaModel da interface PortaProps, retornando um objeto PortaModel
  const porta = props.value;

  // se a porta tiver sido selecionada, ele aplica o css q sobrescreve a estilização da estrutura, deixando-o c/ a cor diferente
  // porém, ele só faz a seleção se a porta ñ estiver aberta
const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : styles.estrutura;
 
// altera a seleção da porta
const alternarSelecao = e => props.onChange(porta.alternarSelecao());

// abre porta
const abrirPorta = e =>{
  let aberta = porta.abrir();
  props.onChange(aberta);
  // o stop propagation é necessário p/ q ele pare de renderizar a porta
  e.stopPropagation();
}

// renderiza a porta, mas isso só acontece se o atributo "aberta" da classe porta estiver como false;
function renderizaPorta (){
  return (
    <div className={styles.porta}>
      <div className={styles.numero}> {porta.numero}</div>
      <div className={styles.macaneta} onClick={abrirPorta}>  </div>
   </div>
  )
}


   return (
        
         <div className={styles.area} onClick={alternarSelecao}>
          <div className={selecionada}>
           {porta.fechada ? renderizaPorta() : porta.temPresente ? <Presente /> : false}
          </div>
          <div className={styles.chao}> &nbsp;</div>          
        </div>
    )
}