export default function Estilo(props) {
    return (
        <div>
            <h1 style={{backgroundColor: props.numero >= 7 ? "green" : "red",
                        color: props.cor,
                        textAlign: props.direita ? "right" : "left",
                        
                    }}> Texto </h1>
                
        </div>
    )
}