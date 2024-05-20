interface PessoaProps {
    nome: string;
    idade?: number;

}

export default function Pessoa(props: PessoaProps) {
    return (
        <div>
            <h1> Pessoa</h1>
            <p> nome: {props.nome}</p>
            <p> idade: {props.idade ?? "não informado"}</p>

        </div>
    )
}