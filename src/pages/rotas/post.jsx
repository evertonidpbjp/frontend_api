import { useState } from "react"
export default function post (){

 const [nome, setNome] = useState("") // inciializa a variável de estado c/ string vazia
 const [idade, setIdade] = useState(0) // inicializa a variavel de estado com o number 0
 const [usuarios, setUsuarios] = useState([]) // iniciliza a variável de estado c/ array vazio

 // faz requisição post passando os dados do fomrulario de forma assíncrona, assim vc pode definir a ordem dos eventos c/ o await
 async function salvarUsuario () {
    await fetch('/api/form', {
        method: 'POST',
        body:  JSON.stringify({  // json.stringify converte objeto literal num json
          nome: nome,
          idade: idade

        })  
        })
        // após fazer o post, ele faz uma segunda requisição do tipo get p/ pegar a lista de usuarios e exibí-los
        const resp = await fetch('/api/form') // com o await vc define a ordem q os eventos ocorrem
        const usuarios = await resp.json()
        setUsuarios(usuarios); // mudando o estado de usuarios, auto ele renderiza o html p/ refletir a mudança


      }
 function renderizaUsuarios(){
    return usuarios.map((usuario, i) => {
      return <li key={i}> {usuario.nome} tem {usuario.idade} anos</li>
    })
 }


  
  return (
    <div>
        <h1> Integrando Api / 02</h1>
       Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
       Idade: <input type="text" value={idade} onChange={e => setIdade(+e.target.value)} />
       <button onClick={salvarUsuario}>  Enviar </button>

       <ul>
          {renderizaUsuarios()}
       </ul>
    </div>
  
  )

}


