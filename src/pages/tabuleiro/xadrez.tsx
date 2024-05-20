import styles from "../../styles/xadrez.module.css";
import Linha from  "../tabuleiro/components/Linha";
export default function xadrez () {
  return (
    <div className={styles.container}>
      <Linha black/>
      <Linha />
      <Linha black/>
      <Linha />
      <Linha black/>
      <Linha />
      <Linha black/>
      <Linha />
    </div>
  )
}