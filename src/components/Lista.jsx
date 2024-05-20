import Item from "./Item";
export default function Lista (props){
    return (
        <div> 
            <h1> Lista de Algo</h1>
             <ul style={{lifeStyle: "none"}}>
                {props.children}
            </ul>
        </div> 

    )
}