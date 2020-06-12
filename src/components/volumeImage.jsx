import react from 'react'
import React, { Component } from 'react';
import beaker from '../images/beaker-gray.png'
import '../style/volumeImage.css'
export  default class LengthImage extends Component {
    render() {
        return(
            <div className="imageBox">
                    <div>
                        <img className="beaker-gray" src={beaker} alt="Volume"></img>
                    </div>
                    <div>
                        <p className="volume-name">Volume</p>
                    </div>
                </div>
        );
    }
}