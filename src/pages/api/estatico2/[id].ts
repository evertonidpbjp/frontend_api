export default function Estatico2 (req, res){
    const id: number = +req.query.id
    res.status(200).json({
        id: id,
        nome: `Pedro${id}`,
        email: `pedro${id}@gmail.com`
    })
}