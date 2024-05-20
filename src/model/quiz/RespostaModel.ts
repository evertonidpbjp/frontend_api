export class RespostaModel {
  private valor: string;
  private certa: boolean;
  private revelada: boolean;

constructor(valor: string, certa: boolean, revelada: boolean  = false) {
   this.valor = valor;
   this.certa = certa;
   this.revelada = revelada;

}
// métodos estáticos, pertencem à classe, ñ ao objeto. Serve p/ obter qual resposta é a correta ou errada (ver api/quiz/questoes/id)
static certa(valor: string): RespostaModel{

  return new RespostaModel(valor, true);
}


static errada(valor: string): RespostaModel {
    return new RespostaModel(valor, false)
}

getValor(): string{
    return this.valor;
}

getCerta(): boolean {
    return this.certa;
}

getRevelada():boolean {
    return this.revelada
}

// para devolver os dados na api, é preciso q ele seja convertido p/ objeto, obrigando a criar esse método p/ devolver todos os atributos da classe
converteParaObjeto(){
    return {
        valor: this.valor,
        certa: this.certa,
        revelada: this.revelada
        
    }

}
// quando o usuário selecionada uma resposta dentre as opções, o sistema precisa revelar tanto a resposta selecionada quanto a resposta certa 
// esse método serve p/ modificar o atributo "revelada" sempre para true, fazendo a resposta selecionada ficar com o status de revelada e ser apresentada
// ao usuário (esse método é chamado na Classe QuestãoModel método responderCom)
revelar(){
    return new RespostaModel(this.getValor(), this.getCerta(), true)
}

// função estática q converte objeto literal recebido via json da API p/ o formato do RespostaModel (tem um sm no QuestaoModel)
static criarUsandoObjeto(obj: RespostaModel): RespostaModel{
   return  new RespostaModel(obj.getValor(), obj.getCerta(), obj.getRevelada());
}



}