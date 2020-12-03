import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';



import Navbar from './Navbar/Navbar'

const Homepage = (props: any) => {
    return (



        <div className="homepage">
            <Navbar />
        </div>

    )

}

export default Homepage
