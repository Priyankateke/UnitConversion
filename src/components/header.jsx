import React from 'react'
import { Component } from 'react';
import '../style/header.css'
import '../style/navbar.css'
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to={"/home"} ><div className="quanment">Quanment</div></Link>
                    <Link to={"/history"} ><div className="history">History</div></Link>
                </div>
                <div className="header">
                    <p>Welcome To Quantity measurement</p>
                </div>
            </div>

        );
    }
}