import React from "react";

export default function Dice(props){
    return(
        <>
        <div>
            {/* the .dice calls the variable assigned in the App.js dice={num}  */}
<h3>{props.dice}</h3>
        </div>

        </>
    )
}
    