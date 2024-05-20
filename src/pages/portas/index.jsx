import Cartao from "./cartao";
import styles from "./Formulario.module.css";
import Link from "next/link";
import EntradaNumerica from "./EntradaNumerica";
import { useState } from "react";



export default function Formulario (){
    
  const [qtdePortas, setQtdePortas] = useState(5);
  const [portaComPresente, setPortaComPresente] = useState(3);

  
  return (
    <>
      <div className={styles.formulario}>
        <div>
          <Cartao  bgColor="red">
            <h1> Monty Hall</h1>
         </Cartao>
          <Cartao>
            <EntradaNumerica text="Porta com presente" value={portaComPresente} 
            onChange={novaPortaComPresente => setPortaComPresente(novaPortaComPresente)} />
          </Cartao>
         
       </div>
       <div>
          <Cartao> 
            <EntradaNumerica text="Quantidade de portas" value={qtdePortas} onChange={novoNumero => setQtdePortas(novoNumero)} />
          </Cartao>
          <Cartao bgColor="green">
            <Link href={`/portas/jogo?numero=${qtdePortas}&premiada=${portaComPresente}`}  className={styles.link} > 
             <h2>Iniciar  </h2> 
               
           </Link>

          </Cartao>
         
       </div>    
      </div>
      
    </>


    )
}