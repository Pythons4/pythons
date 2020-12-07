import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './Homepage.css'





const Homepage = (props: any) => {
    return (
        <div className='container-img'>

            <p>Cleaning is hard at first, messy in the middle and gorgeous in the end</p>
            <div className='container-btns'>
                <Button color="primary" variant="contained" >Book NOW</Button>
            </div>
        </div>





    )

}

export default Homepage
