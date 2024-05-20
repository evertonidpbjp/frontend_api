export default class PortaModel {
   
    #numero: number;
    #temPresente: boolean;
    #selecionada: boolean;
    #aberta: boolean;

    
    constructor(numero: number, temPresente = false, selecionada = false, aberta = false){
        this.#numero = numero;
        this.#temPresente = temPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;

    }
   
    get numero(){
        return this.#numero;
    }

    get temPresente(){
        return this.#temPresente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta (){
        return this.#aberta;
    }

    get fechada() {
        return !this.#aberta;
    }


    // retorna uma nova instância da porta c/ o atributo selecionada alterado. Isso impede q o objeto 
    // da porta original seja modificado:
    alternarSelecao () {
        const selecionada = !this.selecionada;
        // o acesso dos atributos ñ precisa ser feito usando #, pois ele está acessando o método, ñ o atributo diretamente
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir () {
        const aberta = true;
        return new PortaModel (this.numero, this.temPresente, this.selecionada, aberta);
            
    }

    desselecionar (){
        const selecionada = false;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
    }



}