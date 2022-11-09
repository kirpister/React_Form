import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {

        state = {
            note: { firstname: '', lastname: '', phone: '', role: '', message: '' },
            showModal: false,
        }

    formHandler = (e) => {
        this.setState({
            note: {...this.state.note, [e.target.name] : e.target.value, }
        });
    }; 

    // spread to open the object and get in to do fun stuff

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ showModal: !this.state.showModal }); //or true
        e.target.reset();
    }

    closeModal = () => {
        window.location.reload();
    }

render () {

return (

<div>

<h1>REACT FORMS</h1>

<Form formHandler={this.formHandler} submitHandler={this.submitHandler} />

{/* // fancy way via ...  */}
<View { ...this.state.note} />

{this.state.showModal && (
    //conditional rendering

//manual way
<Popup
    closeModal={this.closeModal}
    firstname={this.state.note.firstname}
    lastname={this.state.note.lastname}
    number={this.state.note.number}
    role={this.state.note.role}
    message={this.state.note.message}
/> )}

</div>

)}};

export default App;


