import React from 'react';
import './App.css';


const Form = ({formHandler, submitHandler}) => {

   return (

    
        <form onChange={formHandler} onSubmit={submitHandler}>

            <label htmlFor="firstname">First name:</label><br /> 
            <input type="text" name="firstname" id="firstname" required /><br /> 

            <label htmlFor="lastname">Last name:</label><br /> 
            <input type="text" name="lastname" id="lastname" /><br /> 

            <label htmlFor="number">Phone:</label><br /> 
            <input type="tel" name="number" id="number"/><br /> 

            <label htmlFor="role">Role:</label><br /> 
            <select name="role" id="role" defaultValue="choice"><br /> 
            <option value="choice" disabled>Choose one</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other">Other</option>
            </select><br /> 

            <label htmlFor="message">Message:</label><br /> 
            <textarea rows="3" cols="20" name="message" id="message"></textarea><br /> 

            <button type="submit" >SEND</button>

        </form>
            
        );
};


export default Form;