import React from 'react';
import './App.css';

const View = (props) => {
 return (

<div className='form-view'>

<h3>Input view</h3>
<p>First Name: {props.firstname}</p>
<p>Last Name: {props.lastname}</p>
<p>Phone: {props.number}</p>
<p>Role: {props.role}</p>
<p>Message: {props.message}</p>


</div>

)};

export default View;