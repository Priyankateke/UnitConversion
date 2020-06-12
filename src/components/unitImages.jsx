import React, { Component } from 'react'
import '../style/unitImages.css'
import LengthImage from './lengthImage'
import TemperatureImage from './temperatureImage'
import VolumeImage from './volumeImage'
export default class UnitImage extends Component {
    render() {
        return (
            <div className="unitImageContainer">
                <LengthImage/>
                <TemperatureImage/>
                <VolumeImage/>
            </div>
        );
    }
} 