import PortaModel from "../PortaModel";

// função q gera um array de portas, indicando a quantidade de portas a serem geradas e indica a porta premiada com o presente
export default function criarPortas (qtde: number, portaComPresente: number){
 // Array.from com a opção length gera um array de elementos; Com o atributo i, dá pra gerar a numeração das portas q deve começar em 1
 // tb testa se a porta tem presente, isso só será verdadeiro se o número da porta for o mesmo da porta q foi selecionada pelo sistema p/ ser a porta premiada    
 return Array.from({length: qtde}, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === portaComPresente;
        return new PortaModel(numero, temPresente)
     })
}



