import Titulo from "../../components/Titulo";
export default function () {

    return (
       <>
            <Titulo 
             principal="Tela de Cadastro"
             secundario="Tela de Login"
             pequeno={true}
            
            />
            <Titulo 
            principal="Tela de Cadastro"
            secundario="Tela de Login"
            pequeno={false}
            
            />

           <Titulo 
            principal="Tela de Cadastro"
            secundario="Tela de Login"
            pequeno
            
            /> 

       </>
    )
}