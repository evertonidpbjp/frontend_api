export default function jsx04 () {
    const subtitulo = "Estou no Javascript" 
    const trecho = <h3> {3 * 3} </h3>
    return (
        <>
        <h1> {subtitulo} </h1>
        {trecho}
        <h4> {Math.max(13, 39)} </h4>
        <h5> {entre (9.6, 7, 16)}</h5>    
        </>

    )
}

function entre (valor, min, max){
     if(valor >= min && valor <= max)
       return "sim"
    else 
        return "não"
}