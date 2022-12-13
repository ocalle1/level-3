import React from "react";
import vacation from"../vacation.png"

export default function Header(){
    return(
        <>
        <nav>
        <img src={vacation} alt="vaction" className="vacation" />
        <h1 className="title">Vacation Spots</h1>
        </nav>
        </>
    )
};