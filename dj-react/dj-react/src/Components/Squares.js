import React from "react";


export default function Squares() {
    const [colors1, setColor1] = React.useState('white')
    const [colors2, setColor2] = React.useState('white')
    const [colors3, setColor3] = React.useState('white')
    const [colors4, setColor4] = React.useState('white')
    const colours = ['blue', 'teal', 'orange', 'purple', 'black']
    const randomIndex = () => Math.floor(Math.random() * colours.length)

    const smallDj = () => {
        setColor1(prevColor => prevColor === 'black' ? 'white' : 'black')
        setColor2(prevColor => prevColor === 'black' ? 'white' : 'black')
        setColor3(prevColor => prevColor === 'black' ? 'white' : 'black')
        setColor4(prevColor => prevColor === 'black' ? 'white' : 'black')
    }
    const partyDj = () => {
        setColor1('purple')
        setColor2('purple')
    }

    return (
        <>
            <div className="container">
                <div className="box" style={{ backgroundColor: colors1 }}>box 1</div>
                <div className="box" style={{ backgroundColor: colors2 }}> box 2</div>
                <div className="box" style={{ backgroundColor: colors3 }}> box 3</div>
                <div className="box" style={{ backgroundColor: colors4 }}>box 4</div>
            </div>
            <div className="djContainer">
                <div onClick={smallDj} className="small">
                    <button className="smallDj">Small DJ</button>
                </div>
                <div>
                    <button onClick={partyDj} className="partyDj">Party DJ</button>
                </div>
                <button onClick={() => setColor3('blue')}>Bottom Left</button>
                <button onClick={() => setColor4('blue')}>Bottom Right</button>
                <div>
                <button className="bigTimeDj" onClick={() => setColor1(colours[randomIndex()])}>Big Time DJ 1</button>
                <button className="bigTimeDj" onClick={() => setColor2(colours[randomIndex()])}>Big Time DJ 2</button>
                <button className="bigTimeDj" onClick={() => setColor3(colours[randomIndex()])}>Big Time DJ 3</button>
                <button className="bigTimeDj" onClick={() => setColor4(colours[randomIndex()])}>Big Time DJ 4</button>

                </div>
            </div>
        </>
    )
}


//     const smallTimeDj = () => {
//         setColor1(prevColor => prevColor === 'black' ? 'white':'black')
//         setColor2(prevColor => prevColor === 'black' ? 'white':'black')
//         setColor3(prevColor => prevColor === 'black' ? 'white':'black')
//         setColor4(prevColor => prevColor === 'black' ? 'white':'black')
//     }

//     const partyDj = () => {
//         setColor1('purple')
//         setColor2('purple')
//     }
//     return (
//         <div>
//             <div className="grid-container">
//                 <div className="container1" style={{backgroundColor: colors1}}>
//                     <h3>Box1</h3>
//                 </div>
//                 <div className="container2" style={{backgroundColor: colors2}}>
//                     <h3>Box2</h3>
//                 </div>
//                 <div className="container3" style={{backgroundColor: colors3}}>
//                     <h3>Box3</h3>
//                 </div>
//                 <div className="container4" style={{backgroundColor: colors4}}>
//                     <h3>Box4</h3>
//                 </div>
//             </div>
//             <button onClick={smallTimeDj}>Small time DJ</button>
//             <button onClick={partyDj}>Party DJ</button>
//             <button onClick={() => setColor3('blue')}>Left Blue</button>
//             <button onClick={() => setColor4('blue')}>Right Blue</button>
//             <button onClick={() => setColor1(pallette[randomIndex()])}>Big DJ 1</button>
//             <button onClick={() => setColor2(pallette[randomIndex()])}>Big DJ 2</button>
//             <button onClick={() => setColor3(pallette[randomIndex()])}>Big DJ 3</button>
//             <button onClick={() => setColor4(pallette[randomIndex()])}>Big DJ 4</button>
//         </div>
//     )
// }
