import React, { Component } from 'react'
import hot from '../images/hot-gray.png'

export default class Temperature extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <img className="hot-gray" src={hot} alt="temperature"></img>
                </div>
                <div>
                    <p className="card-name">Temperature</p>
                </div>
            </div>
        )
    }

}