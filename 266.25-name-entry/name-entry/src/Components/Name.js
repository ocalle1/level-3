import React from "react";



export default function Name() {
    const [listOfNames, setList] = React.useState([])
    const [nameOne, setName] = React.useState(
        {
            names: ""
        }
    )

    function handleChange(event) {
        setName(prevNameOne => {
            return {
                ...prevNameOne,
                [event.target.name]: event.target.value
            }
        }
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        setList(prevList => [...prevList, nameOne])
    }

    const entries = listOfNames.map(names => (<li>{nameOne.names}</li>))

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    className="form--input"
                    name="names"
                    value={nameOne.names}
                    onChange={handleChange}
                />
                <h1 >
                    {nameOne.names}
                </h1>

                <li >
                    {entries}
                </li>

                <button>
                    Submit
                </button>
            </form>
        </>)

};


// 1. Build a simple react app with an input box, an `<h1>`, a button, and an ordered list. The user will type names into the input box.

// 2. When the user types in the input box, the `<h1>` should update to show the same text as the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. 
// (Hint: you'll need to set state and map over an array to do this).

// Build a simple react app with an input box?
