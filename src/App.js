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
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log('click');
    }

    showPopup = (e) => {
        
    }

render () {

return (

<div>

<Form onChange={() => this.changeHandler}/>

<View
firstname={this.state.firstname} 
lastname={this.state.lastname}
number={this.state.number}
role={this.state.role}
message={this.state.message}
submit={() => this.submitHandler}
/>

</div>

)

}
};

export default App;

// {this.state.showPopup && <Popup/>}
