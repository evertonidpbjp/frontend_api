import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
export default function params (){

   
    const params = useRouter();
    const nome = params.query.nome
    const valor = params.query.valor


    return (
        <React.Fragment>
               <h1> Nome: {nome} - Valor: {valor} </h1>
               <Link href="/rotas">
                    <button> Voltar </button>
               </Link>
        </React.Fragment>
     
      
    )

}