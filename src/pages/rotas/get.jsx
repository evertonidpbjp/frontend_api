import { useEffect } from "react"
import { useState } from "react"

export default function get () {
    const [questao, setQuestao] = useState(null) // inicializa a variável de estado com null
    
    // as requisições http são retornados assincronamente em forma de uma promessa
    // o useEffect impede q a requisição seja renderizada indefinidamente
    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123') // retorna uma promessa 
        .then(resp => resp.json()) // armazena a resposta em resp e retorna outra promessa no formato json
        .then(setQuestao) // altera a variável de estado questao com o valor do json retornado
    }, [])

    // renderiza os <li> com a questão e a lista de respostas somente se a variável questão já tiver valor, pois como a requisição é assíncrona
    // a resposta pode ñ estar pronta de imediato.
    function renderizaRepostas(){
        if(questao) {
            return questao.respostas.map((resp, i) => {
                    return <li key={i}> {resp} </li>
            })
        }

        return false; 
    }
       
    return (
        <div>
                <h1> Questão</h1>
                <div>
                    <span><strong>ID: </strong> {questao?.id} / <strong> Questão: </strong> {questao?.enunciado} </span>
                    
                    <ul>
                        {renderizaRepostas()}
                    </ul>

                </div>
        </div>
    )
}