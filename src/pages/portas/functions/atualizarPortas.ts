import PortaModel from "../PortaModel";
export default function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel) {
    return portas.map(portaAtual => {
       const igualModificada = portaAtual.numero === portaModificada.numero; 
        if(igualModificada){
            return portaModificada
        } else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
        }
    })
}