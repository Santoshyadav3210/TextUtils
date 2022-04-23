//import logo from "./logo.svg";
import React, { useState } from 'react'
import "./App.css";
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)
    },1500);
  }




  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is Enabled"," Success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enabled"," Success")
    }
  }


  return (
    <>

      <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />
        {/* <About/> */}
      </div>

    </>

  );
}

export default App;
