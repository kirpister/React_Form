import React from 'react';
import './App.css'

const Popup = (props) => {

    return (

        <div className="overlay">
        <div className="modal">

        <h3>Here is your note, confirm to submit?</h3>
        <p>First Name: {props.firstname}</p>
        <p>Last Name: {props.lastname}</p>
        <p>Phone: {props.number}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
        <button onClick={props.closeModal}>NO THANKS</button>
        <button onClick={props.closeModal}>SURE THANG</button>


        </div>
        </div>
    )
}

export default Popup;