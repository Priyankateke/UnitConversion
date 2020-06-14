import React, { Component } from 'react'
import '../style/unitImages.css'
import '../style/lengthImage.css'
import '../style/temperatureImage.css'
import '../style/volumeImage.css'
export default class UnitImage extends Component {
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

            unitInput: "",
            valueInput: 0,
            unitResult: "",
            valueResult: "",
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

    unitInputChangeHandler = eve => {
        eve.preventDefault()

        this.setState({ [eve.target.name]: eve.target.value })
        console.log(eve.target.name + "  " + eve.target.value)
        this.unitConversion();
    }

    unitResultChangeHandler = eve => {
        eve.preventDefault()
        this.setState({ [eve.target.name]: eve.target.value })
        this.unitConversion();
    }

    inputValueHandler = eve => {
        eve.preventDefault()

        this.setState({ valueInput: eve.target.value })
        console.log(this.state.valueInput + " " + eve.target.value)
        this.unitConversion('from');
    }

    outputValueHandler = eve => {
        eve.preventDefault()
        this.setState({ valueResult: eve.target.value })
        console.log(this.state.valueResult + " " + eve.target.value)
        this.unitConversion('to');
    }

    unitConversion(flag) {
        let result = 1;
        let fromMeasure = document.getElementById('fromMeasure').value;
        let toMeasure = document.getElementById('toMeasure').value;
        let quantity = document.getElementById('quantity').value;


        if (flag === 'to') {
            quantity = document.getElementById('valueResult').value;
            if (this.state.temperatureStatus === true) {
                result = this.TempratureConverter(toMeasure, fromMeasure, quantity);
            }
            else if (this.state.volumeStatus === true) {
                result = this.VolumeConverter(toMeasure, fromMeasure, quantity);
            }
            else {
                result = this.LengthConverter(toMeasure, fromMeasure, quantity);
            }
            this.setState({ valueInput: result })

        }
        else {
            if (this.state.temperatureStatus === true) {
                result = this.TempratureConverter(fromMeasure, toMeasure, quantity);
            }
            else if (this.state.volumeStatus === true) {
                result = this.VolumeConverter(fromMeasure, toMeasure, quantity);
            }
            else {
                result = this.LengthConverter(fromMeasure, toMeasure, quantity);
            }
            this.setState({ valueResult: result })
        }
    }

    LengthConverter(from, to, value) {
        var result = parseInt(value);

        if (from === "Centimeter" && to === "Meter") {
            result = result / 100;
        }
        else if (from === "Meter" && to === "Centimeter") {
            result = result * 100;
        }
        return result;
    }

    TempratureConverter(from, to, value) {
        var result = parseInt(value);
        if (from === "Celsius" && to === "Farenheit") {
            result = (result * 9 / 5) + 32;
        }
        else if (from === "Farenheit" && to === "Celsius") {
            result = (result - 32) * 5 / 9;
        }
        return result;
    }

    VolumeConverter(from, to, value) {
        var result = parseInt(value);

        if (from === "Mililiter" && to === "Liter") {
            result = result / 1000;
        }
        else if (from === "Liter" && to === "Mililiter") {
            result = result * 1000;
        }
        return result;
    }

    render() {
        let measurementType = ""

        const VolumeUnits = [
            { value: 'Mililiter', lable: 'Mililiter' },
            { value: 'Liter', lable: 'Liter' }
        ]
        const LengthUnits = [
            { value: 'Centimeter' },
            { value: 'Meter' }
        ]
        const temperatureUnits = [
            { value: 'Celsius' },
            { value: 'Farenheit' }
        ]
        if (this.state.volumeStatus) {
            measurementType = VolumeUnits;

        }
        else if (this.state.temperatureStatus) {
            measurementType = temperatureUnits;
        }
        else {
            measurementType = LengthUnits;
        }

        return (
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

                <div className="boxLabel">
                    <div>From</div>
                    <div>To</div>
                </div>

                <div className="unitBoxContainer">
                    <div className="unitBox">
                        <input className="numeric-box"
                            type="number"
                            label="Insert Value"
                            id="quantity"
                            name="valueInput"
                            value={this.state.valueInput}
                            onChange={this.inputValueHandler}>
                        </input>

                        <select className="selection" name="unitInput" id="fromMeasure"
                            defaultValue={measurementType[0]}
                            onChange={this.unitInputChangeHandler}>

                            {measurementType.map((units) =>
                                (
                                    <option key={units.value} value={units.value} >{units.value}</option>
                                )
                            )
                            }

                        </select>
                    </div>

                    <div className="unitBox">
                        <input className="numeric-box"
                            label="Result"
                            type="number"
                            id="valueResult"
                            name="valueResult"
                            value={this.state.valueResult}
                            onChange={this.outputValueHandler} >
                        </input>

                        <select className="selection" name="unitResult" label="unitResult" id="toMeasure"
                            value={this.state.unitResult}
                            onChange={this.unitResultChangeHandler}
                        >
                            {measurementType.map((units) => (
                                <option key={units.value} value={units.value} >{units.value}</option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
        );
    }
}