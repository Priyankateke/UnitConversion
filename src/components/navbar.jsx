import React from 'react'
import { Component } from 'react';
import '../style/navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to={"/home"} ><div className="quanment">Quanment</div></Link>
                <Link to={"/history"} ><div className="history">History</div></Link>
            </div>
        );
    }
}