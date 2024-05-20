import { useState } from "react";
export default function estado () {

 // hooks   
const arrayY = useState(0);// retorna um array de estados, p/ alterar o estado de uma variável em tempo real
let y = arrayY[0]; // esse array contém no indice 0, o valor da variável y
let setY  = arrayY[1]; // no indice 1, contém uma função p/ alterar o valor de y, pois a variável ñ pode ser alterada diretamente

// posso resumir os 3 comandos acima em apenas uma linha:
const [x, setX] = useState(0); 

const estilo =  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    color: "white",
    height: "100vh"
}

// recebe o evento da passagem do mouse e alterar os valores de x e y em tempo real
function quandoMover(ev) {
  setX(ev.clientX);
  setY(ev.clientY);
}


return (
    <div style={estilo} onMouseMove={quandoMover}>
        <span> Eixo x: {x} </span>
        <span> Eixo Y: {y} </span>
    </div>
)



}