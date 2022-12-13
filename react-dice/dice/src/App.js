import './App.css';
import React from 'react';
import Dice from './Compartments/Dice';

 function App() {
  // the useState array numbers are called by the variables[num,setNumber]
  const [num, setNumbers] = React.useState([1, 2, 5, 6, 3])
  return (
    <>
     <div>
        <button onClick={() =>
        //onClick the setNumber maps through the Array of the 5 numbers
        setNumbers([...Array(5)].map(() =>
        //Math.floor randomizes the numbers when its rolled
        Math.floor(Math.random() * 6 + 1)))}>
            Roll</button>
        
        </div>
        {/* The dice={num} calls the function num(updater)*/}
    <Dice dice= {num}/>
    </>
  );
}

export default App;
