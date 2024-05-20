import banco from "./banco";
import { embaralhar } from "@/functions/embaralhar";
export default (req, res) =>  {
  
    // obtém a lista de questões, extraindo somente os ids (array de ids)
    const ids = banco.map(questao => questao.id);
    // passa a lista de ids para a função de embaralha, deixando as questões em ordem diversa
    res.status(200).json(embaralhar(ids))
}