import styles from "./Enunciado.module.css";
interface EnunciadoProps {
     texto: String;

}

export default function (props: EnunciadoProps){
     
    return (
      <div className={styles.enunciado}>
            <span className={styles.texto}> {props.texto}</span>

      </div>
    )

}