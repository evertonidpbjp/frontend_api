import banco from '../banco';

export default async function handler(req, res) {
    const idSelecionado = +req.query.id
    
    const questaoOuNada = banco.filter(questao =>  questao.id === idSelecionado)
   
    if(questaoOuNada.length === 1) {
        // além de extrair a questão, ele executa o método q embaralha a ordem das respostas (opcões)
        const questao = questaoOuNada[0].embaralharRespostas();
        
        res.status(200).json(questao.responderCom(0).converteParaObjeto());
    } else {
        res.status(204).send();
    }
   
  }
  