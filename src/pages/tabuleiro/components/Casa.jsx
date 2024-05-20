import styles from "../../../styles/casa.module.css";
export default function Casa (props) {
    return (
        <div 
        style={{backgroundColor: props.black ? "black" : "white"}}
        className={styles.casa} 
        >
             
        </div>

    )
}
