import { useState } from "react";
import ContadorDisplay from "../../components/contadorDisplay";
export default function contador (){

const [x, setX] = useState(0); // esse zero ñ é um índice, mas sim o valor inicial zero atribuído a variável x

 function decrementa(ev) {
    setX(x -1);

 }

 // duas formas, uma chamando uma função, outra chamando uma função anônima (no formato de arrow function)
   return (
     <div 
        style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}
    > 
     <ContadorDisplay  x={x}/>
    <button onClick={() => setX(x +1)}> + </button> 
    <button onClick={decrementa}> - </button>
    </div>
    
   )


}