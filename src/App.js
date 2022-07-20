import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
function App() {
  const [mode, setMode] = useState('dark');
  const [msg, setMsg]   = useState('Enable Light Mode')
  const toggleMode = (e) =>{
    if(mode === 'dark'){ 
      setMode('light')
      setMsg('Enable Dark Mode')
    }else{ 
      setMode('dark')
      setMsg('Enable Light Mode')


    }
       

  } 
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} message={msg}/>
   
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    {/* <About /> */}
    </div>
    </> 
  );
}

export default App;