export default class Produto {
// a # indica q os atributos são privados
     #id;
     #nome;
     #preco;


 constructor (id, nome, preco) {
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
 }    

 getId() {
    return this.#id;
 }
    
getNome (){
    return this.#nome;
}

getPreco() {
    return this.#preco;
}


}