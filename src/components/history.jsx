import React from 'react'
import { Component } from 'react';

import Header from './header'

export default class History extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>History</div>
                <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name </th>
                                    <th>Last name</th>
                                    <th>User name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>City</th>
                                    <th>Designation</th>
                                    <th>Experience</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                            <td> h</td>
                                            <td> h</td>
                                            <td>h</td>
                                            <td>h</td>
                                            <td> h</td>
                                            <td> h</td>
                                            <td>h</td>
                                            <td>h</td>
                                          
                                        </tr>
                            </tbody>
                        </table>
            </div>
        );
    }
}