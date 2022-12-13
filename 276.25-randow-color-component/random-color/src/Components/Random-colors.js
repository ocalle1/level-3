import React from "react";


export default function Colors() {
    const [color, setNewColor] = React.useState(`red`)
    const [updateColor, setUpdateColor] = React.useState(0)

    React.useEffect(()=> {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
.then(res => res.json())
            // .then(res => setNewColor(`#${res.data.new_color}`))
            // .catch(err => console.error(err))
        .then(data => setNewColor(data))
    }, [updateColor])

    return (
        <div style={{ backgroundColor: {color} }} className='box'>
            <h1>The color is {updateColor}</h1>
            <h1>Box Color</h1>
            <button onClick={() => setUpdateColor(prev => prev + 1)}>
                Change Color
            </button>
            <pre>{JSON.stringify(color, null, 2)}</pre>
        </div>
    )
};