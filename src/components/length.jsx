import React, { Component } from 'react'
import scale from '../images/scale-gray.png'

export default class Legth extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <img className="scale-gray" src={scale} alt="length"></img>
                </div>
                <div>
                    <p className="card-name">length</p>
                </div>
            </div>
        )
    }

}