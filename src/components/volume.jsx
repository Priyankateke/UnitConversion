import React, { Component } from 'react'
import beaker from '../images/beaker-gray.png'

export default class Volume extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <img className="beaker-gray" src={beaker} alt="volume"></img>
                </div>
                <div>
                    <p className="card-name">Volume</p>
                </div>
            </div>
        )
    }

}