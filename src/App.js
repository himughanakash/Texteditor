import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextEditor" mode ={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/> 
      <div className = "container my-3">
      <Routes>
        <Route path="/about" element={<About mode = {mode}/>}>
        </Route>
        <Route path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to convert" mode = {mode}/>}>
        </Route>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
