 import Porta from "./porta";
 import criarPortas from "./functions/criarPortas";
 import atualizarPortas from "./functions/atualizarPortas";
 import { useEffect, useState } from "react";
 import styles from './jogo.module.css';
 import Link from "next/link";
 import { useRouter } from "next/router";

 export default function jogo(){
     // chama a função q gera um número definido de portas, indica a porta premiada, e armazena o resultado
     // numa variável de estado
     const [portas, setPortas] = useState([]);
     // variável de estado responsável pela validação
     const [valido, setValido] = useState();
     

    // inicializa o router p/ pegar os parâmetros enviados via formulário
     const parametros = useRouter();
 
     // sempre q houver mudança na dependência parametros.query, ele irá executar a função interna 
    useEffect(() => {
        
        const numero_portas = +parametros.query.numero;
        const porta_premiada = +parametros.query.premiada;
        setPortas(criarPortas(numero_portas, porta_premiada));

    }, [parametros?.query]);

    // sempre os valores das portas forem alterados, o setEffect abaixo é executado verificando se os dados são válidos
    useEffect(() => {
        
      // testa se os valores passados referente à quantidade de portas e à porta com o presente cumprem as regras
        const numero_portas =     +parametros.query.numero;
        const porta_premiada =    +parametros.query.premiada;
        const qtdePortasValidas = numero_portas >= 3 && numero_portas <= 100;
        const temPresenteValido = porta_premiada >= 1 && porta_premiada <= numero_portas;
        
        // define o valor da variável de estado "valido" com true/false dependendo se os dados passaram ou não pelo teste
        setValido(qtdePortasValidas && temPresenteValido);
        
    }, [portas]);
     

     // varre o array de portas criadas, gerando um componente html porta p/ cada um
     // a cada mudança no componente, ele chama a função onchange q invoca o método atualizar Portas p/ desselecionar as demais portas
     function renderizaPortas() {
       return portas.map(porta => {
          return <Porta  key={porta.numero} value={porta}  onChange={novaPorta => setPortas (atualizarPortas(portas,  novaPorta))} />
       })
     }
     
     
           // cria um value e onchange improvisado para o componente Porta, como se fosse um input, assim, ao clicar, ele fica selecionado
        return (
      
         <div className={styles.jogo}>
             <div className={styles.portas}>
               {valido ? renderizaPortas() : <h1> Dados Inválidos </h1> }
         
             </div>

             <div className={styles.botoes}>
                <Link href="/portas/" passHref>
                    <button> Reiniciar Jogo </button>
                </Link>
             </div>


         </div>
       
      
            
        )

 }
