import React from 'react';
import './App.css';

const View = ({firstname, lastname, number, role, message}) => {
 return (

<div className='form-view'>

<div className="text-box">
<p>First Name: <span>{firstname}</span></p>
<p>Last Name: <span>{lastname}</span></p>
<p>Phone:<span>{number}</span></p>
<p>Role: <span>{role}</span></p>
<p>Message: <span>{message}</span></p>

</div>
</div>
)};

export default View;