import React from 'react'
import { Component } from 'react';
import '../style/body.css'

import Container from './container'
export default class Body extends Component {
    render() {
        return( 
            <div className="body">
                <Container/>
            </div>
        );
    }
}