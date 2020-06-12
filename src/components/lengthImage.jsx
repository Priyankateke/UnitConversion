import react from 'react'
import React, { Component } from 'react';
import scale from '../images/scale-gray.png'
import '../style/lengthImage.css'
export  default class LengthImage extends Component {
    render() {
        return(
            <div className="imageBox">
                    <div>
                        <img className="scale-gray" src={scale} alt="Length"></img>
                    </div>
                    <div>
                        <p className="length-name">Length</p>
                    </div>
                </div>
        );
    }
}