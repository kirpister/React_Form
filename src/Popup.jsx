import React from 'react';
import './App.css'

const Popup = (props) => {

    return (
        <div className="modal">

        <p>First Name: {props.firstname}</p>
        <p>Last Name: {props.lastname}</p>
        <p>Phone: {props.number}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
        <button>NO THANKS</button>
        <button>SURE THANG</button>


        </div>
    )
}

export default Popup;