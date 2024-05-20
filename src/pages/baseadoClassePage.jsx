import {Component} from "react";
import BaseadoClasse from "../model/baseadoClasse";
// todo component baseado em classe deve herdar de componente
export default class baseadoClassePage extends Component {
  
    // o método render deve ser sempre sobrescrito (reescrito na classe) + é o responsável por renderizar a página

    render(){ 
        return (
        <>
            <BaseadoClasse inicial={100} passo={10}/>
        </>
        )
      
        
    }
}