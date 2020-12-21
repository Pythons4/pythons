import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'

export default class Section extends Component {
    render() {
        // addnot('hi')
        return (
            <div className='section'>
                <h3 className="headertekst">Why Choose Us ?</h3>
                <div className="row d-flex justify-content-between" >

                    <div className="w-20" >
                        <ul className="list-unstyled">
                            <li>
                                <p> Available</p>
                            </li>
                            <li>
                                <p> Evenings & </p>
                            </li>
                            <li>
                                <p>Weekends</p>
                            </li>

                        </ul>

                    </div>


                    <div className="w-20">

                        <ul className="list-unstyled">
                            <li>
                                <p> 100 %</p>
                            </li>
                            <li>
                                <p> Satisfaction</p>
                            </li>
                            <li>
                                <p>Guaranted</p>
                            </li>

                        </ul>
                    </div>

                    <div className="w-20">

                        <ul className="list-unstyled">
                            <li>
                                <p> Environmentally</p>
                            </li>
                            <li>
                                <p> Friendly </p>
                            </li>
                            <li>
                                <p>Cleaning</p>
                            </li>

                        </ul>
                    </div>


                </div >
            </div >

        )
    }
}
