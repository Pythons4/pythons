import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>

                <div className="row d-flex justify-content-between" >

                    <div className="w-50" >

                        <h5 className="headertext"  >About us </h5>

                        <ul className="list-unstyled">
                            <li>
                                <p> We make your place</p>
                            </li>
                            <li>
                                <p> look perfect</p>
                            </li>


                            <li className="d-flex">
                                <span className="d-block mr-20"><i className="fa fa-facebook-square " style={{ fontSize: "36px" }} ></i></span>
                                <span className="d-block"> <i className="fa fa-instagram d-inline-block  " style={{ fontSize: "36px" }} ></i></span>

                            </li>
                        </ul>

                    </div>


                    <div className="50">

                        <h5 className="headertext" >Head office</h5>

                        <ul className="list-unstyled">
                            <li>
                                <p> 345 Palestine Street</p>
                            </li>
                            <li>
                                <p> Ramallah</p>
                            </li>
                            <li>
                                <p>123456789</p>
                            </li>
                            <li>
                                <p>info@sparkels.com</p>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >

        )
    }
}
