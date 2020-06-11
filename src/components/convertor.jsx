import React, { Component } from 'react'
import '../style/convertor.css'
import Length from './length'
import Temperature from './temperature'
import Volume from './volume'

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
                        <Length/>
                        <Temperature/>
                        <Volume/>
                    </div>
                </div>
            </div>
        )
    }
}