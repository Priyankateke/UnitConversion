import React from 'react'
import { Component } from 'react';
import '../style/navbar.css'
export default class Navbar extends Component  {
    render() {
        return(
            <div className="navbar">
                <div className="navbar-name">
                    <div>Quanment</div>
                    <div>History</div>
                </div>
            </div>
        );
    }
 }