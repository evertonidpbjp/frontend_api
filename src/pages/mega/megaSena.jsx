import MegaDisplay from "../../components/MegaDisplay";
import { useEffect, useState } from "react";
import mega from "../../functions/mega.js";

export default function megaSena(){
 // inicializa as variáveis qtde e numeros c/ estado
  const [qtde, setQtde] = useState(6); // qtde é iniciado c/ valor 6 
    const [numeros, setNumeros] = useState([]) // numeros é inicializado c/ array vazio

  // o hook useEffect evita q a renderização seja feita indefinidamente toda vez q houver mudança de estado. 
  // Isso evita o erro Unhandled Runtime Error - Error: Text content does not match server-rendered HTML.
  //Warning: Text content did not match. Server: "3" Client: "8"
  useEffect(() =>{
    setNumeros(mega()) // reinicializa no carregamento da página os primeiros 6 valores sorteados
  }, [])
  
  //função q varre todos os elementos do array, gerandos cada uma das bolas sorteadas
  function renderizarNumeros(){
    return numeros.map(
        numero => <MegaDisplay  key={numero} numero={numero}/>

    )    
  }

  // chama a função nesse ponto juntamente c/ um botão q ao ser acionado define a quantidade de números a ser sorteados
 return (
    <>
    <div>
        <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center"
            }}>
            {renderizarNumeros()}  
            <input type="number" min={6} max={20} value={qtde} onChange={(ev) => setQtde(+ev.target.value)} />
            <button onClick={() => setNumeros(mega(qtde))}> Gerar Números </button>
        </div>
    </div>
    </>
 )
    
}