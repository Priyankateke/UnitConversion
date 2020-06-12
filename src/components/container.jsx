import React from 'react'
import { Component } from 'react';
import '../style/container.css'
import UnitImages from './unitImages'
export default class Container extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="container-division">
                    <div className="choose-type">CHOOSE TYPE</div>
                    <UnitImages />
                    <div className="boxLabel">
                        <div>From</div>
                        <div>To</div>
                    </div>

                    <div className="unitBoxContainer">
                        <div className="unitBox">
                            <div className="numeric-box"></div>
                            <div className="selection">
                                <select name="length" id="length">
                                    <option value="volvo">Kilometer</option>
                                    <option value="saab">meter</option>
                                </select>
                            </div>
                        </div>
                        <div className="unitBox">
                            <div className="numeric-box"></div>
                            <div className="selection"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}