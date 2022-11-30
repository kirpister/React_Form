import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Notes from './Notes';
import Popup from './Popup';

const App = () => {

const [note, setNote] = useState({ firstname: '', lastname: '', number:'', role:'', message:'' });
const [showPopup, setShowpopup] = useState(false);

const formHandler = (e) => {
    setNote({...note, [e.target.name]: e.target.value });
}

const submitHandler = (e) => {
    e.preventDefault();
    setShowpopup(true);
    e.target.reset();
}

const closeModal = () => {
    window.location.reload();
}

    return (

        <div>

        <h1>REACT FORMS</h1>

        <Form formHandler={formHandler} submitHandler={submitHandler}/>

        <View {...note} />

        <Notes />

        {showPopup && (

            <Popup
            closeModal={closeModal}
            firstname={note.firstname}
            lastname={note.lastname}
            number={note.number}
            role={note.role}
            message={note.message} /> )}
        
        </div>
    );
};

export default App;