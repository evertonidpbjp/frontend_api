export default function SomentePar (props){
  const ePar = props.numero % 2 === 0;

  return (
    <div>
        {
        ePar ? <span> {props.numero}  </span> : null 
        }
    </div>
  )

  
}