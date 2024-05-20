import styles from "./Botao.module.css";
import Link from "next/link";

interface ButtonProps {
 texto: string;
 href?: string;
 onClick?: (e: any) => void;

}
// se o parametro href for passado ele monta um botão dentro de umn link, do contrário ele monta um button comum
export default function Botao (props: ButtonProps) {
   function renderizarBotao (){
        return (
        <button className={styles.button} onClick={props.onClick}> 
            {props.texto}
        </button>)
  }
   
    return props.href ? (
        <Link href={props.href}>   
           {renderizarBotao()}
        </Link>
     
   ) : (
      renderizarBotao()
   )
}