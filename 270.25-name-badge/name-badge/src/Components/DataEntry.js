import React from "react";

export default function Data(props) {
    return (
        <>
            <form className='form' onSubmit={props.handleSubmit}>
                <div className="data--entry">
                    <input
                        placeholder="First Name"
                        name="firstName"
                        value={props.dataOne.firstName}
                        onChange={props.handleChange}
                        className='firstName--input'
                    />
                    <input
                        // type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={props.dataOne.lastName}
                        onChange={props.handleChange}
                        className='lastName--input'
                    />
                    <input
                        // type="email"
                        placeholder="Emaill Address"
                        name="email"
                        value={props.dataOne.email}
                        onChange={props.handleChange}
                        className='email--input'
                    />
                    <input
                        // type="text"
                        placeholder="Place of Birth"
                        name="placeOfBirth"
                        value={props.dataOne.placeOfBirth}
                        onChange={props.handleChange}
                        className='placeOfBirth--input'
                    />
                    <input
                        // type="number"
                        placeholder="Phone"
                        name="phone"
                        value={props.dataOne.phone}
                        onChange={props.handleChange}
                        className='phone--input'
                    />
                    <input
                        // type="text"
                        placeholder="Favorite Food"
                        name="favoriteFood"
                        value={props.dataOne.favoriteFood}
                        onChange={props.handleChange}
                        className='favoriteFood--input'
                    />
                    <textarea
                        placeholder="Comment"
                        name="comment"
                        value={props.dataOne.comment}
                        onChange={props.handleChange}
                        className='comment--input'
                    />
                    <button className="submit--btn">
                        Submit
                    </button>
                </div>
            </form>
        </>

    )

};