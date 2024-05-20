import Link from "next/link"
import router, {useRouter} from "next/router";

export default function index (){
   
    function rotaSimples(){
        router.push("/rotas/123/computador")
    }


    function rotaComParams(){
        router.push({
            pathname: "/rotas/params",
            query: {
                nome: "Computador",
                valor: 500
            }
        })
    }
    
    return (
         <>
            
            <Link href="/rotas/123/buscar" passHref>
                Código  / Buscar
             </Link>
             <br></br>
            
             <Link href="/rotas/123/computador" passHref>
               Código / Produto
             
             </Link>

             <br></br>
            
             <Link href="/rotas/params?nome=Computador&valor=5000" passHref>
              Parâmetros
             
             </Link>

             <h2> Rotas programáticas</h2>

            <button onClick={() => router.push("/rotas/123/buscar")} > Código/Buscar</button>
            <button onClick={rotaSimples}>  Código/Produto</button> 
            <button onClick={rotaComParams}>Parâmetros </button>
         </>
   

    )

}