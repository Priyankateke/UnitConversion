import React, { Component } from 'react'
import hot from '../images/hot-gray.png'
import '../style/temperatureImage.css'
import '../style/lengthImage.css'
export default class TemperatureImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temperatureImage: "hot-gray",
            imageBox: "imageBox",
            temperatureName: "temperature-name",
            temperatureStatus: false,
        };
    }

    onTemperatureEffect = (eve) => {
        this.setState({
            temperatureImage: "active-temperature-image",
            imageBox: 'active-temperature-container',
            temperatureName: 'active-temperature-name'
        })
    };

    offTemperatureEffect = (eve) => {
        if (this.state.temperatureStatus === false) {

            this.setState({
                temperatureImage: "hot-gray",
                imageBox: "imageBox",
                temperatureName: "temperature-name",
            })
        }
    };

    render() {
        return (
            <div className={this.state.imageBox}
                onMouseEnter={this.onTemperatureEffect}
                onMouseLeave={this.offTemperatureEffect}>
                <img className={this.state.temperatureImage} alt="Temperature" ></img>
                <div>
                    <p className={this.state.temperatureName}>Temperature</p>
                </div>
            </div>
        )
    }
}