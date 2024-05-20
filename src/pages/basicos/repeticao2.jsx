import Produto from "../../model/Produto";

export default function repeticao2 (){

    const produtos = [
        new Produto (1, "ipad", 3000),
        new Produto (2, "Samsung S24",5000),
        new Produto (3, "Pc Gamer Asus", 6500),
        new Produto (4, "Notebook Acer Nitro 5", 4999)
    ];

  const comBorda = { border: "1px solid black", }

   function renderizaLista() {
        return produtos.map(produto => {
            return (
                <tr key={produto.getId()}> 
                    <td style={comBorda}> {produto.getId()}    </td>
                    <td style={comBorda}> {produto.getNome()}  </td>
                    <td style={comBorda}> {produto.getPreco()} </td>
                </tr>
            )
        })

        
   }

   return (
      <table style={comBorda}>
        <thead> 
            <tr > 
                <td style={comBorda}>  Código </td>
                <td style={comBorda}>  Nome   </td>
                <td style={comBorda}>  Preço  </td>
            </tr>
        </thead>
        <tbody>
            {renderizaLista()}
        </tbody>

      </table>
   )

}