import React from 'react'
import { Component } from 'react';
import '../style/container.css'
import UnitImages from './unitImages'
import UnitBox from './unitBox'
 
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
                    <UnitBox />
                </div>

            </div>
        );
    }
}