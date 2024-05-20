export default function Titulo (props){
  if(props.pequeno)
    return (
    <>
    
        <h4> {props.principal} </h4>
        <h5> {props.secundario}</h5>
    
    </>
   )

  return (
  <>
    <h1> {props.principal} </h1>
    <h2> {props.secundario} </h2>
   </> 
  )

}