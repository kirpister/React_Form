import React from 'react';
import './App.css';

const View = (props) => {
 return (

<div className='form-view'>

{/* <h3>Input view</h3> */}
<div className="text-box">
<p>First Name: <span>{props.firstname}</span></p>
<p>Last Name: <span>{props.lastname}</span></p>
<p>Phone:<span>{props.number}</span></p>
<p>Role: <span>{props.role}</span></p>
<p>Message: <span>{props.message}</span></p>

</div>
</div>
)};

export default View;