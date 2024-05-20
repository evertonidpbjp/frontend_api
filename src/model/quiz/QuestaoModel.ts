import { RespostaModel } from "./RespostaModel";
import { embaralhar } from "@/functions/embaralhar";

export class QuestaoModel {
    // private é do ts e # é o padrão do emascript
    #id: number;
    #enunciado: string;
    #respostas: RespostaModel[];
 //   #respondida: string;
    #acertou: boolean;
    


constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
}

get id ():number {
    return this.#id;
}

get enunciado ():string {
    return this.#enunciado;

}

get respostas(): any[] {
    return this.#respostas
}

get acertou (): boolean {
    return this.#acertou
}
// apenas inverte o resultado da função seguinte
get naoRespondida (): boolean {
  return !this.respondida;
}

// verifica se a questão foi respondida 
get respondida (): boolean {
    for(let resposta of this.#respostas) {
        if(resposta.getRevelada()) return true;
        
      
    }
    return false;
}

embaralharRespostas(): QuestaoModel{
  let respostasEmbaralhadas = embaralhar(this.#respostas);
  return new QuestaoModel(this.#id, this.enunciado, respostasEmbaralhadas, this.#acertou)
}


// para devolver os dados na api, é preciso q ele seja convertido p/ objeto, obrigando a criar esse método p/ devolver todos os atributos da classe
converteParaObjeto() {
    return {
        id: this.#id,
        enunciado: this.#enunciado,
        respostas: this.#respostas.map(resposta => {
            return resposta.converteParaObjeto();
        }),
     //   respondida: this.#respondida,
        acertou: this.#acertou,
        
    }
}

// Verifica se usuário acertou a questao a partir do íncide informado, retornando um objeto QuestaoModel q expressa quais respostas devem ser reveladas (somente a certa, somente a errada ou ambas)
responderCom(indice: number): QuestaoModel {
    // obtém uma das respostas c/ base no índice informado, verrificando se é a resposta certa.
    const acertou = this.#respostas[indice]?.getCerta();
    // varre todas as respostas disponíveis
    const respostas = this.#respostas.map((resposta, i) => {
       // compara se o índice informado (questao selecionada) é igual ao indece da iteração
       // se for signfica q trata da questao selecionada pelo usuário, retornando true
        const respostaSelecionada = indice === i;
        // se a resposta da iteração for a reposta selecionada pelo usuário ou se a resposta da iteraçaõ for a resposta certa, então ele retorna true p/ a constante "deveRevelar"
        // se quiser q ele ñ revele a resposta certa qnd o usuário errada, basta suprimir a parte resposta.getCerta
        const deveRevelar = respostaSelecionada || resposta.getCerta();
        // se deveRevelar for verdadeiro, ele retorna chama a função revelar() q retorna uma nova inst}ancia de RespostaModel c/ o status "revelada" como true, do contrário apenas retorna a resposta
        return deveRevelar ? resposta.revelar() : resposta 
    })
 // retorna uma nova instância de Questão Model com o mesmo id e enunciado (pois se trata da mesma questao), mas c/ as repostas modificadas (sobretudo o atributo revelada) e também o atributo acertou, verificando se respoosta é a correta
return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou);
}

// função estática q converte objeto literal recebido via json da API p/ o formato do modelo Questão (tem um sm no RespostaModel)
static criarUsandoObjeto (obj: QuestaoModel) : QuestaoModel {
    const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
    return new QuestaoModel(obj.#id, obj.#enunciado, respostas, obj.#acertou)


}



}