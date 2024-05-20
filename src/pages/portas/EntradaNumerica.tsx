import styles from "./EntradaNumerica.module.css";

interface EntradaNumericaProps {
    text: string,
    value: number,
    onChange: (newValue: number) => void
}

export default function EntradaNumerica (props: EntradaNumericaProps) {
    const decrementa = () => props.onChange(props.value - 1);  
    const incrementa = () => props.onChange(props.value + 1);

    
    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}> {props.text} </span>
            <span className={styles.value}> {props.value} </span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={decrementa}> - </button>
                <button className={styles.btn} onClick={incrementa}> + </button>      
            </div>
        </div>
    )


}