import React from 'react'
import { Component } from 'react';
import '../style/navbar.css'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="quanment">Quanment</div>
                <div class="history">History</div>
            </div>
        );
    }
}