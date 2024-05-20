import Filho from "./Filho";

export default function Pai (props){
    return (
        <>
            <Filho  nome="Pedro"  familia={props.familia} /> 
            <Filho  nome="Marcos" familia={props.familia} />
            <Filho  {...props}   nome="Isaías" familia={props.familia} />
        </>
    
    )

}