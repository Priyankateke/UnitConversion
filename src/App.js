//import modules
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Convertor from './components/convertor';
//Parent Component 
function App() {

    return (
    <Router>
      <Route path="/" component={Convertor}></Route>
    </Router>
    );
}

export default App;
