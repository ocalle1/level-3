import React from "react";
import Pets from './Pets'

const Friends = (Props) => {
const mapPets = Props.pets.map(pet =>{
    return(
        <Pets 
        {...pet}
        />
    )
})
return(
    <section>
        <nav className="friend">
<h2>{Props.name}, Age {Props.age}</h2>

        </nav>
        {mapPets}
    </section>
    
)
}
export default Friends;