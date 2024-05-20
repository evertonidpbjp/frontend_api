function geraLista() {
    const lista = [
        <span key={1}>1,</span>,
        <span key={2}>2, </span>,
        <span key={3}>3,</span>,
        <span key={4}>4,</span>,
        <span key={5}>5,</span>,
        <span key={6}>6,</span>,
        <span key={7}>7,</span>,
        <span key={8}>8,</span>,
        <span key={9}>9</span>
    ]
    return lista;
}

export default function lista1() {
     return (
        <div>
            
            {geraLista()}
             
        </div>
    
     )
}