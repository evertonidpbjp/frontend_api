const usuarios = [];
export default function form(req, res){
 // se a requisição for do tipo post ele chama a função post, do contrário ele faz um get retornando a lista de usuários, senão ele retorna um
 //status de método não suportado
    if(req.method === "POST") {  
        post(req, res)
    } else if (req.method === "GET") {
       get(req, res)
    } else {
        res.status(405).send()
    }
    
    // a função post recebe o json do usuario enviado pelo formulario, converte p/ objeto literal e adiciona no
    // array de usuarios
    function post(req, res) {
        const usuario = JSON.parse(req.body)
        usuarios.push(usuario) //obs: esse push ñ é o push de requisição, mas sim o push método p/ adicionar elementos num array/lista
        res.status(200).send();
    }

    // retorna a lista de usuarios existentes no array
     function get(rq, res) {
        res.status(200).json(usuarios)
     }

}