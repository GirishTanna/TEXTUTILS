import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleOnChange = (evt)=>{
       setText(evt.target.value)
    }
    const onCLickHandler = (e)=> e.target.id=="upper" ? setText(text.toUpperCase()) :  setText(text.toLowerCase());

    const [text, setText] = useState('');
  return (
   <>
 
  <div className="container">
    <h1>{props.heading}</h1>
    <textarea className="form-control my-3" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="3"></textarea>
    <button className='btn btn-primary my-3' onClick={onCLickHandler} id="upper">convert to UPPERCASE</button>
    <button className='btn btn-primary mx-3' onClick={onCLickHandler} id="lower">convert to lowercase</button>
  </div>
  <div className='container my-2'>
    <h1>Your text summary:</h1>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>  

   </>
  )
}
TextForm.defaultProps = {
    heading  : "enter heading please"
}

