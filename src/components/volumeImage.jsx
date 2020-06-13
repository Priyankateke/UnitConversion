import react from 'react'
import React, { Component } from 'react';
import beaker from '../images/beaker-gray.png'
import '../style/volumeImage.css'
export default class LengthImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            volumeImage: "beaker-gray",
            imageBox: "imageBox",
            volumeName: "volume-name",
            volumeStatus: false,
        };
    }

    onVolumeEffect = eve => {
        this.setState({
            volumeImage: "active-volume-image",
            imageBox: "active-volume-container",
            volumeName: "active-volume-name",
        })
    };

    offVolumeEffect = eve => {
        this.setState({
            volumeImage: "beaker-gray",
            imageBox: "imageBox",
            volumeName: "volume-name",
        })
    };

    render() {
        return (
            <div className={this.state.imageBox}
                onMouseEnter={this.onVolumeEffect}
                onMouseLeave={this.offVolumeEffect}>
                <img className={this.state.volumeImage} alt="Volume" ></img>
                <div>
                    <p className={this.state.volumeName}>Volume</p>
                </div>
            </div>
        );
    }
}