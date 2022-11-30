import React from 'react';
import './App.css'

const Popup = ({firstname, lastname, number, role, message, closeModal}) => {

    return (

        <div className="overlay">
        <div className="modal">

        <h3>Here is your note, confirm to submit?</h3>
        <p>First Name: <span>{firstname}</span></p>
        <p>Last Name: <span>{lastname}</span></p>
        <p>Phone:<span>{number}</span></p>
        <p>Role: <span>{role}</span></p>
        <p>Message: <span>{message}</span></p>
        <button onClick={closeModal}>NO THANKS</button>
        <button onClick={closeModal}>SURE THANG</button>
       
        </div>
        </div>
    )
}

export default Popup;

