import { useRouter } from "next/router";
import Link from "next/link";

export default function produto (){

    const router = useRouter();
    const codigo = router.query.codigo;
    const produto = router.query.produto;

    return (
      <>
      
        <h1> Código: {codigo} + Produto: {produto} </h1>
        <Link href="/rotas">
            <button> Voltar </button>
        </Link>
      
      
      </>
     

    )
}