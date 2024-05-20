export default function Dinamico (req, res){
    res.status(200).json([
        {id: numeroAleatorio(), nome: "Caneta",  preco: 1.50},
        {id: numeroAleatorio(), nome: "Caderno", preco: 4.50},
        {id: numeroAleatorio(), nome: "Tesoura", preco: 2.50},
        {id: numeroAleatorio(), nome: "Borracha", preco: 1.80}
    ])

    
}

function numeroAleatorio(min: number = 1, max:number = 1000){
    return parseInt(Math.random() * (max - min)) + min;
       
   }
   