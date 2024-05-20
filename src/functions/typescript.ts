// interface q recebe como atributo uma função, nesse caso, nem precisou indicar o nome da função, mas somente os parâmetros 
interface FuncaoCalculo {
    (expoente:number, base:number): number
}

// variável será do tipo FuncaoCalculo
let potencia: FuncaoCalculo;
// im0lementa o atributo da interface, q nesse caso é uma função
potencia = function (expoente:number, base: number):number {
  
// forma de implementar uma operação exponencial: Array(expoente) gera um array com a quantidade de elemtnos definido pelo parametro interno
// a funçaõ fill indica o valor de cada elemento, ou seja, serão vários elementos com o mesmo valor de base
//reduce permite q vc faça uma operação interna:
// Formas nativas de fazer potenciação: Math.pow (4,2) ou 8 ** 2
 return Array(expoente).fill(base).reduce((t, a) => {
        t * a;
   });
}
