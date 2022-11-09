import React from 'react';
import './App.css'

const Popup = (props) => {

    return (

        <div className="overlay">
        <div className="modal">

        <h3>Here is your note, confirm to submit?</h3>
        <p>First Name: <span>{props.firstname}</span></p>
        <p>Last Name: <span>{props.lastname}</span></p>
        <p>Phone:<span>{props.number}</span></p>
        <p>Role: <span>{props.role}</span></p>
        <p>Message: <span>{props.message}</span></p>
        <button onClick={props.closeModal}>NO THANKS</button>
        <button onClick={props.closeModal}>SURE THANG</button>
       


        </div>
        </div>
    )
}

export default Popup;

/* <p>Fist Name<span>{props}</span></p>
this for better styling  */