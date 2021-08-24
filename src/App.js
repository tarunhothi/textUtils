import './App.css';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#385c7a"
      showAlert("Dark mode has been successfully enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been successfully enabled", "success")
    }
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ReactCWH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${mode==='light' ?'dark' : 'light'}`}>
        <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Drak Mode</label>
  </div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     </div>
  </div>
</nav>


<Alert alert={alert}/>
<div className="container my-3" >
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} headings="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
      {/* </Switch> */}
  
  
  {/* <About /> */}
</div>
{/* </Router> */}
    </>
  );
        }

export default App;
