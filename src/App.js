import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {

    state = {
        firstname: '',
        lastname: '',
        phone: '',
        role: '',
        message: '',
        showModal: false,
    }

    formHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
        
    }

render () {

return (

<div>

<h1>REACT FORMS</h1>
<Form formHandler={this.formHandler} submitHandler={this.submitHandler}/>

<View
    firstname={this.state.firstname} 
    lastname={this.state.lastname}
    number={this.state.number}
    role={this.state.role}
    message={this.state.message}
/>

{this.state.showModal && (

    <Popup
    closePopup={this.closePopup}
    firstname={this.state.firstname}
    lastname={this.state.lastname}
    number={this.state.number}
    role={this.state.role}
    message={this.state.message}
    /> )}

</div>

)}};

export default App;


