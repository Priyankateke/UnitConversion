import React from 'react'
import { Component } from 'react';
import '../style/container.css'
import MeasurementContainer from './measurementContainer'
 
export default class Container extends Component {
    render() {
        return (

            <div className="container">
                <div className="container-division">
                    <div className="choose-type">CHOOSE TYPE</div>
                    <MeasurementContainer />
                </div>
            </div>
        );
    }
}