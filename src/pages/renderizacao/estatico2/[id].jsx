export function getStaticPaths(){
    return {
        fallback: true, // diz ao nextjs q se for passada uma rota diferente dos ids abaixo, ele retorna 404
        paths: [
            {params: {id: '1'} },
            {params: {id: '2'} },
            {params: {id: '3'} }
        ]
    }
}


export async function getStaticProps(context){
   
   const resp = await fetch(`http://localhost:3000/api/estatico2/${context.params.id}`)
   const aluno = await resp.json();

    return {
        props: {
            aluno
        }
    }
}

export default function AlunosPorId(props){
    const {aluno} = props;
    return (
        <div>

            <h1>  Alunos por Id </h1>
            {aluno ? 
            <ul>
                <li> {aluno.id}    </li>
                <li> {aluno.nome}  </li>
                <li> {aluno.email} </li>


            </ul>
            : false}
        </div>
        
    )
}