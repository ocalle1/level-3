import React from "react";


const Pet = (props) =>{
    return(
        <div className="pet">
<h1>Pets: {props.name}, {props.breed}</h1>
        </div>
    )
}


export default Pet;