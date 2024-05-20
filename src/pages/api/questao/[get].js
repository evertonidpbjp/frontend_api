export default function questao(req, res) {
  // se for usado o método get, ele invoca a função get q retorna um json c/ a questão e as alternativas, senão exibe erro 405 
    if(req.method === "GET"){
        get(req, res)
    } else {
        res.status(405).send()
    }
}

function get(req, res) {
    const id = req.query.get // pega os dados dinâmicos passados via url sm ao useRouter
    // retorna um json com a questão em si, com a pergunta e as repostas
    // ao usar o id sem o valor, ele entende q o nome do valor é igual ao nome da chave
    res.status(200).json({
        id,          
        enunciado: 'Qual é a sua cor favorita',
        respostas: ['branco', 'vermelha', 'amarela', 'verde']
    
    })
}