import type { NextApiRequest, NextApiResponse } from 'next'
 
type Data = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  
    if(req.method === "GET") {
        res.status(200).json({ message: 'Método GET com sucesso' })
    } else {
        res.status(503).json([
            {message: "Erro, o método não é GET"},
            {metodo: req.method }
        
         ])
    }

}