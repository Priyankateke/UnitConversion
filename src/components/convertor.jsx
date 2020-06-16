import React, { Component } from 'react'
import '../style/convertor.css'
import '../style/body.css'
import '../style/container.css'
import '../style/unitImages.css'
import '../style/lengthImage.css'
import '../style/temperatureImage.css'
import '../style/volumeImage.css'

import Header from './header'
import UnitSelector from "./unitSelector";

export default class Convertor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lengthImage: "scale-active",
            lengthContainer: "active-image-box",
            lengthName: "active-length-name",
            lengthStatus: true,

            temperatureImage: "hot-gray",
            temperatureContainer: "imageBox",
            temperatureName: "temperature-name",
            temperatureStatus: false,

            volumeImage: "beaker-gray",
            volumeContainer: "imageBox",
            volumeName: "volume-name",
            volumeStatus: false,

        };
    }

    onLengthEffect = eve => {
        this.setState({
            lengthImage: "scale-active",
            lengthContainer: 'active-image-box',
            lengthName: 'active-length-name'
        })
    };

    offLengthEffect = eve => {
        if (this.state.lengthStatus === false) {
            this.setState({
                lengthImage: "scale-gray",
                lengthContainer: "imageBox",
                lengthName: 'length-name'
            })
        }
    };

    onTemperatureEffect = (eve) => {
        this.setState({
            temperatureImage: "active-temperature-image",
            temperatureContainer: 'active-temperature-container',
            temperatureName: 'active-temperature-name'
        })
    };

    offTemperatureEffect = (eve) => {
        if (this.state.temperatureStatus === false) {
            this.setState({
                temperatureImage: "hot-gray",
                temperatureContainer: "imageBox",
                temperatureName: "temperature-name",
            })
        }
    };

    onVolumeEffect = eve => {
        this.setState({
            volumeImage: "active-volume-image",
            volumeContainer: "active-volume-container",
            volumeName: "active-volume-name",
        })
    };

    offVolumeEffect = eve => {
        if (this.state.volumeStatus === false) {
            this.setState({
                volumeImage: "beaker-gray",
                volumeContainer: "imageBox",
                volumeName: "volume-name",
            })
        }
    };


    clickOnLength = eve => {
        this.setState({
            lengthStatus: true,
            lengthContainer: "active-image-box",
            lengthImage: "scale-active",
            lengthName: "active-length-name",

            temperatureImage: "hot-gray",
            temperatureContainer: "imageBox",
            temperatureName: "temperature-name",
            temperatureStatus: false,

            volumeImage: "beaker-gray",
            volumeContainer: "imageBox",
            volumeName: "volume-name",
            volumeStatus: false,
            valueResult: 1,
            valueInput: 1
        })
       
    }

    clickOnTemparature = eve => {
        this.setState({
            lengthStatus: false,
            lengthImage: "scale-gray",
            lengthContainer: "imageBox",
            lengthName: 'length-name',

            temperatureStatus: true,
            temperatureImage: "active-temperature-image",
            temperatureContainer: 'active-temperature-container',
            temperatureName: 'active-temperature-name',

            volumeImage: "beaker-gray",
            volumeContainer: "imageBox",
            volumeName: "volume-name",
            volumeStatus: false,
            valueResult: 1,
            valueInput: 1
        })
        
    }

    clickOnVolume = eve => {
        this.setState({
            lengthStatus: false,
            lengthImage: "scale-gray",
            lengthContainer: "imageBox",
            lengthName: 'length-name',

            temperatureImage: "hot-gray",
            temperatureContainer: "imageBox",
            temperatureName: "temperature-name",
            temperatureStatus: false,

            volumeStatus: true,
            volumeImage: "active-volume-image",
            volumeContainer: "active-volume-container",
            volumeName: "active-volume-name",
            valueResult: 1,
            valueInput: 1
        })
    }



    

    render() {

        return (
            <div className="main">
            
                <Header />

                <div className="body">
                    <div className="container">
                        <div className="container-division">
                            <div className="choose-type">CHOOSE TYPE</div>
                            <div>
                                <div className="unitImageContainer">
                                    <div className={this.state.lengthContainer}
                                        onMouseEnter={this.onLengthEffect}
                                        onMouseLeave={this.offLengthEffect}
                                        onClick={this.clickOnLength}>
                                        <img className={this.state.lengthImage} alt="Length" ></img>
                                        <div>
                                            <p className={this.state.lengthName}>Length</p>
                                        </div>
                                    </div>

                                    <div className={this.state.temperatureContainer}
                                        onMouseEnter={this.onTemperatureEffect}
                                        onMouseLeave={this.offTemperatureEffect}
                                        onClick={this.clickOnTemparature}>
                                        <img className={this.state.temperatureImage} alt="Temperature" ></img>
                                        <div>
                                            <p className={this.state.temperatureName}>Temperature</p>
                                        </div>
                                    </div>

                                    <div className={this.state.volumeContainer}
                                        onMouseEnter={this.onVolumeEffect}
                                        onMouseLeave={this.offVolumeEffect}
                                        onClick={this.clickOnVolume}>
                                        <img className={this.state.volumeImage} alt="Volume" ></img>
                                        <div>
                                            <p className={this.state.volumeName}>Volume</p>
                                        </div>
                                    </div>
                                </div>

                                <UnitSelector dataFromProps={this.state}/>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}