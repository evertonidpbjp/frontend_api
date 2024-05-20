import {useState} from "react";
// componente controlado
export default function formulario () {
 
    const [valor, setValor] = useState("valor inicial"); // se quiser q o componente ñ seja controlado, basta colocar o valor "undefinied"

    //ao associar a variável "valor" ao atributo "value", ele se torna um componente controlado. 
    // onChange permite q o campo possa ser alterado, senão el fica como somente leitura
    return (
        <div>
            
            <input type="text" value={valor} onChange={e => setValor(e.target.value) }/>

        </div>
    )

}