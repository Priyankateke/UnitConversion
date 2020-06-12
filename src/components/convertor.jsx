import React, { Component } from 'react'
import '../style/convertor.css'

import Navbar from './navbar'
import Header from './header'
import Body from './body'

export default class Convertor extends Component {
    render() {
        return (
            <div className="main">
                <Navbar/>
                <Header/>
                <Body/>
            </div>
        )
    }
}