export default function Filho (props) {
    
    return (
        <div>
            <h1> Filho</h1>
           
            <button onClick={(e) => props.funcao(e)}> Comunicação indireta com o Pai 1 </button>
            <button onClick={() => props.funcao("passei no enem")}> Comunicação indireta com o pai 2</button>
        </div>
    )
}