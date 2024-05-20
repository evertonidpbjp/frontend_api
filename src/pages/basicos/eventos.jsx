export default function eventos () {
 
function clique1 () {
    console.log("Clique 1")
} 

function clique4 (evento) {
    console.log(evento) // retorna true se o alt estiver pressionado ao clicar no botão
}

    return (
        <div>
            <button onClick={clique1}> Clique 1 </button>
            <button onClick={function () {
                console.log("clique 2 - função anônima")

            }}> 
             Clique 2 - Função anônima
            </button>

            <button onClick={() => console.log("clique 3 - arrow function")}> Clique 3 - Arrow Functions </button>
            <button onClick={(e) => clique4(e.altKey)}> Clique 4 - capturando o objeto evento </button>
            <input type="text" onChange={e => console.log(e.target.value)} />
        </div>
    )

}