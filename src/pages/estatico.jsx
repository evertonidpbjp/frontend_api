// método padrão, quando invocado gera um conteúdo estático q renderiza a mesma informação sempre
// ele vai gerar um número aleatório 
export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}


// ao usar o props ele já obtém o dado gerado pela getStaticProps e injeta no parametro props e obtém o valor do
// número
export default function Estatico (props){
    return (
        <div> 
            <span> Aleatório: {props.numero} </span>

        </div>
    )
}