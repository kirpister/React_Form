import React from 'react';
import './App.css';


const Form = (props) => {

   return (

    
        <form onChange={props.formHandler} onSubmit={props.submitHandler}>

            <label htmlFor="firstname">First name:</label><br /> 
            <input type="text" name="firstname" /><br /> 

            <label htmlFor="lastname">Last name:</label><br /> 
            <input type="text" name="lastname" /><br /> 

            <label htmlFor="number">Phone:</label><br /> 
            <input type="number" name="number"/><br /> 

            <label htmlFor="role">Role:</label><br /> 
            <select name="role"><br /> 
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other">Other</option>
            </select><br /> 

            <label htmlFor="message">Message:</label><br /> 
            <textarea rows="3" cols="20" name="message"></textarea><br /> 

            <button type="submit" >SEND</button>

        </form>
            
        )

    };


export default Form;