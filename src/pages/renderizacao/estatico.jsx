// cria função q força o nextjs a gerar o conteúdo de forma estática
// o async faz c/ q a requisição seja feita de forma assíncrona
export async function getStaticProps (){
// o await faz c/ q ele espere a resolução da promise gerada pelo fecth, para só então ser executado
 const resp = await fetch ("http://localhost:3000/api/estatico")
 // converte p/ json. Await permite q a execução seja feita de forma síncrona dentro de uma execução assíncrona
 const produtos = await resp.json();
 
 return {
    props: {
        produtos
    }
    }
}
// vai efetivamente pegar os dados obtidos do back end por meio da função getStaticProps e exibí-la
export default function Estatico (props){
    function renderizarProdutos (){
        return props.produtos.map(produto => {
            return <li key={produto.id}>  O produto {produto.nome} tem valor de {produto.preco} </li>
        })
    }

    return <div>
                <h1> Conteúdo Estático </h1>
                <div>  {renderizarProdutos()} </div>
          </div>
}