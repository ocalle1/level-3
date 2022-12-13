import React from "react";


export default function Spots(props){
    return(
<>
<div className="main">
    <h1 className="place">{props.place}</h1>
    <h4 className="price">Price:{props.price}</h4>
    <h2 className="timetogo">{props.timeToGo}</h2>

</div>
</>
    )
}