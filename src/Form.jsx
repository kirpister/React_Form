import React from 'react';
import './App.css';


const Form = (props) => {

   return (

        <form>
            <label htmlFor="firstname">First name:</label><br /> 
            <input type="text" name="firstname" /><br /> 

            <label htmlFor="lastname">Last name:</label><br /> 
            <input type="text" name="lastname" /><br /> 

            <label htmlFor="number">Phone:</label><br /> 
            <input type="number" name="number"/><br /> 

            <label htmlFor="role">Role:</label><br /> 
            <select name="status"><br /> 
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
            </select><br /> 

            <label htmlFor="message">Message:</label><br /> 
            <textarea rows="3" cols="20" name=""/><br /> 

            <button type="submit" >SEND</button>
        </form>
            
        )

    };


export default Form;