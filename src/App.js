import Alert from "./Alert";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import React, { useState } from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";


function App() {
const [mode, setMode] = useState ('light'); // whether dar mode is enable or note.
const[alert, setAlert] = useState(null);
const showAlert = (message, type)=>
{
  setAlert({
      msg: message,
      type:type
  })
setTimeout(() => {
  setAlert(null);
  }, 1500);
}
const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark');
document.body.style.backgroundColor = '#000';
showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
document.body.style.backgroundColor = 'White';
showAlert("light mode has been enabled","success");
  }
}
  return (
    <>
  
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert= {alert}/>
<div class="container my-3">

            {/* <About /> */}
     
      
          <SearchForm showAlert= {showAlert} heading="Enter your text to Analyze Below" mode={mode} />
      
        </div>
        
    </>
  );
}
export default App;
