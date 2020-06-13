import React from 'react'
import { Component } from 'react';

export default class UnitBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="unitBoxContainer">
                <div className="unitBox">
                    <input className="numeric-box" type="number" id="quantity" name="quantity" ></input>
                    <select className="selection" name="length" id="length">
                        <option value="volvo">Kilometer</option>
                        <option value="saab">meter</option>
                    </select>
                </div>
                <div className="unitBox">
                    <input className="numeric-box" type="number" id="quantity" name="quantity" ></input>
                    <select className="selection" name="length" id="length">
                        <option value="volvo">Kilometer</option>
                        <option value="saab">meter</option>
                    </select>
                </div>
            </div>
        );
    }
}