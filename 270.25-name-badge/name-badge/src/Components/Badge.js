import React from "react";

export default function Badge(props) {
    return (
        <div className="badge--container" key={props.firstName}>

            <h2 className="badge--header">Badge:</h2>
            <div className="label--container">
                <label>
                    Name: {props.firstName}
                </label>
                <label>
                    Phone: {props.phone}
                </label>
                <label>
                    Place of Birth: {props.placeOfBirth}
                </label>
                <label>
                    Favorite Food: {props.favoriteFood}
                </label>
                <label>
                    Email: {props.email}
                </label>
            </div>
            <div className="textArea---output">
                Comment:{props.comment}
            </div>
        </div>
    )
};





