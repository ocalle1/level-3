import React from "react";



export default function Color2() {
    const [color2, setColor] = React.useState("pink")
    
    function changeColor() {
        setColor(prevState => !prevState)
    }
    return (
        <>
        <div className="change--color2">
<h2>Click to change colors</h2>
<div onClick={changeColor} className="change--color-blue">
<h1>{color2 ? "pink" : "blue"}</h1>
</div>
</div>
        </>
    )
}