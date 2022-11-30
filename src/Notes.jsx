import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const Notes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/notes')
        .then((res) => setData(res.data));
    },[]);

    return (
        <div className='notes'>
            <h4>Your notes:</h4>
            <ul>{data.map(note => <li key={note.id}>
                {note.firstname} 
                {note.lastname} 
                {note.phone}
                {note.role} 
                {note.message}
                </li>)}
                </ul>
        </div>
    );
};

export default Notes;