import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleOnChange = (evt)=>{
       setText(evt.target.value)
    }
    const onCLickHandler  = (e)=> e.target.id=="upper" ? setText(text.toUpperCase()) :  setText(text.toLowerCase());
    const clearText       = (e)=> setText('');
    const [text, setText] = useState('');
    const copyText        = (e) =>{
      const text = document.querySelector('#mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    
    // const isEmailPresent  = (e) =>{
    //   let validRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    //   if(text==''){
    //     console.log("no text")
    //   }else{
    //     let letters = text.split(' ');
    //     for(let letter in letters){
    //       if(letter.match(validRegex))
    //          console.log("hello")
        
    //       }
    //   }
    // }
  return (
   <>
 
  <div className="container">
    <h1>{props.heading}</h1>
    <textarea className="form-control my-3" id="mybox" value={text} onChange={handleOnChange} rows="3"></textarea>
    <button className='btn btn-primary my-3' onClick={onCLickHandler} id="upper">convert to UPPERCASE</button>
    <button className='btn btn-primary mx-3' onClick={onCLickHandler} id="lower">convert to lowercase</button>
    <button className='btn btn-primary ml-2' onClick={clearText} id="lower">clear text</button>
    <button className='btn btn-primary mx-2'onClick={copyText} >Copy Text</button>
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

