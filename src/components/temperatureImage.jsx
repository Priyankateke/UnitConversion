import React, { Component } from 'react'
import hot from '../images/hot-gray.png'
import '../style/temperatureImage.css'
export default class TemperatureImage extends Component {
    render() {
        return (
            <div className="imageBox">
                    <div>
                        <img className="hot-gray" src={hot} alt="Temperature"></img>
                    </div>
                    <div>
                        <p className="temperature-name">Temperature</p>
                    </div>
                </div>
        )
    }
}