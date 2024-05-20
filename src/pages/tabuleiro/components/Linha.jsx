import Casa from "./Casa";
import styles from "../../../styles/linha.module.css";
export default function Linha (props) {

     return (
        <div className={styles.linha}>
          <Casa black={props.black}/>
          <Casa black={!props.black}/>
          <Casa black={props.black}/>
          <Casa black={!props.black}/>
          <Casa black={props.black}/>
          <Casa black={!props.black}/>
          <Casa black={props.black}/>
          <Casa black={!props.black} />

        </div>
     )
}