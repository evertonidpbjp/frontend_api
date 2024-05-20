// função q gera um conjunto de números aleatórios. Essa quantidade de npumeros gerados é fornecida pelo usuário
export default function mega (quantidade = 6, numeros = []) {
    // se a quantidade de números for menor q 6 ou maior q 60, ele encerra a execução, pois são valores inválidos
    if(quantidade < 6 && quantidade > 60) { 
        throw "Quantidade Inválida"
    }
   
    // quando o número de elementos contidos no array atingir a quantidade de valores definidas, 
    // ele encerra, retornado o array com todos os elementos.
    // a função sort ao ser usada c/ parametros n1,n2, ordena de forma crescente
    if(numeros.length === quantidade) {
        return numeros.sort((n1,n2) => n1-n2)
        
    }
    // gera um número aleatório a cada execução da função mega, preenchendo o array 
    const numeroAleatorio = parseInt(Math.random() * 60 + 1)
    // verifica se o número aleatório gerado já está presente no array
    if(!numeros.includes(numeroAleatorio)){
        // se ñ estiver presente, ele chama a função mega recursivamente, enviando a quantidade de números, 
        // o array gerado até então, e o novo número aleatório adicionado 
       return mega(quantidade, [...numeros, numeroAleatorio])
    }
    else {
        // se estiver contido, ele ignora o numero gerado e apenas chama novamente a função mega recursivamente
        return mega(quantidade, numeros);
    }
  
}
console.log(mega())