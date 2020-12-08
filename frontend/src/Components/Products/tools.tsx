import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import './product.css'

const ProductTools = () => {
    return (


        <Link to='' className='tool__Link'>
            <div className='tool'>
                <img className='tool__image' src='' alt='' />
                <div className='tool__details'>
                    <h1 className='tool__title'>   </h1>
                    <p >Name: </p>
                    <p>Price: </p>
                </div>
            </div>
        </Link>
    )
}




export default ProductTools


