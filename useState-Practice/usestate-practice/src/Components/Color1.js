import React from "react";


export default function Colors(){
    const [color1, setColor] = React.useState("pink")
    console.log(color1)
    function handleClick(){
    setColor("blue")
    }

    return(
        <>
        <div className="color">
<h1>Change the color?</h1>
<div className="click" onClick={handleClick}>
    <h1>{color1}</h1>
</div>
        </div>
        </>
)
};