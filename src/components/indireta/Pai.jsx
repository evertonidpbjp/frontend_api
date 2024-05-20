import Filho from "./Filho";
export default function Pai () {
    
    function comunicacaoIndireta(param){
        console.log(param); 
    }

    return ( 
        <div> 
            <h1> Pai </h1>
            <Filho  funcao={comunicacaoIndireta}/>
        </div>
    )
}