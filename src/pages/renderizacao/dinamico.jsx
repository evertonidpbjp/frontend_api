// função q obriga o nextjs a gerar conteúdo dinâmico a cada nova requisição
export async function getServerSideProps (){
    const resp = await fetch("http://localhost:3000/api/dinamico");
    const produtos = await resp.json();

    return {
        props: {
            produtos
        }
    }
}

export default function Dinamico(props){
    function renderizarProdutos(){
        return props.produtos.map(produto => {
            return <li key={produto.id}> O produto {produto.nome} custa {produto.preco} reais </li>
        })

    } 


    return  (
        <div>
            <h1> Conteúdo Dinâmico</h1>
            <div>
                {renderizarProdutos()}

            </div>
        </div>
    )
}
