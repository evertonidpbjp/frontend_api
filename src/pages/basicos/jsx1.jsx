import React from "react";

//jsx 
  export default  function segundo (props) {
        return (
            <div className="container">
                <h2 className="country-name">Country Name: {props.name}</h2> 
                <p className="capital">Capital: {props.capital}</p> 
                <p className="population">Population: {props.population}</p> 
            </div> 
        );
}
