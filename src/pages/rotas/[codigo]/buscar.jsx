import { useRouter } from "next/router"
import Link from "next/link";
export default function buscar () {

    const router = useRouter();
    const codigo = router.query.codigo;
    console.log(codigo)
return (
    
    <>
    
       <h1> Código: {codigo} - Buscar</h1>
        <Link href="/rotas">
            <button> Voltar</button>
        </Link>
    
    
    </>
        
    )
}