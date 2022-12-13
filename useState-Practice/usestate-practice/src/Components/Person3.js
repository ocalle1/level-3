import React from "react";

// let nextId = 3;
// const initialPeople = [
//     { id: 0, firstName: "John Smith" },
// { id: 1, firstName: "Oscar Calle" },
// {id:2, firstName:"Fredrick douglas"},
// ];
export default function Person3() {
    const [people, setPeople] = React.useState([
        {
            firstName: "John",
            lastName: "Smith"
        }
    ])
    
    function People1() {
        setPeople(prevState =>[...prevState, {firstName:"Oscar", lastName:"Calle"}])
        console.log(people)
    }

    return(
        <>
        <button onClick={People1}>Submit</button>
        <div>
            {people.map(person => 
            <>
                <p>{`${person.firstName} ${person.lastName}`}</p>
            </>
            )}
        
        </div>
        </>
    )
}
    // const [people, setPeople] = React.useState("");
    // const [person, setPerson] = React.useState(
    //     initialPeople
    // );
    // function handleClick() {
    //     const insertAt = 1;//could be at any index
    //     const nextPerson = [
    //         //items before insertion point
    //         ...person.slice(0, insertAt),
    //         //new item
    //         { id: nextId++, people: people },
    //         //item after the insertion point
    //         ...person.slice(insertAt)
    //     ];
    //     setPerson(nextPerson);//check work!!!!
    //     setPeople('');
    // }
    // return (
    //     <>
    //         <h1>Person's added:</h1>
    //         <input 
    //         value={people}
    //             onChange={e => setPeople(e.target.value)}
    //         />
    //         <button onClick={handleClick}>
    //             Insert
    //         </button>
    //         <ul>
    //             {person.map(persons => (
    //                 <li key={persons.id}>{persons.people}</li>
    //             ))}
    //         </ul>
    //     </>
    // );
    //             }
