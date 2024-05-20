export default function Estatico(req, res) {
        res.status(200).json([
           { id: 1, nome: "Caneta",   preco: 1.50 },
           { id: 2, nome: "Livro",    preco: 5.60},
           { id: 3, nome: "borracha", preco: 2.10},
           { id: 4, nome: "tesoura",  preco: 3.50}      
        ]);
     }
