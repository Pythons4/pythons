import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './Homepage.css'
import Contaner from './section'
import Footer from './Footer'





const Homepage = (props: any) => {
    return (
        <>
            <div className='container-img'>

                <p>Cleaning is hard at first, messy in the middle and gorgeous in the end</p>

                <div className='container-btns'>
                    <Link to="/tips" style={{ textDecoration: "none" }}>
                        <Button style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large">Book Now</Button>
                    </Link>
                </div>
            </div>

            <div>
                <Contaner />
            </div>
            <div>
                <Footer />
            </div>
        </>





    )

}

export default Homepage
