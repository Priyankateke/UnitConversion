import React, { Component } from 'react'
import '../style/convertor.css'

export default class Convertor extends Component {

    render() {
        return (
            <div className="main">
                <div className="navbar">
                    <div className="quanment">Quanment</div>
                    <div className="history">History</div>
                </div>
                <div className="header">Welcome To Quantity Measurement</div>
                <div className="middle-section">
                    <div className="choose-type">CHOOSE TYPE</div>
                    <div className="card-container">
                        <div className="temperature-card">
                        </div>
                        <div className="temperature-card">
                            <p></p>
                        </div>
                        <div className="temperature-card">
                            <p></p>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}