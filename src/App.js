//import modules
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Convertor from './components/convertor';
import History from './components/history'
import Home from './components/convertor'

//Parent Component 
function App() {

  return (
    <Router>
        <Route exact path="/" component={Convertor}></Route>
        <Route exact path="/home" component={Convertor}></Route>
        <Route path="/history" component={History} />
    </Router>
  );
}

export default App;
