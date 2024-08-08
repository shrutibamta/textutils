// WITHOUT ROUTER

// import "./App.css";

// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// // import About from "./components/About";
// import React, { useState } from "react";
// import Alert from "./components/Alert";

// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   // type of alert : alert, success, warning, danger
//   const showAlert = (message, type)=>{
//     setAlert({
//       msg : message,
//       type : type
//     })

//     setTimeout( ()=>{
//       setAlert(null);
//     }, 1500)
//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       // document.body.style.backgroundColor = '#212529';
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled!", "success");
//       document.title = "TextUtils : Dark Mode";

//       // ***Just to attract rteh user
//       // ***Not good user experience
//       // setInterval(()=>{
//       //   document.title = "TextUtils is Amazing";
//       // }, 2000)

//       // setInterval( ()=>{
//       //   document.title = "Install TextUtils Now";
//       // }, 1500)
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled!", "success")
//       document.title = "TextUtils : Light Mode";
//     }
//   }

//   return (
//     <>
//         <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
//         <Alert alert={alert} />
//         <div className="container my-3" mode={mode}>
//           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
//           {/* <About /> */}
//         </div>
//     </>
//   );
// }

// export default App;

// WITH ROUTER-------------------------------------------------------------------------------------------------------------------------

// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // type of alert : alert, success, warning, danger
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout( ()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // document.body.style.backgroundColor = '#212529';
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtils : Dark Mode";

      // ***Just to attract rteh user
      // ***Not good user experience
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing";
      // }, 2000)

      // setInterval( ()=>{
      //   document.title = "Install TextUtils Now";
      // }, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success")
      document.title = "TextUtils : Light Mode";
    }
  }

  return (
    // <>
    // {/* <Navbar/> */}

    //   <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    //   <Alert alert = {alert}/>

    //   <div className="container">
    //     <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
    //     <About />
    //   </div>
 
    // </>

    <>
    <Router>
      <Navbar
        title="TextUtils2"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={
              <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;

