import react from 'react'
import React, { Component } from 'react';
import scaleGray from '../images/scale-gray.png';
import scale from '../images/scale.png'
import '../style/lengthImage.css'
export default class LengthImage extends Component {
       constructor(props) {
        super(props);

        this.state = {
            lengthImage:"scale-active",
            imageBox:"active-image-box",
            lengthName:"active-length-name",
            lengthStatus:true,
        };
    }

    onLengthEffect = eve =>{
        this.setState({
            lengthImage:"scale-active",
            imageBox:'active-image-box',
            lengthName:'active-length-name'
        })
    };
  
    offLengthEffect= eve =>{
        if(this.state.lengthStatus === false){
            this.setState({
                lengthImage:"scale-gray",
                imageBox:"imageBox",
                lengthName:'length-name'
            })
        }
    };

    render() {
        return (
            <div className={this.state.imageBox}
                onMouseEnter={this.onLengthEffect} 
                onMouseLeave={this.offLengthEffect}>
                <img className={this.state.lengthImage} alt="Length" ></img>
                <div>
                    <p className={this.state.lengthName}>Length</p>
                </div>
            </div>
        );
    }
}