import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Length from './components/length.component'
import ButtonAppBar from './components/appbar'

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
    
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>EMPLOYEE MANAGEMENT SYSTEM</Link>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/employeeview"}>Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
