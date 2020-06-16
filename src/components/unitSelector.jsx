import React from 'react'
// import { extend } from 'jquery'
import { Component } from 'react'
import { data } from 'jquery';
import { useParams } from 'react-router-dom';
// let dataInProps=this.props;

export default class UnitSelector extends Component {

    constructor(props) {
        

        super(props)
        this.state= {
            
            unitInput: "",
            valueInput: 1,
            unitResult: "",
            valueResult: "",


            // lengthStatus:this.props.lengthStatus,
            // temperatureStatus:this.props.temperatureStatus,
            // volumeStatus:this.props.volumeStatus
        }
        
        console.log(this.state);
    };

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
    debugger;
        let result = 1;
        let fromMeasure = document.getElementById('fromMeasure').value;
        let toMeasure = document.getElementById('toMeasure').value;
        let quantity = document.getElementById('quantity').value;

        localStorage.setItem("inputUnit", fromMeasure);
        localStorage.setItem("outputUnit", toMeasure);


        console.log("input unit", localStorage.getItem("inputUnit"));
        console.log("output unit", localStorage.getItem("outputUnit"));


        if (flag === 'to') {
            quantity = document.getElementById('valueResult').value;
            if (this.props.dataFromProps.temperatureStatus === true) {
                result = this.TempratureConverter(toMeasure, fromMeasure, quantity);
                localStorage.setItem("Measurement", "Temperature");
            }
            else if (this.props.dataFromProps.volumeStatus === true) {
                result = this.VolumeConverter(toMeasure, fromMeasure, quantity);
                localStorage.setItem("Measurement", "Volume");
            }
            else {
                result = this.LengthConverter(toMeasure, fromMeasure, quantity);
                localStorage.setItem("Measurement", "Length");
            }
            this.setState({ valueInput: result })
            console.log(localStorage.getItem("Measurement"));
            localStorage.setItem("outputQuantity", result);
            localStorage.setItem("outputQuantity", result);
        }
        else {
            if (this.props.dataFromProps.temperatureStatus === true) {
                result = this.TempratureConverter(fromMeasure, toMeasure, quantity);
                localStorage.setItem("Measurement", "Temperature");
            }
            else if (this.props.dataFromProps.volumeStatus === true) {
                result = this.VolumeConverter(fromMeasure, toMeasure, quantity);
                localStorage.setItem("Measurement", "Volume");
            }
            else {
                result = this.LengthConverter(fromMeasure, toMeasure, quantity);
                localStorage.setItem("Measurement", "Length");
            }
            this.setState({ valueResult: result })
            localStorage.setItem("outputQuantity", result);
        }
        let data = {
            "conversionData": {
                inputUnit: fromMeasure,
                outputUnit: toMeasure,
                inputValue: quantity,
                outputValue: result
            }
        }
        console.log("data:", data)
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
debugger;
        let dataInProps=this.props.dataFromProps;
        console.log("data in props",dataInProps)
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

        this.setStates= { valueInput:0};
        if (dataInProps.volumeStatus) {
            // this.setState={valueInput:0}
            measurementType = VolumeUnits;
        }
        else if (dataInProps.temperatureStatus) {
            // this.setState={valueInput:0}
            measurementType = temperatureUnits;
            console.log("temperature: ",)
        }
        else {
            // this.setState={valueInput:0}
            measurementType = LengthUnits;
        }

        return (            

            <div>

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
                            onChange={this.inputValueHandler}
                        >
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
                           defaultValue={measurementType[0]}

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

        )
    }

}
