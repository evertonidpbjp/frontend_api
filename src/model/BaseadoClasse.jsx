import { Component } from "react"
export default class BaseadoClasse extends Component {


    // o estado do componente é inicializado c/ o objeto state
    
         state = {
            numero: this.props.inicial ?? 0, // o ?? indica q se o valor ñ for informado, ele inicializa c/ zero
            passo:  this.props.passo ?? 1
         }
    
         /* tb posso inicializar o estado direto no construtor, nesse caso ñ precisa usar o this:
         constructor(props) {
            super(props)
            this.state = {
              numero:   props.valorInicial ?? 0,
              passo:    props.passo ?? 1 
            }
         }
          */
// ao clicar no botão de "+", ele incrementa o valor do contador

         incrementar = ()  => {
            this.setState({
                numero: this.state.numero + this.state.passo
            })
         }
// ao clicar no botão de "-" ele decrementa o valor do contador
         decrementar = () => {
            this.setState({
                numero: this.state.numero - this.state.passo
            })
         }
     
//altera o valor do passo (de quanto em quanto aumenta) de acordo com o valor digitado no input number do formulario
        alteraPasso = (ev) => {
            this.setState({
                passo: +ev.target.value
            })
        }



        render() {
            return (
                <div>

                    <h1> Contador (usando classe)</h1>
                    <h2> {this.state.numero} </h2>
                    <input type="number" value={this.state.passo} onChange={this.alteraPasso} />
                    <button onClick={this.incrementar}> + </button>
                    <button onClick={this.decrementar}> - </button>
                
                </div>
                
                
            )
        }
       
    
}